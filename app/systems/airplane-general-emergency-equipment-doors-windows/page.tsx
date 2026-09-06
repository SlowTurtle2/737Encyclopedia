import Link from '@/components/site-link';
import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = { title: 'Airplane General | 737Encyclopedia', description: '737 NG and MAX dimensions, lighting, signs, oxygen, doors, water and airstair systems.' };

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }
function Source({ children }: { children: React.ReactNode }) { return <p className="source">REFERENCE · {children}</p>; }

const sections = [['dimensions', 'Airplane dimensions'], ['lights', 'Lights'], ['signs', 'Seat belts & no smoking'], ['oxygen', 'Oxygen system'], ['doors', 'Aircraft doors'], ['water', 'Water system'], ['airstair', 'Airstair']];

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
        <ul className="study-points"><li><strong>NG minimum 180° pavement width:</strong> approximately 24.3 m.</li><li><strong>MAX minimum 180° pavement width:</strong> approximately 24.4 m.</li><li><strong>Largest turning arc:</strong> the wingtip determines minimum obstacle clearance.</li></ul>
        <Warning title="GROUND CLEARANCE">FCOM dimensions are reference values. Use the airport/facilities planning data and approved ground procedures for actual obstacle and stand clearance.</Warning>
        <Need title="Same length · slightly wider MAX"><p>Both are 39.47 m long. The supplied MAX wingspan is 0.13 m greater.</p></Need>
        <Source>NG 1.10.2, 1.10.5 · MAX 1.10.1–2</Source>
      </section>

      <section className="course-section" id="lights">
        <span className="section-num">02 / LIGHTS</span>
        <h2>Exterior lights make the aircraft visible, illuminate its path and help the crew inspect critical external areas.</h2>
        <h3>Exterior lights</h3>
        <ul className="study-points"><li><strong>Landing:</strong> forward illumination for takeoff, approach and landing.</li><li><strong>Taxi and runway turnoff:</strong> illuminate the taxi path and areas ahead of the main gear.</li><li><strong>Position:</strong> red left, green right and white aft navigation references.</li><li><strong>Strobe:</strong> high-intensity white anti-collision awareness.</li><li><strong>Anti-collision:</strong> red lights above and below the fuselage.</li><li><strong>Logo, wing and wheel-well:</strong> illuminate the tail, wing leading edges and gear bays.</li></ul>
        <Max>Exterior light installation varies by effectivity. The supplied NG includes configurations with separate retractable/fixed lights or combined LED landing, taxi and turnoff lights. The MAX uses its applicable LED installation.</Max>
        <h3>Emergency lights</h3>
        <p>With the flight deck switch guarded in <strong>ARMED</strong>, the emergency lights illuminate automatically if DC bus No. 1 fails or AC power is switched off. Selecting ON illuminates all emergency lights; OFF prevents automatic operation.</p>
        <ul className="study-points"><li><strong>Interior:</strong> aisle, ceiling and exit identification.</li><li><strong>Exterior:</strong> illuminate deployed escape slides.</li><li><strong>Aft attendant switch:</strong> overrides the flight deck control and turns the emergency lights on.</li></ul>
        <Deep title="Go deeper · Two cabin path systems"><p>Aircraft may use electrically powered floor-proximity lighting or photoluminescent aisle markings. Photoluminescent strips must receive the specified cabin-light charging time; the applicable Techlog notice identifies the installed system.</p></Deep>
        <Need title="Normal position: ARMED"><p>Automatic illumination follows loss of DC bus No. 1 or removal of AC power.</p></Need>
        <Source>NG 1.30.5–8, 1.40.1–10 · MAX 1.30.5–8, 1.40.1–11</Source>
      </section>

      <section className="course-section" id="signs">
        <span className="section-num">03 / SEAT BELTS & NO SMOKING</span>
        <h2>Passenger signs combine manual crew control with automatic logic linked to aircraft configuration.</h2>
        <h3>Fasten seat belts</h3><p>OFF extinguishes the FASTEN SEAT BELTS and RETURN TO SEAT signs. AUTO illuminates them when the landing gear or flaps are extended and extinguishes them when both are retracted. ON illuminates the signs continuously.</p>
        <h3>No smoking</h3><p>On the supplied fleet configuration, NO SMOKING signs remain permanently illuminated and the switch may be blanked. Earlier effectivities may provide OFF, AUTO and ON control.</p>
        <p>A low tone sounds over the passenger-address system whenever the passenger signs illuminate or extinguish.</p>
        <Need title="AUTO follows gear and flaps"><p>Either gear or flap extension illuminates the seat-belt and return-to-seat signs.</p></Need>
        <Source>NG 1.30.7, 1.40.5 · MAX 1.30.7–8, 1.40.3</Source>
      </section>

      <section className="course-section" id="oxygen">
        <span className="section-num">04 / OXYGEN SYSTEM</span>
        <h2>Flight crew and passengers use two independent oxygen systems designed for different operating needs.</h2>
        <h3>Flight crew oxygen</h3>
        <p>A single high-pressure cylinder supplies quick-donning masks at each crew station through a pressure-reducing regulator. Cylinder pressure is shown on the aft overhead panel and may be as high as <strong>1,850 psi</strong>.</p>
        <ul className="study-points"><li><strong>NORMAL:</strong> supplies a mixture of cabin air and oxygen according to demand.</li><li><strong>100%:</strong> supplies pure oxygen on demand.</li><li><strong>EMERGENCY:</strong> supplies 100% oxygen under positive pressure.</li></ul>
        <Deep title="Go deeper · Mask and microphone"><p>Removing the quick-donning mask from its stowage box and opening the doors initiates oxygen flow and activates the mask microphone. The flow indicator confirms oxygen flow.</p></Deep>
        <h3>Passenger oxygen</h3>
        <p>Independent chemical oxygen sources are installed at passenger service units, attendant stations and lavatories. The masks drop automatically at approximately <strong>14,000 ft cabin altitude</strong>, or manually when PASS OXYGEN is selected ON.</p>
        <p>Pulling one mask activates the source and releases all masks in that unit. Oxygen then flows continuously for approximately <strong>12 minutes</strong> and cannot be shut off.</p>
        <Warning title="PASSENGER OXYGEN">Observe the NO SMOKING indication strictly. Passenger masks mix oxygen with cabin air and do not protect against smoke. Do not activate them below 14,000 ft cabin altitude when smoke or abnormal heat is present unless directed by the applicable procedure.</Warning>
        <Need title="14,000 ft · approximately 12 minutes"><p>Mask deployment does not start oxygen flow; pulling a mask starts the chemical source.</p></Need>
        <Source>NG 1.30.14–22, 1.40.12–25 · MAX 1.30.14–18, 1.40.12–21</Source>
      </section>

      <section className="course-section" id="doors">
        <span className="section-num">05 / AIRCRAFT DOORS</span>
        <h2>Entry, service, cargo, flight deck and emergency-exit doors use different locking and indication systems.</h2>
        <ul className="study-points"><li><strong>Entry and service:</strong> four primary cabin doors with escape-slide provisions.</li><li><strong>Cargo:</strong> two inward-opening plug-type pressure doors on the lower right fuselage.</li><li><strong>Flight deck:</strong> electrically locked reinforced door with emergency access and decompression panels.</li><li><strong>Flight deck windows No. 2:</strong> can open and provide emergency egress; only the first officer’s can be opened externally.</li><li><strong>Overwing exits:</strong> mechanically retained and automatically flight-locked by 28 V DC logic.</li></ul>
        <Max>The 737-8200 adds two mid-exit doors aft of the wings. Its evacuation layout includes four entry/service doors, four overwing exits and two mid-exits. These additional doors also participate in flight-lock and door-warning logic.</Max>
        <Warning title="WIND LIMITS">Do not operate entry or service doors in steady wind above 40 kt, and do not leave them open when gusts exceed 65 kt. Strong winds can damage the aircraft structure.</Warning>
        <Deep title="Go deeper · Overwing flight locks"><p>Overwing exits lock when three of the four entry/service doors are closed, either engine is running, and the aircraft is airborne or both thrust levers are advanced. They unlock when any condition is lost or DC power fails.</p></Deep>
        <Need title="Four cabin doors · two cargo doors"><p>The MAX 8200 also has two mid-exit doors aft of the wings.</p></Need>
        <Source>NG 1.30.10–14, 1.40.41–53 · MAX 1.30.10–14, 1.40.29–42</Source>
      </section>

      <section className="course-section" id="water">
        <span className="section-num">06 / WATER SYSTEM</span>
        <h2>A single pressurized potable-water tank supplies the galleys and lavatory sinks.</h2>
        <ul className="study-points"><li><strong>Tank:</strong> behind the aft cargo compartment.</li><li><strong>Pressure:</strong> engine bleed air or the water-system air compressor.</li><li><strong>Quantity:</strong> displayed on the attendant panel.</li><li><strong>Isolation:</strong> shutoff valves at each galley and below each lavatory sink.</li><li><strong>Waste water:</strong> drains overboard through forward and aft heated drain masts.</li></ul>
        <p>Lavatories provide hot and cold water. Each heater is below its sink, reheats a new charge in approximately four minutes and includes automatic overheat protection. Galleys receive cold water.</p>
        <Deep title="Go deeper · Servicing and draining"><p>The exterior service panel is on the lower right aft fuselage and requires pressure filling. Selecting a local shutoff valve to DRAIN drains the related system overboard; the normal valve position is ON.</p></Deep>
        <Need title="One tank · two pressure sources"><p>Bleed air normally pressurizes distribution; the air compressor provides the alternate source.</p></Need>
        <Source>NG 1.30.24, 1.40.61–62 · MAX 1.30.20, 1.40.48</Source>
      </section>

      <section className="course-section" id="airstair">
        <span className="section-num">07 / AIRSTAIR</span>
        <h2>The optional forward airstair allows boarding without airport stairs and stows below the forward entry door.</h2>
        <p>The electrically operated stair can be controlled from inside or outside. Its pressure door opens automatically before extension, and upper handrails are attached after the stair is fully extended.</p>
        <ul className="study-points"><li><strong>Normal operation:</strong> requires AC and DC power.</li><li><strong>Standby operation:</strong> uses DC power and bypasses some normal control logic.</li><li><strong>STAIR OPER:</strong> white while the stair is moving.</li><li><strong>AIRSTAIR:</strong> amber when the pressure door is unlocked; also triggers DOORS and MASTER CAUTION.</li><li><strong>Tread lights AUTO:</strong> illuminate when fully extended and extinguish during retraction.</li></ul>
        <Warning title="HANDRAILS AND PLATFORM">Stow the handrail extensions before retraction. Standby or maintenance control can bypass safety circuits and cause substantial damage. Use care on the small platform when operating the forward entry door, especially in poor weather.</Warning>
        <Need title="Normal: AC + DC · standby: DC"><p>The forward entry door must be partially open for normal interior operation; exterior control bypasses that requirement.</p></Need>
        <Source>NG 1.30.23–24, 1.40.62–64 · MAX 1.30.18–20, 1.40.47–50</Source>
      </section>
      <SystemPager current="Airplane General, Emergency Equipment, Doors, Windows" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>General systems, operational focus.</h3><p className="muted">NG information is paired with the differences that affect the 737-8200.</p></div></aside></div>
  </main>;
}
