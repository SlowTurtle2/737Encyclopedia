import Link from '@/components/site-link';
import SystemPager from '@/components/system-pager';
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
  title?: string;
  children: React.ReactNode;
  tone?: 'blue' | 'amber' | 'teal';
}) {
  return (
    <aside className={'need-to-know ' + tone}>
      <span className="need-label">NEED TO KNOW</span>
      {title && <h3>{title}</h3>}
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
  ['temperature', 'Fuel Temperature and Limits'],
  ['ground', 'Refuelling and NGS'],
  ['quiz', 'Check your knowledge'],
];
export default function Fuel() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>SYSTEM / FUEL FCOM CHAPTER 12</strong>
        <div className="course-meta">
          <span className="pill available">737 NG</span>
          <span className="pill">MAX DIFFERENCE INCLUDED</span>
        </div>
      </div>
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
            </ul>
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
            <Need tone="teal">
              <p><strong>3 tanks.</strong></p>
              <p><strong>Total capacity: 20,896 kg.</strong></p>
            </Need>
            <Source>NG 12.20.1, 12.20.4 · MAX 12.20.1, 12.20.4</Source>
          </section>
          <section className="course-section" id="feed">
            <span className="section-num">02 / PUMPS & FUEL FEED</span>
            <h2>
              The fuel pumps draw fuel from the tanks and deliver it under
              pressure to the engine feed manifolds, providing a continuous
              supply to the engines during normal operation.
            </h2>
            <h3>Fuel pump</h3>
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
              Two AC-powered pumps are assigned to each tank, giving six pumps
              in total. Fuel passing through each pump provides cooling and
              lubrication. The center tank pumps deliver higher pressure than
              the main tank pumps.
            </p>
            <aside className="configuration-data">
              <strong>CONFIGURATION DATA · VERIFY AIRCRAFT APPLICABILITY</strong>
              <p>
                Center pump output is approximately <strong>23 PSI</strong>,
                compared with approximately <strong>10 PSI</strong> for the main
                tank pumps.
              </p>
            </aside>
            <aside className="pump-location-warning">
              <strong>WARNING · PUMP FUNCTION AND PHYSICAL LOCATION</strong>
              <p>
                Each tank uses two pumps located in the fuel tanks. The two
                center-tank pumps are installed within the center tank; the NGS
                protects that tank’s ullage. Do not infer that all six pump
                assemblies are grouped in the center tank area.
              </p>
            </aside>
            <h3>Fuel supply</h3>
            <p>
              When all six pumps operate, the center tank pumps produce more
              pressure than the main tank pumps, so center tank fuel is consumed
              first. To stop using the center tank, the crew switches its pumps
              OFF and the main tank pumps supply the engines. There is no fuel
              tank selector: pump selection and pressure establish the source.
            </p>
            <p>
              If all pumps are lost, each engine-driven fuel pump can draw from
              its corresponding main tank through the suction-feed path. This
              path may become restricted at altitude, with a risk of thrust
              deterioration or engine flameout.
            </p>
            <aside className="suction-warning">
              <strong>WARNING · DURING CLIMB</strong>
              <p>
                If the fuel pumps are switched OFF during climb, the engines
                rely on suction feed. As ambient pressure falls, dissolved air
                can be released from the fuel and restrict that flow, creating
                a risk of thrust loss or flameout at altitude.
              </p>
            </aside>
            <FuelDiagram />

            <h3>Pump control and warning</h3>
            <p>
              Six switches on the overhead fuel panel control the two AC pumps
              in each tank.
            </p>
            <PumpControlPanel />
            <div className="pump-warning">
              <img
                src="/images/fuel-low-pressure.png"
                alt="Amber LOW PRESSURE fuel pump warning"
              />
              <div>
                <strong>LOW PRESSURE</strong>
                <p>
                  Illuminated (amber) – fuel pump output pressure is low, or
                  FUEL PUMP switch is OFF.
                </p>
                <p className="warning-note">
                  On center tank pumps, the light is extinguished when the
                  associated switch is OFF.
                </p>
              </div>
            </div>
            <h3>Center Pump Automatic</h3>
            <p>
              Each center tank pump automatically stops after its own pressure
              sensor detects low pressure for a short delay, although the switch
              remains ON. Selecting that switch OFF resets the automatic
              shutdown logic; selecting it ON again reactivates the pump until
              it is switched off or the logic stops it again. This delay is a
              separate function from the 10-second MASTER CAUTION logic. Intentional
              dry running of a center tank pump with its low-pressure light
              illuminated is prohibited.
            </p>
            <Deep title="Go deeper · A dry pump can lose its prime">
              <p>
                Technical background material notes that a center pump left
                running dry for roughly ten minutes can lose the fuel needed to
                prime itself and may remain inoperative after refuelling. A LOW
                PRESSURE light that remains illuminated for more than about 19
                seconds after selection can be a maintenance clue. These are
                indicative troubleshooting values, not a crew reset procedure:
                switch the affected pump OFF and apply the aircraft’s current
                QRH and maintenance process.
              </p>
            </Deep>

            <h3>Scavenge pump</h3>
            <p>
              The scavenge jet pump transfers residual fuel from the center tank
              to main tank No. 1, the left wing tank. Transfer begins when main
              tank No. 1 is approximately half full.
            </p>
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
              <li>
                <strong>Indicative transfer rate:</strong> at least approximately
                100 kg/h and commonly nearer 200 kg/h; confirm effectivity.
              </li>
            </ul>
            <h3>APU fuel</h3>
            <p>
              With an AC fuel pump operating, the APU receives pressurized fuel
              from the left manifold. Without AC pump pressure, it can draw fuel
              by suction from main tank 1. The tank feeding the left manifold
              therefore determines the pressure-fed source available to the APU.
            </p>
            <ul className="study-points">
              <li>
                <strong>AC pumps operating:</strong> APU fed from the left fuel
                manifold.
              </li>
              <li>
                <strong>AC pumps not operating:</strong> APU suction feed from
                main tank 1.
              </li>
            </ul>
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
              <p>
                One center LOW PRESSURE light continuously illuminated for{' '}
                <strong>10 seconds</strong>, with the center pump switches ON,
                triggers MASTER CAUTION and the FUEL annunciator. This timing is
                separate from the automatic pump-shutdown delay.
              </p>
            </Need>
            <Source>NG / MAX 12.10.2, 12.20.2–3 · NG L.10.10</Source>
          </section>
          <section className="course-section" id="crossfeed">
            <span className="section-num">03 / CROSSFEED & VALVES</span>
            <h2>
              Three valve types control fuel isolation and the connection
              between the left and right engine feed manifolds.
            </h2>
            <h3>Engine valve</h3>
            <p>
              The engine fuel shutoff valve is fuel-actuated and
              solenoid-controlled from the battery bus. It isolates fuel at the
              engine and closes when the associated engine start lever is moved
              to CUTOFF or the engine fire switch is pulled.
            </p>
            <div className="valve-detail"><ul className="study-points">
              <li>
                <strong>ENG VALVE CLOSED extinguished:</strong> valve open.
              </li>
              <li>
                <strong>Dim blue:</strong> valve closed.
              </li>
              <li>
                <strong>Bright blue:</strong> valve in transit or disagreement
                between commanded and actual position.
              </li>
            </ul><img className="valve-indication" src="/images/eng-valve-closed.png" alt="ENG VALVE CLOSED flight deck indication" /></div>

            <h3>Spar valve</h3>
            <p>
              The spar fuel shutoff valve is installed at the engine-mounting
              wing station. A DC motor powered by the hot battery bus operates
              it. Like the engine valve, it closes with the associated start
              lever at CUTOFF or when the engine fire switch is pulled.
            </p>
            <Deep title="Go deeper · Spar valve electrical supply">
              <p>
                The spar valve motor is powered by the hot battery bus. The
                configuration information supplied for this course also
                describes a small autonomous backup battery, recharged by DC bus
                2, which preserves engine-shutdown capability after a total
                electrical power loss. Confirm this installation on the
                applicable aircraft documentation.
              </p>
            </Deep>
            <div className="valve-detail"><ul className="study-points">
              <li>
                <strong>SPAR VALVE CLOSED extinguished:</strong> valve open.
              </li>
              <li>
                <strong>Dim blue:</strong> valve closed.
              </li>
              <li>
                <strong>Bright blue:</strong> valve in transit or disagreement
                between commanded and actual position.
              </li>
            </ul><img className="valve-indication" src="/images/spar-valve-closed.png" alt="SPAR VALVE CLOSED flight deck indication" /></div>

            <h3>Crossfeed valve</h3>
            <p>
              The crossfeed valve connects the left and right engine fuel
              manifolds. Its DC motor is powered by the battery bus. Opening it
              allows one pressurized manifold to supply both engines; it does
              not transfer fuel into the opposite tank. Continued asymmetric
              feeding changes lateral fuel balance by changing which tank is
              consumed.
            </p>
            <div className="valve-detail"><ul className="study-points">
              <li><strong>VALVE OPEN extinguished:</strong> crossfeed valve closed.</li>
              <li><strong>Dim blue:</strong> crossfeed valve open.</li>
              <li><strong>Bright blue:</strong> valve in transit or disagreement between commanded and actual position.</li>
            </ul><img className="valve-indication" src="/images/crossfeed-valve-open.png" alt="VALVE OPEN crossfeed flight deck indication" /></div>
            <aside className="study-tip">
              <strong>TIP · “LOW GOES OFF”</strong>
              <p>
                This memory aid applies when a fuel imbalance has been assessed
                and the crew intends to correct it: open crossfeed, then switch
                OFF the pumps on the lower-quantity tank. The higher-quantity
                tank can then supply both engines while the imbalance decreases.
              </p>
            </aside>
            <aside className="transfer-warning">
              <strong>WARNING · RULE OUT A FUEL LEAK FIRST</strong>
              <p>
                Before operating the crossfeed valve to correct an imbalance,
                make sure a fuel leak is not suspected. Feeding both engines
                from a leaking side can accelerate fuel loss and make the
                situation worse. Follow the applicable operator procedure.
              </p>
            </aside>
            <aside className="transfer-warning">
              <strong>WARNING · CROSSFEED IS NOT FUEL TRANSFER</strong>
              <p>
                Crossfeed connects the two engine feed manifolds so one tank can
                supply both engines. The fuel remains in its original tank until
                an engine consumes it. Fuel transfer moves fuel physically from
                one tank into another; the crossfeed valve does not do this.
              </p>
            </aside>
            <Source>NG / MAX 12.10.1–2, 12.20.2–3</Source>
          </section>
          <section className="course-section" id="indications">
            <span className="section-num">04 / FUEL INDICATIONS & ALERTS</span>
            <h2>
              Fuel quantity indications and alerts help the crew monitor usable
              fuel, tank balance and the fuel predicted at destination.
            </h2>
            <h3>Fuel display</h3>
            <p>
              Two fuel-quantity display layouts can be found across the 737 NG
              fleet. Round gauges are generally associated with earlier NG
              aircraft, while later NG aircraft and the 737 MAX use a digital
              presentation with a totalizer. Display fit depends on aircraft
              effectivity, so the installed layout should be confirmed in the
              applicable aircraft manuals.
            </p>
            <Deep title="Go deeper · How fuel quantity is measured">
              <p>
                Tank units act as electrical capacitors, with fuel forming the
                dielectric between their electrodes. Because capacitance changes
                with the amount and properties of the fuel, the FQIS combines the
                tank-unit signals and calibration data to calculate usable
                quantity. Where installed, a densitometer compensates for fuel
                density so the displayed mass is more accurate as fuel properties
                change.
              </p>
            </Deep>
            <div className="fuel-display-grid">
              <figure><img src="/images/fuel-display-round.png" alt="Round fuel quantity gauges fitted to an earlier 737 NG" /><figcaption>Round fuel quantity gauges · earlier NG layout</figcaption></figure>
              <figure><img src="/images/fuel-display-digital.png" alt="Digital fuel quantity display with totalizer fitted to later 737 NG and MAX aircraft" /><figcaption>Digital quantities and totalizer · later NG and MAX layout</figcaption></figure>
            </div>
            <h3>Fuel QTY alert</h3>
            <ul className="study-points">
              <li>
                <strong>Quantity indication:</strong> usable fuel; available
                with AC or DC power.
              </li>
            </ul>
            <div className="fuel-alert-card"><img src="/images/fuel-alert-low.png" alt="LOW fuel quantity alert" /><div><strong>LOW</strong><p>Appears below 453 kg in either main tank and clears when that tank reaches 567 kg.</p></div></div>
            <Max>
              <strong>LOW uses 590 / 737 kg</strong> in the supplied 737-8200
              FCOM: it appears below 590 kg and stays until quantity increases
              to 737 kg. The listed CONFIG and IMBAL thresholds remain the same.
            </Max>
            <div className="fuel-alert-card"><img src="/images/fuel-alert-config.png" alt="CONFIG center fuel alert" /><div><strong>CONFIG</strong><p>Appears with either engine running when center tank quantity is above 726 kg and both center pump switches are OFF. It clears when both engines are stopped, center quantity falls below 363 kg, or either center pump switch is ON.</p></div></div>
            <div className="fuel-alert-card"><img src="/images/fuel-alert-imbal.png" alt="IMBAL main tank quantity alert" /><div><strong>IMBAL</strong><p>Appears on the lower-quantity main tank when the difference exceeds 453 kg. It clears when the difference decreases to 91 kg.</p></div></div>
            <p>LOW takes precedence over IMBAL when both conditions exist.</p>
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
            <h3>Filter alert</h3>
            <div className="pump-warning filter-warning">
              <img src="/images/fuel-filter-bypass.png" alt="Amber FILTER BYPASS indication" />
              <div>
                <strong>FILTER BYPASS</strong>
                <p>Illuminated (amber) – impending fuel filter bypass due to a contaminated filter.</p>
                <p className="warning-note">
                  Configuration data supplied for this course: the alert is
                  triggered at approximately <strong>11.5 PSI differential</strong>
                  and the bypass opens at approximately <strong>15 PSI</strong>.
                  Confirm aircraft applicability.
                </p>
              </div>
            </div>
            <h3>MAX alert</h3>
            <p>
              In addition to the fuel alerts already available on the 737 NG,
              the 737 MAX provides extra messages related to fuel quantity and
              the FMC fuel prediction.
            </p>
            <div className="max-alert-overview">
              <img src="/images/max-fuel-alerts.png" alt="MAX fuel display showing FUEL DISAGREE, USING RSV FUEL and INSUFFICIENT FUEL alerts" />
              <p>
                The supplied MAX display can present the three fuel prediction
                and quantity-consistency alerts described below.
              </p>
            </div>
            <ul>
              <li><strong>FUEL DISAGREE:</strong> totalizer quantity and FMC calculated quantity disagree.</li>
              <li><strong>USING RSV FUEL:</strong> predicted destination fuel is below the entered RESERVES value.</li>
              <li><strong>INSUFFICIENT FUEL:</strong> predicted destination fuel is below 900 kg.</li>
            </ul>
            <Source>NG 12.10.2–6, 12.20.3 · MAX 12.10.2–5, 12.20.3</Source>
          </section>
          <section className="course-section" id="temperature">
            <span className="section-num">05 / FUEL TEMPERATURE AND LIMITS</span>
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
            </ul>
            <p>
              Main tank No. 1 is used because it is normally the coldest tank;
              it receives less warming from the smaller hydraulic system A. If
              temperature approaches the applicable minimum, descending into
              warmer air or increasing speed can increase fuel temperature
              through warmer ambient air or kinetic heating. Any response must
              follow the current operating procedure and flight constraints.
            </p>
            <ul className="study-points">
              <li><strong>Limit:</strong> maximum +49°C; minimum before takeoff
                and in flight −43°C or freezing point +3°C, whichever is higher.</li>
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
            <Need title="−43°C / freezing point +3°C" tone="teal">
              <p>
                Use the <strong>higher (warmer)</strong> minimum. Maximum tank
                fuel temperature is <strong>+49°C</strong>. These limits come
                from the supplied 737-800 NG FCOM L.10.9–10.
              </p>
            </Need>
            <Deep title="Go deeper · Cold-soaked fuel frost">
              <p>
                After a long flight with cold fuel, frost can form on the upper
                or lower wing skin over the tanks even when outside air
                temperature is above freezing. This is cold-soaked fuel frost,
                not atmospheric in-flight icing. Dispatch relief applies only
                within an approved, marked CSFF area and under the precise
                inspection and thickness criteria in the applicable procedure.
              </p>
            </Deep>
            <Source>
              NG L.10.9–10; 12.20.3. Limits here are attributed to the supplied
              NG configuration.
            </Source>

          </section>
          <section className="course-section" id="ground">
            <span className="section-num">06 / REFUELLING AND NGS</span>
            <h3>Refuelling</h3>
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
            <p>
              The NGS converts engine bleed air into nitrogen-enriched air and
              sends it to the center fuel tank. Reducing the oxygen content in
              the tank ullage lowers its flammability while ignition-source
              protection remains the primary safeguard.
            </p>
            <p>
              Operation is automatic and transparent to the flight crew. The
              system starts after takeoff, operates through climb, cruise,
              descent and landing, then continues briefly during taxi. It needs
              no crew action and has no flight deck indication; its operability
              lights are in the right main wheel well near the APU fire control
              panel.
            </p>
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
            </ul>
            <div className="ngs-status-card">
              <img src="/images/ngs-status-panel.png" alt="NGS serviceability panel showing green operational, blue degraded and amber inoperative indications" />
              <p>
                The NGS serviceability panel is in the right main wheel well,
                near the APU fire-control panel. A <strong>green</strong> light
                indicates OPERATIONAL, a <strong>blue</strong> light indicates
                DEGRADED and an <strong>amber</strong> light, or no illuminated
                light, indicates INOPERATIVE.
              </p>
            </div>
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
            <Deep title="Go deeper · Why nitrogen reduces flammability">
              <p>
                The air-separation module sends nitrogen-enriched air to the
                empty space above the center-tank fuel and vents the
                oxygen-enriched stream overboard. FAA technical background uses
                approximately <strong>12% oxygen</strong> as a representative
                concentration at which ignition is not sustained. This figure
                explains the design objective; it is not a flight deck target or
                crew-controlled parameter.
              </p>
            </Deep>
            <Source>
              NG 12.10.7–10, 12.20.1, 12.20.4 · MAX 12.10.6–9, 12.20.1,
              12.20.3–4
            </Source>

          </section>
          <section className="course-section" id="quiz">
            <span className="section-num">07 / CHECK YOUR KNOWLEDGE</span>
            <h2>
              Use these questions to check whether the key system relationships
              are clear.
            </h2>
            <p>Three free questions with explanations. No account required.</p>
            <Quiz />

          </section>
          <SystemPager current="Fuel" />
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
