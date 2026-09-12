'use client';

import { FormEvent, useState } from 'react';

const questions = [
  {
    briefing: 'Cruising at 38,000 ft, groundspeed 310 kt, landing weight 64 t. ATC: “Cross TIMBA at 9,000 ft, 250 kt.”',
    prompt: 'How many miles before TIMBA do you start down?',
    answer: 93,
    tolerance: 1,
    unit: 'NM',
    explanation: '38,000 − 9,000 = 29,000 ft. The basic distance is 29 × 3 = 87 NM. At 64 t, add 6 NM for weight: 87 + 6 = 93 NM.',
  },
  {
    briefing: 'Cruising at FL330. Landing weight 64 t. Average wind component: 20 kt tailwind.',
    prompt: 'What is your corrected descent distance?',
    answer: 107,
    tolerance: 0,
    unit: 'NM',
    explanation: '99 NM basic distance + 6 NM for weight + 2 NM for tailwind = 107 NM.',
  },
  {
    briefing: 'Cruising at FL300. Landing weight 54 t. Average wind component: 30 kt headwind.',
    prompt: 'What is your corrected descent distance?',
    answer: 83,
    tolerance: 0,
    unit: 'NM',
    explanation: '90 NM basic distance − 4 NM for weight − 3 NM for headwind = 83 NM.',
  },
  {
    briefing: 'You are 25 NM from the runway on an uncorrected 3-degree profile.',
    prompt: 'What altitude should you be passing?',
    answer: 8300,
    tolerance: 100,
    unit: 'FT',
    explanation: 'Altitude in thousands of feet = distance ÷ 3: 25 ÷ 3 ≈ 8.3, or approximately 8,300 ft.',
  },
  {
    briefing: 'During the descent, your true airspeed is 360 kt.',
    prompt: 'What approximate rate of descent should you use?',
    answer: 1800,
    tolerance: 0,
    unit: 'FT/MIN',
    explanation: 'Descent ROD = TAS ÷ 2, with the zero restored: 360 ÷ 2 = approximately 1,800 ft/min.',
  },
  {
    briefing: 'Established on a 3-degree approach with a groundspeed of 150 kt.',
    prompt: 'What rounded rate of descent should you target?',
    answer: 800,
    tolerance: 50,
    unit: 'FT/MIN',
    explanation: 'Approach ROD = GS ÷ 2: 150 ÷ 2 = 750 ft/min. This may be rounded to approximately 800 ft/min, so both answers are accepted.',
  },
];

export default function DescentPractice() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const question = questions[index];

  function checkAnswer(event: FormEvent) {
    event.preventDefault();
    const numericValue = Number(value.replace(',', '.'));
    const isCorrect = Number.isFinite(numericValue) && Math.abs(numericValue - question.answer) <= question.tolerance;
    setCorrect(isCorrect);
    setChecked(true);
    if (isCorrect) setScore((current) => current + 1);
  }

  function next() {
    if (index === questions.length - 1) {
      setComplete(true);
      return;
    }
    setIndex((current) => current + 1);
    setValue('');
    setChecked(false);
    setCorrect(false);
  }

  function restart() {
    setIndex(0);
    setValue('');
    setChecked(false);
    setCorrect(false);
    setScore(0);
    setComplete(false);
  }

  if (complete) {
    return (
      <div className="descent-test-result">
        <span>TEST COMPLETE</span>
        <h3>{score} / {questions.length} correct answers</h3>
        <p>Run the test again until the calculations become immediate.</p>
        <button className="button" type="button" onClick={restart}>Try again</button>
      </div>
    );
  }

  return (
    <div className="descent-test-card">
      <div className="descent-test-progress">
        <span>DESCENT BRIEFING</span>
        <small>{index + 1} / {questions.length}</small>
      </div>
      <p className="descent-test-briefing">{question.briefing}</p>
      <h3>{question.prompt}</h3>
      <form onSubmit={checkAnswer}>
        <label className="descent-answer-field">
          <input
            inputMode="decimal"
            aria-label={`Your answer in ${question.unit}`}
            placeholder={question.unit}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            disabled={checked}
          />
          <span>{question.unit}</span>
        </label>
        {!checked ? (
          <button className="descent-test-button" type="submit" disabled={!value.trim()}>Lock it in →</button>
        ) : (
          <button className="descent-test-button" type="button" onClick={next}>
            {index === questions.length - 1 ? 'See result' : 'Next scenario'} →
          </button>
        )}
      </form>
      {checked && (
        <div className={`descent-test-feedback ${correct ? 'correct' : 'incorrect'}`} role="status">
          <strong>{correct ? 'Correct.' : `Answer: ${question.answer} ${question.unit}.`}</strong>{' '}
          {question.explanation}
        </div>
      )}
      {!checked && <p className="descent-test-hint">Use the rules of thumb from the course. Enter a number only.</p>}
    </div>
  );
}
