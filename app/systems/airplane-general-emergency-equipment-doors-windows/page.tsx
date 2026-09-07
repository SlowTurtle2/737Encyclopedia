import Link from '@/components/site-link';
import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = { title: 'Airplane General | 737Encyclopedia', description: '737 NG and MAX dimensions, lighting, signs, oxygen, doors, water and airstair systems.' };

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }
function Source({ children }: { children: React.ReactNode }) { return <p className="source">REFERENCE · {children}</p>; }

const sections = [['dimensions', 'Airplane dimensions'], ['lights', 'Lights'], ['signs', 'Seat belts & no smoking'], ['oxygen', 'Oxygen system'], ['doors', 'Aircraft doors'], ['water', 'Water system'], ['airstair', 'Airstair'], ['access', 'Flight Deck Access Panel']];

export default function AirplaneGeneral() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / AIRPLANE GENERAL · FCOM CHAPTER 1</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="dimensions">
        <span className="section-num">01 / AIRPLANE DIMENSIONS</span>
        <h2>The 737-800 and 737-8200 share the same fuselage length, while their wing geometry and reference height differ.</h2>
        <div className="dimension-compare">
          <article><span>737-800 NG · WINGLETS</span><strong>39.47 m</strong><p>Length</p><strong>35.79 m</strong><p>Wingspan</p><strong>12.62 m</strong><p>Reference height</p></article>
          <article><span>737-8200 MAX</span><strong>39.47 m</strong><p>Length</p><strong>35.92 m</strong><p>Wingspan</p><strong>12.31 m</strong><p>Reference height</p></article>
        </div>
        <figure className="figure course-photo">
          <img src="/images/airplane-dimensions-ng-max.png" alt="Comparison of the 737-800 NG and 737-8200 MAX length, wingspan and reference height" />
          <figcaption>737-800 NG and 737-8200 MAX reference dimensions.</figcaption>
        </figure>
        <ul className="study-points"><li><strong>NG minimum 180° pavement width:</strong> approximately 24.3 m.</li><li><strong>MAX minimum 180° pavement width:</strong> approximately 24.4 m.</li></ul>
        <Need title="Same length · slightly wider MAX"><p>Both are 39.47 m long. The supplied MAX wingspan is 0.13 m greater.</p></Need>
        <Source>NG 1.10.2, 1.10.5 · MAX 1.10.1–2</Source>
      </section>

      <section className="course-section" id="lights">
        <span className="section-num">02 / LIGHTS</span>
        <h2>Exterior lights make the aircraft visible, illuminate its path and help the crew inspect critical external areas.</h2>
        <h3>Exterior lights</h3>
        <ul className="study-points"><li><strong>Landing:</strong> forward illumination for takeoff, approach and landing.</li><li><strong>Taxi and runway turnoff:</strong> illuminate the taxi path and areas ahead of the main gear.</li><li><strong>Position:</strong> red left, green right and white aft navigation references.</li><li><strong>Strobe:</strong> high-intensity white anti-collision awareness.</li><li><strong>Anti-collision:</strong> red lights above and below the fuselage.</li><li><strong>Logo, wing and wheel-well:</strong> illuminate the tail, wing leading edges and gear bays.</li></ul>
        <Deep title="Go deeper · Taxi-light variants"><p>Until 2015, the 250 W taxi light was installed on the nose landing gear. On LED-equipped aircraft, the taxi lights are installed in the wing roots and provide much more effective illumination. On later models, they switch off automatically when the landing gear retracts.</p></Deep>
        <Max>Exterior light installation varies by effectivity. The supplied NG includes configurations with separate retractable/fixed lights or combined LED landing, taxi and turnoff lights. The MAX uses its applicable LED installation.</Max>
        <h3>Emergency lights</h3>
        <p>With the flight deck switch guarded in <strong>ARMED</strong>, the emergency lights illuminate automatically if DC bus No. 1 fails or AC power is switched off. Selecting ON illuminates all emergency lights; OFF prevents automatic operation.</p>
        <ul className="study-points"><li><strong>Interior:</strong> aisle, ceiling and exit identification.</li><li><strong>Exterior:</strong> illuminate deployed escape slides.</li><li><strong>Aft attendant switch:</strong> overrides the flight deck control and turns the emergency lights on.</li></ul>
        <div className="emergency-light-card">
          <img src="/images/emergency-exit-lights-not-armed.png" alt="Amber EMER EXIT LIGHTS NOT ARMED indication" />
          <div><strong>NOT ARMED</strong><p>Illuminates amber whenever the EMER EXIT LIGHTS switch is not in the guarded ARMED position. It warns that automatic emergency-light operation is not armed.</p></div>
        </div>
        <Deep title="Go deeper · Two cabin path systems"><p>Aircraft may use electrically powered floor-proximity lighting or photoluminescent aisle markings. Photoluminescent strips must receive the specified cabin-light charging time; the applicable Techlog notice identifies the installed system.</p></Deep>
        <Need title="Normal position: ARMED"><p>Automatic illumination follows loss of DC bus No. 1 or removal of AC power.</p></Need>
        <Source>NG 1.30.5–8, 1.40.1–10 · MAX 1.30.5–8, 1.40.1–11</Source>
      </section>

      <section className="course-section" id="signs">
        <span className="section-num">03 / SEAT BELTS & NO SMOKING</span>
        <h2>Passenger signs combine manual crew control with automatic logic linked to aircraft configuration.</h2>
        <h3>Fasten seat belts</h3>
        <ul className="study-points"><li><strong>OFF:</strong> the FASTEN SEAT BELTS and RETURN TO SEAT signs are not illuminated.</li><li><strong>AUTO:</strong> the signs illuminate or extinguish automatically according to aircraft configuration. They illuminate when the landing gear or flaps are extended and extinguish when both are retracted.</li><li><strong>ON:</strong> the signs are illuminated continuously.</li></ul>
        <h3>No smoking</h3>
        <ul className="study-points"><li><strong>OFF:</strong> the NO SMOKING signs are not illuminated.</li><li><strong>AUTO:</strong> the signs illuminate or extinguish automatically according to aircraft configuration.</li><li><strong>ON:</strong> the signs are illuminated continuously.</li></ul>
        <p>On the supplied fleet configuration, the NO SMOKING signs are permanently illuminated and the switch is placarded <strong>INOP</strong>. The three switch positions apply only to aircraft equipped with the controllable installation.</p>
        <p>A low tone sounds over the passenger-address system whenever the passenger signs illuminate or extinguish.</p>
        <Need title="AUTO follows gear and flaps"><p>Either gear or flap extension illuminates the seat-belt and return-to-seat signs.</p></Need>
        <Source>NG 1.30.7, 1.40.5 · MAX 1.30.7–8, 1.40.3</Source>
      </section>

      <section className="course-section" id="oxygen">
        <span className="section-num">04 / OXYGEN SYSTEM</span>
        <h2>Flight crew and passengers use two independent oxygen systems designed for different operating needs.</h2>
        <figure className="figure course-photo"><img src="/images/oxygen-control-panel.png" alt="Crew oxygen pressure indicator and passenger oxygen switch on the aft overhead panel" /><figcaption>Crew oxygen pressure indication and passenger oxygen manual-release control.</figcaption></figure>
        <h3>Flight crew oxygen</h3>
        <p>A single high-pressure cylinder supplies quick-donning masks at each crew station through a pressure-reducing regulator. Cylinder pressure is shown on the aft overhead panel and may be as high as <strong>1,850 psi</strong>.</p>
        <ul className="study-points"><li><strong>NORMAL:</strong> supplies a mixture of cabin air and oxygen according to demand.</li><li><strong>100%:</strong> supplies pure oxygen on demand.</li><li><strong>EMERGENCY:</strong> supplies 100% oxygen under positive pressure.</li></ul>
        <Deep title="Go deeper · Mask and microphone"><p>Removing the quick-donning mask from its stowage box and opening the doors initiates oxygen flow and activates the mask microphone. The flow indicator confirms oxygen flow.</p></Deep>
        <h3>Passenger oxygen</h3>
        <p>Independent chemical oxygen sources are installed at passenger service units, attendant stations and lavatories. The masks drop automatically at approximately <strong>14,000 ft cabin altitude</strong>, or manually when PASS OXYGEN is selected ON.</p>
        <p>Pulling one mask activates the source and releases all masks in that unit. One chemical generator can supply up to <strong>four masks</strong>. Oxygen then flows continuously for approximately <strong>12 minutes</strong> and cannot be shut off.</p>
        <Warning title="OXYGEN AND CABIN FIRE">Once a mask is pulled, the chemical generator supplies oxygen continuously and cannot be shut off. Releasing oxygen near a cabin fire can feed combustion and intensify the fire. Passenger masks also mix oxygen with cabin air and do not protect against smoke. Do not activate passenger oxygen below 14,000 ft cabin altitude when smoke or an abnormal heat source is present unless directed by the applicable procedure.</Warning>
        <Need title="14,000 ft · approximately 12 minutes"><p>Mask deployment does not start oxygen flow; pulling a mask starts the chemical source.</p></Need>
        <h3>Portable oxygen</h3>
        <p>Portable first-aid and supplemental oxygen cylinders are installed at suitable locations in the passenger cabin for passengers or crew members who develop a physiological need for oxygen. The standard cylinder described in the supplied FCOM contains <strong>120 litres</strong> of free oxygen when charged to approximately <strong>1,800 psi</strong> at 21°C.</p>
        <ul className="study-points"><li><strong>2 L/min outlet:</strong> walk-around flow, providing approximately 60 minutes from a full 120-litre cylinder.</li><li><strong>4 L/min outlet:</strong> first-aid flow, providing approximately 30 minutes.</li><li><strong>Equipment:</strong> pressure gauge, pressure regulator and ON/OFF valve.</li></ul>
        <Source>NG 1.30.14–22, 1.40.12–25 · MAX 1.30.14–18, 1.40.12–21</Source>
      </section>

      <section className="course-section" id="doors">
        <span className="section-num">05 / AIRCRAFT DOORS</span>
        <h2>Entry, service, cargo, flight deck and emergency-exit doors use different locking and indication systems.</h2>
        <h3>Description</h3>
        <div className="general-figure-grid door-location-grid">
          <figure className="figure course-photo"><img src="/images/ng-800-doors-exits-overview.png" alt="Location of the doors and emergency exits on both sides of a 737-800 NG" /><figcaption>737-800 NG doors and exits.</figcaption></figure>
          <figure className="figure course-photo"><img src="/images/max-8200-doors-exits-overview.png" alt="Location of the doors and emergency exits on both sides of a 737-8200 MAX" /><figcaption>737-8200 MAX doors and exits, including the additional mid exits.</figcaption></figure>
        </div>
        <ul className="study-points"><li><strong>Entry and service:</strong> four primary cabin doors with escape-slide provisions.</li><li><strong>Cargo:</strong> two inward-opening plug-type pressure doors on the lower right fuselage.</li><li><strong>Flight deck:</strong> electrically locked reinforced door with emergency access and decompression panels.</li><li><strong>Flight deck windows No. 2:</strong> can open and provide emergency egress; only the first officer’s can be opened externally.</li><li><strong>Overwing exits:</strong> mechanically retained and automatically flight-locked by 28 V DC logic.</li></ul>
        <Max>The 737-8200 adds two mid-exit doors aft of the wings. Its evacuation layout includes four entry/service doors, four overwing exits and two mid-exits. These additional doors also participate in flight-lock and door-warning logic.</Max>
        <Warning title="WIND LIMITS">Do not operate entry or service doors in steady wind above 40 kt, and do not leave them open when gusts exceed 65 kt.</Warning>
        <Deep title="Go deeper · Overwing flight locks"><p>The overwing exits lock automatically when all of the following conditions are satisfied:</p><ul><li>three of the four entry and service doors are closed;</li><li>either engine is running;</li><li>the aircraft is airborne, or both thrust levers are advanced.</li></ul><p>The exits unlock if any one of these conditions is lost or if DC power fails.</p></Deep>
        <h3>Indications</h3>
        <p>An amber light identifies the door or exit that is not closed and locked. The 737-8200 panel adds separate <strong>LEFT MID EXIT</strong> and <strong>RIGHT MID EXIT</strong> indications for its additional exits.</p>
        <div className="general-figure-grid door-indication-grid">
          <figure className="figure course-photo"><img src="/images/ng-doors-annunciator-panel.png" alt="737 NG doors annunciator panel" /><figcaption>737 NG door indications.</figcaption></figure>
          <figure className="figure course-photo"><img src="/images/max-8200-doors-annunciator-panel.png" alt="737-8200 MAX doors annunciator panel with left and right mid-exit lights" /><figcaption>737-8200 MAX panel with the additional mid-exit indications.</figcaption></figure>
        </div>
        <Need title="Four cabin doors · two cargo doors"><p>The MAX 8200 also has two mid-exit doors aft of the wings.</p></Need>
        <Source>NG 1.30.10–14, 1.40.41–53 · MAX 1.30.10–14, 1.40.29–42</Source>
      </section>

      <section className="course-section" id="water">
        <span className="section-num">06 / WATER SYSTEM</span>
        <h2>A single pressurized potable-water tank supplies the galleys and lavatory sinks.</h2>
        <ul className="study-points"><li><strong>Tank:</strong> behind the aft cargo compartment.</li><li><strong>Pressure:</strong> engine bleed air or the water-system air compressor.</li><li><strong>Quantity:</strong> displayed on the attendant panel.</li><li><strong>Waste water:</strong> drains overboard through forward and aft heated drain masts.</li></ul>
        <p>Lavatories provide hot and cold water. Each heater is below its sink, reheats a new charge in approximately four minutes and includes automatic overheat protection. Galleys receive cold water.</p>
        <Source>NG 1.30.24, 1.40.61–62 · MAX 1.30.20, 1.40.48</Source>
      </section>

      <section className="course-section" id="airstair">
        <span className="section-num">07 / AIRSTAIR</span>
        <h2>The optional forward airstair allows boarding without airport stairs and stows below the forward entry door.</h2>
        <p>The electrically operated stair can be controlled from inside or outside. Its pressure door opens automatically before extension, and upper handrails are attached after the stair is fully extended.</p>
        <figure className="figure course-photo"><img src="/images/airstair-controls-and-handrails.png" alt="737 forward airstair extended with the exterior control and handrails identified" /><figcaption>Extended forward airstair, handrails and exterior control location.</figcaption></figure>
        <h3>Operation from inside</h3>
        <p>The interior controls are on the forward attendant panel. First open the forward entry door to the cocked position: the door-open safety circuit prevents both normal and standby operation while the door is closed.</p>
        <ul className="study-points"><li><strong>Normal operation — 115 V AC:</strong> hold <strong>EXTEND</strong> or <strong>RETRACT</strong> until travel is complete.</li><li><strong>Standby operation — DC:</strong> if normal operation is unavailable, ensure the flight deck BATTERY switch is ON, then hold <strong>STANDBY</strong> together with the required EXTEND or RETRACT switch.</li></ul>
        <p>The <strong>STAIR OPER</strong> light remains illuminated while the stair is moving. With tread lights selected AUTO, they illuminate when the stair is fully extended and extinguish as it retracts.</p>
        <h3>Operation from outside</h3>
        <p>The exterior controls are in a recess below and to the right of the airstair compartment. They bypass the door-open interlock, so the forward entry door does not need to be open.</p>
        <ul className="study-points"><li><strong>Normal operation:</strong> move and hold the airstair control at <strong>EXTEND</strong> or <strong>RETRACT</strong> until travel is complete.</li><li><strong>Standby operation — DC:</strong> hold the spring-loaded <strong>NORMAL/STANDBY</strong> switch at STANDBY while commanding EXTEND or RETRACT. Power comes directly from the battery bus, so the flight deck BATTERY switch does not need to be ON.</li><li><strong>Before retraction:</strong> stow both upper handrail extensions. The handrail interlocks normally prevent retraction while they remain extended.</li></ul>
        <ul className="study-points"><li><strong>AIRSTAIR:</strong> amber when the pressure door is unlocked; also triggers DOORS and MASTER CAUTION.</li><li><strong>Tread lights AUTO:</strong> illuminate when fully extended and extinguish during retraction.</li></ul>
        <Warning title="HANDRAILS AND PLATFORM">Stow the handrail extensions before retraction. Standby or maintenance control can bypass safety circuits and cause substantial damage. Use care on the small platform when operating the forward entry door, especially in poor weather.</Warning>
        <Need title="Normal: 115 V AC · standby: DC"><p>The forward entry door must be partially open for interior operation; exterior control bypasses that requirement.</p></Need>
        <Source>NG 1.30.23–24, 1.40.62–64 · MAX 1.30.18–20, 1.40.47–50</Source>
      </section>

      <section className="course-section" id="access">
        <span className="section-num">08 / FLIGHT DECK ACCESS PANEL</span>
        <h2>The cabin access panel combines a keypad, an emergency-entry sequence and three lights that show the state of the flight deck door.</h2>
        <h3>Emergency access</h3>
        <p>In case of pilot incapacitation, an authorised crew member enters the pre-programmed <strong>3-to-8-digit emergency access code</strong>, then presses <strong>ENT</strong>. A flight deck chime sounds and the amber AUTO UNLK light illuminates at the pilots&apos; panel.</p>
        <ul className="study-points"><li><strong>UNLKD selected:</strong> the pilots unlock the door immediately while the selector is held.</li><li><strong>DENY selected:</strong> the request is rejected and further emergency-code entries are inhibited for several minutes.</li><li><strong>No pilot action:</strong> after the programmed time delay, the door unlocks automatically. Before it unlocks, the chime sounds continuously and AUTO UNLK flashes.</li></ul>
        <h3>Access lights</h3>
        <ul className="study-points"><li><strong>Red:</strong> the flight deck door is locked, or the Flight Deck Access System switch is OFF.</li><li><strong>Amber:</strong> the correct emergency access code has been entered and the timed access sequence is active.</li><li><strong>Green:</strong> the flight deck door is unlocked.</li></ul>
        <Need title="Code + ENT"><p>The emergency code does not unlock the door immediately. It starts a timed sequence that the pilots can accept or deny.</p></Need>
        <Source>NG 1.30.12–14, 1.40.41–42 · MAX 1.30.12–14, 1.40.29–30</Source>
      </section>
      <SystemPager current="Airplane General, Emergency Equipment, Doors, Windows" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>General systems, operational focus.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
