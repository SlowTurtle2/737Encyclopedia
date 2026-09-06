import Link from '@/components/site-link';
import Contents from '../fuel/contents';
import { ProtectionOverview, StallLogicDiagram, WingAntiIceDiagram } from './diagrams';

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
            <ProtectionOverview />
            <div className="system-family-grid">
              <div><strong>Electrical heat</strong><p>Flight deck windows, pitot probes, alpha vanes and the temperature probe.</p></div>
              <div><strong>Thermal anti-ice</strong><p>Engine cowl lips and the three inboard leading-edge slats on each wing.</p></div>
              <div><strong>Rain removal</strong><p>Two windshield wipers and a permanent rain-repellent coating on the forward windows.</p></div>
              <div><strong>Flight protection</strong><p>Dedicated stall-warning logic when engine or wing anti-ice is used.</p></div>
            </div>
            <Need title="Three protection methods"><p><strong>Electrical heat · bleed-air heat · windshield wipers.</strong></p></Need>
            <Source>NG / MAX 3.20.1</Source>
          </section>

          <section className="course-section" id="windows">
            <span className="section-num">02 / FLIGHT DECK WINDOW HEAT</span>
            <h2>Electrical heating keeps windows No. 1 and No. 2 clear and maintains their strength for bird impact protection.</h2>
            <ul className="study-points">
              <li><strong>FWD switches:</strong> control left and right window No. 1.</li>
              <li><strong>SIDE switches:</strong> control left and right window No. 2.</li>
              <li><strong>Window No. 3:</strong> not electrically heated.</li>
              <li><strong>Temperature control:</strong> automatic after the related switch is selected ON.</li>
            </ul>
            <div className="indication-grid">
              <div className="indication green"><strong>ON</strong><p>Green: heat is being applied. The light may extinguish when the correct temperature is reached.</p></div>
              <div className="indication amber"><strong>OVERHEAT</strong><p>Amber: overheat detected or electrical power to that window has been interrupted.</p></div>
            </div>
            <p>If an overheat is detected, the controller automatically removes power from the affected window. The spring-loaded PWR TEST selector provides a confidence test; OVHT simulates an overheat condition.</p>
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
            <ul className="study-points"><li><strong>Heated:</strong> five pitot probes, two alpha vanes and the total-air-temperature probe.</li><li><strong>Not heated:</strong> static ports.</li><li><strong>Amber probe light:</strong> the related probe is not heated.</li><li><strong>AUTO:</strong> both A and B systems receive power automatically when either engine is running.</li><li><strong>ON:</strong> supplies power directly to the related heat system.</li></ul>
            <Warning title="STANDBY POWER">Only the captain’s pitot probe is heated on standby power. The CAPT PITOT light does not show a heater failure in this configuration, and the standby airspeed pitot probe is not heated.</Warning>
            <Deep title="Go deeper · NG switch effectivity"><p>The supplied NG FCOM shows both OFF/ON and AUTO/ON probe-heat panels depending on service-bulletin status. The supplied MAX configuration uses AUTO/ON switches. Always identify the installed panel.</p></Deep>
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
