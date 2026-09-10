'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export type EngineQ = { id: number; q: string; a: number; o: string[] };
type Row = { id: number; q: string; a: number; options: string[] };
type Loader = () => PromiseLike<{ data: Row[] | null; error: unknown }>;

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PRESETS = [10, 20, 50, 100];
type Phase = 'menu' | 'running' | 'done' | 'review' | 'browse';

export default function QuizEngine({
  bank,
  weakRpc,
  load,
}: {
  bank: 'sop' | 'tech';
  weakRpc: string;
  load: Loader;
}) {
  const [all, setAll] = useState<EngineQ[] | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>('menu');
  const [count, setCount] = useState(20);
  const [notice, setNotice] = useState<string | null>(null);

  const [deck, setDeck] = useState<EngineQ[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [pos, setPos] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [missedPool, setMissedPool] = useState<EngineQ[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const [{ data: qs, error }, { data: userData }] = await Promise.all([
        load(),
        supabase.auth.getUser(),
      ]);
      if (!active) return;
      setUid(userData.user?.id ?? null);
      setAll(
        error
          ? []
          : (qs ?? []).map((r) => ({ id: r.id, q: r.q, a: r.a, o: r.options ?? [] })),
      );
    })();
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (all === null) return <p className="eyebrow">Loading questions…</p>;
  if (all.length === 0)
    return (
      <p className="q-intro">
        No questions are available here yet. If you have just purchased access,
        refresh the page in a moment.
      </p>
    );

  const total = all.length;

  function begin(pool: EngineQ[], n: number) {
    setDeck(shuffle(pool).slice(0, Math.min(n, pool.length)));
    setAnswers([]);
    setPos(0);
    setChoice(null);
    setScore(0);
    setNotice(null);
    setPhase('running');
  }
  function pick(i: number) {
    if (choice !== null) return;
    const q = deck[pos];
    const correct = i === q.a;
    setChoice(i);
    setAnswers((a) => {
      const n = a.slice();
      n[pos] = i;
      return n;
    });
    if (correct) setScore((s) => s + 1);
    if (uid) {
      supabase
        .from('question_attempts')
        .insert({ user_id: uid, bank, question_id: q.id, correct })
        .then(() => {});
    }
  }
  function next() {
    if (pos === deck.length - 1) {
      setMissedPool(deck.filter((q, idx) => answers[idx] !== q.a));
      setPhase('done');
    } else {
      setPos((p) => p + 1);
      setChoice(null);
    }
  }
  async function practiceWeak() {
    setNotice(null);
    const { data, error } = await supabase.rpc(weakRpc, { p_limit: 50 });
    if (error || !data || (data as unknown[]).length === 0) {
      setNotice(
        'No frequently-missed questions yet — finish a few quizzes and the ones you get wrong will show up here.',
      );
      return;
    }
    begin(
      (data as Row[]).map((r) => ({ id: r.id, q: r.q, a: r.a, o: r.options })),
      (data as Row[]).length,
    );
  }

  if (phase === 'browse') {
    return (
      <div>
        <div className="quiz-actions" style={{ marginBottom: 18 }}>
          <button className="button" onClick={() => setPhase('menu')}>
            ← Back to menu
          </button>
          <span className="eyebrow">{all.length} QUESTIONS</span>
        </div>
        <ol className="q-review-list">
          {all.map((q) => (
            <li key={q.id}>
              <p className="q-review-q">{q.q}</p>
              <p className="q-review-a">{q.o[q.a]}</p>
            </li>
          ))}
        </ol>
        <div className="quiz-actions">
          <button className="button" onClick={() => setPhase('menu')}>
            ← Back to menu
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'review') {
    return (
      <div>
        <div className="quiz-actions" style={{ marginBottom: 18 }}>
          <button className="button" onClick={() => setPhase('done')}>
            ← Back to results
          </button>
        </div>
        <ol className="q-review-list">
          {deck.map((q, idx) => {
            const yours = answers[idx];
            const ok = yours === q.a;
            return (
              <li key={idx} className={ok ? '' : 'wrong'}>
                <p className="q-review-q">{q.q}</p>
                <p className="q-review-a">✓ {q.o[q.a]}</p>
                {!ok && (
                  <p className="q-review-you">
                    Your answer: {yours != null ? q.o[yours] : '—'}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
        <div className="quiz-actions">
          <button className="button" onClick={() => begin(deck, deck.length)}>
            Replay this quiz →
          </button>
          <button className="button" onClick={() => setPhase('menu')}>
            New quiz
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'menu') {
    const runCount = Math.min(count, total);
    return (
      <div className="quiz-menu">
        <p className="eyebrow">BUILD YOUR QUIZ</p>
        <h3>How many questions?</h3>
        <p className="quiz-menu-sub">
          {total} questions available. Pick a length, then start.
        </p>

        <div
          className="quiz-presets"
          role="group"
          aria-label="Number of questions"
        >
          {PRESETS.filter((n) => n < total).map((n) => (
            <button
              key={n}
              type="button"
              className={count === n ? 'preset on' : 'preset'}
              onClick={() => setCount(n)}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            className={count === total ? 'preset on' : 'preset'}
            onClick={() => setCount(total)}
          >
            All ({total})
          </button>
        </div>

        <label className="quiz-custom">
          <span>Or a custom number</span>
          <input
            type="number"
            min={1}
            max={total}
            value={count}
            onChange={(e) => {
              const v = Math.max(1, Math.min(total, Number(e.target.value) || 1));
              setCount(v);
            }}
          />
        </label>

        <button
          className="button quiz-start"
          onClick={() => begin(all, count)}
        >
          Start quiz · {runCount} question{runCount > 1 ? 's' : ''} →
        </button>

        <div className="quiz-more">
          <p className="quiz-more-title">Other ways to practise</p>
          <div className="quiz-more-grid">
            <button
              type="button"
              className="quiz-mode"
              onClick={practiceWeak}
            >
              <strong>Practise weak questions</strong>
              <span>Focus on the ones you miss most often.</span>
            </button>
            <button
              type="button"
              className="quiz-mode"
              disabled={missedPool.length === 0}
              onClick={() => begin(missedPool, missedPool.length)}
            >
              <strong>
                Review missed
                {missedPool.length ? ` (${missedPool.length})` : ''}
              </strong>
              <span>
                {missedPool.length
                  ? 'Retake the questions you just got wrong.'
                  : 'Available after you finish a quiz.'}
              </span>
            </button>
            <button
              type="button"
              className="quiz-mode"
              onClick={() => setPhase('browse')}
            >
              <strong>Browse all questions</strong>
              <span>Read every question with its answer.</span>
            </button>
          </div>
        </div>

        {notice && <p className="q-intro quiz-menu-notice">{notice}</p>}
      </div>
    );
  }

  if (phase === 'done') {
    const pct = Math.round((score / deck.length) * 100);
    return (
      <div className="note">
        <h3>Quiz complete</h3>
        <p className="quiz-score">{pct}%</p>
        <p>
          You scored <strong>{score} / {deck.length}</strong> correct.
          {missedPool.length > 0 && (
            <> You missed <strong>{missedPool.length}</strong>.</>
          )}
        </p>
        <div className="quiz-actions">
          <button className="button" onClick={() => setPhase('review')}>
            Review answers →
          </button>
          <button className="button" onClick={() => begin(deck, deck.length)}>
            Replay this quiz
          </button>
        </div>
        <div className="quiz-actions">
          {missedPool.length > 0 && (
            <button
              className="button"
              onClick={() => begin(missedPool, missedPool.length)}
            >
              Review missed ({missedPool.length})
            </button>
          )}
          <button className="button" onClick={() => setPhase('menu')}>
            New quiz
          </button>
        </div>
      </div>
    );
  }

  const question = deck[pos];
  const runPct = pos > 0 ? Math.round((score / pos) * 100) : 0;
  return (
    <div>
      <p className="eyebrow">
        QUESTION {pos + 1} OF {deck.length} · SCORE {score}
        {pos > 0 && ` · ${runPct}%`}
      </p>
      <h3>{question.q}</h3>
      <div className="quiz-options" role="group" aria-label="Choose an answer">
        {question.o.map((o, i) => {
          let cls = '';
          if (choice !== null) {
            if (i === question.a) cls = 'correct';
            else if (i === choice) cls = 'wrong';
          }
          return (
            <button
              key={i}
              className={cls}
              aria-pressed={choice === i}
              disabled={choice !== null}
              onClick={() => pick(i)}
            >
              {String.fromCharCode(65 + i)}. {o}
            </button>
          );
        })}
      </div>
      {choice !== null && (
        <div
          className={'quiz-feedback ' + (choice === question.a ? 'ok' : 'no')}
          role="status"
        >
          <b>{choice === question.a ? 'Correct.' : 'Not quite.'}</b>{' '}
          {choice !== question.a && (
            <>
              Correct answer: {String.fromCharCode(65 + question.a)}.{' '}
              {question.o[question.a]}
            </>
          )}
        </div>
      )}
      <div className="quiz-actions">
        {choice !== null && (
          <button className="button" onClick={next}>
            {pos === deck.length - 1 ? 'See results' : 'Next question'} →
          </button>
        )}
        <button
          className="system-glossary-link"
          onClick={() => setPhase('menu')}
          type="button"
        >
          End &amp; back to menu
        </button>
      </div>
    </div>
  );
}
