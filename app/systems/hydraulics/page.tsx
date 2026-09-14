import Image from 'next/image';
import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = {
  title: 'Hydraulics | 737Encyclopedia',
  description: '737 NG and MAX hydraulic systems A, B and standby, pumps, reservoirs, transfer units and manual reversion.',
};

function Need({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>; }
function Warning({ title, children }: { title: string; children: React.ReactNode }) { return <aside className="suction-warning"><strong>WARNING · {title}</strong><p>{children}</p></aside>; }
function Deep({ title, children }: { title: string; children: React.ReactNode }) { return <details className="deep"><summary>{title}</summary><div>{children}</div></details>; }
function Max({ children }: { children: React.ReactNode }) { return <aside className="max-note"><b>737 MAX / 8200 DIFFERENCE</b><p>{children}</p></aside>; }
function Placeholder({ caption }: { caption: string }) { return <figure className="schematic-placeholder" aria-label={`${caption} illustration placeholder`}><span>ILLUSTRATION TO BE ADDED</span><figcaption>{caption}</figcaption></figure>; }
function Figure({ src, alt, caption, compact = false, portrait = false, width = 1455, height = 1091 }: { src: string; alt: string; caption: string; compact?: boolean; portrait?: boolean; width?: number; height?: number }) { return <figure className={`figure course-photo hydraulic-figure${compact ? ' compact' : ''}${portrait ? ' portrait' : ''}`}><Image src={src} alt={alt} width={width} height={height} /><figcaption>{caption}</figcaption></figure>; }
function Annunc({ label, children }: { label: string; children: React.ReactNode }) { return <aside className="annunc-callout"><span className="annunc-light">{label}</span><p>{children}</p></aside>; }
function HydDisplay() {
  return (
    <figure className="hyd-display">
      <svg viewBox="0 0 860 360" role="img" aria-label="Hydraulic system display: system A quantity 98 percent and pressure 3000 psi, system B quantity 66 percent with RF and pressure 3000 psi" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="860" height="360" rx="10" fill="#04070b" />
        <rect x="16" y="46" width="828" height="298" rx="28" fill="none" stroke="#33d6de" strokeWidth="4" />
        <rect x="332" y="30" width="196" height="34" fill="#04070b" />
        <line x1="292" y1="47" x2="340" y2="47" stroke="#33d6de" strokeWidth="4" />
        <line x1="520" y1="47" x2="568" y2="47" stroke="#33d6de" strokeWidth="4" />
        <g fontFamily="'Arial Narrow', 'Roboto Condensed', Arial, sans-serif" textAnchor="middle">
          <text x="430" y="56" fill="#33d6de" fontSize="26" fontWeight="700" letterSpacing="4">HYDRAULIC</text>
          <text x="376" y="150" fill="#33d6de" fontSize="30" fontWeight="700">A</text>
          <text x="644" y="150" fill="#33d6de" fontSize="30" fontWeight="700">B</text>
          <text x="376" y="216" fill="#eef8f9" fontSize="58" fontWeight="700">98</text>
          <text x="632" y="216" fill="#eef8f9" fontSize="58" fontWeight="700">66</text>
          <text x="700" y="212" fill="#d9ebed" fontSize="24" fontWeight="700">RF</text>
          <text x="376" y="300" fill="#eef8f9" fontSize="58" fontWeight="700">3000</text>
          <text x="644" y="300" fill="#eef8f9" fontSize="58" fontWeight="700">3000</text>
        </g>
        <g fontFamily="'Arial Narrow', 'Roboto Condensed', Arial, sans-serif" textAnchor="start" fill="#33d6de" fontSize="26" fontWeight="700">
          <text x="66" y="208">QTY %</text>
          <text x="66" y="292">PRESS</text>
        </g>
      </svg>
      <figcaption>Hydraulic indication on the SYS display: reservoir quantity (QTY %) and combined pressure (PRESS) for systems A and B. RF marks a valid refill reading below 76%.</figcaption>
    </figure>
  );
}

const sections = [
  ['overview', 'Overview'],
  ['system-a', 'System A'],
  ['system-b', 'System B'],
  ['standby', 'Standby system'],
  ['manual-reversion', 'Manual reversion'],
];

export default function Hydraulics() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / HYDRAULICS</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="overview">
        <span className="section-num">01 / OVERVIEW</span>
        <h2>Three independent hydraulic systems provide pressure to the flight controls and aircraft services: systems A, B and standby.</h2>

        <h3>Systems A, B and standby</h3>
        <p>Systems A and B are the normal hydraulic sources. Each can power all primary flight controls without reducing aircraft controllability. The standby system provides a separate backup source for selected equipment after a loss of system A or B pressure.</p>
        <ul className="study-points"><li><strong>System A:</strong> normally powered by the engine 1 driven pump and electric pump 2.</li><li><strong>System B:</strong> normally powered by the engine 2 driven pump and electric pump 1.</li><li><strong>Standby:</strong> powered by one electric motor driven pump and activated manually or automatically.</li><li><strong>Reservoir location:</strong> all three reservoirs are in the main wheel well.</li><li><strong>Reservoir pressurization:</strong> bleed air pressurizes reservoirs A and B. The standby reservoir receives pressurization and servicing through reservoir B.</li></ul>
        <Figure src="/images/hydraulic-power-overview.png" alt="Boeing 737 hydraulic power distribution between systems A, B and standby" caption="Hydraulic power overview: reservoirs, pumps, PTU and equipment supplied by systems A, B and standby." />
        <Need title="A or B can power every primary flight control"><p>The ailerons, elevators and rudder each receive pressure from both normal systems. The aircraft services connected to A and B are different, so the operational consequences of losing one system are not identical.</p></Need>

        <h3>Pumps and pressure</h3>
        <p>Systems A and B each have one engine driven pump and one AC electric motor driven pump. An engine driven pump supplies approximately six times the fluid volume of its related electric pump: approximately 37 US gal/min compared with 6 US gal/min. The standby electric pump supplies approximately 3 US gal/min.</p>
        <div className="course-table-wrap"><table className="course-table"><caption>Normal hydraulic sources</caption><thead><tr><th>System</th><th>Engine driven pump</th><th>Electric pump</th></tr></thead><tbody><tr><td>A</td><td>ENG 1</td><td>ELEC 2</td></tr><tr><td>B</td><td>ENG 2</td><td>ELEC 1</td></tr><tr><td>Standby</td><td>None</td><td>Dedicated standby pump</td></tr></tbody></table></div>
        <div className="course-table-wrap"><table className="course-table"><caption>Hydraulic system pressure</caption><thead><tr><th>Minimum</th><th>Normal</th><th>Maximum</th></tr></thead><tbody><tr><td>2,800 psi</td><td>3,000 psi</td><td>3,500 psi</td></tr></tbody></table></div>
        <ul className="study-points"><li><strong>Engine pump switch ON:</strong> de-energizes the blocking valve and allows pump output into the system.</li><li><strong>Engine pump switch OFF:</strong> energizes the blocking valve and blocks pump output. The pump continues to rotate whenever its engine operates.</li><li><strong>Electric pump switch ON:</strong> supplies electrical power to the related pump.</li></ul>
        <Warning title="ELECTRIC PUMP COOLING">Pump case drain fluid is cooled through a heat exchanger in the related main fuel tank. At least 760 kg of fuel must be in that tank for ground operation of an electric motor driven pump.</Warning>
        <Deep title="Go deeper · Why engine pump switches remain ON at shutdown"><p>The ON position de-energizes the engine-pump blocking-valve solenoid. Leaving the switches ON at shutdown therefore prolongs solenoid life.</p></Deep>

        <h3>Control and indication</h3>
        <p>The hydraulic panel controls the four normal pumps. The SYS display shows combined system pressure and reservoir quantity for systems A and B.</p>
        <HydDisplay />
        <ul className="study-points"><li><strong>PRESS:</strong> indicates combined output pressure from both pumps in the selected system. With both pumps OFF, it may show reservoir pressure, normally below 100 psi.</li><li><strong>QTY %:</strong> displays reservoir quantity from 0 to 106%.</li><li><strong>RF:</strong> appears below 76%. It is valid on the ground with both engines shut down, or after landing with flaps up during taxi-in.</li></ul>
        <h4>Pump caution lights</h4>
        <Annunc label="LOW PRESSURE">The output pressure of the related engine or electric pump is low. Pulling an engine fire switch deactivates that engine pump&rsquo;s LOW PRESSURE light.</Annunc>
        <Annunc label="OVERHEAT">The electric pump, or the hydraulic fluid used to cool and lubricate it, has overheated.</Annunc>
        <Max>On the MAX, hydraulic information appears on the selected inboard display through the MDS SYS page. The ground-only <strong>MAINT</strong> tab is a menu indication and does not indicate a malfunction.</Max>
        <Figure compact src="/images/hydraulic-pump-panel.png" alt="Boeing 737 hydraulic pump panel with engine and electric pump switches and caution lights" caption="Hydraulic pump panel: system A controls on the left and system B controls on the right." />
      </section>

      <section className="course-section" id="system-a">
        <span className="section-num">02 / SYSTEM A</span>
        <h2>System A combines the engine 1 driven pump with electric pump 2 and powers the landing gear, normal steering and several aircraft services.</h2>

        <h3>Characteristics, quantity and reservoir design</h3>
        <p>The system A reservoir is bleed-air pressurized to maintain positive flow to both pumps. Its full level is approximately <strong>21.6 L</strong>; the refill indication corresponds to approximately <strong>76% / 17.7 L</strong>.</p>
        <ul className="study-points"><li><strong>Engine-pump or engine-pump-line leak:</strong> a standpipe preserves fluid for electric pump 2. Quantity stabilizes at approximately 20%, corresponding to about 8.5 L, and electric pump pressure remains available.</li><li><strong>Electric-pump line or common-system leak:</strong> the reservoir drains toward zero and all system A pressure is lost.</li><li><strong>Normal quantity variation:</strong> quantity changes when the system is pressurized, when landing gear or leading-edge devices move, and after cold soaking.</li></ul>
        <Figure portrait width={366} height={623} src="/images/hydraulic-system-a-reservoir.png" alt="Boeing 737 hydraulic system A reservoir in the main wheel well" caption="Hydraulic system A reservoir in the main wheel well." />
        <Need title="20% isolates the location of an A-system leak"><p>If quantity stops near 20%, the standpipe has retained fluid for electric pump 2. A continued decrease toward zero identifies a leak in the electric-pump path or a component common to both pumps.</p></Need>

        <h3>Equipment powered</h3>
        <ul className="study-points"><li><strong>Primary flight controls:</strong> ailerons, rudder, elevators and elevator feel.</li><li><strong>Spoilers:</strong> flight spoilers 2, 4, 9 and 11; ground spoilers 1, 6, 7 and 12.</li><li><strong>Landing gear:</strong> normal extension and retraction, plus normal nose-wheel steering.</li><li><strong>Brakes:</strong> alternate brakes.</li><li><strong>Other users:</strong> No. 1 thrust reverser, autopilot A, PTU drive and landing-gear transfer function.</li></ul>
        <Max>On the NG, the hydraulic distribution schematic lists the individual spoiler panels and thrust reverser under their normal systems. On the MAX FCOM schematic, these functions are grouped differently, but the operating principles of the two normal hydraulic sources remain unchanged.</Max>

        <h3>Landing Gear Transfer Unit</h3>
        <p>The transfer unit allows the landing gear to retract at the normal rate when system A loses engine-driven-pump volume. System B engine-driven-pump pressure supplies the required hydraulic volume automatically when all of the following conditions are met:</p>
        <ul className="study-points"><li>the aircraft is airborne;</li><li>engine 1 RPM is below the specified limit;</li><li>the landing-gear lever is UP; and</li><li>either main landing gear is not up and locked.</li></ul>
        <Max>The NG FCOM names this component the <strong>Landing Gear Transfer Valve</strong>; the MAX FCOM names it the <strong>Landing Gear Transfer Unit</strong>. The documented purpose and automatic operating conditions are the same.</Max>
        <Need title="Transfer of volume, not interconnection"><p>The unit uses system B pressure to restore normal-rate gear retraction. Systems A and B remain hydraulically separate; their fluids are not mixed.</p></Need>
      </section>

      <section className="course-section" id="system-b">
        <span className="section-num">03 / SYSTEM B</span>
        <h2>System B combines the engine 2 driven pump with electric pump 1 and normally powers the flaps, leading-edge devices and wheel brakes.</h2>

        <h3>Characteristics, quantity and reservoir design</h3>
        <p>The system B reservoir is bleed-air pressurized and also provides pressurization and servicing for the standby reservoir. Its full level is approximately <strong>31.1 L</strong>; the refill indication corresponds to approximately <strong>76% / 26 L</strong>.</p>
        <ul className="study-points"><li><strong>Fill and balance level:</strong> approximately 72% / 25.1 L.</li><li><strong>Any system B leak:</strong> indicated quantity decreases toward zero and system B pressure is lost.</li><li><strong>Fluid retained below indicated zero:</strong> the reservoir standpipe retains approximately 4.9 L for PTU operation.</li><li><strong>Standby independence:</strong> a system B leak does not prevent standby hydraulic system operation.</li></ul>
        <Placeholder caption="System B reservoir, standby connection and PTU standpipe." />

        <h3>Equipment powered</h3>
        <ul className="study-points"><li><strong>Primary flight controls:</strong> ailerons, rudder, elevators and elevator feel.</li><li><strong>Spoilers:</strong> flight spoilers 3, 5, 8 and 10.</li><li><strong>High-lift devices:</strong> leading-edge flaps and slats, trailing-edge flaps and autoslats.</li><li><strong>Brakes and steering:</strong> normal brakes and alternate nose-wheel steering.</li><li><strong>Other users:</strong> No. 2 thrust reverser, autopilot B, yaw damper and landing-gear transfer function.</li></ul>

        <h3>Power Transfer Unit (PTU)</h3>
        <p>The PTU restores the hydraulic volume required to operate the autoslats and leading-edge flaps and slats at the normal rate when the system B engine-driven pump is inoperative. System A pressure drives a hydraulic motor mechanically connected to a pump which pressurizes system B fluid.</p>
        <p>The PTU operates automatically when system B engine-driven-pump pressure is below limits and the aircraft is airborne. The additional flap condition is:</p>
        <ul className="study-points"><li><strong>NG YA573-YW097:</strong> flaps less than 15 but not up.</li><li><strong>NG YW098-YW164 and MAX:</strong> flaps not up.</li></ul>
        <Need title="Pressure crosses mechanically · fluid does not"><p>The PTU transfers power between the systems through a motor-and-pump shaft. It does not transfer hydraulic fluid, and it cannot help if system B fluid has been lost.</p></Need>
      </section>

      <section className="course-section" id="standby">
        <span className="section-num">04 / STANDBY SYSTEM</span>
        <h2>A dedicated electric pump pressurizes a limited set of essential users when commanded manually or automatically.</h2>

        <h3>Characteristics, quantity and reservoir design</h3>
        <p>The standby reservoir holds approximately <strong>3.6 US gal / 13.3 L</strong>. It is connected to the system B reservoir for pressurization and servicing. The amber <strong>LOW QUANTITY</strong> light is always armed and illuminates when the standby reservoir is approximately half empty.</p>
        <p>If the standby system leaks, standby quantity decreases to zero. System B continues to operate, but its indicated reservoir quantity decreases and stabilizes at approximately 70%.</p>

        <h3>Equipment powered</h3>
        <ul className="study-points"><li><strong>Rudder:</strong> standby rudder power control unit.</li><li><strong>Leading-edge flaps and slats:</strong> extension only through the alternate-flap system.</li><li><strong>Thrust reversers:</strong> backup pressure for both reversers, with slower operation.</li><li><strong>Yaw damper:</strong> standby yaw-damper function.</li></ul>
        <h4>Manual activation</h4>
        <p>Selecting either FLT CONTROL switch to <strong>STBY RUD</strong> starts the standby pump, isolates the associated normal-system pressure from the ailerons, elevators and rudder, and opens the standby rudder shutoff valve. Selecting <strong>ALTERNATE FLAPS ARM</strong> also starts the pump, closes the trailing-edge-flap bypass valve and arms the alternate-flap position switch.</p>
        <h4>Automatic activation</h4>
        <p>The standby pump starts automatically after a loss of system A or B pressure when the flaps are extended, the aircraft is airborne or wheel speed exceeds 60 kt, and the related FLT CONTROL switch is ON. A main rudder PCU Force Fight Monitor trip also activates the system.</p>
        <ul className="study-points"><li><strong>STBY RUD ON:</strong> the standby system is commanded on to pressurize the standby rudder PCU.</li><li><strong>STANDBY LOW PRESSURE:</strong> standby-pump output pressure is low. The light is armed only while manual or automatic standby operation is selected.</li><li><strong>STANDBY LOW QUANTITY:</strong> standby reservoir quantity is approximately half full; this light is always armed.</li></ul>
        <Placeholder caption="Standby hydraulic system, automatic logic and powered equipment." />
      </section>

      <section className="course-section" id="manual-reversion">
        <span className="section-num">05 / MANUAL REVERSION</span>
        <h2>If both normal hydraulic systems lose pressure, mechanical control paths preserve limited aileron and elevator control.</h2>
        <p>The control wheels and columns remain mechanically connected to the flight controls. With no hydraulic assistance, pilot inputs operate the ailerons and elevator through manual reversion. Control forces are substantially higher and response is reduced.</p>
        <ul className="study-points"><li><strong>Ailerons:</strong> the control wheels mechanically position the ailerons. Control forces are higher because of friction and aerodynamic loads.</li><li><strong>Elevators:</strong> the control columns mechanically position the interconnected elevators. Control forces are higher because of friction and aerodynamic loads.</li><li><strong>Rudder:</strong> there is no manual reversion. Rudder control requires system A, system B or standby hydraulic pressure.</li><li><strong>Spoilers:</strong> unavailable without normal hydraulic pressure, further reducing roll response.</li><li><strong>Standby yaw damper:</strong> with both FLT CONTROL switches at STBY RUD, it can use control-wheel input to command the standby rudder PCU and assist the turn.</li></ul>
        <Warning title="DEGRADED CONTROL">Manual reversion is a backup control condition. Higher forces, limited control authority and the loss of hydraulic spoiler assistance require smooth inputs and strict use of the applicable non-normal procedure.</Warning>
        <Deep title="Go deeper · Reservoir foaming"><p>If a reservoir is not correctly pressurized, fluid can foam at high altitude. Pressure may fluctuate, related LOW PRESSURE lights may blink, and MASTER CAUTION with the HYD annunciator may illuminate momentarily.</p></Deep>
      </section>

      <SystemPager current="Hydraulics" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Pressure, volume and redundancy.</h3><p className="muted">NG operation is paired with the differences and effectivities that change MAX indications or hydraulic distribution.</p></div></aside></div>
  </main>;
}
