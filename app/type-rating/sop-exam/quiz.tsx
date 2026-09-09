'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// Questions are fetched from Supabase (table sop_questions), which is
// protected by RLS: only a user with paid access receives rows. They are
// never shipped in the client bundle.
type Q = { q: string; a: number; o: string[] };

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PRESETS = [10, 20, 50, 100];

export default function Quiz() {
  const [all, setAll] = useState<Q[] | null>(null);
  const [phase, setPhase] = useState<'menu' | 'running' | 'done'>('menu');
  const [count, setCount] = useState(20);
  const [deck, setDeck] = useState<Q[]>([]);
  const [pos, setPos] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState<Q[]>([]);
  const [missedPool, setMissedPool] = useState<Q[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('sop_questions')
        .select('q,a,options')
        .order('id');
      if (!active) return;
      if (error) {
        setAll([]);
        return;
      }
      setAll(
        (data ?? []).map((r) => ({
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
    setPos(0);
    setChoice(null);
    setScore(0);
    setWrong([]);
    setPhase('running');
  }
  function pick(i: number) {
    if (choice !== null) return;
    setChoice(i);
    if (i === deck[pos].a) setScore((s) => s + 1);
    else setWrong((w) => [...w, deck[pos]]);
  }
  function next() {
    if (pos === deck.length - 1) {
      setMissedPool(wrong);
      setPhase('done');
    } else {
      setPos((p) => p + 1);
      setChoice(null);
    }
  }

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
            Review missed questions{missedPool.length ? ` (${missedPool.length})` : ''}
          </button>
        </div>
        {missedPool.length === 0 && (
          <p className="q-intro">
            Finish a quiz first to unlock a review of the questions you missed.
          </p>
        )}
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
          {missedPool.length > 0 && (
            <button
              className="button"
              onClick={() => begin(missedPool, missedPool.length)}
            >
              Review missed ({missedPool.length}) →
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
