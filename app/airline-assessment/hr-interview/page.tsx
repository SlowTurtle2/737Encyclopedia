import Link from '@/components/site-link';
import Contents from '../../systems/fuel/contents';

export const metadata = {
  title: 'HR Interview | 737Encyclopedia',
  description:
    'A question bank for the airline HR interview, your experience, behavioural examples and the tick-box questions, with the topics seen most in recent assessments.',
};

function Hot() {
  return <span className="diff-tag hot">Hot</span>;
}
function Need({ children }: { children: React.ReactNode }) {
  return (
    <aside className="need-to-know teal">
      <span className="need-label">REMEMBER THIS</span>
      <div>{children}</div>
    </aside>
  );
}
function Tip({ children }: { children: React.ReactNode }) {
  return (
    <aside className="configuration-data">
      <strong>ADVICE</strong>
      <p>{children}</p>
    </aside>
  );
}

const chapters = [
  ['overview', 'Overview', ''],
  ['your-experience', 'Your experience', '01'],
  ['your-behavior', 'Your behavior', '02'],
  ['tick-box', 'Tick-box questions', '03'],
];

export default function HRInterview() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>AIRLINE ASSESSMENT / HR INTERVIEW</strong>
        <div className="course-meta">
          <span className="pill available">QUESTION BANK</span>
          <span className="pill">
            <span className="diff-tag hot" style={{ marginRight: 0 }}>
              Hot
            </span>
            &nbsp;= SEEN &lt; 6 MONTHS
          </span>
        </div>
      </div>
      <div className="wrap assessment-scope-note">
        <span className="scope-badge">FOCUS</span>
        <p>
          This preparation is tailored to the{' '}
          <strong>Irish low-cost carrier</strong> selection process. The
          questions, flows and expectations follow that operator&rsquo;s
          assessment, not a generic airline assessment.
        </p>
      </div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">OVERVIEW</span>
            <h2>
              A short, friendly conversation about who you are, how you behave
              and whether the boxes are ticked.
            </h2>
            <p>
              The HR interview is usually brief (around 10 to 25 minutes) and
              relaxed. Much of it is a checklist: motivation, background and
              administrative facts. Answer honestly and concisely, and remember
              they may verify what you say afterwards, so never invent anything.
            </p>
            <p>
              Questions marked <Hot /> come from assessment feedback in the last
              six months. The rest are long-standing favourites.
            </p>
            <Need>
              <p>
                Be honest, be humble, and keep your CV to hand for dates. For
                &ldquo;give me an example&rdquo; questions, tell a concrete,
                real situation you lived through.
              </p>
            </Need>
          </section>

          <section className="course-section" id="your-experience">
            <span className="section-num">CHAPTER 1 / YOUR EXPERIENCE</span>
            <h2>
              Your motivation, your background and your ambitions. Know your
              own story, and know the company.
            </h2>

            <h3>Motivation &amp; the company</h3>
            <ul className="study-points q-list">
              <li><Hot />Why do you want to become a pilot?</li>
              <li><Hot />Why do you want to fly for us?</li>
              <li>Tell me about yourself.</li>
              <li>What do you know about the company, its fleet, group and bases?</li>
              <li>Why should we hire you?</li>
              <li>What are the operational differences between us and another airline you could join?</li>
              <li>Is speaking other languages an advantage?</li>
            </ul>

            <h3>Your background &amp; skills</h3>
            <ul className="study-points q-list">
              <li><Hot />Tell me about your previous job.</li>
              <li><Hot />What skills or value would you bring from your previous experience?</li>
              <li><Hot />What are your strengths?</li>
              <li><Hot />What would you say is your weakness as a pilot?</li>
              <li>If you hold an instructor rating: how did you handle a struggling student, and would you take the same approach in the cockpit?</li>
            </ul>

            <h3>Ambition &amp; the role</h3>
            <ul className="study-points q-list">
              <li><Hot />Where do you see yourself in five years?</li>
              <li><Hot />Would you like to become a captain, and what makes a good captain?</li>
              <li><Hot />What do you expect to be your biggest challenge, in training, or once you start here?</li>
              <li><Hot />You come with prior experience. How do you feel about starting again from zero?</li>
            </ul>

            <h3>Other applications &amp; preparation</h3>
            <ul className="study-points q-list">
              <li><Hot />Have you applied to other airlines? Which ones, and has anyone responded?</li>
              <li><Hot />If another airline offered you a place before you heard from us, what would you do?</li>
              <li><Hot />Did you do any simulator preparation, and where?</li>
              <li>Did you prepare for this interview, where, and how many hours?</li>
              <li>Which areas do you feel weakest on for the 737 sim assessment?</li>
            </ul>
          </section>

          <section className="course-section" id="your-behavior">
            <span className="section-num">CHAPTER 2 / YOUR BEHAVIOR</span>
            <h2>
              Competency and judgement questions. They want a concrete example
              and to see how you think.
            </h2>
            <Tip>
              Answer with a real, specific example, a situation you actually
              lived through, with enough detail that the assessor can picture it.
              Keep the focus on what <em>you</em> personally did and how it turned
              out, rather than a generic or hypothetical answer.
            </Tip>

            <h3>Competency examples</h3>
            <ul className="study-points q-list">
              <li><Hot />Give an example of a time you showed leadership.</li>
              <li><Hot />Tell me about a stressful situation, or your most stressful flight.</li>
              <li><Hot />Describe a time you made a safety-critical decision.</li>
              <li><Hot />Tell me about a challenging in-flight situation.</li>
              <li><Hot />Have you worked in teams? Have you ever disagreed with someone in a team?</li>
              <li><Hot />How did it feel to make a decision that impacted other people?</li>
              <li><Hot />Do you think you will be able to make important decisions with 200 people on board?</li>
              <li><Hot />What would your team say about you?</li>
              <li>Describe a time you resolved a conflict between colleagues or classmates.</li>
              <li>Tell me about a time you had to voice an unpopular opinion to a senior figure.</li>
              <li>Would you have any problem voicing your opinion?</li>
            </ul>

            <h3>Safety attitude</h3>
            <ul className="study-points q-list">
              <li>What are SOPs, and what do they give you (safety, standardisation, efficiency)?</li>
              <li>Can you deviate from SOPs?</li>
              <li>What does &ldquo;synergy&rdquo; mean to you (connecting, communicating and collaborating)?</li>
            </ul>

            <h3>Judgement scenarios</h3>
            <ul className="study-points q-list">
              <li>Your captain wants to continue the approach below minima without becoming visual. What do you do?</li>
              <li>You report for duty and smell alcohol on the captain&rsquo;s breath. What do you do?</li>
              <li>A passenger feels unwell and needs immediate medical assistance. What do you do?</li>
              <li>You are in a non-aviation life-threatening situation (say someone near you at a stadium has a heart attack). How do you handle it, and what are your priorities?</li>
            </ul>
          </section>

          <section className="course-section" id="tick-box">
            <span className="section-num">CHAPTER 3 / TICK-BOX QUESTIONS</span>
            <h2>
              Quick administrative checks, answer honestly and to the point.
            </h2>
            <ul className="study-points q-list">
              <li><Hot />Run me through any gaps in your CV.</li>
              <li><Hot />Do you have the right to live and work in the UK?</li>
              <li><Hot />Have you travelled outside the EU in the last ten years, where and when?</li>
              <li><Hot />Have you ever been fired or dismissed from a job?</li>
              <li><Hot />Have you had any accidents or incidents in your flying?</li>
              <li><Hot />What is your notice period, and when can you start?</li>
              <li><Hot />Are you willing to relocate and move abroad?</li>
              <li><Hot />How did you fund your training, and do you have the funds for the type rating now?</li>
              <li>Are you currently employed?</li>
              <li>Do you have any criminal record or unspent convictions?</li>
            </ul>
            <Tip>
              They often check these afterwards, so never lie, and be ready to
              justify a gap or an unusual date in detail. Keep your CV in front
              of you to answer precisely.
            </Tip>
          </section>

          <div className="system-page-footer">
            <Link className="system-glossary-link" href="/academy">
              Quiz &amp; revision access
            </Link>
          </div>
        </article>
        <aside className="course-aside">
          <div className="aside-box">
            <p className="eyebrow">CHAPTERS</p>
            <Contents sections={chapters} />
            <hr />
            <p className="muted">
              <span className="diff-tag hot" style={{ marginRight: 6 }}>
                Hot
              </span>
              marks a question seen in assessment feedback within the last six
              months.
            </p>
            <Link href="/airline-assessment/technical-interview">
              Technical interview questions →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
