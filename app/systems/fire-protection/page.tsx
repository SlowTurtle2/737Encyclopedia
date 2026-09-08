import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = {
  title: 'Fire Protection | 737Encyclopedia',
  description: '737 NG and MAX engine, APU, wheel-well, cargo and lavatory fire protection systems.',
};

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }
function Source({ children }: { children: React.ReactNode }) { return <p className="source">REFERENCE · {children}</p>; }

const sections = [
  ['overview', 'The big picture'], ['engine', 'Engine fire protection'],
  ['apu', 'APU fire protection'], ['wheel-well', 'Wheel-well fire detection'],
  ['cargo', 'Cargo fire protection'], ['lavatory', 'Lavatory'],
];

export default function FireProtection() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / FIRE PROTECTION · FCOM CHAPTER 8</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="overview">
        <span className="section-num">01 / THE BIG PICTURE</span>
        <h2>The 737 detects fire or overheat in critical zones and provides dedicated extinguishing or suppression where an airborne response is possible.</h2>
        <ul className="study-points">
          <li><strong>Engines:</strong> dual-loop overheat and fire detection, with two shared extinguisher bottles that can be directed to either engine.</li>
          <li><strong>APU:</strong> single-loop fire detection and one dedicated extinguisher bottle, controllable from the flight deck or right main wheel well.</li>
          <li><strong>Main wheel well:</strong> fire detection only. There is no wheel-well extinguisher and no nose-wheel-well detector.</li>
          <li><strong>Cargo compartments:</strong> dual-loop smoke detection and a shared suppression system selectable to the forward or aft compartment.</li>
          <li><strong>Lavatories:</strong> local smoke detection plus an automatic, heat-activated extinguisher beneath each sink.</li>
        </ul>
        <Need title="No wheel-well extinguisher"><p>The main wheel well has fire detection, but no extinguishing system. The nose wheel well has neither fire detection nor extinguishing.</p></Need>
        <Source>NG 8.20.1 · MAX 8.20.1</Source>
      </section>

      <section className="course-section" id="engine">
        <span className="section-num">02 / ENGINE FIRE PROTECTION</span>
        <h2>Each engine uses two detector loops for both overheat and fire sensing, while two bottles are shared across both engines.</h2>
        <h3>Engine fire detection</h3>
        <p>Engine detection is powered by the battery bus. Each engine has two detector loops, A and B. In <strong>NORMAL</strong>, both loops must normally sense the temperature rise before an alert is generated. If one loop fails, the system automatically deselects it and the remaining loop continues as a single-loop detector without a flight deck indication. An overheat threshold produces the ENG OVERHEAT caution. A higher fire threshold produces the fire warning.</p>
        <figure className="figure course-photo"><img src="/images/engine-fire-protection-panel.png" alt="737 engine and APU overheat and fire protection panel" /><figcaption>Engine and APU overheat/fire detection, fire switches and extinguisher-test controls.</figcaption></figure>
        <div className="emergency-light-card"><img src="/images/engine-overheat-light.png" alt="Amber ENG 1 OVERHEAT light" /><div><strong>ENG OVERHEAT</strong><p>Illuminates amber when the active detection logic senses an overheat condition in the related engine. Both MASTER CAUTION lights and the OVHT/DET system annunciator also illuminate. The light remains illuminated until detector temperature falls below the overheat onset threshold.</p></div></div>
        <div className="emergency-light-card"><img src="/images/engine-fire-switch-light.png" alt="Illuminated red engine 2 fire switch" /><div><strong>ENGINE FIRE</strong><p>The related engine fire switch illuminates red, the fire warning bell sounds and both master FIRE WARN lights illuminate. The related engine start lever also illuminates where installed, together with all related engine-overheat indications.</p></div></div>
        <div className="emergency-light-card"><img src="/images/fire-fault-light.png" alt="Amber FAULT light" /><div><strong>FAULT</strong><p>In NORMAL, illuminates when both detector loops fail. With A or B selected, it illuminates when the selected loop fails. The OVHT/DET system annunciator and both MASTER CAUTION lights also illuminate.</p></div></div>
        <Deep title="Go deeper · Detector-loop selection"><p>With the selector in <strong>NORMAL</strong>, failure of both loops illuminates FAULT and makes detection for that engine inoperative. Selecting <strong>A</strong> or <strong>B</strong> makes the system operate from that loop alone; the non-selected loop is not monitored, and failure of the selected loop illuminates FAULT.</p></Deep>
        <h3>Engine fire extinguisher</h3>
        <p>The hot battery bus powers the extinguishing system, so it remains available independently of the normal electrical configuration. Either bottle can be discharged into either engine.</p>
        <p>Pulling the illuminated engine fire switch isolates the affected engine by closing the engine and spar fuel shutoff valves, engine bleed valve and hydraulic fluid shutoff valve. It trips the generator, disables the related thrust reverser and arms one squib on each bottle. Rotating the switch discharges one bottle; rotating it the opposite way discharges the remaining bottle.</p>
        <ul className="study-points"><li><strong>Fire switch locked:</strong> protected against inadvertent operation.</li><li><strong>Fire switch illuminated or ENG OVERHEAT:</strong> the switch unlocks automatically; manual override remains available.</li></ul>
        <div className="emergency-light-card"><img src="/images/engine-bottle-discharged-light.png" alt="Amber L BOTTLE DISCHARGED light" /><div><strong>L / R BOTTLE DISCHARGED</strong><p>Illuminates amber a few seconds after the related extinguisher bottle is discharged. It also illuminates if pressure in that bottle is low.</p></div></div>
        <Need title="Two bottles · either engine"><p>Both bottles are common to both engines. The direction in which the fire switch is rotated selects the bottle, while the pulled switch selects the engine.</p></Need>
        <h3>Fire test</h3>
        <p><strong>FAULT/INOP test:</strong> hold the FAULT/INOP and OVHT/FIRE TEST switch at FAULT/INOP to check the engine and APU fault-monitoring circuits. Both MASTER CAUTION lights, the OVHT/DET system annunciator, the amber FAULT light and the amber APU DET INOP light must illuminate.</p>
        <p className="test-paragraph-spaced"><strong>OVHT/FIRE test:</strong> hold the switch at OVHT/FIRE to check the engine overheat/fire loops, APU fire loop and main-wheel-well detector. Confirm the fire warning bell, both master FIRE WARN lights, both MASTER CAUTION lights, the OVHT/DET annunciator, both engine fire switches, both ENG OVERHEAT lights and the APU fire switch. Both engine start levers illuminate where installed. With AC power available, the WHEEL WELL light illuminates; on the ground, the wheel-well APU horn sounds and its APU fire warning light flashes.</p>
        <Warning title="SINGLE-LOOP FAILURE CAN BE HIDDEN">With the selector in NORMAL, failure of one engine detector loop has no flight deck indication. The remaining loop becomes the active single-loop detector.</Warning>
        <Need title="Two test positions · two different purposes"><p>FAULT/INOP checks monitoring of failed detector circuits. OVHT/FIRE simulates the temperature-detection paths and verifies the associated warnings.</p></Need>
        <Source>NG 8.20.1–3, 8.20.8–9 · MAX 8.20.1–3, 8.20.7–8</Source>
      </section>

      <section className="course-section" id="apu">
        <span className="section-num">03 / APU FIRE PROTECTION</span>
        <h2>The APU combines one fire loop, automatic shutdown logic and a dedicated bottle available from both flight deck and ground controls.</h2>
        <h3>APU fire detection</h3>
        <p>A single battery-bus-powered loop detects an APU fire; there is no separate APU overheat threshold. A loop failure illuminates <strong>APU DET INOP</strong>. An APU fire sounds the fire bell, illuminates both master FIRE WARN lights and the APU fire switch, and automatically shuts down the APU.</p>
        <div className="emergency-light-card"><img src="/images/apu-det-inop-light.png" alt="Amber APU DET INOP light" /><div><strong>APU DET INOP</strong><p>Illuminates amber when the single APU detector loop has failed. The APU fire-detection system is then inoperative; both MASTER CAUTION lights and OVHT/DET also illuminate.</p></div></div>
        <p>On the ground, the horn sounds and the red APU fire warning light flashes in the right main wheel well so ground personnel receive the warning without flight deck access.</p>
        <h3>APU fire extinguisher</h3>
        <p>One bottle is powered by the hot battery bus. Pulling the APU fire switch backs up the automatic shutdown, closes the fuel shutoff valve, bleed valve and inlet door, trips the generator, and arms the extinguisher squib. Rotating the switch in either direction discharges the bottle.</p>
        <div className="emergency-light-card"><img src="/images/apu-bottle-discharged-light.png" alt="Amber APU BOTTLE DISCHARGED light" /><div><strong>APU BOTTLE DISCHARGED</strong><p>Illuminates amber a few seconds after the APU extinguisher bottle is discharged. It also illuminates if bottle pressure is low.</p></div></div>
        <h3>APU ground control</h3>
        <p>The ground control panel in the right main wheel well allows ground personnel to respond without entering the flight deck.</p>
        <figure className="figure course-photo fire-schematic-photo"><img src="/images/apu-ground-fire-control.png" alt="APU ground fire-control panel with fire handle, bottle discharge switch and horn cutout" /><figcaption>APU fire controls in the right main wheel well.</figcaption></figure>
        <ul className="study-points"><li><strong>Fire control handle — pull down:</strong> arms the local bottle-discharge switch, closes the APU fuel shutoff and bleed-air valves, closes the APU inlet door, and trips the generator control relay and breaker.</li><li><strong>BOTTLE DISCHARGE — move left:</strong> discharges the APU extinguisher, provided the local fire-control handle has first been pulled.</li><li><strong>HORN CUTOUT — push:</strong> silences the fire bell and wheel-well horn; the red APU fire light stops flashing and remains steadily illuminated.</li></ul>
        <Need title="Detection: battery bus · discharge: hot battery bus"><p>Ground personnel can shut down the APU, silence the horn and discharge the bottle from the right main wheel well.</p></Need>
        <Source>NG 8.20.4–5 · MAX 8.20.4–5</Source>
      </section>

      <section className="course-section" id="wheel-well">
        <span className="section-num">04 / WHEEL-WELL FIRE DETECTION</span>
        <h2>The main wheel well is monitored for fire, but the aircraft carries no extinguishing system for this zone.</h2>
        <p>The detector is powered by AC transfer bus 2 and the battery bus. A detected fire sounds the fire bell, illuminates both master FIRE WARN lights and illuminates the red <strong>WHEEL WELL</strong> light. The warning remains until detector temperature falls below its onset threshold.</p>
        <p><strong>WHEEL WELL:</strong> the red light illuminates when the main-wheel-well detector senses a fire. The fire warning bell sounds and both master FIRE WARN lights illuminate. The light remains illuminated until detector temperature falls below the onset threshold.</p>
        <Max>The 737 NG uses a single detector loop in the main wheel well. The 737 MAX uses a dual detector loop. Neither version has a main-wheel-well extinguisher, and neither has fire detection in the nose wheel well.</Max>
        <Warning title="NO EXTINGUISHER">There is no flight deck discharge action for a wheel-well fire. The applicable non-normal response uses aircraft configuration and airflow to manage the condition.</Warning>
        <Source>NG 8.20.5 · MAX 8.20.5</Source>
      </section>

      <section className="course-section" id="cargo">
        <span className="section-num">05 / CARGO FIRE PROTECTION</span>
        <h2>Smoke detectors identify the affected compartment and a shared bottle system suppresses the fire throughout the diversion.</h2>
        <figure className="figure course-photo"><img src="/images/cargo-fire-control-panel.png" alt="737 cargo fire control panel with detector selectors, test, forward and aft arm switches, detector fault and discharge controls" /><figcaption>Cargo fire panel: loop selection and test, forward or aft compartment arming, and extinguisher discharge.</figcaption></figure>
        <h3>Cargo fire detection</h3>
        <p>DC buses 1 and 2 power dual-loop smoke detection in both forward and aft cargo compartments. Both loops normally must sense smoke. Loss of power to one loop converts the system automatically to single-loop detection. A detector failure can be handled manually with the DET SELECT switch.</p>
        <div className="emergency-light-card"><img src="/images/cargo-detector-fault-light.png" alt="Amber cargo DETECTOR FAULT light" /><div><strong>DETECTOR FAULT</strong><p>Illuminates amber when one or more detectors in a selected loop has failed in either cargo compartment. Pressing the light tests its bulbs. Cargo-panel cautions are not connected to MASTER CAUTION.</p></div></div>
        <div className="emergency-light-card"><img src="/images/cargo-fwd-fire-and-armed-light.png" alt="Cargo FWD fire warning and ARMED indication" /><div><strong>FWD / AFT FIRE</strong><p>The lower red FWD or AFT light illuminates when the selected detector logic senses smoke in that compartment. The fire bell sounds and both master FIRE WARN lights illuminate. The upper white ARMED light confirms that the extinguisher has been armed for the selected compartment.</p></div></div>
        <h3>Cargo fire suppression</h3>
        <p>Pushing the appropriate <strong>FWD</strong> or <strong>AFT ARMED</strong> switch selects the compartment and arms its discharge path. Pushing <strong>DISCH</strong> releases the extinguishing agent. The DISCH light may take up to 30 seconds to illuminate.</p>
        <div className="emergency-light-card"><img src="/images/cargo-disch-switch.png" alt="Cargo fire DISCH switch and amber discharge light" /><div><strong>DISCH</strong><p>With a compartment armed, press the switch for at least one second to discharge the first or only extinguisher bottle and start the applicable second-bottle timer. The lower amber DISCH light indicates that a bottle has discharged or its pressure is low.</p></div></div>
        <Max>The MAX uses two Halon bottles: a 25 lb high-rate bottle discharges immediately and starts a 15-minute timer, then a 13 lb low-rate bottle meters agent into the selected compartment. Total suppression time is 75 minutes: 60 minutes for diversion plus a 15-minute reserve. NG installation varies by effectivity: the supplied FCOM includes a single-bottle 75-minute system and a two-bottle 195-minute system.</Max>
        <Warning title="SUPPRESSION, NOT GUARANTEED EXTINGUISHING">The system is designed to suppress a cargo fire until landing. Smoke can remain or continue, and the optical detectors can respond to the extinguishing agent itself.</Warning>
        <Deep title="Go deeper · Why the warning can return"><p>Cargo detectors sense airborne particles and cannot distinguish smoke from suppression agent. A re-illuminated FWD or AFT light after discharge does not, by itself, prove that suppression has failed.</p></Deep>
        <Source>NG 8.20.5–7 · MAX 8.20.5–7</Source>
      </section>

      <section className="course-section" id="lavatory">
        <span className="section-num">06 / LAVATORY</span>
        <h2>Each lavatory has local smoke warning and automatic protection for the waste-bin area beneath the sink.</h2>
        <h3>Smoke detection</h3>
        <p>When the lavatory detector senses smoke, a local aural warning sounds and a red alarm or status light illuminates on the detector panel. There is no flight deck indication. Depending on the installed detector, the alarm is silenced locally and resets automatically, or is reset with the INTERRUPT switch once smoke is no longer present.</p>
        <Max>On the supplied MAX, the local alarm is silenced at the activated detector and the system resets automatically after smoke has been absent for 30 seconds. NG reset logic depends on the installed JAMCO or KIDDE detector.</Max>
        <h3>Extinguisher</h3>
        <p>A dedicated extinguisher is installed beneath the sink in each lavatory. Heat activates it automatically and directs extinguishing agent toward the waste container. The flight deck receives no indication that the bottle has discharged.</p>
        <Need title="Local warning · automatic bottle"><p>Lavatory smoke produces no flight deck indication, and extinguisher discharge is also not indicated in the flight deck.</p></Need>
        <Source>NG 8.10.9–11, 8.20.7–8 · MAX 8.10.9–10, 8.20.7</Source>
      </section>

      <SystemPager current="Fire Protection" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Detection, isolation and discharge.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
