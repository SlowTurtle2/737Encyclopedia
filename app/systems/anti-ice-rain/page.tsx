import Link from '@/components/site-link';
import Contents from '../fuel/contents';
import { StallLogicDiagram, WingAntiIceDiagram } from './diagrams';

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
            <Warning title="WINDOW HEAT INOPERATIVE">If any required heated window loses its heating function, apply the applicable dispatch procedure. The restriction given in the course material is a maximum of <strong>250 kt below FL100</strong>.</Warning>
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
            <p>The spring-loaded <strong>PWR TEST</strong> position provides a confidence test of available window heating. The <strong>OVHT</strong> position simulates an overheat condition.</p>
            <h3>Warning</h3>
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
            <div className="selector-strip"><span>PARK</span><span>INT · 7 s</span><span>LOW</span><span>HIGH</span></div>
            <ul className="study-points"><li><strong>PARK:</strong> stops the motor and stows the blade.</li><li><strong>INT:</strong> one sweep cycle approximately every seven seconds.</li><li><strong>LOW / HIGH:</strong> continuous operation at the selected speed.</li></ul>
            <Warning title="DRY WINDSHIELD">Operating the wipers on a dry windshield can scratch the windshield.</Warning>
            <Need title="Two independent selectors"><p>The captain controls the left wiper and the first officer controls the right wiper.</p></Need>
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
            <Max>The supplied MAX uses AUTO/ON probe-heat switches. Some earlier NG aircraft use OFF/ON switches and therefore have no automatic mode: the crew must select probe heat ON. Later or modified NG aircraft may also use AUTO/ON switches, so the installed panel remains the controlling reference.</Max>
            <h3>Warning</h3>
            <p>An amber probe-heat light means that the related probe or sensor is not being heated. It identifies loss of the expected heating function rather than the presence of ice.</p>
            <Warning title="STANDBY POWER">On standby power, only the captain’s pitot probe is heated. The CAPT PITOT light does not indicate a heater failure while operating in this configuration, and the standby airspeed pitot probe is not heated.</Warning>
            <Deep title="Go deeper · Panel effectivity"><p>The supplied NG FCOM shows both OFF/ON and AUTO/ON panels according to service-bulletin status. Always identify the installed switch positions before applying a memorized flow.</p></Deep>
            <Need title="Static ports are not heated"><p>The amber lights monitor probe heating, except that their status indication is unavailable on standby power.</p></Need>
            <Source>NG 3.10.3, 3.20.5 · MAX 3.10.3, 3.20.4</Source>
          </section>

          <section className="course-section" id="wing">
            <span className="section-num">05 / WING ANTI-ICE</span>
            <h2>Bleed air heats the three inboard leading-edge slats on each wing; the leading-edge flaps and outboard slats remain unheated.</h2>
            <WingAntiIceDiagram />
            <h3>In flight</h3><p>Selecting WING ANTI-ICE ON opens both AC motor-operated control valves and activates icing stall-warning logic. Duct-temperature and thrust-setting logic do not control valve operation in flight.</p>
            <h3>On the ground</h3><p>Both valves open only while both engines remain below the takeoff-warning thrust setting and both distribution ducts remain below the thermal-switch temperature. High thrust or a hot duct closes the valves; they reopen when both conditions return to normal. The switch stays ON but automatically trips OFF at lift-off.</p>
            <div className="indication-grid"><div className="indication blue"><strong>NG · VALVE OPEN</strong><p>Bright blue means transit or disagreement; dim blue means the valve is open.</p></div><div className="indication amber"><strong>MAX · L/R VALVE</strong><p>Amber momentarily in transit; steady amber means valve position disagrees with the switch.</p></div></div>
            <Max>MAX wing-valve indications are amber and normally extinguished when valve position agrees with the switch. The supplied NG uses blue VALVE OPEN lights: dim when open and bright during transit or disagreement.</Max>
            <Need title="Only the inboard slats"><p>Wing anti-ice is effective with the slats in any position and uses engine bleed air.</p></Need>
            <Source>NG 3.10.6, 3.20.6–8 · MAX 3.10.5–6, 3.20.6–8</Source>
          </section>

          <section className="course-section" id="engine">
            <span className="section-num">06 / ENGINE ANTI-ICE</span>
            <h2>Engine bleed air flows through a controlled valve to prevent ice from forming on each engine cowl lip.</h2>
            <ul className="study-points"><li><strong>Control:</strong> one ENG ANTI-ICE switch per engine; available on the ground and in flight.</li><li><strong>Valve:</strong> electrically controlled and pressure actuated.</li><li><strong>COWL ANTI-ICE:</strong> amber indicates excessive pressure downstream of the cowl anti-ice valve.</li><li><strong>TAI:</strong> green when the cowl valve is open; amber when valve position disagrees with the switch.</li></ul>
            <div className="indication-grid"><div className="indication blue"><strong>NG · COWL VALVE OPEN</strong><p>Dim blue when open; bright blue during transit or when position disagrees.</p></div><div className="indication amber"><strong>MAX · COWL VALVE</strong><p>Amber momentarily during transit and steady for a position disagreement; otherwise extinguished.</p></div></div>
            <Max>The MAX also protects the engine core. The EEC automatically directs bleed air to the core as required from engine and atmospheric data, with no crew input or indication during normal operation. An amber ENG ANTI-ICE light indicates that cowl thermal anti-ice has been inhibited by a failure or that a core anti-ice valve has failed closed.</Max>
            <Deep title="Go deeper · MAX idle logic"><p>With engine anti-ice ON, the supplied MAX uses icing idle with flaps UP and approach idle with flaps below 15° or at 15° and above. With engine anti-ice OFF, it uses flight idle below 15° and approach idle at 15° or more.</p></Deep>
            <Need title="Cowl lip on NG · cowl and core on MAX"><p>The flight crew directly selects cowl anti-ice. MAX core anti-ice is automatic through the EEC.</p></Need>
            <Source>NG 3.10.4–5, 3.20.5–6 · MAX 3.10.3–4, 3.20.4–6</Source>
          </section>

          <section className="course-section" id="visual">
            <span className="section-num">07 / VISUAL INDICATION OF ICE</span>
            <h2>The crew must monitor natural ice-accretion cues because the protected surfaces do not provide a single flight-deck ice quantity display.</h2>
            <ul className="study-points"><li><strong>Windshield-wiper area:</strong> visible accumulation around the wiper can provide an early external cue.</li><li><strong>Windshield:</strong> broader accumulation may indicate more severe icing.</li><li><strong>Wing:</strong> inspect the visible leading-edge area and cues identified by the operator.</li></ul>
            <Warning title="VISUAL CUES ARE APPROXIMATE">Ice can accumulate away from the crew’s best viewing area. Use the applicable atmospheric criteria and operating procedure; do not wait for a large visible deposit before applying required anti-ice.</Warning>
            <Need title="Look outside, then use the procedure"><p>Visual accumulation is one cue. Temperature, visible moisture and the operator’s defined icing criteria determine the required action.</p></Need>
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
        </article>
        <aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>NG first. MAX alongside.</h3><p className="muted">Differences are placed beside the system they affect.</p><Link className="button" href="/academy">Quiz access →</Link></div></aside>
      </div>
    </main>
  );
}
