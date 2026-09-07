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
function Placeholder({ children }: { children: React.ReactNode }) { return <div className="illustration-placeholder"><span>ILLUSTRATION TO BE ADDED</span><p>{children}</p></div>; }

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
        <figure className="figure course-photo"><img src="/images/fire-protection-main-components.png" alt="737 showing the principal engine, APU, wheel-well and cargo fire-protection components" /><figcaption>Main fire-protection detector loops, smoke detectors and extinguisher bottles.</figcaption></figure>
        <Need title="No wheel-well extinguisher"><p>The main wheel well has fire detection, but no extinguishing system. The nose wheel well has neither fire detection nor extinguishing.</p></Need>
        <Source>NG 8.20.1 · MAX 8.20.1</Source>
      </section>

      <section className="course-section" id="engine">
        <span className="section-num">02 / ENGINE FIRE PROTECTION</span>
        <h2>Each engine uses two detector loops for both overheat and fire sensing, while two bottles are shared across both engines.</h2>
        <h3>Engine fire detection</h3>
        <p>Engine detection is powered by the battery bus. Each engine has loops A and B. In <strong>NORMAL</strong>, both loops must normally sense the temperature rise before an alert is generated. An overheat threshold produces the ENG OVERHEAT caution; a higher fire threshold produces the fire warning.</p>
        <ul className="study-points">
          <li><strong>Overheat:</strong> both MASTER CAUTION lights, OVHT/DET annunciator and the related ENG OVERHEAT light illuminate.</li>
          <li><strong>Fire:</strong> the fire bell sounds, both master FIRE WARN lights and the related engine fire switch illuminate; the engine start lever also illuminates where installed.</li>
          <li><strong>One loop fails in NORMAL:</strong> the failed loop is automatically deselected and the remaining loop continues alone, without a flight deck indication.</li>
          <li><strong>Both loops fail:</strong> the FAULT light illuminates and detection for that engine is inoperative.</li>
          <li><strong>A or B selected:</strong> only the selected loop operates. A failure of that loop illuminates FAULT.</li>
        </ul>
        <Placeholder>Engine/APU overheat and fire protection panel.</Placeholder>
        <Warning title="SINGLE-LOOP FAILURE CAN BE HIDDEN">With the selector in NORMAL, failure of one engine detector loop has no flight deck indication. The remaining loop becomes the active single-loop detector.</Warning>
        <Deep title="Go deeper · Test and faulty-loop diagnosis"><p>Hold the FAULT/INOP and OVHT/FIRE TEST switch at <strong>OVHT/FIRE</strong>. Both engine fire switches and both ENG OVERHEAT lights should illuminate. If the expected indication for one engine is missing, select loop <strong>A</strong> for that engine and repeat the test, then select loop <strong>B</strong> and repeat it. The loop that does not produce the expected fire/overheat indication is the faulty loop. Return the selector to <strong>NORMAL</strong> after the check and apply the approved maintenance or operating procedure.</p></Deep>
        <h3>Engine fire extinguisher</h3>
        <p>The hot battery bus powers the extinguishing system, so it remains available independently of the normal electrical configuration. Either bottle can be discharged into either engine.</p>
        <p>Pulling the illuminated engine fire switch isolates the affected engine by closing the engine and spar fuel shutoff valves, engine bleed valve and hydraulic fluid shutoff valve. It trips the generator, disables the related thrust reverser and arms one squib on each bottle. Rotating the switch discharges one bottle; rotating it the opposite way discharges the remaining bottle.</p>
        <ul className="study-points"><li><strong>Fire switch locked:</strong> protected against inadvertent operation.</li><li><strong>Fire switch illuminated or ENG OVERHEAT:</strong> the switch unlocks automatically; manual override remains available.</li><li><strong>L/R BOTTLE DISCHARGED:</strong> illuminates amber a few seconds after discharge, or if bottle pressure is low.</li></ul>
        <figure className="figure course-photo fire-schematic-photo"><img src="/images/engine-fire-extinguisher-schematic.png" alt="Engine fire extinguisher schematic showing two bottles available to either engine" /><figcaption>Either extinguisher bottle can be discharged into either engine.</figcaption></figure>
        <Need title="Two bottles · either engine"><p>Both bottles are common to both engines. The direction in which the fire switch is rotated selects the bottle, while the pulled switch selects the engine.</p></Need>
        <Source>NG 8.20.1–3 · MAX 8.20.1–3</Source>
      </section>

      <section className="course-section" id="apu">
        <span className="section-num">03 / APU FIRE PROTECTION</span>
        <h2>The APU combines one fire loop, automatic shutdown logic and a dedicated bottle available from both flight deck and ground controls.</h2>
        <h3>APU fire detection</h3>
        <p>A single battery-bus-powered loop detects an APU fire; there is no separate APU overheat threshold. A loop failure illuminates <strong>APU DET INOP</strong>. An APU fire sounds the fire bell, illuminates both master FIRE WARN lights and the APU fire switch, and automatically shuts down the APU.</p>
        <p>On the ground, the horn sounds and the red APU fire warning light flashes in the right main wheel well so ground personnel receive the warning without flight deck access.</p>
        <h3>APU fire extinguisher</h3>
        <p>One bottle is powered by the hot battery bus. Pulling the APU fire switch backs up the automatic shutdown, closes the fuel shutoff valve, bleed valve and inlet door, trips the generator, and arms the extinguisher squib. Rotating the switch in either direction discharges the bottle.</p>
        <p>The ground control panel provides an APU fire-control handle, bottle-discharge switch and horn cutout. The amber <strong>APU BOTTLE DISCHARGED</strong> light illuminates after discharge or when bottle pressure is low.</p>
        <Placeholder>APU ground fire-control panel and extinguisher bottle.</Placeholder>
        <Need title="Detection: battery bus · discharge: hot battery bus"><p>Ground personnel can shut down the APU, silence the horn and discharge the bottle from the right main wheel well.</p></Need>
        <Source>NG 8.20.4–5 · MAX 8.20.4–5</Source>
      </section>

      <section className="course-section" id="wheel-well">
        <span className="section-num">04 / WHEEL-WELL FIRE DETECTION</span>
        <h2>The main wheel well is monitored for fire, but the aircraft carries no extinguishing system for this zone.</h2>
        <p>The detector is powered by AC transfer bus 2 and the battery bus. A detected fire sounds the fire bell, illuminates both master FIRE WARN lights and illuminates the red <strong>WHEEL WELL</strong> light. The warning remains until detector temperature falls below its onset threshold.</p>
        <Max>The 737 NG uses a single detector loop in the main wheel well. The 737 MAX uses a dual detector loop. Neither version has a main-wheel-well extinguisher, and neither has fire detection in the nose wheel well.</Max>
        <Warning title="NO EXTINGUISHER">There is no flight deck discharge action for a wheel-well fire. The applicable non-normal response uses aircraft configuration and airflow to manage the condition.</Warning>
        <Placeholder>Main wheel-well detector-loop locations.</Placeholder>
        <Source>NG 8.20.5 · MAX 8.20.5</Source>
      </section>

      <section className="course-section" id="cargo">
        <span className="section-num">05 / CARGO FIRE PROTECTION</span>
        <h2>Smoke detectors identify the affected compartment and a shared bottle system suppresses the fire throughout the diversion.</h2>
        <h3>Cargo fire detection</h3>
        <p>DC buses 1 and 2 power dual-loop smoke detection in both forward and aft cargo compartments. Both loops normally must sense smoke. Loss of power to one loop converts the system automatically to single-loop detection; a detector failure can be handled manually with the DET SELECT switch.</p>
        <ul className="study-points"><li><strong>FWD or AFT fire:</strong> the fire bell sounds, both master FIRE WARN lights illuminate and the corresponding cargo fire light illuminates.</li><li><strong>Warning after discharge:</strong> the cargo light may extinguish, remain illuminated or re-illuminate because smoke or extinguishing agent remains detectable.</li><li><strong>DETECTOR FAULT:</strong> identifies a loop or detector problem during the applicable test; cargo-panel lights are not tied to MASTER CAUTION.</li></ul>
        <h3>Cargo fire suppression</h3>
        <p>Pushing the appropriate <strong>FWD</strong> or <strong>AFT ARMED</strong> switch selects the compartment and arms its discharge path. Pushing <strong>DISCH</strong> releases the extinguishing agent. The DISCH light may take up to 30 seconds to illuminate.</p>
        <Max>The MAX uses two Halon bottles: a 25 lb high-rate bottle discharges immediately and starts a 15-minute timer, then a 13 lb low-rate bottle meters agent into the selected compartment. Total suppression time is 75 minutes: 60 minutes for diversion plus a 15-minute reserve. NG installation varies by effectivity: the supplied FCOM includes a single-bottle 75-minute system and a two-bottle 195-minute system.</Max>
        <Warning title="SUPPRESSION, NOT GUARANTEED EXTINGUISHING">The system is designed to suppress a cargo fire until landing. Smoke can remain or continue, and the optical detectors can respond to the extinguishing agent itself.</Warning>
        <Placeholder>Cargo detector loops, bottle arrangement and discharge nozzles.</Placeholder>
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
        <Placeholder>Lavatory smoke detector and automatic waste-bin extinguisher.</Placeholder>
        <Need title="Local warning · automatic bottle"><p>Lavatory smoke produces no flight deck indication, and extinguisher discharge is also not indicated in the flight deck.</p></Need>
        <Source>NG 8.10.9–11, 8.20.7–8 · MAX 8.10.9–10, 8.20.7</Source>
      </section>

      <SystemPager current="Fire Protection" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Detection, isolation and discharge.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
