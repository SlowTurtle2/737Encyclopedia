import Link from '@/components/site-link';
import FuelDiagram from './diagram';
import PumpControlPanel from './pump-control-panel';
import TankLocation from './tank-location';
import Quiz from './quiz';
import Contents from './contents';
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
  title: 'Fuel | 737Encyclopedia',
  description:
    'Understand 737 NG fuel feed, pumps, crossfeed and indications, with verified 737-8200 MAX differences.',
};
function Need({
  title,
  children,
  tone = 'blue',
}: {
  title: string;
  children: React.ReactNode;
  tone?: 'blue' | 'amber' | 'teal';
}) {
  return (
    <aside className={'need-to-know ' + tone}>
      <span className="need-label">NEED TO KNOW</span>
      <h3>{title}</h3>
      <div>{children}</div>
    </aside>
  );
}
function Source({ children }: { children: React.ReactNode }) {
  return <p className="source">REFERENCE · {children}</p>;
}
function Deep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="deep">
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}
function Max({ children }: { children: React.ReactNode }) {
  return (
    <aside className="max-note">
      <b>737 MAX / 8200 DIFFERENCE</b>
      <p>{children}</p>
    </aside>
  );
}
const sections = [
  ['overview', 'The big picture'],
  ['feed', 'Pumps & fuel feed'],
  ['crossfeed', 'Crossfeed & valves'],
  ['indications', 'Indications & alerts'],
  ['temperature', 'Temperature & limits'],
  ['ground', 'Ground servicing & NGS'],
  ['recap', 'Key takeaways'],
  ['quiz', 'Check your knowledge'],
  ['sources', 'Sources & applicability'],
];
export default function Fuel() {
  return (
    <main id="main" className="system-course">
      <div className="wrap page-head">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/#systems">Systems</Link> /
          Fuel
        </div>
        <p className="eyebrow">SYSTEMS / FCOM CHAPTER 12</p>
        <h1>
          Fuel<span className="brand-dot">.</span>
        </h1>
        <p className="lead">
          Three tanks, six pumps, and a pressure-driven feed system. Understand
          how fuel reaches the engines, what the indications mean, and what
          changes on the MAX.
        </p>
        <div className="course-meta">
          <span className="pill available">737 NG</span>
          <span className="pill">MAX DIFFERENCES INCLUDED</span>
          <span>Detailed course · 3 free questions</span>
        </div>
      </div>
      <nav className="wrap course-nav" aria-label="Fuel chapter">
        <a href="#overview">Overview</a>
        <a href="#feed">Fuel feed</a>
        <a href="#indications">Alerts & limits</a>
        <a href="#quiz">Quiz ↗</a>
      </nav>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">01 / THE BIG PICTURE</span>
            <h2>
              The 737 stores its usable fuel inside three structural tanks that
              supply both engines and the APU.
            </h2>
            <TankLocation />
            <ul className="study-points">
              <li>
                <strong>Main tanks 1 & 2:</strong> integral to the left and
                right wings.
              </li>
              <li>
                <strong>Center tank:</strong> wing center section, extending
                into the wing roots.
              </li>
              <li>
                <strong>Consumers:</strong> both engines and the APU.
              </li>
            </ul>
            <Deep title="Go deeper · Quantity, sequence and flow direction">
              <p>
                The quantity indication shows the usable fuel in each tank. In
                normal operation, the center tank supplies fuel first, followed
                by each engine’s associated main tank. Check valves maintain the
                intended direction of flow and prevent unintended tank-to-tank
                transfer.
              </p>
            </Deep>
            <Table className="course-table">
              <TableCaption>
                Approximate usable capacities from the supplied NG and MAX
                manuals, at level attitude and 0.8029 kg/L. Actual loading
                figures depend on density and the applicable Weight and Balance
                Manual.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Tank</TableHead>
                  <TableHead>737-800 NG</TableHead>
                  <TableHead>737-8200 MAX</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  [
                    'Main 1 / Main 2 (each)',
                    '3,915 kg · 4,876 L',
                    '3,869 kg · 4,819 L',
                  ],
                  ['Center', '13,066 kg · 16,273 L', '12,990 kg · 16,179 L'],
                  ['Total', '20,896 kg · 26,025 L', '20,728 kg · 25,817 L'],
                ].map((r) => (
                  <TableRow key={r[0]}>
                    {r.map((v) => (
                      <TableCell key={v}>{v}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Need title="3 structural tanks" tone="teal">
              <p>
                <strong>20,896 kg</strong> is the approximate usable capacity
                for the supplied 737-800 NG configuration.
              </p>
            </Need>
            <Source>NG 12.20.1, 12.20.4 · MAX 12.20.1, 12.20.4</Source>
          </section>
          <section className="course-section" id="feed">
            <span className="section-num">02 / PUMPS & FUEL FEED</span>
            <h2>
              Fuel-source priority is created by pump pressure, allowing the
              center tank to feed first without FMC intervention.
            </h2>
            <h3>Fuel supply</h3>
            <ul className="study-points">
              <li>
                <strong>Two pumps per tank:</strong> six AC-powered pumps in
                total.
              </li>
              <li>
                <strong>Cooling & lubrication:</strong> provided by fuel passing
                through the pump.
              </li>
              <li>
                <strong>Center pumps:</strong> higher output pressure than main
                tank pumps.
              </li>
            </ul>
            <p>
              When all six pumps are operating, the center tank pumps produce
              more pressure than the main tank pumps. This higher pressure
              closes the check valves in the main tank feed lines, so center
              tank fuel reaches both engine manifolds first. As center pump
              pressure disappears, the check valves open and the main tanks
              take over automatically. The sequence is therefore created by
              hydraulic pressure, without the FMC selecting a tank.
            </p>
            <p>
              <strong>Suction feed is a fallback with limits.</strong> Each
              engine also has a direct path from its associated main tank that
              bypasses the pumps.
            </p>
            <ul className="study-points">
              <li>
                <strong>Supply path:</strong> each engine can draw from its own
                main tank through a line that bypasses the pumps.
              </li>
              <li>
                <strong>During climb:</strong> falling ambient pressure releases
                dissolved air from the fuel.
              </li>
              <li>
                <strong>Possible consequence:</strong> restricted suction flow,
                thrust loss or flameout at altitude.
              </li>
            </ul>
            <Deep title="Go deeper · Why altitude changes suction-feed capability">
              <p>
                After the aircraft reaches cruise, the dissolved air eventually
                depletes. The time depends on altitude, fuel temperature and
                fuel type. Once it has depleted, suction feed at cruise power
                may be possible. The key distinction is between an available
                flow path and a guaranteed supply under every flight condition.
              </p>
            </Deep>
            <FuelDiagram />

            <h3>Pump control</h3>
            <p>
              Six guarded switches on the overhead fuel panel control the two
              AC pumps in each tank. The main tank LOW PRESSURE lights illuminate
              when pump output pressure is low, including when their switches
              are OFF. Center tank LOW PRESSURE lights are inhibited when the
              associated switch is OFF.
            </p>
            <PumpControlPanel />
            <p>
              Each center tank pump automatically stops after its own pressure
              sensor detects low pressure for a short delay, although the switch
              remains ON. Selecting that switch OFF resets the automatic
              shutdown logic; selecting it ON again reactivates the pump until
              it is switched off or the logic stops it again. This delay is a
              separate function from the 10-second MASTER CAUTION logic.
            </p>
            <Deep title="Go deeper · LOW PRESSURE is not a fuel-quantity switch">
              <p>
                Pressure sensing and quantity indication measure different
                things. With little fuel remaining, aircraft attitude and small
                differences in pump inlet position can make one center pump lose
                pressure before the other. An indication can occur after center
                quantity reads zero.
              </p>
              <p>
                The FCOM describes possible flickering for up to five minutes
                before the associated Master Caution appears. This explains a
                possible indication sequence; it is not permission to ignore a
                pump warning or intentionally run a center pump dry.
              </p>
              <p>
                The supplied FCOM specifies a “short delay” for automatic
                shutdown. It does not substantiate the exact 15-second value in
                the study sheet.
              </p>
            </Deep>

            <h3>Scavenge pump</h3>
            <ul className="study-points">
              <li>
                <strong>Transfer:</strong> residual center fuel → main tank 1.
              </li>
              <li>
                <strong>Required switch:</strong> No. 1 FWD fuel pump ON.
              </li>
              <li>
                <strong>Starts:</strong> main tank 1 approximately half full.
              </li>
              <li>
                <strong>Continues:</strong> for the remainder of the flight once
                started.
              </li>
            </ul>
            <div className="mini-flow" aria-label="Scavenge flow">
              <span>Center tank residual fuel</span> →{' '}
              <span>Scavenge jet pump</span> → <span>Main tank 1</span>
            </div>
            <p>
              The scavenge jet pump uses the output of main tank 1 forward pump
              to draw residual fuel from the center tank into main tank 1. It
              begins when main tank 1 is approximately half full and then
              continues for the remainder of the flight.
            </p>

            <h3>APU fuel</h3>
            <ul className="study-points">
              <li>
                <strong>AC pumps operating:</strong> APU fed from the left fuel
                manifold.
              </li>
              <li>
                <strong>AC pumps not operating:</strong> APU suction feed from
                main tank 1.
              </li>
              <li>
                <strong>Remember:</strong> the pressure-fed source depends on
                the fuel supplying the left manifold.
              </li>
            </ul>
            <p>
              With an AC fuel pump operating, the APU receives pressurized fuel
              from the left manifold. Without AC pump pressure, it can draw fuel
              by suction from main tank 1. The tank feeding the left manifold
              therefore determines the pressure-fed source available to the APU.
            </p>
            <Need title="6 AC pumps · pressure sets priority" tone="teal">
              <p>
                Two pumps serve each tank. With every pump selected ON, the
                higher output pressure of the center pumps makes center fuel feed
                both engines first.
              </p>
              <p>
                Suction feed provides an alternate path, but it may not sustain
                engine demand at altitude.
              </p>
            </Need>
            <Source>NG / MAX 12.10.2, 12.20.2–3 · NG L.10.10</Source>
          </section>
          <section className="course-section" id="crossfeed">
            <span className="section-num">03 / CROSSFEED & VALVES</span>
            <h2>
              Crossfeed and shutoff valves connect or isolate the engine feed
              manifolds without transferring fuel directly between main tanks.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Connection:</strong> left and right engine fuel
                manifolds.
              </li>
              <li>
                <strong>Actuation:</strong> DC motor, powered by the battery
                bus.
              </li>
              <li>
                <strong>Valve open:</strong> one main tank’s operating pumps can
                supply both engines.
              </li>
              <li>
                <strong>Continued use:</strong> changes lateral fuel balance as
                the selected source is consumed.
              </li>
            </ul>
            <ul className="study-points">
              <li>
                <strong>No direct transfer:</strong> crossfeed does not pump
                fuel into the opposite tank.
              </li>
              <li>
                <strong>Balancing principle:</strong> change which tank is
                consumed.
              </li>
              <li>
                <strong>Assessment:</strong> follow the applicable procedure; an
                imbalance may involve a leak.
              </li>
            </ul>
            <Deep title="Go deeper · Read a blue valve light correctly">
              <p>
                The label matters. A dim CROSSFEED VALVE OPEN light confirms an
                open valve. A dim ENG VALVE CLOSED or SPAR VALVE CLOSED light
                confirms a closed valve. Bright blue indicates transit or
                disagreement between commanded and actual position.
              </p>
            </Deep>
            <div className="valve-key">
              <div>
                <span className="valve-lamp off">VALVE OPEN</span>
                <strong>Extinguished</strong>
                <br />
                Crossfeed closed
              </div>
              <div>
                <span className="valve-lamp">VALVE OPEN</span>
                <strong>Dim blue</strong>
                <br />
                Crossfeed open
              </div>
              <div>
                <span className="valve-lamp bright">VALVE OPEN</span>
                <strong>Bright blue</strong>
                <br />
                Transit or disagreement
              </div>
            </div>
            <h3>Two shutoff valves per engine</h3>
            <ul className="study-points">
              <li>
                <strong>Spar valve:</strong> at the engine-mounting wing
                station; DC motor; hot battery bus.
              </li>
              <li>
                <strong>Engine shutoff valve:</strong> fuel-actuated,
                solenoid-controlled; battery bus.
              </li>
              <li>
                <strong>Both close:</strong> associated start lever at CUTOFF or
                engine fire switch pulled.
              </li>
            </ul>
            <Need title="Crossfeed ≠ tank-to-tank transfer" tone="teal">
              <p>
                <strong>Crossfeed</strong> connects the engine manifolds, while
                <strong> scavenging</strong> transfers residual center tank fuel
                into main tank 1.
              </p>
            </Need>
            <Source>NG / MAX 12.10.1–2, 12.20.2–3</Source>
          </section>
          <section className="course-section" id="indications">
            <span className="section-num">04 / INDICATIONS & ALERTS</span>
            <h2>
              Quantity indications describe usable fuel, while LOW PRESSURE
              lights report the output of individual pumps.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Quantity indication:</strong> usable fuel; available
                with AC or DC power.
              </li>
              <li>
                <strong>LOW PRESSURE:</strong> monitors pump output pressure.
              </li>
              <li>
                <strong>Main pump switch OFF:</strong> related LOW PRESSURE
                light illuminated.
              </li>
              <li>
                <strong>Center pump switch OFF:</strong> related LOW PRESSURE
                light extinguished.
              </li>
            </ul>
            <Deep title="Go deeper · When does MASTER CAUTION appear?">
              <p>
                For a main tank, two LOW PRESSURE lights in the same tank
                trigger MASTER CAUTION and the FUEL annunciator. A single light
                brings them up on recall.
              </p>
              <p>
                For the center tank, with the switches ON, one LOW PRESSURE
                light continuously illuminated for 10 seconds triggers MASTER
                CAUTION and FUEL.
              </p>
            </Deep>
            <Table className="course-table">
              <TableHeader>
                <TableRow>
                  <TableHead>NG alert</TableHead>
                  <TableHead>Appears when</TableHead>
                  <TableHead>Clears when</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>LOW</strong>
                  </TableCell>
                  <TableCell>A main tank has less than 453 kg.</TableCell>
                  <TableCell>That tank reaches 567 kg.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>CONFIG</strong>
                  </TableCell>
                  <TableCell>
                    Either engine running, center quantity above 726 kg, both
                    center pump switches OFF.
                  </TableCell>
                  <TableCell>
                    Both engines stopped, or center below 363 kg, or either
                    center pump switch ON.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>IMBAL</strong>
                  </TableCell>
                  <TableCell>
                    Main tanks differ by more than 453 kg, on the ground or in
                    flight.
                  </TableCell>
                  <TableCell>Difference reduces to 91 kg.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <ul className="study-points">
              <li>
                <strong>IMBAL location:</strong> lower-quantity main tank.
              </li>
              <li>
                <strong>Priority:</strong> LOW takes precedence over IMBAL.
              </li>
              <li>
                <strong>Separate entry / clearing thresholds:</strong> reduce
                repeated alert switching near a single value.
              </li>
            </ul>
            <Max>
              <strong>LOW uses 590 / 737 kg</strong> in the supplied 737-8200
              FCOM: it appears below 590 kg and stays until quantity increases
              to 737 kg. The listed CONFIG and IMBAL thresholds remain the same.
            </Max>
            <h3>Additional MAX fuel messages</h3>
            <ul>
              <li>
                <strong>FUEL DISAGREE:</strong> totalizer quantity and FMC
                calculated quantity disagree.
              </li>
              <li>
                <strong>USING RSV FUEL:</strong> predicted destination fuel is
                below the entered RESERVES value.
              </li>
              <li>
                <strong>INSUFFICIENT FUEL:</strong> predicted destination fuel
                is below 900 kg.
              </li>
              <li>
                <strong>FUEL FLOW:</strong> actual engine flow differs from FMCS
                expected flow beyond the MEDB threshold for five continuous
                minutes; each engine is monitored independently.
              </li>
            </ul>
            <p>
              These are engine-display alerts in the supplied MAX fuel chapter.
              That does not mean similarly named FMC messages are exclusive to
              the MAX.
            </p>
            <h3>FILTER BYPASS</h3>
            <ul className="study-points">
              <li>
                <strong>Amber FILTER BYPASS:</strong> impending fuel-filter
                bypass due to contamination.
              </li>
              <li>
                <strong>Meaning:</strong> filter restriction, not low pump
                pressure.
              </li>
            </ul>
            <Max>
              The MAX description includes{' '}
              <strong>impending or actual bypass</strong>. If both FILTER BYPASS
              lights illuminate, both remain illuminated until engine shutdown
              on the ground.
            </Max>
            <Deep title="Go deeper · Quantity indication is not perfectly exact">
              <p>
                The NG FCOM allows indicated tank quantity to differ from actual
                quantity by up to 2.0% on the ground and 2.5% in flight. The MAX
                fuel description states up to 2.5% in flight. These are
                indication-accuracy statements, not extra usable fuel or
                operational allowances.
              </p>
              <p>
                NG cockpit presentations vary by aircraft effectivity: the
                supplied manual includes both round indicators and a numeric
                layout with a total quantity display. A different display layout
                alone does not identify a MAX.
              </p>
            </Deep>
            <Need title="10 seconds · center-pump caution" tone="teal">
              <p>
                One center LOW PRESSURE light continuously illuminated for{' '}
                <strong>10 seconds</strong>, with center switches ON, triggers
                MASTER CAUTION and FUEL. This timing is separate from the
                automatic pump-shutdown delay.
              </p>
            </Need>
            <Source>NG 12.10.2–6, 12.20.3 · MAX 12.10.2–5, 12.20.3</Source>
          </section>
          <section className="course-section" id="temperature">
            <span className="section-num">05 / TEMPERATURE & LIMITS</span>
            <h2>
              Fuel temperature is measured in main tank 1 and must remain
              inside the applicable warm and cold operating limits.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Sensor:</strong> main tank 1.
              </li>
              <li>
                <strong>Display:</strong> overhead FUEL TEMP indicator.
              </li>
              <li>
                <strong>Power:</strong> AC.
              </li>
              <li>
                <strong>Reading:</strong> tank 1 temperature, not an average of
                all tanks.
              </li>
            </ul>
            <ul className="study-points">
              <li>
                <strong>Maximum:</strong> +49°C.
              </li>
              <li>
                <strong>Minimum before takeoff and in flight:</strong> −43°C or
                freezing point +3°C, whichever is higher.
              </li>
            </ul>
            <Deep title="Worked example · Choose the warmer limit">
              <p>
                If the fuel freezing point is −47°C, adding 3°C gives −44°C. The
                warmer of −44°C and −43°C is <strong>−43°C</strong>, so −43°C is
                the applicable minimum. If the freezing point were −40°C, the
                minimum would instead be −37°C.
              </p>
              <p>
                The rule is not simply “freezing point plus three” in every
                case. The supplied limitations also state that fuel-system
                icing-inhibitor additives do not change the minimum.
              </p>
            </Deep>
            <h3>Other NG limitations worth remembering</h3>
            <ul>
              <li>
                Scheduled lateral imbalance is zero; random imbalance must not
                exceed <strong>453 kg</strong> for taxi, takeoff, flight or
                landing.
              </li>
              <li>
                Main tanks must be full if the center contains more than{' '}
                <strong>453 kg</strong>.
              </li>
              <li>
                Intentional dry running of a center tank pump with its
                low-pressure light illuminated is prohibited.
              </li>
            </ul>
            <p className="note">
              An alert threshold is not a target. For example, CONFIG at 726 kg
              and the center-fuel loading threshold at 453 kg describe different
              conditions.
            </p>
            <Need title="−43°C / freezing point +3°C" tone="teal">
              <p>
                Use the <strong>higher (warmer)</strong> minimum. Maximum tank
                fuel temperature is <strong>+49°C</strong>. These limits come
                from the supplied 737-800 NG FCOM L.10.9–10.
              </p>
            </Need>
            <Source>
              NG L.10.9–10; 12.20.3. Limits here are attributed to the supplied
              NG configuration.
            </Source>
          </section>
          <section className="course-section" id="ground">
            <span className="section-num">06 / GROUND SERVICING & NGS</span>
            <h2>
              Ground servicing uses one pressure station, while the NGS reduces
              center-tank flammability automatically in flight.
            </h2>
            <ul className="study-points">
              <li>
                <strong>Single-point station:</strong> right wing.
              </li>
              <li>
                <strong>Tank full:</strong> automatic shutoff closes the
                corresponding fueling valve.
              </li>
              <li>
                <strong>Manual defueling valve:</strong> connects engine feed
                system and fueling station.
              </li>
              <li>
                <strong>Ground functions:</strong> refueling, defueling and
                tank-to-tank transfer.
              </li>
            </ul>
            <Deep title="Go deeper · A separate way to measure fuel">
              <p>
                There are six measuring sticks in each main tank and four in the
                center tank: sixteen in total. A stick is withdrawn and
                magnetically latched to an internal float. Its reading provides
                a physical measurement that can be compared with the indicated
                quantity using the applicable conversion information.
              </p>
            </Deep>
            <h3>Nitrogen Generation System</h3>
            <ul className="study-points">
              <li>
                <strong>Input:</strong> bleed air.
              </li>
              <li>
                <strong>Output:</strong> nitrogen-enriched air to the center
                tank, reducing flammability.
              </li>
              <li>
                <strong>Operation:</strong> automatic; no flight-deck control or
                indication.
              </li>
              <li>
                <strong>Typical period:</strong> after takeoff through flight,
                continuing briefly during taxi after landing.
              </li>
            </ul>
            <ul className="study-points">
              <li>
                <strong>Indicator location:</strong> right main wheel well, near
                the APU fire-control panel.
              </li>
              <li>
                <strong>Green:</strong> operational. <strong>Blue:</strong>{' '}
                degraded.
              </li>
              <li>
                <strong>Amber or no lights:</strong> inoperative.
              </li>
            </ul>
            <Deep title="Go deeper · Availability and automatic shutdown">
              <p>
                In the supplied NG manual, NGS is effectivity-dependent; the MAX
                chapter also describes it. It is not a MAX-only feature. The
                system can automatically shut down for conditions including an
                engine not running in flight, cargo/main-deck fire or smoke
                detection, left pack overheat or an open center refueling valve.
                Dispatch decisions belong to the applicable MEL.
              </p>
            </Deep>
            <Source>
              NG 12.10.7–10, 12.20.1, 12.20.4 · MAX 12.10.6–9, 12.20.1,
              12.20.3–4
            </Source>
          </section>
          <section className="course-section" id="recap">
            <span className="section-num">07 / KEY TAKEAWAYS</span>
            <h2>
              These relationships connect tank selection, pump indications,
              crossfeed operation and the most important MAX difference.
            </h2>
            <ul>
              <li>
                Higher center-pump pressure explains center-tank priority.
              </li>
              <li>
                Crossfeed connects engine manifolds. Scavenging transfers fuel
                between tanks.
              </li>
              <li>
                A center pump can shut down automatically while its switch
                remains ON.
              </li>
              <li>
                A blue light must be read with its label: OPEN and CLOSED mean
                different things.
              </li>
              <li>
                Tank 1 supplies the temperature reading, not an aircraft-wide
                average.
              </li>
              <li>
                The supplied MAX has a higher LOW threshold: 590 kg rather than
                453 kg.
              </li>
            </ul>
            <Link className="button secondary" href="/max-differences">
              Review Fuel MAX differences →
            </Link>
          </section>
          <section className="course-section" id="quiz">
            <span className="section-num">08 / CHECK YOUR KNOWLEDGE</span>
            <h2>
              Use these questions to check whether the key system relationships
              are clear.
            </h2>
            <p>Three free questions with explanations. No account required.</p>
            <Quiz />
          </section>
          <section id="sources">
            <span className="section-num">09 / SOURCES & APPLICABILITY</span>
            <h2>
              Every operational statement can be traced to the supplied study
              sheet and the applicable NG or MAX manual section.
            </h2>
            <div className="references">
              <p>
                This original course follows the supplied Fuel study sheet and
                checks its claims against the two supplied FCOMs. References use
                the manuals’ printed section numbers. Source PDFs are not
                republished. The original aircraft location diagram also
                references NG FCOM 1.10.2 for proportions.
              </p>
              <ul>
                <li>
                  <strong>737-800 NG:</strong> b737-800-fcom-revision-40
                  (1).pdf, D6-27370-8AS-RYR(AS), chapter 12 and L.10.9–10. Fuel
                  PDF pages 2111–2125; limitations pages 149–150. Some Fuel
                  pages carry July 18, 2025 dates.
                </li>
                <li>
                  <strong>737-8200 MAX:</strong> ryr-737-8200-fcom-rev-3b.pdf,
                  D6-27370-MAX-RYR(P2), chapter 12, PDF pages 1619–1633,
                  February 1, 2021.
                </li>
                <li>
                  <strong>Study outline:</strong> 12. Fuel.pdf, supplied
                  handwritten study sheet, pages 2–4.
                </li>
                <li>
                  <strong>Further reading:</strong>{' '}
                  <a
                    href="https://www.b737.org.uk/fuel.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Boeing 737 Technical Site — Fuel ↗
                  </a>
                  . Not used to validate this edition because the page was
                  unavailable during preparation.
                </li>
              </ul>
              <p>
                Aircraft effectivity and operator configuration matter. Precise
                pump pressures, probe counts, a 15-second shutdown delay and
                spar-valve backup-battery details from the sheet were not
                retained as established facts without support in the reviewed
                FCOM sections.
              </p>
            </div>
          </section>
        </article>
        <aside className="course-aside">
          <div className="aside-box">
            <p className="eyebrow">IN THIS CHAPTER</p>
            <Contents sections={sections} />
            <hr />
            <h3>NG first. MAX alongside.</h3>
            <p className="muted">
              Blue-violet notes identify changes in the supplied 737-8200
              manual.
            </p>
            <Link href="/academy">Quiz & revision sheets →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
