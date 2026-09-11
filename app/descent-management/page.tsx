import { RequireAccess } from '@/components/auth';
import Contents from '../systems/fuel/contents';

export const metadata = {
  title: 'Descent Management | 737Encyclopedia',
  description:
    'Practical Boeing 737 descent and energy management in three parts: evaluate your energy, correct your energy, and keep situational awareness. The 3-degree rule, weight and wind, high-energy recovery and terrain cross-checks.',
};

const chapters = [
  ['overview', 'Overview', ''],
  ['evaluate', 'Evaluate your energy', 'I'],
  ['three-degree', 'The 3-degree rule', '1.1'],
  ['corrections', 'Weight and wind', '1.2'],
  ['track-miles', 'Track-miles picture', '1.3'],
  ['rod-check', 'Rate of descent check', '1.4'],
  ['correct', 'Correct your energy', 'II'],
  ['execution', 'Flying a correction', '2.1'],
  ['high-profile', 'When you are high', '2.2'],
  ['approach', 'Approach energy', '2.3'],
  ['awareness', 'Situation awareness', 'III'],
  ['terrain', 'Terrain and ATC', '3.1'],
  ['setup', 'FMC setup', '3.2'],
  ['special', 'Non-normal descents', '3.3'],
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
                This course is built in three parts, in the order you use them
                in the air: first <strong>evaluate</strong> your energy, then{' '}
                <strong>correct</strong> it, and throughout keep your{' '}
                <strong>situational awareness</strong>. Two numbers drive almost
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
              lead="Before you can fix anything, you need a fast, reliable picture of where you are against where you should be. These four tools give you that picture without touching the FMC."
            />

            <section className="course-section" id="three-degree">
              <span className="section-num">1.1</span>
              <h2>The 3-degree rule.</h2>
              <p>
                A clean jet glides at roughly 3 degrees at idle thrust, which is
                about 300 ft lost per nautical mile. That single fact gives you
                both the top of descent and the target altitude at any point.
              </p>
              <Need>
                <ul className="rot-list">
                  <li>
                    <b>Altitude (ft) = 3 × distance (NM)</b>, or 300 ft per NM.
                  </li>
                  <li>
                    <b>Top of descent (NM) = (FL ÷ 10) × 3</b>. Take the first
                    two digits of the level and multiply by 3.
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
                  <strong>Target altitude at 25 NM to go:</strong> 25 × 3 =
                  7,500 ft.
                </li>
                <li>
                  <strong>Where should I be at 40 NM?</strong> 40 × 3 = 12,000
                  ft, before any correction.
                </li>
              </ul>
              <p>
                This works out of the box for a reference weight of about{' '}
                <strong>58 tonnes</strong> at a normal descent speed schedule.
                Away from that weight and in any real wind, you add corrections.
              </p>
            </section>

            <section className="course-section" id="corrections">
              <span className="section-num">1.2</span>
              <h2>Weight and wind, the two that matter.</h2>
              <p>
                A heavier aircraft has a more efficient wing at descent speed, so
                counter-intuitively it needs to start down earlier and sit lower
                on profile. Wind simply moves the air mass you are gliding
                through.
              </p>
              <Need>
                <ul className="rot-list">
                  <li>
                    <b>Weight: 1 tonne = 1 NM.</b> Heavier than 58 t means start
                    earlier and be lower; lighter means the opposite.
                  </li>
                  <li>
                    <b>Wind: 10 kt component = 1 NM.</b> Tailwind adds track
                    miles to the descent, headwind removes them.
                  </li>
                </ul>
              </Need>
              <p className="ex-lead">Worked examples</p>
              <ul className="study-points">
                <li>
                  <strong>FL330, 64 t, 20 kt tailwind:</strong> base 99 NM, plus
                  6 NM for weight (64 minus 58), minus 2 NM for wind, so top of
                  descent near 103 NM.
                </li>
                <li>
                  <strong>25 NM to go, 64 t:</strong> 25 × 3 = 7,500 ft, minus
                  6 NM (1,800 ft) for the extra weight, so about 5,700 ft on
                  profile.
                </li>
              </ul>
              <p>
                Four smaller corrections exist. Fold them in only when they are
                large, otherwise they just add mental load:
              </p>
              <ul className="study-points">
                <li>
                  <strong>Speed:</strong> 10 kt above the normal schedule = 1 NM
                  (same as wind). Faster means you should be lower.
                </li>
                <li>
                  <strong>Airport elevation:</strong> add the destination
                  elevation to your target altitude. A field at 2,000 ft raises
                  the whole profile by 2,000 ft.
                </li>
                <li>
                  <strong>QNH:</strong> 1 hPa = 30 ft. A very high QNH puts you
                  high on profile, a very low QNH puts you low; it matters most
                  down low.
                </li>
                <li>
                  <strong>ISA deviation:</strong> about 1% per 2.5 °C. Usually
                  ignored, worth a thought in extreme heat or cold.
                </li>
              </ul>
              <Tip>
                Add all your corrections once into a single number of feet, the
                unique descent correction, and carry it through the whole
                descent. Only the wind needs following up as it changes. Then it
                is just track miles times 3, plus that one constant.
              </Tip>
            </section>

            <section className="course-section" id="track-miles">
              <span className="section-num">1.3</span>
              <h2>See your own track miles, not the magenta line.</h2>
              <p>
                The FMC distance to go follows the programmed route. The descent
                you will actually fly is often shorter, because a shortcut or a
                visual approach is coming. Build the real distance in your head
                by counting backwards from the runway, and read it off the ND
                range rings rather than the flight plan.
              </p>
              <p className="ex-lead">Worked example</p>
              <p>
                You are at FL320 and expect a direct track to a 10 NM final for
                an ILS. Count back: runway to 10 NM final is 10 NM, your position
                to that final fix is 100 NM, so 110 NM to run. FL320 needs about
                96 NM to descend (32 × 3). Your real top of descent is 110 minus
                96, so about 14 NM ahead, roughly two minutes of cruise. The FMC
                may still be showing a top of descent 70 NM away. Trust your own
                number.
              </p>
              <Warning>
                The 737 is very sensitive to tailwind, at any weight, especially
                on approach. Even a light tailwind makes deceleration difficult,
                so anticipate it every time.
              </Warning>
            </section>

            <section className="course-section" id="rod-check">
              <span className="section-num">1.4</span>
              <h2>Cross-check your rate of descent.</h2>
              <p>
                Altitude tells you if you are high or low; the rate of descent
                tells you whether you are catching up or falling behind. Your
                wing feels the air, not the ground, so in a free descent you set
                the rate from true airspeed. On a fixed approach path such as an
                ILS glideslope the angle is relative to the ground, so you use
                ground speed.
              </p>
              <Need>
                <ul className="rot-list">
                  <li>
                    <b>In the descent: ROD = TAS ÷ 2.</b> TAS 360 kt gives about
                    1,800 ft per minute.
                  </li>
                  <li>
                    <b>On a 3-degree approach: ROD = GS ÷ 2, rounded up.</b> GS
                    150 kt gives about 750, so aim 800 ft per minute to stay on
                    the glideslope.
                  </li>
                  <li>
                    For a steeper or shallower path, scale it: a 4-degree path is
                    the 3-degree rate plus one third.
                  </li>
                </ul>
              </Need>
            </section>

            {/* ================= PART II ================= */}
            <Part
              n="II"
              id="correct"
              title="Correct your energy"
              lead="Once the picture says you are off profile, you act, big enough to fix it in one go. This is where the descent is won or lost, and where the high-energy recovery drill lives."
            />

            <section className="course-section" id="execution">
              <span className="section-num">2.1</span>
              <h2>Flying a correction.</h2>
              <p>
                To start or steepen a descent you can select LVL CHG, which drops
                the thrust to idle and lets the aircraft find the path at the
                selected speed, or select V/S and set the rate from TAS ÷ 2. V/S
                gives a steady pitch and a smoother ride, but you must reduce the
                rate as you descend because TAS keeps falling. When ATC asks for
                a fixed rate, V/S is the clean way to give it.
              </p>
              <Warning>
                Change the speed window from Mach to IAS in time, around FL300. If
                you hold a Mach number as you descend, the indicated speed climbs
                toward VMO. Any rate above about 3,000 ft per minute is a signal
                to pay attention: the speed is usually running toward VMO.
              </Warning>
            </section>

            <section className="course-section" id="high-profile">
              <span className="section-num">2.2</span>
              <h2>When you find yourself high.</h2>
              <p>
                This is the most important habit on the whole descent. The tool
                you reach for depends on one number, <strong>FL150</strong>, and
                if the first tool is not enough you escalate the configuration in
                a fixed order. Learn this cold.
              </p>

              <div className="hi-recover">
                <p className="hi-recover-title">Step 1 · Pick the tool by altitude</p>
                <div className="hi-split">
                  <div className="hi-branch above">
                    <span className="hi-fl">ABOVE FL150</span>
                    <strong>Add speed</strong>
                    <p>
                      Speed the aircraft up: raise the descent speed through the
                      FMC descent page, or on the MCP speed window. You still
                      have the altitude to convert that extra drag into a lower
                      profile.
                    </p>
                  </div>
                  <div className="hi-branch below">
                    <span className="hi-fl">BELOW FL150</span>
                    <strong>Speed brakes</strong>
                    <p>
                      Too low to make speed pay, and the 250 kt limit is near.
                      Extend the speed brakes instead; they bite harder the
                      faster you are.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hi-recover">
                <p className="hi-recover-title">
                  Step 2 · If the speed brakes are not enough, escalate
                </p>
                <ol className="hi-ladder">
                  <li>
                    <span className="hi-num">1</span>
                    <div>
                      <strong>Speed brakes alone</strong>
                      <div className="cfg-row">
                        <span className="cfg-chip">SPEED BRAKE</span>
                      </div>
                      <p>Your first move once below FL150.</p>
                    </div>
                  </li>
                  <li>
                    <span className="hi-num">2</span>
                    <div>
                      <strong>Add flap 5</strong>
                      <div className="cfg-row">
                        <span className="cfg-chip">SPEED BRAKE</span>
                        <span className="cfg-plus">+</span>
                        <span className="cfg-chip">FLAP 5</span>
                        <span className="cfg-plus">+</span>
                        <span className="cfg-chip">220 kt</span>
                      </div>
                      <p>
                        The strongest rate of the three, around 2,300 ft per
                        minute.
                      </p>
                    </div>
                  </li>
                  <li className="last-resort">
                    <span className="hi-num">3</span>
                    <div>
                      <strong>Last resort: flap 10</strong>
                      <div className="cfg-row">
                        <span className="cfg-chip">SPEED BRAKE</span>
                        <span className="cfg-plus">+</span>
                        <span className="cfg-chip">FLAP 10</span>
                        <span className="cfg-plus">+</span>
                        <span className="cfg-chip">180 kt</span>
                      </div>
                      <p>
                        Maximum drag at a low speed. Use it only when the two
                        steps above have not recovered the profile.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

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
                    <b>Flaps to slow down, speed brakes to go down.</b> Flaps let
                    the aircraft fly slower; speed brakes add drag and rate.
                  </li>
                  <li>
                    <b>The 3-2-1 gate:</b> aim to be near 3,000 ft, 200 kt, flap
                    1 at about 10 NM, then flap 5 on the glideslope to intercept.
                  </li>
                </ul>
              </Need>
              <p className="ex-lead">Reference speeds and gates</p>
              <ul className="study-points">
                <li>
                  <strong>Maximum sensible speeds:</strong> about 220 kt at the
                  initial fix, 180 kt at base or on final, 160 kt by 4 NM.
                </li>
                <li>
                  <strong>Rough distance gates:</strong> about 190 kt at 9 NM,
                  180 kt at 8 NM, 170 kt at 7 NM.
                </li>
                <li>
                  <strong>Heavy aircraft:</strong> start configuring earlier. At
                  63 t, roughly 5 NM sooner, so flap selection near 15 to 16 NM
                  instead of 10.
                </li>
              </ul>
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
              lead="Staying ahead of the aircraft is a discipline, not luck. Brief the terrain, set the FMC up before top of descent, and keep a picture ready for the non-normal cases."
            />

            <section className="course-section" id="terrain">
              <span className="section-num">3.1</span>
              <h2>Terrain and ATC clearances.</h2>
              <p>
                Automation makes it easy to accept a descent clearance without
                thinking. Terrain does not move. Every clearance is a threat to
                cross-check.
              </p>
              <Need>
                <p>
                  Never descend to any altitude without reference to a charted
                  altitude. Go low, look below.
                </p>
              </Need>
              <ul className="study-points">
                <li>
                  <strong>Brief the terrain:</strong> the en-route MORA to the
                  airport, the STAR minimum altitudes, the approach platform and
                  final fix altitudes, and the go-around altitude.
                </li>
                <li>
                  <strong>Between top of descent and the 25 NM ring</strong>{' '}
                  around the field you are effectively blind if you leave the
                  STAR for a shortcut or weather, so know the surrounding minimum
                  altitudes.
                </li>
                <li>
                  <strong>Set nothing on the MCP altitude window</strong> without
                  checking it against the applicable chart, day or night.
                </li>
              </ul>
            </section>

            <section className="course-section" id="setup">
              <span className="section-num">3.2</span>
              <h2>Setting the descent up in the FMC.</h2>
              <p>
                Good preparation before top of descent removes most of the
                surprises. Work the boxes, then build the mental picture.
              </p>
              <ul className="study-points">
                <li>
                  <strong>Route and constraints:</strong> select the expected
                  runway, approach and STAR, clear any route discontinuities, and
                  challenge hard altitude constraints against the chart.
                </li>
                <li>
                  <strong>Fix-page rings for awareness:</strong> a top-of-descent
                  ring at FL × 3, a 10 NM ring as the latest flap point, and a 4
                  or 5 NM ring for the gear and flap 15 point.
                </li>
                <li>
                  <strong>Descent forecast:</strong> enter the descent winds, QNH
                  and ISA deviation, then read the winds and picture them in 3D
                  at FL300, FL200 and FL100.
                </li>
                <li>
                  <strong>Landing weight:</strong> compare it to 58 t so your
                  corrections are ready before you start down.
                </li>
              </ul>
              <Tip>
                Recalculate your own profile every 10 NM or so, using a round
                number: at 87 NM to go, work out the target for 80 NM, and check
                your height as you pass it. The lower you get, the more often you
                check, because there is less time left to fix it.
              </Tip>
            </section>

            <section className="course-section" id="special">
              <span className="section-num">3.3</span>
              <h2>Non-normal descents.</h2>
              <p>Two cases are worth carrying as ready-made pictures.</p>
              <ul className="study-points">
                <li>
                  <strong>Both engines out:</strong> target a 4-degree glide.
                  Altitude above ground = distance × 4. At 25 NM you want at least
                  10,000 ft. Fly the minimum-drag speed, avoid the gear until the
                  landing is assured, and recalculate constantly.
                </li>
                <li>
                  <strong>Emergency or immediate landing, no structural doubt:</strong>{' '}
                  the gear can come down at cruise altitude, since cruise speed is
                  below the gear limit. Gear plus speed brakes gives very high
                  rates and gets you down quickly.
                </li>
              </ul>
              <Warning>
                If structural integrity is in doubt, do the opposite: limit speed
                as much as possible and avoid high manoeuvring loads. Descend
                slowly with speed brakes rather than racing toward VMO. Always
                follow the QRH non-normal checklist.
              </Warning>
            </section>

            <section className="course-section" id="cheatsheet">
              <span className="section-num">SUMMARY</span>
              <h2>Rules of thumb, one card.</h2>
              <Need>
                <ul className="rot-list">
                  <li><b>Altitude (ft) = 3 × distance (NM)</b>, 300 ft per NM.</li>
                  <li><b>Top of descent (NM) = (FL ÷ 10) × 3.</b></li>
                  <li><b>Reference weight 58 t.</b> Weight: 1 t = 1 NM.</li>
                  <li><b>Wind and speed: 10 kt = 1 NM.</b></li>
                  <li><b>Elevation:</b> add it to the profile. <b>QNH:</b> 1 hPa = 30 ft.</li>
                  <li><b>Descent ROD = TAS ÷ 2. Approach ROD = GS ÷ 2, rounded up.</b></li>
                  <li><b>High above FL150:</b> add speed. <b>Below FL150:</b> speed brakes, then F5/220, then F10/180.</li>
                  <li><b>Both engines out:</b> altitude AGL = distance × 4.</li>
                </ul>
              </Need>
            </section>
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
