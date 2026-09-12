import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = { title: 'Landing Gear | 737Encyclopedia', description: '737 NG and MAX landing gear, nose-wheel steering, brakes, antiskid, autobrake and tires.' };

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }

const sections = [['landing-gear', 'Landing gear'], ['steering', 'Nose wheel steering'], ['brakes', 'Brake system'], ['tires', 'Tires']];

export default function LandingGear() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / LANDING GEAR</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="landing-gear">
        <span className="section-num">01 / LANDING GEAR</span>
        <h2>Two main landing gears and one steerable nose gear are normally extended and retracted by hydraulic system A.</h2>
        <p>Each gear has two wheels. The main gears retract inboard into open wheel wells and are held retracted by mechanical uplocks. The nose gear retracts forward, is held by an overcenter lock and is enclosed by mechanically linked doors.</p>
        <figure className="figure course-photo main-landing-gear-photo"><img src="/images/b737-main-landing-gear-labeled.png" alt="737 main landing gear with its principal structural components identified" /><figcaption>Main landing gear: shock strut, doors, side and downlock struts, charging valves and uplock roller.</figcaption></figure>
        <h3>Normal command</h3>
        <p>The <strong>LANDING GEAR</strong> lever controls normal extension and retraction. On the ground, an air/ground-controlled lever lock prevents selection to UP. The <strong>LOCK OVRD</strong> control releases this lock if required.</p>
        <ul className="study-points"><li><strong>UP:</strong> hydraulic system A retracts the gear. The main-wheel brakes stop wheel rotation during retraction, while snubbers stop the nose wheels.</li><li><strong>DN:</strong> hydraulic system A releases the uplocks. Hydraulic pressure, gravity and aerodynamic loads extend the gear, and overcenter mechanical and hydraulic locks hold it down.</li></ul>
        <div className="landing-gear-lever-grid"><figure className="figure course-photo"><img src="/images/landing-gear-lever-ng.png" alt="737 NG landing gear lever with UP, OFF and DOWN positions" /><figcaption>737 NG · UP, OFF and DOWN positions.</figcaption></figure><figure className="figure course-photo"><img src="/images/landing-gear-panel-max.png" alt="737 MAX landing gear lever with UP and DOWN positions and no OFF position" /><figcaption>737 MAX · UP and DOWN positions; no OFF position.</figcaption></figure></div>
        <Max>The NG lever has <strong>UP, OFF and DOWN</strong> positions. OFF removes hydraulic pressure after retraction. The MAX lever has only <strong>UP and DOWN</strong>; the PSEU removes hydraulic pressure automatically 10 seconds after all gears are up and locked.</Max>
        <Need title="Gear operating limits"><p><strong>Extension:</strong> 270 kt / M 0.82. <strong>Extended:</strong> 320 kt / M 0.82. <strong>Retraction:</strong> 235 kt.</p></Need>
        <h3>Indication</h3>
        <p>The center panel has one red transit/unsafe light and one green down-and-locked light for each gear. A separate set of three green lights on the aft overhead panel provides redundant down-and-locked indication.</p>
        <ul className="study-points"><li><strong>Green illuminated:</strong> the related gear is down and locked.</li><li><strong>Red illuminated:</strong> the related gear disagrees with lever position, is in transit or is unsafe. It also illuminates when the gear is not down and locked below 800 ft AGL with either forward thrust lever at idle.</li><li><strong>All lights extinguished:</strong> each gear is up and locked with the lever UP.</li><li><strong>Positive down indication:</strong> one green light for each gear, on either the center or overhead panel, confirms that all gears are down and locked.</li></ul>
        <figure className="figure course-photo landing-gear-annunciator-photo"><img src="/images/landing-gear-annunciators.png" alt="Red unsafe and green down-and-locked landing gear annunciator lights" /><figcaption>Red transit or unsafe lights above the green down-and-locked lights.</figcaption></figure>
        <Deep title="Go deeper · Air/ground sensing"><p>Six sensors, two on each landing gear, supply air/ground logic to the PSEU. The resulting ground or flight status configures several aircraft systems and controls the landing-gear lever lock.</p></Deep>
        <h3>Manual gear extension</h3>
        <p>If hydraulic system A pressure is lost, three manual handles beneath the flight deck floor release the right-main, nose and left-main uplocks through cables. Gravity and aerodynamic loads then allow each gear to free-fall to the down-and-locked position.</p>
        <ul className="study-points"><li><strong>Access door open:</strong> manual extension is possible with the landing-gear lever in any position.</li><li><strong>Normal extension remains possible:</strong> hydraulic extension can still be used if system A pressure is available.</li><li><strong>Retraction inhibited:</strong> opening the manual-extension access door disables landing-gear retraction.</li><li><strong>Handle travel:</strong> each handle is pulled fully, approximately 61 cm, to release its related uplock.</li></ul>
        <Warning title="EXTENSION ONLY">The manual system releases the uplocks; it does not provide hydraulic retraction. After manual extension, the gear remains down until the system is correctly reset with hydraulic system A available.</Warning>
        <Need title="Mechanical release · gravity extension"><p>The three handles act independently. Pull and verify each one; a single handle releases only its related gear.</p></Need>
      </section>

      <section className="course-section" id="steering">
        <span className="section-num">02 / NOSE WHEEL STEERING</span>
        <h2>Nose-wheel steering is available on the ground with the nose strut compressed and the landing-gear lever DOWN.</h2>
        <p>Hydraulic system A normally powers the steering metering valve. Selecting <strong>ALT</strong> supplies system B pressure when the aircraft is on the ground and the system B reservoir contains a normal quantity.</p>
        <ul className="study-points"><li><strong>Steering wheel:</strong> primary control, turning the nose wheels up to 78° either side; it overrides rudder-pedal steering.</li><li><strong>Rudder pedals:</strong> limited steering up to 6° either side.</li><li><strong>Airborne:</strong> rudder-pedal steering is progressively removed as the nose strut extends.</li><li><strong>Towing bypass pin:</strong> depressurizes steering for pushback or towing without depressurizing the aircraft hydraulic systems.</li></ul>
        <Deep title="Go deeper · Alternate steering protection"><p>If a hydraulic leak downstream of the Landing Gear Transfer Unit reduces system B reservoir quantity, a sensor closes the transfer valve. This protects remaining system B fluid but causes alternate nose-wheel steering to be lost.</p></Deep>
        <Need title="Normal: system A · alternate: system B"><p>The alternate selection changes only the hydraulic source. Steering remains available only with the aircraft on the ground and the nose gear loaded.</p></Need>
      </section>

      <section className="course-section" id="brakes">
        <span className="section-num">03 / BRAKE SYSTEM</span>
        <h2>Each main wheel has a hydraulically powered multidisc brake; the nose wheels are not braked.</h2>
        <h3>Manual brake</h3>
        <p>Pressing the top of either rudder pedal commands the corresponding left or right main-wheel brakes. The normal brake system uses hydraulic system B. If system B is low or fails, system A automatically supplies the alternate brake system.</p>
        <ul className="study-points"><li><strong>Normal braking:</strong> hydraulic system B with individual-wheel antiskid.</li><li><strong>Alternate braking:</strong> hydraulic system A with antiskid applied to wheel pairs.</li><li><strong>Brake accumulator:</strong> charged by system B and able to provide several brake applications or maintain the parking brake if normal and alternate pressure are lost.</li><li><strong>Parking brake:</strong> fully depress both pedals and pull the PARKING BRAKE lever. Depress the pedals again to release it.</li></ul>
        <Max>The MAX brake-pressure indicator shows approximately 3,000 psi normal, 3,500 psi maximum and 1,000 psi precharge. NG indications use ranges and vary with aircraft configuration.</Max>
        <Warning title="DO NOT PUMP THE BRAKES">With accumulator pressure only, steady pedal application preserves the available braking more effectively. Pumping the pedals consumes the finite accumulator charge.</Warning>
        <h3>Autobrake</h3>
        <p>Autobrake uses hydraulic system B and operates only with the normal brake system. Antiskid protection remains active. Landing selections 1, 2, 3 and MAX command progressively higher deceleration; the system reduces brake pressure when spoilers or reverse thrust contribute to the selected total deceleration.</p>
        <figure className="figure course-photo autobrake-panel-photo"><img src="/images/autobrake-antiskid-panel.png" alt="Autobrake selector, AUTO BRAKE DISARM light and ANTISKID INOP light" /><figcaption>Autobrake selector and brake-system caution lights.</figcaption></figure>
        <div className="course-table-wrap"><table className="course-table"><caption>Autobrake landing selections</caption><thead><tr><th>Selection</th><th>Maximum brake pressure applied</th><th>Target deceleration</th></tr></thead><tbody><tr><td>1</td><td>1,250 psi</td><td>4 ft/s²</td></tr><tr><td>2</td><td>1,500 psi</td><td>5 ft/s²</td></tr><tr><td>3</td><td>2,000 psi</td><td>7.2 ft/s²</td></tr><tr><td>MAX above 80 kt</td><td>3,000 psi</td><td>12 ft/s²</td></tr><tr><td>MAX below 80 kt</td><td>3,000 psi</td><td>14 ft/s²</td></tr><tr><td>RTO</td><td>Full pressure</td><td>Maximum, not deceleration-controlled</td></tr></tbody></table></div>
        <ul className="study-points"><li><strong>Landing arming:</strong> selecting a landing setting initiates a self-test. AUTO BRAKE DISARM illuminates if the test fails.</li><li><strong>Landing activation:</strong> both forward thrust levers at IDLE and main-wheel spin-up.</li><li><strong>After touchdown:</strong> a landing setting may be selected before decelerating through 30 kt; braking begins immediately if the activation conditions are met.</li><li><strong>Disarm after activation:</strong> manual braking, advancing a forward thrust lever, or moving the speed-brake lever to DOWN illuminates AUTO BRAKE DISARM.</li></ul>
        <h4>Rejected takeoff</h4>
        <p>RTO can be selected only on the ground. A successful self-test illuminates AUTO BRAKE DISARM for one to two seconds, then extinguishes it.</p>
        <ul className="study-points"><li><strong>Armed:</strong> aircraft on ground, autobrake and antiskid operative, RTO selected, wheel speed below 60 kt and forward thrust levers at IDLE.</li><li><strong>Rejected below 88 kt:</strong> automatic braking does not activate and RTO remains armed.</li><li><strong>Rejected at or above 88 kt:</strong> retarding the forward thrust levers to IDLE commands maximum automatic braking.</li><li><strong>After liftoff:</strong> RTO disarms automatically, although the selector remains at RTO.</li></ul>
        <Need title="Manual braking always has priority"><p>Applying sufficient pedal pressure disarms an active autobrake application. Full manual pedal braking can produce greater deceleration than MAX landing autobrake.</p></Need>
        <h3>Anti-skid</h3>
        <p>Anti-skid monitors wheel speed and reduces brake pressure when a skid is detected. Protection is available with both normal and alternate braking, and remains available even if both hydraulic systems are lost while accumulator pressure remains.</p>
        <ul className="study-points"><li><strong>Skid protection:</strong> reduces pressure at a skidding wheel or wheel pair.</li><li><strong>Locked-wheel protection:</strong> prevents sustained wheel lock during braking.</li><li><strong>Touchdown protection:</strong> inhibits brake pressure until wheel spin-up confirms ground contact.</li><li><strong>Hydroplane protection:</strong> releases pressure when wheel-speed behavior indicates hydroplaning.</li></ul>
        <p><strong>ANTISKID INOP:</strong> illuminates amber when the antiskid monitoring system detects a fault. Antiskid protection may be partially or completely unavailable depending on the failure.</p>
      </section>

      <section className="course-section" id="tires">
        <span className="section-num">04 / TIRES</span>
        <h2>The tubeless tires are nitrogen-inflated and incorporate protection against overheating and retraction damage.</h2>
        <ul className="study-points"><li><strong>Nitrogen inflation:</strong> reduces the risk of combustion inside a hot tire.</li><li><strong>Pressure marking:</strong> the inflation valve should align with the lightest-point marking on the tire.</li><li><strong>Thermal fuse plugs:</strong> fitted to each inboard main wheel and designed to release tire pressure after excessive brake heating, reducing explosion risk.</li><li><strong>Brake wear indicators:</strong> two pins on each brake unit provide a direct visual check of remaining brake material.</li><li><strong>Maximum tire speed:</strong> 195 kt.</li></ul>
        <p>During retraction, the main-wheel brakes stop wheel rotation before the tires enter the wheel wells. If loose tread on a spinning tire strikes an impact fitting at the wheel-well opening, retraction of that gear stops and the gear free-falls back down. It cannot be retracted again until the fitting is reset or replaced.</p>
        <Max>The MAX nose landing-gear strut is approximately 20 cm longer than the NG installation. This difference increases ground clearance for the larger engine nacelles but does not change the basic cockpit operating logic.</Max>
        <Warning title="HOT BRAKES">Fuse-plug release can occur after heavy braking. Avoid approaching overheated main wheels from the side and allow the required cooling time before further operation.</Warning>
        <Need title="Loose tread can inhibit retraction"><p>The impact fitting protects wheel-well components by stopping retraction and allowing the affected gear to extend again.</p></Need>
      </section>

      <SystemPager current="Landing Gear" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Extension, steering and braking.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
