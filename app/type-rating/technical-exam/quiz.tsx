'use client';
import { useState } from 'react';
import QuizEngine from '@/components/quiz-engine';
import { supabase } from '@/lib/supabase';

const SYSTEMS = [
  'Aircraft General',
  'Air Systems',
  'Ice & Rain Protection',
  'Automatic Flight',
  'Communications',
  'Electrical',
  'Engines, APU',
  'Fire Protection',
  'Flight Controls',
  'Flight Instruments',
  'Flight Management & Navigation',
  'Fuel',
  'Hydraulics',
  'Landing Gear',
  'Warning Systems',
];

export default function TechQuiz() {
  // null = system not chosen yet; 0 = all systems mixed; 1..15 = one system.
  const [choice, setChoice] = useState<number | null>(null);

  if (choice === null) {
    return (
      <div className="quiz-menu system-picker">
        <div className="quiz-setup-heading">
          <span className="quiz-step">STEP 1 OF 2</span>
          <div>
            <p className="eyebrow">QUIZ TOPIC</p>
            <h3>What do you want to revise?</h3>
          </div>
        </div>
        <p className="quiz-menu-sub">Choose one aircraft system for focused practice, or combine the full question bank.</p>
        <div className="sys-grid">
          <button
            type="button"
            className="sys-btn all"
            onClick={() => setChoice(0)}
          >
            <span className="sys-number">ALL</span>
            <span><strong>All systems</strong><small>Mixed questions from the complete technical bank</small></span>
            <span className="sys-arrow">→</span>
          </button>
          {SYSTEMS.map((name, i) => (
            <button
              type="button"
              className="sys-btn"
              key={name}
              onClick={() => setChoice(i + 1)}
            >
              <span className="sys-number">{String(i + 1).padStart(2, '0')}</span>
              <strong>{name}</strong>
              <span className="sys-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const label = choice === 0 ? 'All systems (mixed)' : `${String(choice).padStart(2, '0')} · ${SYSTEMS[choice - 1]}`;

  return (
    <div>
      <div className="quiz-actions" style={{ marginBottom: 14 }}>
        <span className="pill available">{label}</span>
        <button
          className="system-glossary-link"
          type="button"
          onClick={() => setChoice(null)}
        >
          Change system
        </button>
      </div>
      <QuizEngine
        key={choice}
        bank="tech"
        selectionLabel={label}
        weakRpc="weak_tech_questions"
        load={() => {
          const base = supabase
            .from('tech_questions')
            .select('id,q,a,options')
            .order('id');
          return choice === 0 ? base : base.eq('system', choice);
        }}
      />
    </div>
  );
}
