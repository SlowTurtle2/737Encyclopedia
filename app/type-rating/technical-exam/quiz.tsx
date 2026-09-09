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
      <div className="quiz-menu">
        <p className="eyebrow">CHOOSE A SYSTEM</p>
        <h3>Revise one system, or mix them all.</h3>
        <div className="sys-grid">
          <button
            type="button"
            className="sys-btn all"
            onClick={() => setChoice(0)}
          >
            All systems (mixed)
          </button>
          {SYSTEMS.map((name, i) => (
            <button
              type="button"
              className="sys-btn"
              key={name}
              onClick={() => setChoice(i + 1)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span> {name}
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
