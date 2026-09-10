import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = { title: 'Air Systems | 737Encyclopedia', description: '737 NG and MAX bleed air, air conditioning, equipment cooling and pressurization systems.' };

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }
function Placeholder({ children }: { children: React.ReactNode }) { return <figure className="schematic-placeholder" aria-label="Illustration placeholder"><span>ILLUSTRATION TO BE ADDED</span><figcaption>{children}</figcaption></figure>; }
function Figure({ src, alt, caption, compact = false, small = false }: { src: string; alt: string; caption: string; compact?: boolean; small?: boolean }) { return <figure className={`figure air-system-figure${compact ? ' compact' : ''}${small ? ' small' : ''}`}><img src={src} alt={alt} /><figcaption>{caption}</figcaption></figure>; }
function Light({ title, src, alt, children }: { title: string; src: string; alt?: string; children: React.ReactNode }) { return <div className="emergency-light-card air-system-alert"><img src={src} alt={alt ?? title} /><div><strong>{title}</strong><p>{children}</p></div></div>; }

const sections = [['schematic', 'Global schematic'], ['bleed', 'Bleed'], ['conditioning', 'Air conditioning'], ['pressurization', 'Pressurization']];

export default function AirSystems() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / AIR SYSTEMS</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="schematic">
        <span className="section-num">01 / GLOBAL SCHEMATIC</span>
        <h2>Bleed air links the pneumatic sources to engine starting, air conditioning, pressurization, anti-ice and several supporting systems.</h2>
        <Need title="One manifold · two normally isolated sides"><p>During normal two-engine operation, each engine supplies its own pack and the isolation valve remains closed. The valve opens when a source or pack configuration requires the two sides to be connected.</p></Need>
        <Figure src="/images/air-system-global-schematic.png" alt="737 bleed-air and air-conditioning distribution schematic" caption="Bleed-air sources, manifold, packs, trim-air distribution and principal pneumatic users." />
      </section>

      <section className="course-section" id="bleed">
        <span className="section-num">02 / BLEED</span>
        <h2>Engines normally supply the pneumatic system in flight; the APU and an external source provide alternative supply on the ground.</h2>
        <h3>Sources</h3>
        <ul className="study-points"><li><strong>Engines:</strong> the normal inflight source. Low-stage compressor air supplies most conditions; the high-stage valve opens when low-stage pressure is insufficient, which typically occurs during descent at low engine thrust.</li><li><strong>APU:</strong> supplies both packs on the ground or one pack in flight and provides pneumatic air for engine start.</li><li><strong>External air:</strong> connects to the right side of the manifold and can supply air conditioning or engine starting.</li></ul>
        <p>The engine bleed valve acts as both a pressure regulator and a shutoff valve. A precooler uses engine fan air to reduce bleed-air temperature before distribution.</p>
        <Max>The NG takes engine bleed air from the 5th and 9th compressor stages. The MAX uses the 4th and 10th stages, with an IASC and ACAU on each side controlling source output and the associated valves digitally.</Max>
        <Deep title="Go deeper · External engine start"><p>Engine No. 1 is normally started first so ground personnel can disconnect the ground-air unit and clear the area after that start. Engine No. 2 is then started using crossbleed air from engine No. 1.</p></Deep>

        <h3>Command</h3>
        <h4>Engine and APU bleed switches</h4>
        <Figure small src="/images/air-system-bleed-panel.png" alt="737 bleed-air control panel" caption="Bleed-air panel: pack, isolation-valve, engine-bleed and APU-bleed controls." />
        <ul className="study-points"><li><strong>ENG BLEED OFF:</strong> commands the related engine bleed valve closed.</li><li><strong>ENG BLEED ON:</strong> allows the related valve to regulate and supply the manifold when pressure and protection logic permit.</li><li><strong>APU BLEED OFF:</strong> commands the APU bleed valve closed.</li><li><strong>APU BLEED ON:</strong> allows APU bleed air into the manifold. The valve also closes automatically when the APU shuts down.</li></ul>
        <h4>Pack switches</h4>
        <ul className="study-points"><li><strong>OFF:</strong> closes the related pack valve.</li><li><strong>AUTO — both packs operating:</strong> each pack regulates to low flow.</li><li><strong>AUTO — one pack operating in flight:</strong> with the flaps up, the operating pack regulates to high flow.</li><li><strong>AUTO — one pack supplied by the APU:</strong> with both engine BLEED switches OFF, the operating pack regulates to high flow.</li><li><strong>HIGH:</strong> commands high pack flow for increased ventilation.</li></ul>
        <p>Automatic high flow for a single engine-supplied pack is inhibited on the ground or with the flaps extended to preserve engine performance.</p>
        <h4>Isolation valve switch</h4>
        <ul className="study-points"><li><strong>CLOSE:</strong> commands the isolation valve closed and separates the left and right manifolds.</li><li><strong>AUTO — closed:</strong> the valve closes when both engine BLEED switches are ON and both PACK switches are in AUTO or HIGH.</li><li><strong>AUTO — open:</strong> the valve opens automatically when either engine BLEED switch or either PACK switch is OFF.</li><li><strong>OPEN:</strong> commands the isolation valve open, joining both manifold sides.</li></ul>

        <h3>Indications and warnings</h3>
        <div className="air-system-light-list"><Light title="BLEED / BLEED TRIP OFF" src="/images/air-system-bleed-trip-off-light.png" alt="Amber BLEED TRIP OFF light">A bleed overtemperature, overpressure or system fault closes the related engine bleed valve and illuminates the light. On the MAX, both BLEED lights can also indicate an incorrect post-takeoff or go-around configuration.</Light><Light title="WING-BODY OVERHEAT" src="/images/air-system-wing-body-overheat-light.png" alt="Amber WING-BODY OVERHEAT light">Indicates a bleed-duct leak in the related engine strut, inboard wing leading edge or air-conditioning bay. The left indication also monitors the keel beam and APU bleed duct.</Light><Light title="DUAL BLEED" src="/images/air-system-dual-bleed-light.png" alt="Amber DUAL BLEED light">Indicates a configuration that can allow engine bleed pressure to backpressure the APU. Engine thrust must remain at idle while the light is illuminated.</Light></div>
        <Max>NG uses amber <strong>BLEED TRIP OFF</strong> lights and a dedicated reset. MAX uses amber <strong>BLEED</strong> lights; its digital controllers can also close an engine bleed valve automatically for reverse-flow protection.</Max>
        <Warning title="DUAL BLEED">Do not advance engine thrust above idle with the DUAL BLEED light illuminated. The indication identifies a possible APU backpressure condition.</Warning>
      </section>

      <section className="course-section" id="conditioning">
        <span className="section-num">03 / AIR CONDITIONING</span>
        <h2>Two packs cool and condition bleed air before it is mixed with filtered recirculated air and distributed to the flight deck and cabin.</h2>
        <h3>Temperature control</h3>
        <Figure compact src="/images/air-system-temperature-panel.png" alt="737 flight deck and cabin temperature control selectors" caption="Flight deck, forward-cabin and aft-cabin temperature selectors and ZONE TEMP indications." />
        <p>Three selectors set the desired temperature for the flight deck, forward cabin and aft cabin over an approximate range of 18°C to 30°C. The packs produce air cold enough for the zone demanding the most cooling; individual trim-air valves then add hot bleed air to the zone ducts as required.</p>
        <ul className="study-points"><li><strong>Two packs or one pack with TRIM AIR ON:</strong> all three zones retain individual temperature control.</li><li><strong>One pack with TRIM AIR OFF:</strong> the operating pack targets the average demand of all three zones.</li><li><strong>All selectors OFF:</strong> the MAX controllers command fixed pack temperatures of approximately 24°C left and 18°C right.</li><li><strong>Duct overheat:</strong> the affected trim-air valve closes and the related zone-temperature light illuminates.</li></ul>
        <Figure src="/images/air-system-temperature-control-schematic.png" alt="737 temperature-control and trim-air distribution schematic" caption="Temperature-control zones, recirculation, mix manifold and trim-air distribution with both packs operating." />
        <Deep title="Go deeper · Controller redundancy"><p>Each pack has primary and standby control, with standby control located in the opposite-side controller. If both controls for one pack fail, that pack can continue uncontrolled until an overtemperature protection trips it. Zone-control failures cause the remaining demands to be averaged as required.</p></Deep>

        <h3>Equipment cooling system</h3>
        <p>Supply fans deliver cool air to flight-deck displays and equipment in the electrical/electronic bay. Exhaust fans collect heated air from those units and from flight-deck electronic and circuit-breaker panels. Each duct has a normal and an alternate fan.</p>
        <ul className="study-points"><li><strong>SUPPLY / EXHAUST NORM:</strong> the normal fan operates.</li><li><strong>ALTN:</strong> the alternate fan operates and should restore airflow within approximately five seconds.</li><li><strong>Smoke detection:</strong> supply- and exhaust-duct detectors monitor the system and generate EQUIP SMOKE on the MAX when smoke is sensed.</li></ul>
        <Max>The MAX equipment-smoke logic automatically cycles the cooling fans and positions the overboard exhaust valve when the related smoke procedure configures both recirculation fans OFF and both packs HIGH.</Max>

        <h3>Recirculation fans</h3>
        <p>Two AC-powered fans draw air from the passenger cabin and equipment bay, filter it and return it to the mix manifold. Recirculation reduces pack load and engine bleed demand while maintaining cabin airflow.</p>
        <ul className="study-points"><li><strong>AUTO in flight:</strong> the left fan stops if either pack is HIGH; the right fan stops only if both packs are HIGH.</li><li><strong>AUTO on ground:</strong> the left fan stops if both packs are HIGH; the right fan continues to operate.</li><li><strong>OFF:</strong> the related fan is commanded off.</li></ul>
        <Need title="Recirculation reduces bleed demand"><p>Filtered cabin air forms a substantial part of total ventilation. Selecting high pack flow progressively removes recirculation so fresh conditioned airflow increases.</p></Need>

        <h3>Indications and warnings</h3>
        <div className="air-system-light-list"><Light title="PACK / PACK TRIP OFF" src="/images/air-system-pack-light.png" alt="Amber PACK light">Indicates a pack overheat or loss of both primary and standby pack control. The related pack valve closes after an overheat trip.</Light><Light title="ZONE TEMP" src="/images/air-system-zone-temp-light.png" alt="Amber ZONE TEMP light">Indicates an overheat in the related zone duct or a temperature-control failure. The associated trim-air valve closes for duct overheat.</Light><Light title="EQUIP COOLING SUPPLY / EXHAUST OFF" src="/images/air-system-equipment-cooling-off-light.png" alt="Amber equipment cooling OFF light">Indicates inadequate airflow in the related supply or exhaust cooling duct. Selecting the associated fan to ALTN should start the alternate fan and extinguish the light after airflow is restored.</Light><Light title="EQUIP SMOKE · MAX" src="/images/air-system-equip-smoke-light.png" alt="Amber EQUIP SMOKE light">Illuminates with MASTER CAUTION and OVERHEAD when smoke is detected in an equipment-cooling duct.</Light></div>
        <Max>The NG commonly uses <strong>PACK TRIP OFF</strong> and individual zone indications. MAX uses <strong>PACK</strong> and ZONE TEMP indications supported by its digital-controller fault logic.</Max>
      </section>

      <section className="course-section" id="pressurization">
        <span className="section-num">04 / PRESSURIZATION</span>
        <h2>The aircraft controls cabin pressure by regulating how much conditioned air leaves through the outflow valves.</h2>
        <h3>Valves and pressure control</h3>
        <p>The main outflow valve near the aft fuselage meters most cabin-air discharge. Two positive pressure-relief valves limit differential pressure to 9.1 psi, while a negative-relief valve prevents ambient pressure from exceeding cabin pressure.</p>
        <div className="air-system-valve-grid"><Figure compact src="/images/air-system-outflow-valve.png" alt="737 powered outflow valve viewed from outside the fuselage" caption="Powered outflow valve." /><Figure compact src="/images/air-system-positive-pressure-relief-valve.png" alt="737 positive-pressure safety relief valve static port" caption="Positive-pressure safety relief valve." /></div>
        <p>The overboard exhaust valve normally vents warm equipment-cooling air directly overboard on the ground and at low differential pressure. At higher inflight differential pressure it closes and directs that warm air around the forward cargo compartment. It opens for increased ventilation when either pack is HIGH and the right recirculation fan is OFF.</p>
        <Placeholder>Pressurization schematic showing the automatic controllers, outflow valve, overboard exhaust valve and pressure-relief valves.</Placeholder>
        <ul className="study-points"><li><strong>Taxi out:</strong> outflow valve fully open at low thrust.</li><li><strong>Takeoff:</strong> higher thrust commands slight prepressurization for a smoother pressure transition.</li><li><strong>Climb:</strong> cabin altitude rises proportionally to aircraft climb.</li><li><strong>Cruise:</strong> the controller maintains the lowest cabin altitude permitted by the pressure schedule.</li><li><strong>Descent:</strong> the cabin descends toward a point slightly below selected landing altitude.</li><li><strong>Taxi in:</strong> the outflow valve slowly opens fully to depressurize the aircraft.</li></ul>

        <h3>Pressurization panel</h3>
        <p>The crew enters planned cruise altitude in <strong>FLT ALT</strong> and destination elevation in <strong>LAND ALT</strong>. Two identical automatic controllers alternate as primary between flights; the other remains immediately available as backup.</p>
        <ul className="study-points"><li><strong>AUTO:</strong> normal automatic controller and DC motor regulate the outflow valve.</li><li><strong>ALTN:</strong> the alternate automatic controller regulates pressure after automatic transfer or manual selection.</li><li><strong>MAN:</strong> a separate standby-DC-powered motor moves the outflow valve directly through the OPEN/CLOSE switch.</li></ul>
        <div className="course-table-wrap"><table className="course-table"><caption>Automatic cruise differential-pressure schedule</caption><thead><tr><th>Selected flight altitude</th><th>Maximum scheduled differential pressure</th></tr></thead><tbody><tr><td>At or below 28,000 ft</td><td>7.45 psi</td></tr><tr><td>28,000–37,000 ft</td><td>7.80 psi</td></tr><tr><td>Above 37,000 ft</td><td>8.35 psi</td></tr></tbody></table></div>
        <Need title="Maximum normal cabin altitude: 8,000 ft"><p>At the maximum certified aircraft altitude of 41,000 ft, the automatic schedule maintains cabin altitude at or below approximately 8,000 ft.</p></Need>

        <h3>Failures and warnings</h3>
        <div className="air-system-light-list"><Light title="AUTO FAIL" src="/images/air-system-auto-fail-light.png" alt="Amber AUTO FAIL light">Indicates loss of DC power, a controller fault, an outflow-valve control fault, or an improperly controlled excessive differential pressure, cabin rate or cabin altitude. The system automatically transfers to the alternate controller.</Light><Light title="ALTN" src="/images/air-system-altn-light.png" alt="Green ALTN light">Indicates that the alternate automatic controller is operating. With AUTO FAIL, it confirms automatic transfer to single-channel operation.</Light><Light title="OFF SCHED DESCENT" src="/images/air-system-off-sched-descent-light.png" alt="Amber OFF SCHED DESCENT light">The aircraft has begun descending before reaching the selected cruise altitude. The controller schedules the cabin back toward takeoff-field elevation unless FLT ALT is changed.</Light><Light title="MANUAL" src="/images/air-system-manual-light.png" alt="Green MANUAL light">Illuminates green when MAN is selected and the crew directly controls outflow-valve position.</Light></div>
        <ul className="study-points"><li><strong>Cabin altitude warning:</strong> an intermittent horn sounds at approximately 10,000 ft cabin altitude.</li><li><strong>Passenger oxygen:</strong> masks deploy automatically at approximately 14,000 ft cabin altitude.</li><li><strong>Automatic failure:</strong> one failed controller transfers control to ALTN; loss of both automatic modes requires MAN.</li></ul>
        <Warning title="MANUAL OUTFLOW VALVE CONTROL">The manual motor moves the valve faster than the automatic motors. A small switch input can create a large cabin-rate change, so monitor cabin altitude, differential pressure and valve position continuously.</Warning>

        <h3>Cargo compartments</h3>
        <p>Both cargo compartments are inside the pressure vessel but have no direct temperature-control zone. Cabin air circulates around their liners and provides indirect heating. The aft outflow path draws cabin air around the aft compartment before discharge.</p>
        <p>The forward cargo compartment also receives heat from equipment-cooling exhaust when the overboard exhaust valve is closed. During a forward cargo fire configuration, the valve moves to its smoke position and equipment-cooling airflow is reconfigured to limit smoke migration.</p>
        <Need title="Pressurized · indirectly heated"><p>Cargo pressure follows cabin pressure. Cargo temperature is influenced by surrounding cabin and equipment-cooling airflow rather than a dedicated temperature selector.</p></Need>
      </section>

      <SystemPager current="Air Systems" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Supply, conditioning and pressure.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
