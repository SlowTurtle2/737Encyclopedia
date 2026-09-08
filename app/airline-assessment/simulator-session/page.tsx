import Link from '@/components/site-link';
import Contents from '../../systems/fuel/contents';

export const metadata = {
  title: 'Simulator Session | 737Encyclopedia',
  description:
    'A walkthrough of the 737 simulator assessment, the departure profile, raw-data airwork, navigation, the failure and CRM, and the approach, built from recent feedback.',
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
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <aside className="suction-warning">
      <strong>WATCH OUT</strong>
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
              About an hour in a 737, flown as a pair. They are looking at your
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
              Crews are usually mixed, one candidate from a 737 MCC and one from
              an A320 MCC, so your partner may be more, or less, comfortable on
              the 737 than you. That is normal, and the assessor takes it into
              account.
            </p>
            <p>
              The profile below is drawn from recent candidate feedback, so
              expect small variations by assessor and by day. Charts are handed
              out during the morning briefing.
            </p>
            <Tip>
              Do a sim prep. Passing cold, with no 737 time, is very hard; a few
              hours of preparation and some backseating make the biggest
              difference.
            </Tip>
          </section>

          <section className="course-section" id="profile">
            <span className="section-num">CHAPTER 1 / THE PROFILE</span>
            <h2>
              A standard SID, climb to a level-off, then automation off for the
              rest of the detail.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Briefing:</strong> the full brief is done beforehand in a
                briefing room; in the sim you usually get only a very short
                departure brief.
              </li>
              <li>
                <strong>Airport &amp; departure:</strong> commonly East Midlands
                (TNT2N / TNT2T &ldquo;Trent&rdquo;) or Liverpool (WAL2T
                &ldquo;Wallasey&rdquo;, ILS 27), returning to the departure field.
              </li>
              <li>
                <strong>Pre-set:</strong> the aircraft is usually set up for you;
                you verify rather than build it.
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
                checklist, flight directors and autothrottle OFF, the rest is
                hand-flown raw data.
              </li>
            </ul>
            <Warning>
              At the level-off, the large thrust reduction produces a strong
              nose-down effect that can cost several hundred feet if it is not
              corrected immediately. Pull on the control column and trim without
              delay.
            </Warning>
            <Warning>
              Know the departure and approach profiles by heart. They are given
              several weeks in advance and there are very few of them (normally
              just one departure and one approach). Always fly the profile from
              the official briefing pack, never a version from a mediocre sim
              prep.
            </Warning>
          </section>

          <section className="course-section" id="airwork">
            <span className="section-num">CHAPTER 2 / RAW-DATA AIRWORK</span>
            <h2>
              A sequence of hand-flown exercises: intercepts, level and speed
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

            <h3>Typical pitch &amp; power</h3>
            <ul className="study-points">
              <li><strong>Straight and level, 220 kt:</strong> 55% N1, 4° pitch.</li>
              <li><strong>Acceleration 220 to 320 kt:</strong> 80% N1, pitch decreasing to 2.5°.</li>
              <li><strong>Steep turn:</strong> add 2 to 3% N1 and 2° of pitch in the turn.</li>
            </ul>
            <p className="q-intro">
              These are reference values; confirm the exact figures during your
              prep session.
            </p>

            <Need>
              <p>
                Trim, and trim often. Keep the aircraft in trim so you are never
                holding a force, and re-trim after every speed or configuration
                change. It is one of the key points to flying the raw-data
                profile smoothly.
              </p>
            </Need>
            <Tip>
              The assessor may pack several instructions into one transmission
              (climb + turn + speed). Prioritise, fly the aircraft first, then
              read back and action the rest in order. If you are unsure of an
              instruction, do not hesitate to ask the assessor to repeat it,
              acting on a doubtful clearance is worse than asking.
            </Tip>
          </section>

          <section className="course-section" id="navigation">
            <span className="section-num">CHAPTER 3 / NAVIGATION &amp; HOLDING</span>
            <h2>
              Show where you are and how you would join a hold, using raw
              navaids and the chart.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Position fix:</strong> &ldquo;where are you?&rdquo;, fix
                your position on the chart using a VOR, NDB or ADF, and give the
                distance from the airport.
              </li>
              <li>
                <strong>QDR / QDM:</strong> state your bearing from / to a station
                (the frequency is given to you).
              </li>
              <li>
                <strong>Hold entry:</strong> from your present position, state the
                entry, direct, parallel or teardrop (offset).
              </li>
            </ul>
            <Need>
              <p>
                If you call the wrong hold entry, correct yourself, assessors are
                happy when you catch and fix it. Work from your radial relative to
                the station.
              </p>
            </Need>
          </section>

          <section className="course-section" id="failure">
            <span className="section-num">CHAPTER 4 / THE FAILURE &amp; CRM</span>
            <h2>
              One technical failure or a cabin event. Fly first, then manage it
              as a crew.
            </h2>
            <p>
              The pair is usually split: one pilot gets a technical failure and
              the other a cabin, medical or exterior event. The two are handled
              differently.
            </p>

            <h3>Case 1, Technical failure</h3>
            <p className="q-intro">
              A caution or warning during the detail, for example a dual fuel
              filter bypass, GEN 1 (bus) off or disconnect with the APU
              inoperative, a forward-door caution, or a master caution in a busy
              phase.
            </p>
            <p>Fly first: if it happens in a busy phase, call <strong>&ldquo;standby&rdquo;</strong> and finish the manoeuvre. Then run the flow the assessors are looking for:</p>
            <ul className="study-points">
              <li><strong>1 · PM calls the light.</strong> For example &ldquo;Source OFF&rdquo;, or any warning.</li>
              <li><strong>2 · PF calls it.</strong> &ldquo;[Name of the light], QRH non-normal checklist, my radio.&rdquo;</li>
              <li><strong>3 · PM reads and does the QRH.</strong> Most of the time the assessor pauses the sim to explain the QRH, or simply calls it completed.</li>
              <li><strong>4 · PF hands control to the PM and starts a PIOSEE.</strong> Problem, Information, Options, Select, Execute, Evaluate.</li>
              <li><strong>5 · PF performs NITS.</strong> Nature, Intentions, Time, Special instructions.</li>
              <li><strong>6 · PF performs the PA.</strong></li>
              <li><strong>7 · PF sets up for the approach.</strong> Frequency, course and minima; there is no FMC to do.</li>
              <li><strong>8 · PF gives a quick approach briefing.</strong></li>
              <li><strong>9 · If there are no questions,</strong> PF takes control back and the PM reports ready.</li>
              <li><strong>10 · PF calls for the descent and approach checklists.</strong></li>
              <li><strong>11 · Re-evaluate if you can.</strong> If you have the bandwidth, re-check everything just before intercepting the LOC; if you are not comfortable, focus on the approach.</li>
            </ul>
            <Tip>
              If the instructor mentions during the briefing that the APU is
              inoperative, the failure is very likely a generator failure (a
              source off). The QRH will ask you to start the APU, so remember at
              that point that it is inoperative, and the QRH will then direct you
              to land at the nearest suitable airport.
            </Tip>

            <h3>Case 2, Cabin, medical or exterior event</h3>
            <p className="q-intro">
              An event away from the systems, for example an unwell passenger, a
              suspected heart attack or stroke, an unruly passenger, spilled
              chemicals, a small cabin fire (a charger, say) or a cargo fire.
            </p>
            <p>Fly first: aviate, navigate, communicate, and call <strong>&ldquo;standby&rdquo;</strong> if it lands in a busy phase. There is usually no QRH to run, so start directly at the PIOSEE:</p>
            <ul className="study-points">
              <li><strong>1 · PF hands control to the PM and starts a PIOSEE.</strong> Problem, Information, Options, Select, Execute, Evaluate, to a clear plan: continue, return or divert.</li>
              <li><strong>2 · PF performs NITS.</strong> Nature, Intentions, Time, Special instructions.</li>
              <li><strong>3 · PF performs the PA.</strong> Sometimes the examiner makes the PA, or it is not requested.</li>
              <li><strong>4 · PF sets up for the approach.</strong> Frequency, course and minima.</li>
              <li><strong>5 · PF gives a quick approach briefing.</strong></li>
              <li><strong>6 · If there are no questions,</strong> PF takes control back and the PM reports ready.</li>
              <li><strong>7 · PF calls for the descent and approach checklists.</strong></li>
            </ul>
            <Need>
              <p>
                The failure is a CRM exercise, not a systems exam. They want a
                calm, prioritised process, fly the aircraft, share a clear plan,
                use the QRH.
              </p>
            </Need>
          </section>

          <section className="course-section" id="approach">
            <span className="section-num">CHAPTER 5 / THE APPROACH</span>
            <h2>Radar vectors to a raw-data ILS, flown to a full stop.</h2>
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
                unstable, you may be re-vectored to a short final for a second
                approach.
              </li>
            </ul>
            <Tip>
              At each flap extension the aircraft tends to balloon and gain
              altitude, so trim, or push gently on the control column, to hold
              your altitude. Ballooning after selecting flap is one of the most
              common candidate errors during the assessment.
            </Tip>
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
                see them and fix them quickly, one candidate gained 400 ft,
                corrected it in seconds, and still passed.
              </li>
              <li>
                <strong>Prioritise.</strong> When several instructions arrive at
                once, do the important one first, then the rest.
              </li>
              <li>
                <strong>Aviate, navigate, communicate</strong>, in that order,
                always.
              </li>
              <li>
                <strong>Fly pitch and N1%.</strong> Keep your raw-data scan on
                those two, trim out the forces, and make small corrections.
              </li>
              <li>
                <strong>As PM, call deviations early</strong>, clear, timely
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
              A walkthrough built from recent candidate feedback, expect small
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
