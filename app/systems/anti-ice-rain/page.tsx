import Link from '@/components/site-link';
import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';
import { StallLogicDiagram } from './diagrams';

export const metadata = {
  title: 'Anti-Ice, Rain | 737Encyclopedia',
  description: '737 NG and MAX window heat, probe heat, wing and engine anti-ice, rain removal and icing stall-warning logic.',
};

function Need({ title, children }: { title?: string; children: React.ReactNode }) {
  return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span>{title && <h3>{title}</h3>}<div>{children}</div></aside>;
}
function Warning({ title, children }: { title: string; children: React.ReactNode }) {
  return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>;
}
function Deep({ title, children }: { title: string; children: React.ReactNode }) {
  return <details className="deep"><summary>{title}</summary><div>{children}</div></details>;
}
function Max({ children }: { children: React.ReactNode }) {
  return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>;
}
function Source({ children }: { children: React.ReactNode }) { return <p className="source">REFERENCE · {children}</p>; }

const sections = [
  ['overview', 'The big picture'], ['windows', 'Flight deck window heat'],
  ['wipers', 'Wipers'], ['probes', 'Probe heat'], ['wing', 'Wing anti-ice'],
  ['engine', 'Engine anti-ice'], ['visual', 'Visual indication of ice'],
  ['stall', 'Stall-warning logic'],
];

export default function AntiIceRain() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner"><strong>SYSTEM / ANTI-ICE, RAIN · FCOM CHAPTER 3</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">01 / THE BIG PICTURE</span>
            <h2>The 737 combines electrical heat, engine bleed air and mechanical rain removal to protect the surfaces and sensors needed for safe flight.</h2>
            <ul className="study-points">
              <li><strong>Flight deck window heat:</strong> AC electrical heating prevents ice and fog on windows No. 1 and No. 2 and preserves their impact strength.</li>
              <li><strong>Windshield wipers:</strong> independent left and right wipers remove rain from the forward windows.</li>
              <li><strong>Probe and sensor heat:</strong> electrical heaters protect pitot probes, alpha vanes and the total-air-temperature probe.</li>
              <li><strong>Wing anti-ice:</strong> engine bleed air heats the three inboard leading-edge slats on each wing.</li>
              <li><strong>Engine anti-ice:</strong> engine bleed air protects each cowl lip; the MAX also protects the engine core automatically.</li>
              <li><strong>Stall-warning logic:</strong> anti-ice use changes stick-shaker and minimum maneuver-speed margins for icing conditions.</li>
            </ul>
            <figure className="figure course-photo">
              <img src="/images/anti-ice-protection-overview.png" alt="737 overview identifying heated windshields, wipers, probe heat, wing anti-ice and engine anti-ice" />
              <figcaption>Overview of the main ice and rain protection components.</figcaption>
            </figure>
            <Source>NG / MAX 3.20.1</Source>
          </section>

          <section className="course-section" id="windows">
            <span className="section-num">02 / FLIGHT DECK WINDOW HEAT</span>
            <h2>Electrical heating keeps windows No. 1 and No. 2 clear and maintains their strength for bird impact protection.</h2>
            <h3>Description</h3>
            <p>Four flight deck windows are electrically heated by AC power: forward windows 1L and 1R, and side windows 2L and 2R. Windows No. 3 are not electrically heated. A conductive coating in each heated window converts electrical current into heat, preventing ice and fog while maintaining the window at the temperature required for maximum bird-impact strength.</p>
            <figure className="figure course-photo window-layout-photo">
              <img src="/images/window-heat-windows.png" alt="Front view of a 737 identifying electrically heated windows 1L, 1R, 2L and 2R" />
              <figcaption>Windows 1L, 1R, 2L and 2R are electrically heated.</figcaption>
            </figure>
            <Warning title="WINDOW HEAT INOPERATIVE">If any required heated window loses its heating function, apply the applicable dispatch procedure. The restriction given in the course material is a maximum of 250 kt below FL100.</Warning>
            <h3>Command</h3>
            <p>The pilot selects each FWD or SIDE WINDOW HEAT switch ON or OFF independently. Once selected ON, a temperature controller cycles electrical power automatically to maintain the correct window temperature. No manual temperature setting is required.</p>
            <ul className="study-points">
              <li><strong>FWD switches:</strong> control left and right window No. 1.</li>
              <li><strong>SIDE switches:</strong> control left and right window No. 2.</li>
              <li><strong>Window No. 3:</strong> not electrically heated and therefore has no WINDOW HEAT switch.</li>
            </ul>
            <figure className="figure course-photo panel-photo">
              <img src="/images/window-heat-panel.png" alt="737 window heat overhead panel with four switches, ON lights, OVERHEAT lights and test selector" />
              <figcaption>Four window switches and the spring-loaded OVHT / PWR TEST selector.</figcaption>
            </figure>
            <div className="window-alert-card on-card">
              <img src="/images/window-heat-on.png" alt="Green window heat ON light" />
              <div><strong>ON</strong><p>Illuminated green when heat is being applied to the selected window. It extinguishes when the switch is OFF, an overheat or system failure occurs, or the window reaches the correct temperature and the controller removes power.</p></div>
            </div>
            <p>The spring-loaded <strong>PWR TEST</strong> position provides a confidence test of available window heating. With the related WINDOW HEAT switches ON, it forces the controllers to full power and the associated green ON lights should illuminate. Normal temperature regulation is bypassed during the test, but overheat protection remains available. The test is intended for an extinguished ON light and should not be performed when all four ON lights are already illuminated. The <strong>OVHT</strong> position simulates an overheat condition.</p>
            <h3>Warning and indications</h3>
            <div className="window-alert-card overheat-card">
              <img src="/images/window-heat-overheat.png" alt="Amber window heat OVERHEAT warning light" />
              <div><strong>OVERHEAT</strong><p>Illuminated amber when the related controller detects an overheat condition. It also illuminates if electrical power to the related window is interrupted. When a real overheat is detected, power to that window is removed automatically.</p></div>
            </div>
            <Deep title="Go deeper · Construction and defogging"><p>Windows No. 1 and 2 use glass panes laminated around a vinyl core. A conductive coating on the outer pane supplies the heat. Conditioned air can also be directed to windows No. 1 for defogging.</p></Deep>
            <Need title="Four heated windows"><p>L1, L2, R1 and R2 are electrically heated. Window heat also preserves structural strength.</p></Need>
            <Source>NG 3.10.1–2, 3.20.2–3 · MAX 3.10.1–2, 3.20.2–3</Source>
          </section>

          <section className="course-section" id="wipers">
            <span className="section-num">03 / WIPERS</span>
            <h2>Independent left and right wipers clear the forward windows, while a permanent coating helps shed rain.</h2>
            <p>Each wiper selector has four positions: <strong>PARK, INT, LOW and HIGH</strong>.</p>
            <ul className="study-points"><li><strong>PARK:</strong> stops the motor and stows the blade.</li><li><strong>INT:</strong> one sweep cycle approximately every seven seconds.</li><li><strong>LOW / HIGH:</strong> continuous operation at the selected speed.</li></ul>
            <Deep title="Go deeper · Permanent rain-repellent coating"><p>Modern forward windows use a permanent hydrophobic rain-repellent coating rather than the earlier liquid rain-repellent system. The coating encourages water to bead and leave the glass in the airflow. Its effectiveness can deteriorate with wiper use, age and unsuitable cleaning methods, and maintenance can restore it using the approved process.</p></Deep>
            <Warning title="DRY WINDSHIELD">Operating the wipers on a dry windshield can scratch the windshield.</Warning>
            <Source>NG 3.10.2, 3.20.4 · MAX 3.10.2, 3.20.3</Source>
          </section>

          <section className="course-section" id="probes">
            <span className="section-num">04 / PROBE HEAT</span>
            <h2>Electrical heaters prevent ice from corrupting the pressure, angle-of-attack and temperature data used by flight instruments and aircraft systems.</h2>
            <h3>Description</h3>
            <p>The probe heat system uses electrical heating to keep the air-data and angle-of-attack sensors free of ice. It protects the captain and first-officer pitot probes, the left and right elevator pitot probes, the auxiliary pitot probe, both alpha vanes and the total-air-temperature probe. The static ports are not heated.</p>
            <figure className="figure course-photo probe-location-photo">
              <img src="/images/heated-probes-locations.png" alt="737 showing the locations of the captain, first officer, auxiliary and elevator pitot probes, both alpha vanes and temperature probe" />
              <figcaption>Locations of the electrically heated probes and sensors.</figcaption>
            </figure>
            <h3>Command</h3>
            <p>Two switches control probe heat systems A and B. Selecting <strong>ON</strong> supplies electrical power to the related heaters directly. On panels fitted with an <strong>AUTO</strong> position, both systems are powered automatically as soon as either engine is running; when neither engine is running, automatic heating is removed.</p>
            <figure className="figure course-photo panel-photo">
              <img src="/images/probe-heat-panel.png" alt="737 probe heat panel with A and B AUTO and ON switches and eight amber probe lights" />
              <figcaption>Probe heat systems A and B, shown with AUTO / ON switches.</figcaption>
            </figure>
            <Max>The supplied MAX uses AUTO/ON probe-heat switches. Some earlier NG aircraft use OFF/ON switches and therefore have no automatic mode: the crew must select probe heat ON. Later or modified NG aircraft may also use AUTO/ON switches, so the installed panel remains the controlling reference.</Max>
            <h3>Warning and indications</h3>
            <p>An amber probe-heat light means that the related probe or sensor is not being heated. It identifies loss of the expected heating function rather than the presence of ice.</p>
            <Warning title="STANDBY POWER">On standby power, only the captain’s pitot probe is heated. The CAPT PITOT light does not indicate a heater failure while operating in this configuration, and the standby airspeed pitot probe is not heated.</Warning>
            <Deep title="Go deeper · Panel effectivity"><p>The supplied NG FCOM shows both OFF/ON and AUTO/ON panels according to service-bulletin status. Always identify the installed switch positions before applying a memorized flow.</p></Deep>
            <Need title="Static ports are not heated"><p>The amber lights monitor probe heating, except that their status indication is unavailable on standby power.</p></Need>
            <Source>NG 3.10.3, 3.20.5 · MAX 3.10.3, 3.20.4</Source>
          </section>

          <section className="course-section" id="wing">
            <span className="section-num">05 / WING ANTI-ICE</span>
            <h2>Bleed air heats the three inboard leading-edge slats on each wing; the leading-edge flaps and outboard slats remain unheated.</h2>
            <h3>Description</h3>
            <p>The wing thermal anti-ice system takes engine bleed air from the common pneumatic manifold and routes it through two AC motor-operated control valves. The manifold arrangement allows either available bleed source to supply the wing system, including the required reconfiguration for engine-out operation. With a valve open, hot air passes through the three inboard leading-edge slats on that wing and is then exhausted overboard. The system remains effective with the slats in any position.</p>
            <figure className="figure course-photo">
              <img src="/images/wing-anti-ice-slats.png" alt="737 showing the three heated inboard leading-edge slats on each wing and the unheated outboard slats" />
              <figcaption>Wing anti-ice protects the three inboard leading-edge slats on each wing. Outboard slats and leading-edge flaps are not heated.</figcaption>
            </figure>
            <h3>Command</h3>
            <p><strong>In flight,</strong> selecting WING ANTI-ICE ON opens both control valves and activates icing stall-warning logic. Duct-temperature and thrust-setting logic do not control valve operation in flight.</p>
            <p><strong>On the ground,</strong> both valves open only while both engines remain below the takeoff-warning thrust setting and both distribution ducts remain below the thermal-switch temperature. High thrust or a hot duct closes the valves; they reopen when both conditions return to normal.</p>
            <p><strong>During takeoff,</strong> advancing either thrust lever above the takeoff-warning setting closes both valves, so wing anti-ice is no longer using bleed air during the takeoff roll. The WING ANTI-ICE switch itself remains ON. At lift-off, when the air/ground logic changes to AIR as the wheels leave the runway, the switch automatically trips to OFF.</p>
            <Need title="Takeoff automatically resets wing anti-ice"><p>If wing anti-ice is used on the ground before takeoff, the valves close when takeoff thrust is set. At lift-off, the system automatically deactivates and the WING ANTI-ICE switch flips to OFF.</p></Need>
            <aside className="study-tip"><strong>TIP · OPERATIONAL USE</strong><p>Wing anti-ice is operationally used more like a <b>de-icer</b>: the applicable procedure normally calls for it after evidence of ice accumulation, so the hot bleed air removes ice from the protected slats. Apply the operator’s current procedure and criteria.</p></aside>
            <h3>Warning and indications</h3>
            <p>The valve lights show movement or a disagreement between the selected switch position and the actual position of the related wing anti-ice valve.</p>
            <div className="wing-warning-grid">
              <div className="wing-warning-card ng"><img src="/images/ng-wing-valve-open-lights.png" alt="Blue L VALVE OPEN and R VALVE OPEN lights on the 737 NG" /><div><strong>737 NG · VALVE OPEN</strong><p><b>Dim blue:</b> the related valve is open and agrees with the ON command.</p><p><b>Bright blue:</b> the valve is moving, or its actual position disagrees with the WING ANTI-ICE switch.</p><p><b>Extinguished:</b> the related valve is closed with the switch OFF.</p></div></div>
              <div className="wing-warning-card max"><img src="/images/max-wing-valve-lights.png" alt="Amber L VALVE and R VALVE lights on the 737 MAX" /><div><strong>737 MAX · L/R VALVE</strong><p><b>Momentary amber:</b> the related valve is in transit.</p><p><b>Steady amber:</b> valve position disagrees with the WING ANTI-ICE switch.</p><p><b>Extinguished:</b> the valve agrees with the commanded position, whether open or closed.</p></div></div>
            </div>
            <Max>MAX wing-valve indications are amber and normally extinguished when valve position agrees with the switch. The supplied NG uses blue VALVE OPEN lights: dim when open and bright during transit or disagreement.</Max>
            <Warning title="USE ABOVE FL350">Use of wing anti-ice above FL350 may cause a BLEED TRIP OFF and loss of the associated bleed-air source. Follow the applicable operating procedure and limitations.</Warning>
            <Need title="Only the inboard slats"><p>Wing anti-ice is effective with the slats in any position and uses engine bleed air.</p></Need>
            <Source>NG 3.10.6, 3.20.6–8 · MAX 3.10.5–6, 3.20.6–8</Source>
          </section>

          <section className="course-section" id="engine">
            <span className="section-num">06 / ENGINE ANTI-ICE</span>
            <h2>Engine bleed air flows through a controlled valve to prevent ice from forming on each engine cowl lip.</h2>
            <h3>Description</h3>
            <p>Each engine has an electrically controlled, pressure-actuated cowl anti-ice valve. When open, it routes engine bleed air around the cowl inlet lip to prevent ice formation. The fan blades and spinner are not heated. The cowl system can operate both on the ground and in flight.</p>
            <figure className="figure course-photo">
              <img src="/images/engine-anti-ice-heated-area.png" alt="737 engine showing the heated cowl inlet lip and the unheated fan and spinner" />
              <figcaption>Engine thermal anti-ice heats the cowl inlet lip. The fan and spinner are not heated.</figcaption>
            </figure>
            <p>The cowl anti-ice air takeoff is upstream of the engine bleed valve. Engine anti-ice therefore remains available when the related engine bleed valve is closed; closing the bleed valve does not isolate the cowl anti-ice supply.</p>
            <Max>On the 737 NG, cowl anti-ice air comes from the 5th or 9th compressor stage and protects the cowl lip. On the 737 MAX, the source is the 4th or 10th compressor stage. The MAX also protects the engine core: the EEC automatically directs bleed air to it as required from engine and atmospheric data, with no crew input or indication during normal operation.</Max>
            <h3>Command</h3>
            <p>One ENG ANTI-ICE switch controls the cowl anti-ice valve on each engine. Selecting ON opens the related valve, supplies hot bleed air to the cowl lip and activates icing stall-warning logic. Selecting OFF closes the valve; normal stall-warning logic returns only if wing anti-ice has not been used in flight.</p>
            <aside className="study-tip"><strong>TIP · OPERATIONAL USE</strong><p>Engine anti-ice is operationally used as an <b>Anti-Ice</b>: it is selected preventively when the defined icing conditions exist, before ice is allowed to accumulate on the engine inlet. Apply the operator’s current procedure and criteria.</p></aside>
            <Deep title="Go deeper · MAX idle logic"><p>With engine anti-ice ON, the supplied MAX uses icing idle with flaps UP and approach idle with the flaps extended. With engine anti-ice OFF, it uses flight idle below 15° and approach idle at 15° or more.</p></Deep>
            <h3>Warning and indications</h3>
            <div className="engine-warning-grid">
              <div className="engine-warning-card ng">
                <img src="/images/ng-engine-anti-ice-lights.png" alt="737 NG COWL ANTI-ICE and blue COWL VALVE OPEN lights" />
                <div><strong>737 NG</strong><p><b>COWL ANTI-ICE · amber:</b> excessive pressure in the duct downstream of the cowl anti-ice valve.</p><p><b>COWL VALVE OPEN · dim blue:</b> the valve is open with its switch ON.</p><p><b>COWL VALVE OPEN · bright blue:</b> the valve is moving or its position disagrees with the switch.</p><p><b>Extinguished:</b> the valve is closed with its switch OFF.</p></div>
              </div>
              <div className="engine-warning-card max">
                <img src="/images/max-engine-anti-ice-lights.png" alt="737 MAX ENG ANTI-ICE, COWL ANTI-ICE and COWL VALVE lights" />
                <div><strong>737 MAX</strong><p><b>ENG ANTI-ICE · amber:</b> cowl anti-ice is inhibited by a system failure, or an engine core anti-ice valve has failed closed.</p><p><b>COWL ANTI-ICE · amber:</b> excessive pressure downstream of the cowl anti-ice valve.</p><p><b>COWL VALVE · momentary amber:</b> the valve is in transit.</p><p><b>COWL VALVE · steady amber:</b> valve position disagrees with the switch.</p><p><b>COWL VALVE extinguished:</b> the valve agrees with the commanded open or closed position.</p></div>
              </div>
            </div>
            <div className="tai-card">
              <img src="/images/engine-tai-indication.png" alt="Green TAI indication beside the engine N1 display" />
              <div><strong>TAI · THERMAL ANTI-ICE</strong><p><b>Green:</b> the cowl anti-ice valve is open and the related ENG ANTI-ICE switch is ON.</p><p><b>Amber:</b> the cowl valve position does not agree with the related switch position.</p><p><b>Extinguished:</b> the cowl valve is closed and the related switch is OFF.</p></div>
            </div>
            <Need title="Cowl lip on NG · cowl and core on MAX"><p>The flight crew directly selects cowl anti-ice. MAX core anti-ice is automatic through the EEC.</p></Need>
            <Source>NG 3.10.4–5, 3.20.5–6 · MAX 3.10.3–4, 3.20.4–6</Source>
          </section>

          <section className="course-section" id="visual">
            <span className="section-num">07 / VISUAL INDICATION OF ICE</span>
            <h2>The crew must monitor natural ice-accretion cues because the protected surfaces do not provide a single flight-deck ice quantity display.</h2>
            <ul className="study-points"><li><strong>Below the wiper blades:</strong> water runs upward toward the blades in flight, so ice can appear around their lower edge early.</li><li><strong>Wiper attachment nut:</strong> accumulation on this exposed fitting is a useful confirmation that ice may also exist elsewhere on the airframe.</li><li><strong>Center windshield pillar:</strong> accumulation here indicates significant icing exposure, but it does not provide a certified severity measurement.</li><li><strong>Wing:</strong> inspect the visible leading-edge area and cues identified by the operator.</li></ul>
            <Deep title="Go deeper · Optional NG ice detection system"><p>An optional ice detection system exists on the 737 NG, although relatively few aircraft are equipped with it. An additional detector probe is installed on the lower left fuselage below the flight deck. <strong>ICING</strong> illuminates while ice is detected. After a previous detection, <strong>NO ICE</strong> illuminates when the probe no longer detects ice and is cancelled by pressing the light. An <strong>ICE DETECTOR</strong> light on the anti-ice panel indicates a detector-system failure. Installed equipment and indication logic must be confirmed in the aircraft’s applicable manuals.</p></Deep>
            <aside className="study-tip"><strong>TIP · TURNAROUND ENGINE CHECK</strong><p>Ice can remain on the rear side of the fan blades where it is difficult to see from directly in front of the engine. During a cold-weather turnaround, inspect behind the fan blades from the permitted viewing position and follow the operator’s engine inspection procedure.</p></aside>
            <Warning title="VISUAL CUES ARE APPROXIMATE">Ice can accumulate away from the crew’s best viewing area. Use the applicable atmospheric criteria and operating procedure; do not wait for a large visible deposit before applying required anti-ice.</Warning>
            <h3>Cold-soaked fuel frost</h3>
            <p>Cold fuel remaining after a long flight can cool the wing skin enough for frost to form over the tanks, including in above-freezing ambient conditions. This non-environmental icing may appear on the lower and upper surfaces. Frost visible below the wing outboard of measuring stick No. 4 can indicate frost on the upper surface.</p>
            <Warning title="CSFF DISPATCH CRITERIA">Cold-soaked fuel frost is acceptable only where the aircraft has an approved defined area and every condition in the applicable inspection and dispatch procedure is satisfied. Frost outside that area, or frost that fails the permitted thickness and environmental criteria, must be removed using the approved deicing or anti-icing procedure.</Warning>
            <Source>Course synthesis sheet · applicable operator procedures</Source>
          </section>

          <section className="course-section" id="stall">
            <span className="section-num">08 / STALL-WARNING LOGIC</span>
            <h2>Anti-ice selection changes stall-warning margins so the aircraft accounts for the aerodynamic effect of icing.</h2>
            <StallLogicDiagram />
            <ul className="study-points"><li><strong>Engine anti-ice ON:</strong> icing logic is active.</li><li><strong>Engine anti-ice OFF:</strong> normal logic returns only if wing anti-ice has not been used in flight.</li><li><strong>Wing anti-ice used in flight:</strong> icing logic remains active for the rest of that flight, even after the switch is turned OFF.</li></ul>
            <Warning title="VREF IS NOT UPDATED">The logic adjusts stick shaker and minimum maneuver-speed bars on the airspeed indication. FMC-displayed VREF is not adjusted automatically.</Warning>
            <Need title="Wing use latches the logic"><p>After wing anti-ice has been used in flight, icing stall-warning logic remains active until the flight ends.</p></Need>
            <Source>NG 3.10.4, 3.20.5, 3.20.7 · MAX 3.10.4–5, 3.20.5, 3.20.7</Source>
          </section>
          <SystemPager current="Anti-Ice, Rain" />
        </article>
        <aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>NG first. MAX alongside.</h3><p className="muted">Differences are placed beside the system they affect.</p><Link className="button" href="/academy">Quiz access →</Link></div></aside>
      </div>
    </main>
  );
}
