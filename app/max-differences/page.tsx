import Link from '@/components/site-link';
import Contents from '../systems/fuel/contents';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

export const metadata = {
  title: 'MAX Differences | 737Encyclopedia',
  description:
    'A concise, chapter-by-chapter summary of what changes between the 737-800 NG and the 737-8200 MAX.',
};

function Need({ children }: { children: React.ReactNode }) {
  return (
    <aside className="need-to-know teal">
      <span className="need-label">REMEMBER THIS</span>
      <div>{children}</div>
    </aside>
  );
}
function Ops({ children }: { children: React.ReactNode }) {
  return (
    <aside className="configuration-data">
      <strong>OPERATIONAL NOTE</strong>
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

// Each chapter of this page mirrors a system chapter. Add a new entry here and
// a matching <section> below to publish another chapter.
const chapters = [
  ['overview', 'Overview', ''],
  ['airplane-general', 'Airplane General', '01'],
  ['air-systems', 'Air Systems', '02'],
  ['anti-ice', 'Anti-Ice', '03'],
  ['automatic-flight', 'Automatic Flight', '04'],
  ['communications', 'Communications', '05'],
  ['electrical', 'Electrical', '06'],
  ['engines-apu', 'Engines / APU', '07'],
  ['fire-protection', 'Fire Protection', '08'],
  ['flight-controls', 'Flight Controls', '09'],
  ['flight-instruments', 'Flight Instruments', '10'],
  ['flight-management', 'Flight Management', '11'],
  ['fuel', 'Fuel', '12'],
  ['hydraulics', 'Hydraulics', '13'],
  ['landing-gear', 'Landing Gear', '14'],
  ['warning-systems', 'Warning Systems', '15'],
];

function Tag({ kind }: { kind: 'new' | 'redesign' }) {
  return (
    <span className={'diff-tag ' + kind}>
      {kind === 'new' ? 'New Feature' : 'Redesign'}
    </span>
  );
}

export default function MAX() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>MAX DIFFERENCES · 737-800 → 737-8200</strong>
        <div className="course-meta">
          <span className="pill available">NG → MAX</span>
          <span className="pill">TRAINING SUMMARY</span>
        </div>
      </div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">OVERVIEW</span>
            <h2>
              The 737-8200 flies like a 737-800. Most differences are physical
              or in how the displays look.
            </h2>
            <p>
              Throughout this page the <strong>737-8200</strong> is the MAX and
              the <strong>737-800</strong> is the NG. Chapters follow the system
              chapters and are added over time.
            </p>
            <ul className="study-points">
              <li>
                <strong>No changes</strong> to memory items or procedure flows —
                only minor step changes and a few non-normal checklists.
              </li>
              <li>
                <strong>Same handling</strong> in pitch, roll and yaw, and the
                same landing-minima category (CAT C).
              </li>
              <li>
                The <strong>LEAP-1B</strong> has thrust characteristics similar
                to the CFM56-7B.
              </li>
              <li>
                The <strong>MAX Display System</strong> shows the same
                information as the NG — mostly restyled, not re-engineered.
              </li>
            </ul>
          </section>

          <section className="course-section" id="airplane-general">
            <span className="section-num">CHAPTER 1 / AIRPLANE GENERAL</span>
            <h2>
              More seats and a bigger engine drive nearly every airframe
              difference.
            </h2>

            <h3><Tag kind="redesign" />Weights</h3>
            <p>
              The MAX seats <strong>197</strong> against <strong>189</strong> on
              the NG, so every certified weight is higher. Use the figures on
              each aircraft&rsquo;s Weight Certificate.
            </p>
            <Table className="course-table">
              <TableCaption>Maximum certified weights (kg).</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Weight</TableHead>
                  <TableHead>737-800</TableHead>
                  <TableHead>737-8200</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ['MTOW', '74,990', '76,200'],
                  ['MLW', '65,317', '68,175'],
                  ['MZFW', '61,688', '64,818'],
                ].map((r) => (
                  <TableRow key={r[0]}>
                    {r.map((v) => (
                      <TableCell key={v}>{v}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <h3><Tag kind="redesign" />Dimensions</h3>
            <p>
              Practically the same length (~39.5 m) and wingspan (35.79 →
              35.92 m). The number that matters is winglet ground clearance.
            </p>
            <div className="dimension-compare">
              <article>
                <span>737-800 · BLENDED WINGLET</span>
                <strong>3.9 m</strong>
                <p>Ground clearance</p>
              </article>
              <article>
                <span>737-8200 · ADVANCED WINGLET</span>
                <strong>3.1 m</strong>
                <p>Ground clearance</p>
              </article>
            </div>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>Advanced technology winglets:</strong> taller blades
                with only 3.1 m clearance (vs 3.9 m) — damage-prone on stand and
                closer to the ground in the flare. Worth ~1–1.8% fuel.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>LEAP-1B engine:</strong> 69-inch fan (vs 61-inch), moved
                up and forward; 27,000 lb thrust (+1,000), bypass ratio ~9, about
                15% less fuel and CO₂.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Taller nose gear:</strong> strut 8 inches longer to keep
                the bigger engine clear of the ground — hence the higher nose.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Nose-wheel intercom:</strong> an extra interphone jack
                and pilot call button in the nose wheel well, because the taller
                nose makes the ground power hatch harder to reach.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Extra mid exits:</strong> one Type II mid-exit door on
                each side for 197 passengers, adding LEFT / RIGHT MID EXIT door
                lights; cabin zones shift slightly.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>APU inlet door:</strong> three positions — ground/open
                (~45°), in-flight (~17°) and closed. All APU cooling air now
                comes through this door.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Redesigned tailcone:</strong> no tail vortex generators,
                ~1% less drag, and an extra strobe and position light on each
                side.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Flight deck:</strong> mostly presentation (MDS vs CDS);
                four circuit breakers move from the aisle stand to the P6 panel.
              </li>
            </ul>

            <Ops>
              The LEAP-1B has noticeable residual thrust at idle — the aircraft
              accelerates to taxi speed on idle alone, more so with anti-ice on
              (+4% N1). It also needs a 3-minute warm-up/cool-down and oil at
              least 31°C before takeoff.
            </Ops>
            <Warning>
              At just 3.1 m, the winglet tips are a hotspot for unreported ground
              damage and increase the risk of wingtip or nacelle contact in a
              mishandled landing. Report any winglet damage and apply the MEL for
              drag penalties.
            </Warning>
            <Need>
              <p>
                Same aircraft to fly. On the ground, expect a higher nose, low
                winglets, livelier idle taxi and two extra cabin exits.
              </p>
            </Need>
            <p className="muted">
              Engine start and handling are detailed in{' '}
              <Link href="/systems/engines-apu">Engines / APU</Link>; display
              changes in{' '}
              <Link href="/systems/flight-instruments-displays">
                Flight Instruments, Displays
              </Link>
              .
            </p>          </section>

          <section className="course-section" id="air-systems">
            <span className="section-num">CHAPTER 2 / AIR SYSTEMS</span>
            <h2>
              A new electronic bleed air system — same operation, smarter
              indications.
            </h2>
            <p>
              The 737-8200 uses an all-new, electronically controlled and
              pneumatically actuated bleed air system. It takes bleed air from
              the <strong>4th and 10th</strong> compressor stages (vs the
              <strong> 5th and 9th</strong> on the NG), a single engine bleed can
              feed both packs in flight, and it detects and isolates faults on
              its own. What you do at the panel does not change.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>BLEED light (was BLEED TRIP OFF):</strong> still lights
                for over-temperature or over-pressure, but now also for
                under-pressure or a system fault — which may not be resettable. A
                new BLEED non-normal checklist replaces BLEED TRIP OFF.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Configuration check:</strong> both BLEED lights come on
                45 seconds after flap retraction if both bleed switches are left
                OFF after take-off or go-around. Turning either switch ON clears
                a configuration light.
              </li>
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>PACK light:</strong> adds two cases — a Flow Control
                Valve stuck closed, and the same post-take-off configuration
                logic (both lights if both pack switches are OFF; either ON
                clears it).
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Cross bleed start:</strong> extra thrust is normally{' '}
                <strong>not</strong> needed to reach the 30 PSI duct pressure to
                start the second engine — the NG needs additional thrust.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>RAM DOOR FULL OPEN lights:</strong> removed — they were
                not used in normal or non-normal procedures.
              </li>
              <li>
                <Tag kind="new" />
                <strong>EQUIP SMOKE light:</strong> illuminates when smoke
                is detected in the equipment cooling system and clears 30 seconds
                after it is gone; the supply OFF lights move to the top of the
                panel, with a new non-normal checklist.
              </li>
            </ul>

            <Ops>
              On a No Engine Bleed take-off, the BLEED lights can illuminate if
              the after-take-off no-bleed checklist is not completed — sequence
              it deliberately to avoid the nuisance indication.
            </Ops>
            <Need>
              <p>
                Same panel, same actions. The system now watches itself: extra
                reasons for BLEED and PACK lights, a configuration check after
                take-off, and a new EQUIP SMOKE alert.
              </p>
            </Need>          </section>

          <section className="course-section" id="anti-ice">
            <span className="section-num">CHAPTER 3 / ANTI-ICE</span>
            <h2>
              New automatic engine-core protection, and anti-ice valve lights
              that switch from blue to amber.
            </h2>
            <p>
              The anti-ice system now draws bleed air from the{' '}
              <strong>4th and 10th</strong> compressor stages (vs the 5th and
              9th on the NG), and both the engine and wing anti-ice indications
              change. The way you operate the switches is unchanged.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="new" />
                <strong>Engine core anti-ice:</strong> the LEAP-1B adds core
                heating. The EEC directs bleed air to the engine core
                automatically as needed — no crew action and no indication in
                normal operation.
              </li>
              <li>
                <Tag kind="new" />
                <strong>ENG ANTI-ICE light:</strong> a new amber annunciator
                (none on the NG). It lights if cowl anti-ice is inhibited by a
                failure, or if an engine core anti-ice valve fails closed, with
                its own non-normal checklist.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Valve lights — blue to amber:</strong> all anti-ice
                valve lights are now amber, renamed (COWL VALVE OPEN → COWL
                VALVE; L/R VALVE OPEN → L/R VALVE). They flash amber in transit
                and are extinguished once the valve reaches the commanded
                position — open <em>or</em> closed.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Disagreement alerting:</strong> if a valve disagrees
                with its switch, the light stays on and MASTER CAUTION
                illuminates after about 6 seconds — the NG only shows a steady
                bright-blue light.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Wing valve lights on the ground:</strong> when the wing
                valves close for high thrust or a duct over-temperature, the
                lights are now inhibited on the ground instead of showing blue.
              </li>
            </ul>

            <Ops>
              Because a MAX valve light looks the same when the system is OFF and
              when it is ON (extinguished once in position), the light alone will
              not tell you anti-ice is running. Use the green TAI indication on
              the engine display to confirm engine anti-ice status, and stay
              alert to anti-ice left ON when it is not needed.
            </Ops>
            <Need>
              <p>
                Amber, not blue — and normally dark once in position. The engine
                now protects its core by itself; confirm engine anti-ice with
                the green TAI, not the valve light.
              </p>
            </Need>
            <p className="muted">
              Full valve indications and idle logic are in the{' '}
              <Link href="/systems/anti-ice-rain">Anti-Ice, Rain</Link> system
              course.
            </p>          </section>

          <section className="course-section" id="automatic-flight">
            <span className="section-num">CHAPTER 4 / AUTOMATIC FLIGHT</span>
            <h2>
              New stall-protection and trim-monitoring logic in the autoflight
              system.
            </h2>
            <p>
              The flight control computer logic is updated (from FCC logic 11 to
              12.1.2), adding several AFDS enhancements built around stick-shaker
              activation and stabiliser trim. &ldquo;Amber bar&rdquo; below means
              the minimum-manoeuvre-speed bar on the speed tape.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="new" />
                <strong>Autopilot drops at the shaker:</strong> in pitch modes
                without minimum-speed reversion, the autopilot automatically
                disengages about 1 second after stick-shaker activation and
                cannot be re-engaged until speed is back above the amber bar.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Flight directors blank, then return:</strong> the FD
                bars are removed from the PFD at the same time and come back once
                speed is above the amber bar. The pitch mode may return
                different from the one selected (roll mode unchanged).
              </li>
              <li>
                <Tag kind="new" />
                <strong>Nose-up trim inhibit:</strong> the FCC inhibits autopilot
                nose-up stabiliser trim when the trailing-edge flaps are extended
                and speed is 3 knots or more into the amber bar.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Cross FCC Trim Monitor:</strong> the two FCCs
                continuously cross-check each other&rsquo;s trim commands (except
                on a dual-channel approach). A faulty FCC is locked out and the
                other supplies trim for the rest of the flight; SPEED TRIM FAIL
                may illuminate.
              </li>
            </ul>

            <Ops>
              After a stick-shaker event, once recovered re-set the target
              airspeed in the MCP speed window and expect the active pitch mode
              to have changed. If the Cross FCC Trim Monitor has tripped, on the
              ground below 30 kt the STAB OUT OF TRIM light comes on — action the
              STABILISER OUT OF TRIM checklist, do not take off, and record the
              defect.
            </Ops>
            <Need>
              <p>
                The autoflight system now backs out of a stall by itself and
                watches its own trim. Expect the autopilot to drop and the flight
                directors to blank at the shaker, both returning above the amber
                bar.
              </p>
            </Need>
          </section>

          <section className="course-section" id="communications">
            <span className="section-num">CHAPTER 5 / COMMUNICATIONS</span>
            <h2>No differences.</h2>
            <p>
              Boeing lists no specific communications differences between the
              737-800 and the 737-8200.
            </p>
          </section>

          <section className="course-section" id="electrical">
            <span className="section-num">CHAPTER 6 / ELECTRICAL</span>
            <h2>
              No system changes, but the generators were reshaped for the new
              engine.
            </h2>
            <p>
              The electrical system itself is unchanged. The only difference is
              hardware: the integrated drive generators (IDGs) were redesigned to
              fit around the LEAP-1B.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>Redesigned IDGs:</strong> adapted to the shape of the
                LEAP-1B engine, with no change to how the system is operated.
              </li>
            </ul>

            <Ops>
              On a single IDG (one AC source), the QRH directs switching
              CAB/UTIL, IFE and PASS SEAT off to meet the IDG&rsquo;s cooling
              needs. Cabin lighting goes out, but passenger reading lights keep
              working. This requirement may be removed on later aircraft.
            </Ops>
            <Need>
              <p>
                Same electrics to operate. Just remember the single-IDG cooling
                step in the QRH turns the cabin lights off while reading lights
                stay on.
              </p>
            </Need>
          </section>

          <section className="course-section" id="engines-apu">
            <span className="section-num">CHAPTER 7 / ENGINES, APU</span>
            <h2>
              A completely new engine with self-protecting controls, a longer
              start and several extra indications.
            </h2>
            <p>
              The 737-8200 is powered by two CFM LEAP-1B engines. The APU is the
              same unit as the NG, with a few indication changes. Most of the
              differences here are about the engine start and the new alerts you
              will see.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>New engine &amp; ratings:</strong> LEAP-1B rated at 27K
                thrust, with TO-1 / TO-2 derates (10% / 20%) and temperature
                assumption available on all fixed thrust settings.
              </li>
              <li>
                <Tag kind="new" />
                <strong>EOS &amp; TCMA auto-shutdowns:</strong> the EEC shuts an
                engine down for a rotor overspeed (Electronic Overspeed), or on
                the ground if the engine will not follow an IDLE command (Thrust
                Control Malfunction Accommodation). Both show as ENG FAIL.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Bowed Rotor Motoring:</strong> the start motors the
                engine at 18–24% N2 for 6–90 seconds to straighten a
                heat-bowed rotor, shown as MOTORING on the N2 display. This makes
                the overall start noticeably longer.
              </li>
              <li>
                <Tag kind="new" />
                <strong>EOS / TCMA start self-test:</strong> moving the start
                lever to IDLE runs a test — fuel flow reads zero, the fuel
                shutoff valve cycles and ENG VALVE CLOSED stays bright blue (up
                to ~15 s) before the start continues.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Start limits &amp; EGT gauge:</strong> each normal start
                attempt is now limited to 3 minutes (was 2), the engine reaches
                stabilised idle more slowly, and EGT is a 4-digit gauge (vs
                3-digit).
              </li>
              <li>
                <Tag kind="new" />
                <strong>Icing idle:</strong> a fourth, highest idle set by the
                EEC in flight when engine anti-ice is ON with flaps and gear up;
                it ramps in between 30,400 ft and 22,000 ft.
              </li>
              <li>
                <Tag kind="new" />
                <strong>THRUST &amp; FUEL FLOW alerts:</strong> new engine-display
                alerts. THRUST compares commanded and actual thrust, with an
                amber N1 command sector, blinking for 10 s (blinking inhibited
                near takeoff, landing and go-around).
              </li>
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>Reverser alerts:</strong> REVERSER LIMITED replaces the
                NG REVERSER alert (reverse unavailable or limited to idle); new
                REVERSER COMMAND (reverser commanded in flight) and REVERSER
                AIR/GND (air-ground protection lost), each with its own checklist.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>APU indications:</strong> same APU, but no EGT gauge and
                no blue MAINT light. A DOOR light replaces MAINT for the new
                three-position inlet door, lighting if the door is not in the
                commanded position after ~165 s.
              </li>
            </ul>

            <Ops>
              Plan for a longer start — bowed-rotor motoring plus the EOS/TCMA
              self-test add time and extra indications, so let it run rather than
              suspecting a fault. In-flight relight fuel-on N2 values differ
              between a windmill and a cross-bleed start; check the QRH.
            </Ops>
            <Need>
              <p>
                A new engine that can shut itself down (EOS/TCMA) and a start
                that now includes bowed-rotor motoring and a self-test — longer,
                with more to watch. The APU is unchanged apart from its
                indications.
              </p>
            </Need>
          </section>

          <section className="course-section" id="fire-protection">
            <span className="section-num">CHAPTER 8 / FIRE PROTECTION</span>
            <h2>No differences.</h2>
            <p>
              Boeing lists no specific fire protection differences between the
              737-800 and the 737-8200.
            </p>
          </section>

          <section className="course-section" id="flight-controls">
            <span className="section-num">CHAPTER 9 / FLIGHT CONTROLS</span>
            <h2>
              A fly-by-wire spoiler system adds several automatic protections,
              and MCAS augments pitch feel at high angle of attack.
            </h2>
            <p>
              The 737-8200 is designed to fly like the 737-800. The big change is
              that the spoilers are now fly-by-wire, controlled by a Spoiler
              Control Electronics (SCE) unit, which enables the new functions
              below. All are designed to keep the MAX handling like the NG.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="new" />
                <strong>Fly-by-wire spoilers:</strong> the SCE electrically
                controls the flight spoilers (ground spoilers via a Ground
                Spoiler Control Module). A new SPOILERS light flags an
                inoperative spoiler pair.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Maneuver Load Alleviation (MLA):</strong> at high load
                factor and gross weight it automatically bleeds off speedbrake to
                cut structural loads — transparent to you, and the lever does not
                move.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Landing Attitude Modifier (LAM):</strong> auto-deploys
                flight spoilers on approach to keep an NG-like pitch attitude and
                glidepath capture; the lever does not move and mild buffet is
                possible.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Emergency Descent Speedbrake (EDS):</strong> above
                30,000 ft with a cabin-altitude warning active, selecting the
                flight detent raises the speedbrakes higher than normal for a
                faster emergency descent.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Elevator Jam Landing Assist (EJLA):</strong> a new
                overhead switch that uses the flight spoilers, driven by
                control-column inputs, to control descent rate if the pitch
                controls jam (flaps 1+, autopilot off, per the checklist).
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Stab trim cutout switches:</strong> now labelled PRI and
                B/U, and each one cuts out both main-electric and autopilot trim.
                Checklist actions are unchanged — both go to CUTOUT.
              </li>
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>Speedbrake lights &amp; logic:</strong> the DO NOT ARM /
                ARMED / EXTENDED lights move above the inboard displays and are
                SCE-driven; SPEEDBRAKES EXTENDED gains thrust-lever triggers, and
                the SCE blocks spoiler extension past the in-flight position.
              </li>
              <li>
                <Tag kind="new" />
                <strong>MCAS in the Speed Trim System:</strong> adds nose-down
                stabiliser trim at high AOA (flaps up, autopilot off, Mach below
                0.84, from 10 s after takeoff), with FCC 12.1.2 safeguards — AOA
                comparison (vanes disagreeing 5.5° or more with flaps up trips
                SPEED TRIM FAIL and the whole system), a Maximum Command Limit
                and single-activation logic. If either Speed Trim function fails,
                both are lost for the flight.
              </li>
            </ul>

            <Ops>
              With the autopilot engaged for most line operations, MCAS should
              not normally activate. If an out-of-trim condition develops, trim
              back without delay; if uncommanded stabiliser movement continues,
              action Runaway Stabilizer. Aft control-column movement does not
              stop MCAS nose-down trim, but forward movement interrupts MCAS
              nose-up trim.
            </Ops>
            <Need>
              <p>
                Fly-by-wire spoilers bring automatic helpers (MLA, LAM, EDS,
                EJLA) that mostly work without moving the lever, and MCAS adds
                nose-down trim at high AOA — all to keep the MAX flying like the
                NG.
              </p>
            </Need>
          </section>

          <section className="course-section" id="flight-instruments">
            <span className="section-num">CHAPTER 10 / FLIGHT INSTRUMENTS, DISPLAYS</span>
            <h2>
              Four large displays with a new layout — the same information,
              presented differently, plus new roll-awareness alerts.
            </h2>
            <p>
              The 737-8200 uses four large-format display units (two inboard,
              two outboard) in place of the NG&rsquo;s six. Most of this chapter
              is about how the information is arranged; a few genuinely new
              alerts are the exception.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>Four large displays:</strong> two inboard and two
                outboard replace the NG&rsquo;s six DUs, and the compact engine
                display is gone. On a failure the engine display moves to the
                opposite inboard DU, and a failed inboard turns the PFD compass
                into a fixed 20 nm Mini Map.
              </li>
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>AUX area &amp; automatic clock:</strong> the outboard DU
                adds an AUX area. With no physical clock, UTC time and date show
                there and are set automatically by GPS, and the elapsed timer
                runs automatically (from weight-off-wheels to weight-on-wheels
                plus 30 s).
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Display select simplified:</strong> the select switches
                move below the displays onto the brightness panel and become a
                single three-position PFD/MFD switch.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>EFIS range &amp; VSD:</strong> range is now 0.5–640 nm
                shown on the ND (not the EFIS panel) with +/− symbols, and a
                dedicated VSD button replaces the old selection method.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Engine display control panel:</strong> ENG / SYS / INFO
                / ENG TFR keys manage the engine, system (hydraulic quantity and
                pressure) and N1 / V-speed pages — the INFO page replaces the
                NG&rsquo;s N1 and speed-reference knobs.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Roll-saturation &amp; bank-angle alerts:</strong> new PFD
                alerts — ROLL/YAW ASYMMETRY and ROLL AUTHORITY for single-channel
                autopilot saturation, plus an enhanced bank-angle warning with a
                red ROLL COMMAND arrow and aural &ldquo;ROLL LEFT / RIGHT&rdquo;
                beyond 45°.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Updated weather radar:</strong> an updated RDR-4000 with
                better interference rejection, convective-weather discrimination,
                turbulence detection extended to 60 nm, REACT attenuation arcs
                and hail / lightning hazard icons.
              </li>
            </ul>

            <Need>
              <p>
                Fewer, bigger screens with the same data rearranged. The clock
                and timer are automatic now, and the PFD gains real roll-upset
                and autopilot-saturation alerts.
              </p>
            </Need>
          </section>

          <section className="course-section" id="flight-management">
            <span className="section-num">CHAPTER 11 / FLIGHT MANAGEMENT</span>
            <h2>New ways to source fuel figures, and updated thrust ratings.</h2>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="new" />
                <strong>FUEL PROGRESS page:</strong> a new progress page 5/5 lets
                you use TOTALIZER (default) or FMC CALCULATED fuel for the
                FMC&rsquo;s calculations and shows APU FUEL USED.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Fuel source on PERF INIT:</strong> PERF INIT shows the
                fuel source — SENS (totalizer), CALC or MAN — replacing the
                NG&rsquo;s PLAN FUEL entry.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>N1 Limit page:</strong> full thrust is 27K with TO-1
                (10%) and TO-2 (20%) derates and temperature assumption on all
                fixed settings, versus the NG&rsquo;s 26K / 24K / 22K.
              </li>
            </ul>
          </section>

          <section className="course-section" id="fuel">
            <span className="section-num">CHAPTER 12 / FUEL</span>
            <h2>A higher LOW threshold and several new fuel alerts.</h2>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>LOW fuel threshold:</strong> appears at 590 kg and clears
                at 737 kg, versus 453 / 567 kg on the NG.
              </li>
              <li>
                <Tag kind="new" />
                <strong>FUEL DISAGREE:</strong> new alert when the totalizer and
                FMC-calculated fuel quantities disagree (engine display and CDU),
                with its own checklist.
              </li>
              <li>
                <Tag kind="new" />
                <strong>FUEL FLOW:</strong> new leak-detection alert when actual
                and FMC-expected fuel flow differ beyond a threshold for 5
                continuous minutes.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>FILTER BYPASS logic:</strong> the two lights are now
                linked — if both illuminate they stay on until engine shutdown on
                the ground — and the light covers impending or actual bypass.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Prediction messages on the display:</strong> USING RSV
                FUEL and INSUFFICIENT FUEL now also appear on the engine display,
                each with a new checklist.
              </li>
            </ul>

            <Ops>
              Keep the actual aircraft speed entered in the FMC so the FUEL FLOW
              alert does not give nuisance warnings.
            </Ops>
            <p className="muted">
              The full fuel system is covered in the{' '}
              <Link href="/systems/fuel">Fuel</Link> system course.
            </p>
          </section>

          <section className="course-section" id="hydraulics">
            <span className="section-num">CHAPTER 13 / HYDRAULICS</span>
            <h2>No differences.</h2>
            <p>
              Boeing lists no specific hydraulics differences between the 737-800
              and the 737-8200.
            </p>
          </section>

          <section className="course-section" id="landing-gear">
            <span className="section-num">CHAPTER 14 / LANDING GEAR</span>
            <h2>
              A two-position gear lever, relocated controls and carbon brakes.
            </h2>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>Two-position gear lever:</strong> UP / DOWN only — the
                OFF position is gone. The lever electrically controls the
                hydraulics, and pressure is removed automatically 10 s after the
                gear is up and locked. Do not move the lever after selecting UP,
                or the gear may extend.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Relocated controls:</strong> the gear lever sits
                centrally between the inboard displays, with LOCK OVRD beside it
                and NOSE WHEEL STEER moved next to it; the AUTO BRAKE switch and
                brake-pressure indicator move to the forward aisle stand — adjust
                your scan for the DISARM / ANTI SKID INOP lights.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Carbon brakes:</strong> Messier-Bugatti carbon brakes
                save ~300 kg with better energy absorption and faster cool-down.
                Wear depends on the number of applications, so use firm, steady
                applications and avoid riding the brakes (autobrake 2 or 3
                optimises wear and stopping).
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Flaps 40 speed:</strong> placard raised to 166 kt (was
                162 kt).
              </li>
            </ul>
          </section>

          <section className="course-section" id="warning-systems">
            <span className="section-num">CHAPTER 15 / WARNING SYSTEMS</span>
            <h2>
              A broader MAINT light, and Boeing&rsquo;s runway-safety suite in
              place of the NG&rsquo;s.
            </h2>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>MAINT replaces PSEU:</strong> the MAINT light covers all
                former PSEU faults plus additional detectable ones. It works on
                the ground until first engine start and is inhibited until 30 s
                after landing. If it lights, do not take off and run the
                checklist.
              </li>
              <li>
                <Tag kind="new" />
                <strong>RSAT suite:</strong> Boeing&rsquo;s Runway Situation
                Awareness Tools replace the NG&rsquo;s Honeywell RAAS — Boeing
                RAAS plus overrun and speedbrake warnings (some Honeywell
                callouts are dropped, covered by other warnings).
              </li>
              <li>
                <Tag kind="new" />
                <strong>SPEEDBRAKE warning:</strong> a time-critical visual and
                aural alert if the speedbrakes are not up on landing or a
                rejected takeoff above 80 kt.
              </li>
              <li>
                <Tag kind="new" />
                <strong>In-air overrun warning:</strong> a GO AROUND alert with
                &ldquo;OVERRUN, GO AROUND&rdquo;, armed from 500 ft to touchdown
                when the predicted landing distance exceeds the runway.
              </li>
              <li>
                <Tag kind="new" />
                <strong>On-ground overrun warning:</strong> a MAX REVERSE alert
                with &ldquo;MAX BRAKES, MAX REVERSE&rdquo; when maximum effort is
                needed to stop by the runway end.
              </li>
            </ul>

            <Ops>
              Enter the landing runway condition in the FMC during the approach
              brief (INIT APP page 2/2) so the overrun warnings have the data
              they need.
            </Ops>
            <Need>
              <p>
                One broader MAINT light, and a new runway-safety suite: speedbrake
                and overrun warnings that call for a go-around or maximum braking
                when the aircraft is running out of runway.
              </p>
            </Need>
          </section>

          <div className="system-page-footer">
            <Link className="system-glossary-link" href="/glossary">
              Open the 737 glossary
            </Link>
          </div>
        </article>
        <aside className="course-aside">
          <div className="aside-box">
            <p className="eyebrow">CHAPTERS</p>
            <Contents sections={chapters} />
            <hr />
            <p className="muted">
              One page, chapter by chapter. Airplane General is first; further
              chapters (Air Systems, and the rest) are added over time.
            </p>
            <Link href="/systems/airplane-general-emergency-equipment-doors-windows">
              Full Airplane General course →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
