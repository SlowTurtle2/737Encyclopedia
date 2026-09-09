'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// Questions come from Supabase (RLS-gated); never shipped in the bundle.
type Q = { id: number; q: string; a: number; o: string[] };

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

export default function Quiz() {
  const [all, setAll] = useState<Q[] | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>('menu');
  const [count, setCount] = useState(20);
  const [notice, setNotice] = useState<string | null>(null);

  const [deck, setDeck] = useState<Q[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [pos, setPos] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [missedPool, setMissedPool] = useState<Q[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const [{ data: qs, error }, { data: userData }] = await Promise.all([
        supabase.from('sop_questions').select('id,q,a,options').order('id'),
        supabase.auth.getUser(),
      ]);
      if (!active) return;
      setUid(userData.user?.id ?? null);
      setAll(
        error
          ? []
          : (qs ?? []).map((r) => ({
              id: r.id as number,
              q: r.q as string,
              a: r.a as number,
              o: (r.options as string[]) ?? [],
            })),
      );
    })();
    return () => {
      active = false;
    };
  }, []);

  if (all === null) return <p className="eyebrow">Loading questions…</p>;
  if (all.length === 0)
    return (
      <p className="q-intro">
        No questions are available on your account. If you have just purchased
        access, refresh the page in a moment.
      </p>
    );

  const total = all.length;

  function begin(pool: Q[], n: number) {
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
      // Fire-and-forget: log the attempt for "weak questions".
      supabase
        .from('question_attempts')
        .insert({ user_id: uid, bank: 'sop', question_id: q.id, correct })
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
    const { data, error } = await supabase.rpc('weak_sop_questions', {
      p_limit: 50,
    });
    if (error || !data || data.length === 0) {
      setNotice(
        'No frequently-missed questions yet — finish a few quizzes and the ones you get wrong will show up here.',
      );
      return;
    }
    begin(
      (data as { id: number; q: string; a: number; options: string[] }[]).map(
        (r) => ({ id: r.id, q: r.q, a: r.a, o: r.options }),
      ),
      data.length,
    );
  }

  // ---- Browse all questions ----------------------------------------------
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

  // ---- Review the last quiz ----------------------------------------------
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

  // ---- Menu ---------------------------------------------------------------
  if (phase === 'menu') {
    return (
      <div className="quiz-menu">
        <p className="eyebrow">BUILD YOUR QUIZ · {total} QUESTIONS AVAILABLE</p>
        <h3>How many questions?</h3>
        <div className="quiz-presets">
          {PRESETS.map((n) => (
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
          <label className="quiz-custom">
            Custom
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
        </div>
        <div className="quiz-actions">
          <button className="button" onClick={() => begin(all, count)}>
            Start quiz →
          </button>
          <button
            className="button"
            disabled={missedPool.length === 0}
            onClick={() => begin(missedPool, missedPool.length)}
          >
            Review missed{missedPool.length ? ` (${missedPool.length})` : ''}
          </button>
        </div>
        <div className="quiz-actions">
          <button className="button" onClick={practiceWeak}>
            Practice my weak questions
          </button>
          <button className="button" onClick={() => setPhase('browse')}>
            Browse all questions
          </button>
        </div>
        {notice && <p className="q-intro">{notice}</p>}
      </div>
    );
  }

  // ---- Results ------------------------------------------------------------
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

  // ---- Running ------------------------------------------------------------
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
