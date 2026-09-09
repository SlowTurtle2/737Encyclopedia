import Link from '@/components/site-link';
import { RequireAccess } from '@/components/auth';
import Quiz from './quiz';

export const metadata = {
  title: 'SOP Exam | 737Encyclopedia',
  description:
    'An interactive Boeing 737 SOP question bank with immediate feedback, covering flight-deck procedures, callouts, approaches and limitations.',
};

export default function SopExam() {
  return (
    <RequireAccess>
      <main id="main" className="system-course">
        <div className="wrap fuel-course-banner">
          <strong>TYPE RATING / SOP EXAM</strong>
          <div className="course-meta">
            <span className="pill available">INTERACTIVE QUIZ</span>
            <span className="pill">IMMEDIATE FEEDBACK</span>
          </div>
        </div>
        <div className="wrap course-layout">
          <article>
            <section className="course-section">
              <span className="section-num">SOP QUESTION BANK</span>
              <h2>
                Test your Boeing 737 SOP knowledge, one question at a time, with
                immediate feedback.
              </h2>
              <p>
                Pick an answer and the correct one is revealed straight away.
                The questions are drawn in a random order each time, so run it
                as many times as you like. Always defer to your operator&rsquo;s
                current SOPs and manuals; this is study material only.
              </p>
              <Quiz />
            </section>
            <div className="system-page-footer">
              <Link className="system-glossary-link" href="/academy">
                Quiz &amp; revision access
              </Link>
            </div>
          </article>
        </div>
      </main>
    </RequireAccess>
  );
}
