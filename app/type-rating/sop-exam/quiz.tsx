'use client';
import { useState, useEffect } from 'react';
import { sopQuestions, type SopQ } from './questions';

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz() {
  const [mounted, setMounted] = useState(false);
  const [deck, setDeck] = useState<SopQ[]>(sopQuestions);
  const [pos, setPos] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Render only on the client (after shuffling) so the random order never
  // causes a server/client hydration mismatch.
  useEffect(() => {
    setDeck(shuffle(sopQuestions));
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p className="eyebrow">Loading questions…</p>;
  }

  const total = deck.length;
  const question = deck[pos];

  function restart() {
    setDeck(shuffle(sopQuestions));
    setPos(0);
    setChoice(null);
    setScore(0);
    setDone(false);
  }
  function pick(i: number) {
    if (choice !== null) return;
    setChoice(i);
    if (i === question.a) setScore((s) => s + 1);
  }
  function next() {
    if (pos === total - 1) {
      setDone(true);
    } else {
      setPos((p) => p + 1);
      setChoice(null);
    }
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="note">
        <h3>Quiz complete</h3>
        <p>
          You scored <strong>{score} / {total}</strong> ({pct}%).
        </p>
        <div className="quiz-actions">
          <button className="button" onClick={restart}>
            Start again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="eyebrow">
        QUESTION {pos + 1} OF {total} · SCORE {score}
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
            <>Correct answer: {String.fromCharCode(65 + question.a)}. {question.o[question.a]}</>
          )}
        </div>
      )}
      <div className="quiz-actions">
        {choice !== null && (
          <button className="button" onClick={next}>
            {pos === total - 1 ? 'See results' : 'Next question'} →
          </button>
        )}
        <button className="system-glossary-link" onClick={restart} type="button">
          Restart
        </button>
      </div>
    </div>
  );
}
