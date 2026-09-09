'use client';
import QuizEngine from '@/components/quiz-engine';
import { supabase } from '@/lib/supabase';

export default function Quiz() {
  return (
    <QuizEngine
      bank="sop"
      weakRpc="weak_sop_questions"
      load={() =>
        supabase.from('sop_questions').select('id,q,a,options').order('id')
      }
    />
  );
}
