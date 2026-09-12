import { RequireAccess } from '@/components/auth';
import Contents from '../systems/fuel/contents';
import DescentPractice from './practice';

export const metadata = {
  title: 'Descent Management | 737Encyclopedia',
  description:
    'Practical Boeing 737 descent and energy management in four parts: evaluate your energy, correct your energy, maintain situational awareness, and practise the calculations.',
};

const chapters = [
  ['overview', 'Overview', ''],
  ['evaluate', 'Evaluate your energy', 'I'],
  ['three-degree', 'The 3-degree rule', '1.1'],
  ['weight', 'Weight correction', '1.2'],
  ['wind', 'Wind correction', '1.3'],
  ['energy-examples', 'Practical Example', '1.4'],
  ['correct', 'Correct your energy', 'II'],
  ['high-profile', 'When you are high', '2.2'],
  ['approach', 'Approach energy', '2.3'],
  ['awareness', 'Situation awareness', 'III'],
  ['rings-traffic', 'Rings and traffic', '3.1'],
  ['practice', 'Practice your descent', 'IV'],
];

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
function Deep({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="deep">
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}
function Part({ n, id, title, lead }: { n: string; id: string; title: string; lead: string }) {
  return (
    <div className="course-part" id={id}>
      <span className="course-part-num">PART {n}</span>
      <h2 className="course-part-title">{title}</h2>
      <p className="course-part-lead">{lead}</p>
    </div>
  );
}

export default function DescentManagement() {
  return (
    <RequireAccess>
      <main id="main" className="system-course">
        <div className="wrap fuel-course-banner">
          <strong>LINE TRAINING / DESCENT MANAGEMENT</strong>
          <div className="course-meta">
            <span className="pill available">ENERGY MANAGEMENT</span>
            <span className="pill">RULES OF THUMB</span>
          </div>
        </div>

        <div className="wrap course-layout">
          <article>
            <section className="course-section" id="overview">
              <span className="section-num">OVERVIEW</span>
              <h2>Plan the descent yourself, then use the FMC as a cross-check.</h2>
              <p>
                The FMC flies a good descent about nine times out of ten. The
                other time is where accidents and go-arounds start: an ATC
                shortcut it does not know about, a runway change, a wind that is
                not the one you loaded, or a late clearance. A handful of simple
                rules of thumb let you stay ahead of the aircraft and decide
                before the situation forces your hand.
              </p>
              <p>
                This course is built in four parts, in the order you use them
                in the air: first <strong>evaluate</strong> your energy, then{' '}
                <strong>correct</strong> it, and throughout keep your{' '}
                <strong>situational awareness</strong>, then practise the calculations.
                Two numbers drive almost
                everything: <strong>wind</strong> and <strong>weight</strong>.
              </p>
              <Tip>
                Fly the aircraft first. Correct the flight path with pitch and
                drag straight away, then ask the pilot monitoring to update the
                FMC. Aviate, navigate, communicate, in that order.
              </Tip>
            </section>

            {/* ================= PART I ================= */}
            <Part
              n="I"
              id="evaluate"
              title="Evaluate your energy"
              lead="Before you can fix anything, you need a fast, reliable picture of where you are against where you should be. These three terms give you that picture without touching the FMC."
            />

            <figure className="energy-equation" aria-label="Energy calculation: altitude profile plus weight correction plus wind correction equals corrected descent distance">
              <div className="energy-term">
                <span>01</span>
                <strong>Altitude profile</strong>
                <small>Altitude (000 ft) × 3</small>
              </div>
              <b className="energy-operator">+</b>
              <div className="energy-term">
                <span>02</span>
                <strong>Weight correction</strong>
                <small>Reference: 58 t</small>
              </div>
              <b className="energy-operator">+</b>
              <div className="energy-term">
                <span>03</span>
                <strong>Wind correction</strong>
                <small>Headwind or tailwind</small>
              </div>
              <b className="energy-operator energy-equals">=</b>
              <div className="energy-result">
                <span>YOUR ENERGY</span>
                <strong>Corrected descent distance</strong>
              </div>
            </figure>

            <section className="course-section" id="three-degree">
              <span className="section-num">1.1</span>
              <h2>The 3-degree rule.</h2>
              <p>
                A clean jet glides at roughly 3 degrees at idle thrust, which is
                approximately 3 NM travelled for every 1,000 ft lost. That single fact gives you
                both the top of descent and the target altitude at any point.
              </p>
              <Need>
                <ul className="rot-list">
                  <li>
                    <b>Distance (NM) = altitude to lose (thousands of feet) × 3.</b>
                  </li>
                  <li>
                    <b>Altitude (thousands of feet) = distance (NM) ÷ 3.</b>
                    Multiply the result by 1,000 to obtain the altitude in feet.
                  </li>
                </ul>
              </Need>
              <p className="ex-lead">Worked examples</p>
              <ul className="study-points">
                <li>
                  <strong>Top of descent from FL330:</strong> 33 × 3 = 99 NM to
                  run.
                </li>
                <li>
                  <strong>Target altitude at 25 NM to go:</strong> 25 ÷ 3 = 8.3,
                  or approximately 8,300 ft.
                </li>
                <li>
                  <strong>Where should I be at 40 NM?</strong> 40 ÷ 3 = 13.3,
                  or approximately 13,300 ft before any correction.
                </li>
              </ul>
              <p>
                This works out of the box for a reference weight of about{' '}
                <strong>58 tonnes</strong> at a normal descent speed schedule.
                Away from that weight and in any real wind, you add corrections.
              </p>
            </section>

            <section className="course-section" id="weight">
              <span className="section-num">1.2</span>
              <h2>Weight correction.</h2>
              <p>
                A heavier aircraft carries more energy and needs more distance
                to descend. Use 58 tonnes as the reference weight, then correct
                the basic 3-degree distance before assessing the profile.
              </p>
              <Need>
                <p><b>Weight correction: 1 tonne = 1 NM.</b> Above 58 t, add distance and start down earlier. Below 58 t, subtract distance.</p>
              </Need>
              <p className="ex-lead">Weight correction examples</p>
              <ul className="study-points">
                <li><strong>64 t:</strong> 6 t above the reference weight = <strong>add 6 NM</strong>.</li>
                <li><strong>54 t:</strong> 4 t below the reference weight = <strong>subtract 4 NM</strong>.</li>
                <li><strong>58 t:</strong> at the reference weight = <strong>no correction</strong>.</li>
              </ul>
            </section>

            <section className="course-section" id="wind">
              <span className="section-num">1.3</span>
              <h2>Wind correction.</h2>
              <p>
                Wind changes the distance travelled over the ground during the
                descent. Use the forecast average wind component, then review the
                correction as the actual wind changes.
              </p>
              <Need>
                <p><b>Wind correction: 10 kt component = 1 NM.</b> Add distance for a tailwind and subtract distance for a headwind.</p>
              </Need>
              <p className="ex-lead">Wind correction examples</p>
              <ul className="study-points">
                <li><strong>20 kt tailwind:</strong> <strong>add 2 NM</strong> to the descent distance.</li>
                <li><strong>30 kt headwind:</strong> <strong>subtract 3 NM</strong> from the descent distance.</li>
                <li><strong>Calm wind:</strong> <strong>no correction</strong>.</li>
              </ul>
              <Warning>
                The 737 is very sensitive to tailwind, at any weight, especially
                on approach. Even a light tailwind makes deceleration difficult,
                so anticipate it every time.
              </Warning>
            </section>

            <section className="course-section" id="energy-examples">
              <span className="section-num">1.4</span>
              <h2>Practical Example.</h2>
              <ul className="study-points">
                <li><strong>FL330 · 64 t · 20 kt tailwind:</strong> 99 NM basic distance + 6 NM for weight + 2 NM for wind = <strong>107 NM</strong> to descend.</li>
                <li><strong>FL300 · 54 t · 30 kt headwind:</strong> 90 NM basic distance − 4 NM for weight − 3 NM for wind = <strong>83 NM</strong> to descend.</li>
                <li><strong>At 40 NM · 62 t · 20 kt tailwind:</strong> subtract the combined 6 NM correction from the available distance: (40 − 6) ÷ 3 = 11.3. The corrected target is therefore approximately <strong>11,300 ft</strong>.</li>
              </ul>
              <p>
                Smaller corrections for speed, airport elevation, QNH and ISA
                deviation can be added when they are significant. Combine the
                useful corrections into one mental figure and continue to update
                the wind component during the descent.
              </p>

              <Deep title="Go deeper · Build the real track-miles picture">
                <p>The FMC distance follows the programmed route, but the path you actually fly may be shorter after a shortcut or visual approach. Count backwards from the runway and use the ND range rings to estimate the real distance.</p>
                <p>For example, from FL320 with 110 NM of real track remaining, the basic descent requires about 96 NM. The top of descent is therefore approximately 14 NM ahead, even if the FMC still shows a later point on the programmed route.</p>
              </Deep>

              <Deep title="Go deeper · Cross-check the rate of descent">
                <p>Altitude shows whether you are high or low; rate of descent shows whether the correction is working. In a free descent, use true airspeed. On a fixed ground-referenced path such as an ILS glideslope, use ground speed.</p>
                <ul className="rot-list">
                  <li><b>In the descent: ROD = TAS ÷ 2.</b> TAS 360 kt gives approximately 1,800 ft/min.</li>
                  <li><b>On a 3-degree approach: ROD = GS ÷ 2, rounded up.</b> GS 150 kt gives approximately 800 ft/min.</li>
                  <li>For a 4-degree path, add one third to the 3-degree rate.</li>
                </ul>
              </Deep>
            </section>

            {/* ================= PART II ================= */}
            <Part
              n="II"
              id="correct"
              title="Correct your energy"
              lead="Once the picture says you are off profile, you act, big enough to fix it in one go. This is where the descent is won or lost, and where the high-energy recovery drill lives."
            />

            <section className="course-section" id="high-profile">
              <span className="section-num">2.2</span>
              <h2>When you find yourself high.</h2>
              <p>
                This is the most important habit on the whole descent. The tool
                you reach for depends on one number, <strong>FL150</strong>, and
                if the first tool is not enough you escalate the configuration in
                a fixed order. Learn this cold.
              </p>

              <div className="hi-recovery-grid">
                <div className="hi-recover hi-recover-above">
                  <p className="hi-recover-title">Above FL150 · two-step recovery</p>
                  <ol className="hi-ladder">
                    <li><span className="hi-num">1</span><div><strong>Accelerate</strong><div className="cfg-row"><span className="cfg-chip">DES PAGE</span><span className="cfg-plus">+</span><span className="cfg-chip">VNAV</span></div><p>The simplest way to increase the descent speed is from the FMC DES page. Keep VNAV engaged so the FMC continues to manage the altitude constraints at the STAR waypoints while you recover the profile.</p></div></li>
                    <li><span className="hi-num">2</span><div><strong>Add speed brakes</strong><div className="cfg-row"><span className="cfg-chip">ADD SPEED</span><span className="cfg-plus">+</span><span className="cfg-chip">SPEED BRAKE</span></div><p>If acceleration alone is insufficient, extend the speed brakes while continuing to monitor speed and the recovered flight path.</p></div></li>
                  </ol>
                </div>

                <div className="hi-recover hi-recover-below">
                  <p className="hi-recover-title">Below FL150 · progressive configuration</p>
                  <ol className="hi-ladder">
                    <li><span className="hi-num">1</span><div><strong>Speed brakes</strong><div className="cfg-row"><span className="cfg-chip">SPEED BRAKE</span></div><p>Extend the speed brakes first and assess whether the profile is recovering.</p></div></li>
                    <li><span className="hi-num">2</span><div><strong>Flap 5 at 220 kt</strong><div className="cfg-row"><span className="cfg-chip">SPEED BRAKE</span><span className="cfg-plus">+</span><span className="cfg-chip">FLAP 5</span><span className="cfg-plus">+</span><span className="cfg-chip">220 kt</span></div><p>If speed brakes alone are insufficient, target flap 5 and 220 kt with the speed brakes extended.</p></div></li>
                    <li className="last-resort"><span className="hi-num">3</span><div><strong>Last resort: flap 10 at 180 kt</strong><div className="cfg-row"><span className="cfg-chip">SPEED BRAKE</span><span className="cfg-plus">+</span><span className="cfg-chip">FLAP 10</span><span className="cfg-plus">+</span><span className="cfg-chip">180 kt</span></div><p>Use this final configuration only if the preceding steps have not recovered the profile.</p></div></li>
                  </ol>
                </div>
              </div>
              <Warning>
                Do not use flaps above FL200.
              </Warning>

              <p>
                Whichever tool you use, the point is not just to add drag, it is
                to <em>predict</em> whether the fix is working. Compare your
                actual rate to the ideal rate to find the excess, divide the
                height you need to lose by that excess to get a time, then
                multiply by your miles per minute to see where you will rejoin
                the profile. If the answer is not acceptable, act again straight
                away: more speed, more configuration, or ask ATC for track miles.
                Do not hope.
              </p>
              <Tip>
                Make corrections big enough to fix the problem in one go. Aim to
                regain the 3-degree path first, then deal with speed. And keep a
                hand on the speed-brake lever while it is out, as a reminder to
                stow it and to avoid adding thrust against it.
              </Tip>
            </section>

            <section className="course-section" id="approach">
              <span className="section-num">2.3</span>
              <h2>Approach energy and configuration.</h2>
              <p>
                Modern approaches are low-drag and low-noise: gear and flap 15
                near 4 NM, fully configured by around 700 to 1,000 ft. That only
                works if the energy is already under control when you arrive at
                the gate.
              </p>
              <Need>
                <ul className="rot-list">
                  <li>
                    <b>The 3-2-1 gate comes first:</b> aim to be near 3,000 ft, 200 kt, flap
                    1 at about 10 NM, then flap 5 on the glideslope to intercept.
                  </li>
                  <li><b>Maximum sensible speeds:</b> about 220 kt at the initial fix, 180 kt at base or on final, and 160 kt by 4 NM.</li>
                  <li><b>Rough distance gates:</b> about 190 kt at 9 NM, 180 kt at 8 NM, and 170 kt at 7 NM.</li>
                  <li><b>Heavy aircraft:</b> start configuring earlier. At 63 t, roughly 5 NM sooner, with flap selection near 15 to 16 NM instead of 10.</li>
                </ul>
              </Need>
              <Warning>
                With a tailwind, read those numbers as ground speeds, not
                indicated. A high-energy approach is far easier to prevent, at
                the top, than to recover near the ground.
              </Warning>
            </section>

            {/* ================= PART III ================= */}
            <Part
              n="III"
              id="awareness"
              title="Situational awareness"
              lead="Keep a simple picture of the descent on the Navigation Display, then compare it with the traffic already flying the same arrival."
            />

            <section className="course-section" id="rings-traffic">
              <span className="section-num">3.1</span>
              <h2>Rings and traffic cross-check.</h2>
              <p>
                Use the FMC FIX page to place useful distance rings around the
                runway or an arrival waypoint. Enter the fix, then type the
                distance as <strong>/distance</strong>, for example <strong>/10</strong>,
                on the applicable FIX-page line. The ring displayed on the Navigation Display gives
                you a visual gate for the descent and approach.
              </p>
              <ul className="study-points">
                <li>
                  <strong>Top-of-descent ring:</strong> enter the distance obtained
                  from the 3-degree calculation and its corrections.
                </li>
                <li>
                  <strong>Approach rings:</strong> use a 10 NM ring for the 3-2-1
                  gate and a 4 or 5 NM ring for gear and flap 15.
                </li>
                <li>
                  <strong>Traffic cross-check:</strong> look at the TCAS altitude
                  indications for aircraft ahead of and behind you on the same
                  arrival. Their levels provide a quick coherence check for your
                  own vertical profile.
                </li>
              </ul>
              <Tip>
                Traffic is only a cross-check. Aircraft ahead or behind may have
                different clearances, speeds, weights or destinations, so keep
                your own calculated profile as the primary reference.
              </Tip>
            </section>

            <section className="course-section" id="cheatsheet">
              <span className="section-num">SUMMARY</span>
              <h2>Rules of thumb, one card.</h2>
              <Need>
                <ul className="rot-list">
                  <li><b>Distance (NM) = altitude to lose (thousands of feet) × 3.</b></li>
                  <li><b>Altitude (thousands of feet) = distance (NM) ÷ 3.</b></li>
                  <li><b>Reference weight 58 t.</b> Weight: 1 t = 1 NM.</li>
                  <li><b>Wind and speed: 10 kt = 1 NM.</b></li>
                  <li><b>Elevation:</b> add it to the profile. <b>QNH:</b> 1 hPa = 30 ft.</li>
                  <li><b>Descent ROD = TAS ÷ 2. Approach ROD = GS ÷ 2, rounded up.</b></li>
                  <li><b>Above FL150:</b> accelerate, then use speed brakes if required. <b>Below FL150:</b> speed brakes, then F5/220, then F10/180.</li>
                </ul>
              </Need>
            </section>

            {/* ================= PART IV ================= */}
            <Part
              n="IV"
              id="practice"
              title="Practice your descent management"
              lead="Work each scenario without multiple-choice answers. Enter your calculation, check the reasoning, then move to the next briefing."
            />
            <DescentPractice />
          </article>

          <aside className="course-aside">
            <div className="aside-box">
              <p className="eyebrow">CONTENTS</p>
              <Contents sections={chapters} />
              <hr />
              <p className="muted">
                Training material only. Rules of thumb are approximations. Always
                fly current, applicable manuals and operator procedures.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </RequireAccess>
  );
}
