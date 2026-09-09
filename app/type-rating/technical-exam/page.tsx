import Link from '@/components/site-link';
import { RequireAccess } from '@/components/auth';
import TechQuiz from './quiz';

export const metadata = {
  title: 'Technical Exam | 737Encyclopedia',
  description:
    'Interactive Boeing 737 technical question bank, organised by system, with immediate feedback and a mixed-systems mode.',
};

export default function TechnicalExam() {
  return (
    <RequireAccess>
      <main id="main" className="system-course">
        <div className="wrap fuel-course-banner">
          <strong>TYPE RATING / TECHNICAL EXAM</strong>
          <div className="course-meta">
            <span className="pill available">INTERACTIVE QUIZ</span>
            <span className="pill">15 SYSTEMS</span>
          </div>
        </div>
        <div className="wrap course-layout">
          <article>
            <section className="course-section">
              <span className="section-num">TECHNICAL QUESTION BANK</span>
              <h2>
                Test your 737 system knowledge, one question at a time, with
                immediate feedback.
              </h2>
              <p>
                Choose a single system to revise, or mix every system together.
                Pick an answer and the correct one is revealed straight away.
                Always defer to the current FCOM and operator manuals; this is
                study material only.
              </p>
              <TechQuiz />
            </section>
            <div className="system-page-footer">
              <Link className="system-glossary-link" href="/type-rating/sop-exam">
                SOP exam quiz →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </RequireAccess>
  );
}
