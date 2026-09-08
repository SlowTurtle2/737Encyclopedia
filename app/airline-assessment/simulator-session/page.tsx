import Link from '@/components/site-link';
import Contents from '../../systems/fuel/contents';

export const metadata = {
  title: 'Simulator Session | 737Encyclopedia',
  description:
    'A walkthrough of the 737 simulator assessment — the departure profile, raw-data airwork, navigation, the failure and CRM, and the approach — built from recent feedback.',
};

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
  ['profile', 'The profile', '01'],
  ['airwork', 'Raw-data airwork', '02'],
  ['navigation', 'Navigation & holding', '03'],
  ['failure', 'The failure & CRM', '04'],
  ['approach', 'The approach', '05'],
  ['advice', 'Advice', '06'],
];

export default function SimulatorSession() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>AIRLINE ASSESSMENT / SIMULATOR SESSION</strong>
        <div className="course-meta">
          <span className="pill available">SIM WALKTHROUGH</span>
          <span className="pill">FROM RECENT FEEDBACK</span>
        </div>
      </div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">OVERVIEW</span>
            <h2>
              About an hour in a 737, flown as a pair — they are looking at your
              raw-data handling, awareness and CRM, not a type rating.
            </h2>
            <p>
              You fly with a partner and swap roles, roughly 30 minutes each as
              pilot flying (PF) and pilot monitoring (PM). It is not a 737
              knowledge test: the assessor wants to see that you can hand-fly
              accurately, stay ahead of the aircraft and work as a crew. Mistakes
              are fine as long as you notice and correct them.
            </p>
            <p>
              The profile below is drawn from recent candidate feedback, so
              expect small variations by assessor and by day. Charts are handed
              out during the morning briefing.
            </p>
            <Need>
              <p>
                Do a sim prep. Passing cold — with no 737 time — is very hard;
                a few hours of preparation and some backseating make the biggest
                difference.
              </p>
            </Need>
          </section>

          <section className="course-section" id="profile">
            <span className="section-num">CHAPTER 1 / THE PROFILE</span>
            <h2>
              A standard SID, climb to a level-off, then automation off for the
              rest of the detail.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Airport &amp; departure:</strong> commonly East Midlands
                (TNT2N / TNT2T &ldquo;Trent&rdquo;) or Liverpool (WAL2T
                &ldquo;Wallasey&rdquo;, ILS 27), returning to the departure field.
              </li>
              <li>
                <strong>Pre-set:</strong> the aircraft is usually set up for you
                — you verify rather than build it.
              </li>
              <li>
                <strong>Takeoff:</strong> flight directors and autothrottle ON;
                follow the SID, bug up and retract the flaps on schedule (around
                3000 ft).
              </li>
              <li>
                <strong>Level off:</strong> typically 5000 ft (occasionally a
                further climb to 7000 ft).
              </li>
              <li>
                <strong>Automation off:</strong> after the after-takeoff
                checklist, flight directors and autothrottle OFF — the rest is
                hand-flown raw data.
              </li>
            </ul>
            <Need>
              <p>
                Your two raw-data references are <strong>pitch</strong> and{' '}
                <strong>N1%</strong>. A prep session gives you the specific
                numbers for each phase.
              </p>
            </Need>
          </section>

          <section className="course-section" id="airwork">
            <span className="section-num">CHAPTER 2 / RAW-DATA AIRWORK</span>
            <h2>
              A sequence of hand-flown exercises — intercepts, level and speed
              changes, and a steep turn.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Radial interception:</strong> intercept a VOR radial,
                usually flying outbound (for example 060 or 080).
              </li>
              <li>
                <strong>Climbs &amp; descents:</strong> often at 1000 ft/min,
                sometimes while turning.
              </li>
              <li>
                <strong>Speed changes:</strong> accelerate (220 → 280 → 320) and
                decelerate (250 → 220), holding altitude.
              </li>
              <li>
                <strong>Turns &amp; headings:</strong> assigned heading changes
                between the other exercises.
              </li>
              <li>
                <strong>Steep turn:</strong> 45° bank, 180° (sometimes 360°).
                Acknowledge the &ldquo;BANK ANGLE&rdquo; aural by calling{' '}
                <strong>&ldquo;disregard&rdquo;</strong>.
              </li>
            </ul>
            <Tip>
              The assessor may pack several instructions into one transmission
              (climb + turn + speed). Prioritise — fly the aircraft first — then
              read back and action the rest in order. If you are unsure of an
              instruction, do not hesitate to ask the assessor to repeat it —
              acting on a doubtful clearance is worse than asking.
            </Tip>
          </section>

          <section className="course-section" id="navigation">
            <span className="section-num">CHAPTER 3 / NAVIGATION &amp; HOLDING</span>
            <h2>
              Show where you are and how you would join a hold — using raw
              navaids and the chart.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Position fix:</strong> &ldquo;where are you?&rdquo; — fix
                your position on the chart using a VOR, NDB or ADF, and give the
                distance from the airport.
              </li>
              <li>
                <strong>QDR / QDM:</strong> state your bearing from / to a station
                (the frequency is given to you).
              </li>
              <li>
                <strong>Hold entry:</strong> from your present position, state the
                entry — direct, parallel or teardrop (offset).
              </li>
            </ul>
            <Need>
              <p>
                If you call the wrong hold entry, correct yourself — assessors are
                happy when you catch and fix it. Work from your radial relative to
                the station.
              </p>
            </Need>
          </section>

          <section className="course-section" id="failure">
            <span className="section-num">CHAPTER 4 / THE FAILURE &amp; CRM</span>
            <h2>
              One technical failure or a cabin event — fly first, then manage it
              as a crew.
            </h2>
            <p>
              The pair is usually split: one pilot gets a technical failure and
              the other a cabin or medical event.
            </p>
            <ul className="study-points">
              <li>
                <strong>Technical:</strong> dual fuel filter bypass, GEN 1 (bus)
                off or disconnect with the APU inoperative, a forward-door
                caution, or a master caution during a busy phase.
              </li>
              <li>
                <strong>Cabin / medical:</strong> an unwell passenger, a suspected
                heart attack or stroke, an unruly passenger, spilled chemicals, a
                small cabin fire (for example a charger), or a cargo fire.
              </li>
            </ul>
            <ul className="study-points">
              <li>
                <strong>Fly first:</strong> if it happens in a busy phase, call{' '}
                <strong>&ldquo;standby&rdquo;</strong> and finish the manoeuvre —
                aviate, navigate, communicate.
              </li>
              <li>
                <strong>Manage it:</strong> pass control, work{' '}
                <strong>PIOSEE</strong> (Problem, Information, Options, Select,
                Execute, Evaluate) — keep it sharp, not long.
              </li>
              <li>
                <strong>Brief:</strong> pass <strong>NITS</strong> (Nature,
                Intentions, Time, Special instructions) and make the PA — sometimes
                the examiner does the PA, or it is not requested.
              </li>
              <li>
                <strong>QRH:</strong> read-and-do the checklist; the assessor lets
                you use it even if you are not familiar with the 737.
              </li>
              <li>
                <strong>Then:</strong> declare to ATC (MAYDAY as appropriate), set
                fuel / course / minima, and return to the departure airport.
              </li>
            </ul>
            <Need>
              <p>
                The failure is a CRM exercise, not a systems exam. They want a
                calm, prioritised process — fly the aircraft, share a clear plan,
                use the QRH.
              </p>
            </Need>
          </section>

          <section className="course-section" id="approach">
            <span className="section-num">CHAPTER 5 / THE APPROACH</span>
            <h2>Radar vectors to a raw-data ILS, to a full stop.</h2>
            <ul className="study-points">
              <li>
                <strong>Vectors:</strong> radar vectors to final (for example
                2000 ft, around a 15 nm final).
              </li>
              <li>
                <strong>ILS raw data:</strong> flight directors off, hand-flown to
                a full stop.
              </li>
              <li>
                <strong>Expect a twist:</strong> a glide-slope failure with the
                runway in sight (continue visually), or a go-around if you are
                unstable — you may be re-vectored to a short final for a second
                approach.
              </li>
            </ul>
            <Tip>
              A go-around is not an automatic fail. Candidates who went around for
              being unstable were set up on a short final and given another
              approach.
            </Tip>
          </section>

          <section className="course-section" id="advice">
            <span className="section-num">CHAPTER 6 / ADVICE</span>
            <h2>What consistently separates a pass from a struggle.</h2>
            <ul className="study-points q-list">
              <li>
                <strong>Do a sim prep.</strong> A few hours on the 737 plus some
                backseating makes a huge difference; almost everyone says passing
                without prior 737 exposure is very hard.
              </li>
              <li>
                <strong>Catch and correct.</strong> Mistakes are tolerated if you
                see them and fix them quickly — one candidate gained 400 ft,
                corrected it in seconds, and still passed.
              </li>
              <li>
                <strong>Prioritise.</strong> When several instructions arrive at
                once, do the important one first, then the rest.
              </li>
              <li>
                <strong>Aviate, navigate, communicate</strong> — in that order,
                always.
              </li>
              <li>
                <strong>Fly pitch and N1%.</strong> Keep your raw-data scan on
                those two, trim out the forces, and make small corrections.
              </li>
              <li>
                <strong>As PM, call deviations early</strong> — clear, timely
                callouts are exactly what they want to see.
              </li>
              <li>
                <strong>Keep PIOSEE sharp.</strong> Some assessors specifically
                want a short, straight-to-the-point decision process.
              </li>
            </ul>
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
              A walkthrough built from recent candidate feedback — expect small
              variations by assessor and by day.
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
