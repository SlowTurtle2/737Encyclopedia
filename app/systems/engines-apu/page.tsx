import Image from 'next/image';
import SystemPager from '@/components/system-pager';
import Contents from '../fuel/contents';

export const metadata = {
  title: 'Engines and APU | 737Encyclopedia',
  description: '737 NG and MAX engine control, indications, start protection, ignition, oil system and APU operation.',
};

function Need({ title, children }: { title: string; children: React.ReactNode }) {
  return <aside className="need-to-know teal"><span className="need-label">NEED TO KNOW</span><h3>{title}</h3><div>{children}</div></aside>;
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
function Placeholder({ caption }: { caption: string }) {
  return <figure className="schematic-placeholder" aria-label={`${caption} illustration placeholder`}><span>ILLUSTRATION TO BE ADDED</span><figcaption>{caption}</figcaption></figure>;
}
function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="figure course-photo"><Image src={src} alt={alt} width={1200} height={900} /><figcaption>{caption}</figcaption></figure>;
}
function Light({ title, src, alt, children }: { title: string; src: string; alt: string; children: React.ReactNode }) {
  return <div className="emergency-light-card air-system-alert"><Image src={src} alt={alt} width={600} height={300} /><div><strong>{title}</strong><p>{children}</p></div></div>;
}

const sections = [
  ['big-picture', 'The big picture'],
  ['control-indication', 'Engine control and indication'],
  ['engine-system', 'Engine system'],
  ['apu', 'APU'],
];

export default function EnginesApu() {
  return <main id="main" className="system-course">
    <div className="wrap fuel-course-banner"><strong>SYSTEM / ENGINES &amp; APU</strong><div className="course-meta"><span className="pill available">737 NG</span><span className="pill">MAX DIFFERENCES INCLUDED</span></div></div>
    <div className="wrap course-layout"><article>
      <section className="course-section" id="big-picture">
        <span className="section-num">01 / THE BIG PICTURE</span>
        <h2>Two independently controlled turbofans provide thrust, bleed air and mechanical drive; the APU supplies auxiliary electrical and pneumatic power.</h2>
        <p>The NG uses two CFM56-7B engines and the MAX uses two LEAP-1B engines. Both are dual-rotor axial-flow turbofans. The <strong>N1 rotor</strong> comprises the fan, low-pressure compressor and low-pressure turbine. The mechanically independent <strong>N2 rotor</strong> comprises the high-pressure compressor and high-pressure turbine, drives the accessory gearboxes and is connected to the pneumatic starter.</p>
        <div className="course-table-wrap"><table className="course-table"><caption>Powerplant roles</caption><thead><tr><th>System</th><th>Primary function</th><th>Aircraft services</th></tr></thead><tbody><tr><td>Engine N1 rotor</td><td>Produces most of the propulsive thrust</td><td>Fan air and low-pressure compression</td></tr><tr><td>Engine N2 rotor</td><td>High-pressure compression and combustion core</td><td>Starter connection and accessory-gearbox drive</td></tr><tr><td>Accessory gearbox</td><td>Transfers N2 mechanical power</td><td>IDG, fuel pumps, oil pump and hydraulic pump</td></tr><tr><td>APU</td><td>Independent gas-turbine power source</td><td>AC electrical power and bleed air</td></tr></tbody></table></div>
        <Need title="N1 commands thrust · N2 drives the core"><p>The EEC controls fuel to achieve commanded N1. N2 is the high-pressure rotor used to monitor starting and it mechanically drives the engine accessories.</p></Need>
        <div className="engine-comparison-grid">
          <Figure src="/images/engine-leap-1b.png" alt="LEAP-1B engine fitted to a Boeing 737 MAX" caption="737 MAX · LEAP-1B engine." />
          <Figure src="/images/engine-cfm56-7b.png" alt="CFM56-7B engine fitted to a Boeing 737 NG" caption="737 NG · CFM56-7B engine." />
        </div>
      </section>

      <section className="course-section" id="control-indication">
        <span className="section-num">02 / ENGINE CONTROL AND INDICATION</span>
        <h2>Each engine has a dual-channel full-authority EEC which converts thrust-lever demand into controlled fuel flow and protects structural rotor-speed limits.</h2>

        <h3>Electronic Engine Control (EEC)</h3>
        <p>Each EEC contains two independent channels. The active channel changes at every engine start or start attempt, and control transfers automatically if the operating channel fails. The EEC uses N1 as the thrust-control parameter and operates in normal, soft alternate or hard alternate mode.</p>
        <ul className="study-points">
          <li><strong>Normal mode:</strong> sensed flight conditions, thrust-lever position and bleed demand are used to calculate the N1 rating. Fuel flow is then metered to match commanded N1.</li>
          <li><strong>Soft alternate mode:</strong> selected automatically when normal-mode inputs are lost. The last valid flight conditions are retained so the transfer produces no immediate thrust change. The ON and ALTN indications can both be visible.</li>
          <li><strong>Hard alternate mode:</strong> entered when a thrust lever is retarded to idle in soft alternate, or when ALTN is selected manually. The alternate schedule gives rated thrust or more for a given lever position; maximum rated thrust may be reached before the forward stop.</li>
          <li><strong>Structural protection:</strong> N1 and N2 redline overspeed protection remains available in normal and alternate modes. EGT redline protection is not provided during normal engine operation and the crew must observe the EGT limit.</li>
        </ul>
        <Warning title="HARD ALTERNATE MODE">EEC thrust limiting is not available in hard alternate mode. Advancing the thrust levers to or near the forward stop can overboost the engine.</Warning>
        <Max>The MAX EEC also provides <strong>TCMA</strong> and <strong>EOS</strong>. TCMA shuts down an engine that remains above idle with its thrust lever at idle during ground operation. EOS shuts off fuel if an uncontrollable N2 overspeed is detected in flight. MAX idle logic also includes a dedicated icing-idle schedule.</Max>
        <Deep title="Go deeper · Idle schedules"><p>The EEC selects the idle required by aircraft configuration. Ground minimum idle is used on the ground. Flight minimum idle is used during most flight conditions. A higher approach idle improves acceleration for a go-around. On the NG it is selected with either engine anti-ice on, or below 19,000 ft with a main gear down or flap 15 or greater. The MAX separately schedules icing idle with flaps up, gear not down and locked, and engine anti-ice on; approach idle applies with flap 15 or greater, or with flaps not up and engine anti-ice on.</p></Deep>

        <h3>Start function and protection</h3>
        <p>A ground start requires electrical power and pneumatic pressure from the APU, an external air source or the other operating engine. Selecting <strong>GRD</strong> closes the related engine bleed valve and opens the start valve. Bleed air drives the starter and rotates N2 through the accessory gearbox.</p>
        <ol className="study-points">
          <li><strong>Motoring:</strong> wait for the recommended 25% N2 or maximum motoring before moving the engine start lever.</li>
          <li><strong>Start lever IDLE:</strong> the spar and engine fuel valves open and the EEC supplies fuel and ignition. EGT must rise and N2 must continue to accelerate.</li>
          <li><strong>Starter cutout:</strong> at approximately 56% N2 on the NG and 63% N2 on the MAX, the start switch releases to OFF, the start valve closes and the engine bleed valve returns to its selected position.</li>
        </ol>
        <p>During a ground start, the EEC monitors for an impending hot start, compressor stall, EGT start-limit exceedance and wet start. For an impending hot start or stall, the white EGT box flashes and applicable EEC software removes ignition and fuel. An EGT start-limit exceedance turns the indication red and causes automatic fuel and ignition cutoff. If EGT does not rise within 15 seconds after selecting IDLE, wet-start logic shuts off fuel and ignition.</p>
        <Max>After GRD is selected, <strong>Bowed Rotor Motoring</strong> can hold the MAX between approximately 18% and 24% N2 for 6 to 90 seconds to straighten thermally bowed shafts. Selecting IDLE at 25% N2 or maximum motoring starts a TCMA/EOS test: fuel flow remains zero and the engine fuel valve cycles before the normal start sequence continues.</Max>
        <Warning title="INFLIGHT START">Ground-start protections do not function during an inflight start. Windmill and crossbleed starts are available; X-BLD is displayed when crossbleed air is recommended.</Warning>
        <div className="engine-start-image-grid">
          <Figure src="/images/engine-start-panel.png" alt="Boeing 737 engine start switches and ignition selector" caption="Engine start switches and ignition selector." />
          <Figure src="/images/engine-control-stand.png" alt="Boeing 737 control stand mechanism and engine start levers" caption="Control stand mechanism and engine start levers." />
        </div>

        <h3>Indications and warnings</h3>
        <p><strong>N1</strong> and <strong>EGT</strong> are the primary engine indications. Secondary indications are <strong>N2, fuel flow, oil pressure, oil temperature, oil quantity and vibration</strong>. Secondary data appears automatically at initial display power-up, in flight when a start lever is moved to CUTOFF, when N2 falls below idle, or when a secondary parameter exceeds its normal range.</p>
        <Need title="ENG FAIL"><p>The engine is below sustainable idle with the start lever at IDLE. The alert remains until the engine recovers, the start lever is moved to CUTOFF, or the fire switch is pulled.</p></Need>
        <div className="air-system-light-list">
          <Light title="START VALVE OPEN" src="/images/engine-start-valve-open-light.png" alt="Amber START VALVE OPEN light">Steady indicates that the start valve is open and starter air is supplied. Blinking indicates an uncommanded valve opening.</Light>
          <Light title="LOW OIL PRESSURE" src="/images/engine-low-oil-pressure-light.png" alt="Amber LOW OIL PRESSURE light">Oil pressure is at or below the red line. A new condition blinks for 10 seconds before remaining steady.</Light>
          <Light title="OIL FILTER BYPASS" src="/images/engine-oil-filter-bypass-light.png" alt="Amber OIL FILTER BYPASS light">An oil-filter bypass is impending. On the NG it monitors the scavenge filter; on the MAX it monitors the oil supply filter.</Light>
          <Light title="EEC ALTN" src="/images/engine-eec-altn-light.png" alt="Amber EEC ALTN light">The EEC has transferred automatically to alternate control or ALTN has been selected manually. ON and ALTN can both be visible in soft alternate mode.</Light>
          <Light title="ENGINE CONTROL" src="/images/engine-control-light.png" alt="Amber ENGINE CONTROL light">An engine-control fault makes the system not dispatchable. The light is displayed with the engine running on the ground below 80 kt before takeoff, or approximately 30 seconds after touchdown.</Light>
        </div>
        <Max>MAX crew alerts also include <strong>THRUST</strong> when actual thrust is above or below commanded thrust, and <strong>FUEL FLOW</strong> when measured fuel flow is abnormally high compared with the FMC prediction. New alerts and their engine block blink for 10 seconds before remaining steady, except during inhibited takeoff and landing phases.</Max>
        <Placeholder caption="Primary and secondary engine indications, limits and crew alerts." />
      </section>

      <section className="course-section" id="engine-system">
        <span className="section-num">03 / ENGINE SYSTEM</span>
        <h2>Fuel, ignition and oil are scheduled around the EEC, while the thrust reverser redirects fan flow for ground deceleration.</h2>

        <h3>Ignition</h3>
        <p>Each engine has two independent igniter plugs. The left igniter is powered by the associated AC transfer bus; the right igniter is powered by the AC standby bus. The ignition-select switch chooses L, BOTH or R for both engines.</p>
        <ul className="study-points">
          <li><strong>GRD:</strong> opens the start valve and arms the selected igniter for a ground start. During an inflight start, both igniters are armed.</li>
          <li><strong>OFF:</strong> normal position with ignition off, although automatic relight logic can energize both igniters after a rapid uncommanded N2 decrease or when N2 falls below the applicable idle schedule.</li>
          <li><strong>CONT:</strong> continuously energizes the selected igniter while the engine operates and the start lever is at IDLE; both are used if inflight N2 falls below idle.</li>
          <li><strong>FLT:</strong> energizes both igniters whenever the start lever is at IDLE.</li>
        </ul>
        <Need title="Auto-relight uses both igniters"><p>An uncommanded rapid decrease in N2 or N2 below idle is interpreted as a flameout. The EEC automatically energizes both igniters.</p></Need>

        <h3>Oil system</h3>
        <p>Each engine has an independent, self-contained oil system. An engine-driven pressure pump supplies oil to the bearings and accessory gearbox. Engine-driven scavenge pumps recover the oil from the sumps and gearbox and return it to the tank after cooling and separation.</p>
        <ul className="study-points">
          <li><strong>Oil pressure:</strong> white in the normal range, amber in the caution range and red at the operating limit. LOW OIL PRESSURE appears at or below the red line.</li>
          <li><strong>Oil temperature:</strong> white normally, amber in the caution range and red at the operating limit.</li>
          <li><strong>Oil quantity:</strong> shows usable tank quantity. A temporary decrease during start, takeoff or climb does not by itself affect engine operation.</li>
          <li><strong>Filter protection:</strong> the oil automatically bypasses a saturated filter; OIL FILTER BYPASS appears before bypass occurs.</li>
        </ul>
        <Max>NG oil passes from the pressure pump to the engine and returns through a monitored scavenge filter and fuel-cooled main oil cooler. MAX supply oil passes through a monitored supply filter, servo fuel heater, air-cooled oil cooler and main fuel/oil heat exchanger; scavenge oil returns through an air/oil/debris separator. This is why the OIL FILTER BYPASS alert refers to different filter locations.</Max>
        <h3>Engine fuel system</h3>
        <p>Tank pumps deliver fuel through the spar shutoff valve to the engine-driven fuel pumps, heat exchangers and filter. The EEC meters fuel in the HMU on the NG and the FMU on the MAX. Both the spar and engine fuel valves must be open for engine operation; either the start lever at CUTOFF or a pulled fire switch closes both valves.</p>
        <Deep title="Go deeper · Fuel is also the oil heat sink"><p>The fuel/oil heat exchanger transfers engine-oil heat into the fuel. This cools the oil and warms the fuel before it reaches the metering unit and combustor.</p></Deep>

        <h3>Thrust reverser</h3>
        <p>Each hydraulically operated reverser moves translating sleeves aft and deploys blocker doors so fan discharge is redirected forward through cascade vanes. Engine 1 normally uses hydraulic system A and engine 2 system B; the standby system provides slower alternate operation if the normal source is lost.</p>
        <ul className="study-points"><li><strong>Interlock:</strong> reverse cannot be selected until the forward thrust lever is at IDLE, and the reverse lever is held near reverse idle until deployment is sufficient.</li><li><strong>REV amber:</strong> the reverser has moved from stowed. <strong>REV green:</strong> deployment is complete.</li><li><strong>NG REVERSER:</strong> a valve, sleeve-position, auto-restow or synchronization-lock fault exists.</li><li><strong>MAX REVERSER LIMITED:</strong> a ground fault exists, or an inflight fault will prevent deployment or limit reverse to idle.</li></ul>
      </section>

      <section className="course-section" id="apu">
        <span className="section-num">04 / APU</span>
        <h2>The tail-mounted APU is an automatically controlled gas turbine which supplies auxiliary AC electrical power and pneumatic air.</h2>

        <h3>APU control</h3>
        <ul className="study-points">
          <li><strong>OFF:</strong> normal shutdown position. If the APU is running, the generator is removed from the buses and the bleed valve closes; the APU continues through an automatic 60-second cooling period.</li>
          <li><strong>ON:</strong> normal running position.</li>
          <li><strong>START:</strong> momentary selection. Releasing the switch to ON initiates the fully automatic start sequence.</li>
        </ul>
        <p>APU operation requires the flight-deck APU fire switch and external ground-control fire handle to be in, with the BATTERY switch ON. Start power normally comes from transfer bus 1; the main battery supplies the starter-generator when AC power is unavailable. Selecting the battery OFF removes ECU power and shuts down the APU.</p>
        <Placeholder caption="NG and MAX APU control and indication panels." />

        <h3>APU system</h3>
        <p>The APU can start and operate up to the aircraft maximum certified altitude. It can power both transfer buses on the ground or in flight. Pneumatically, it supplies both packs on the ground or one pack in flight and provides air for engine starting.</p>
        <ul className="study-points">
          <li><strong>Fuel:</strong> supplied from the left fuel manifold when AC pumps operate; without AC pump pressure, the APU suction-feeds from tank 1. Fuel is heated automatically during operation.</li>
          <li><strong>Air inlet:</strong> opens automatically before the start sequence. Ignition and fuel are introduced only after the door reaches the required position and the APU reaches the required speed.</li>
          <li><strong>Ready for load:</strong> the blue APU GEN OFF BUS light illuminates when the APU can accept electrical or bleed load.</li>
          <li><strong>Start time:</strong> the automatic cycle can take up to 120 seconds and terminates if speed and acceleration targets are not achieved.</li>
          <li><strong>Bleed stabilization:</strong> allow two full minutes after start before using APU bleed air.</li>
          <li><strong>Shutdown:</strong> selecting OFF provides the required one-minute unloaded cooling period automatically before fuel and the inlet door close.</li>
        </ul>
        <Max>The MAX inlet door has three commanded positions: closed, approximately 17° flight open and approximately 45° ground open. It moves automatically at liftoff and touchdown. On the NG, engine air and compartment cooling air use separate inlets; the cooling inlet is above the exhaust outlet.</Max>
        <Deep title="Go deeper · ECU load management"><p>The ECU schedules fuel, speed and protective shutdown. With excessive EGT or speed under electrical load, it sheds load. During an engine start it sheds electrical load before reducing bleed extraction. Outside engine start, it reduces bleed extraction through the inlet guide vanes while maintaining electrical load. In flight with the APU as the sole electrical source, galley and main buses are shed automatically; additional IFE shedding occurs if required.</p></Deep>

        <h3>Indications and warnings</h3>
        <ul className="study-points">
          <li><strong>LOW OIL PRESSURE:</strong> normal during the start until pressure rises; after the start cycle, low pressure causes automatic shutdown.</li>
          <li><strong>FAULT:</strong> an APU malfunction has initiated automatic shutdown. It also identifies a failed start or a fuel valve that fails to close after shutdown.</li>
          <li><strong>OVERSPEED:</strong> the RPM limit was exceeded and caused automatic shutdown, or overspeed shutdown protection failed its self-test during normal shutdown.</li>
          <li><strong>APU GEN OFF BUS:</strong> blue when the generator is available but not connected to a bus; during start it also confirms that the APU is ready to accept load.</li>
        </ul>
        <Max>The MAX has an amber <strong>DOOR</strong> light when the inlet door is not in its commanded closed, flight-open or ground-open position. The NG panel instead includes an APU EGT gauge and blue <strong>MAINT</strong> light; MAINT indicates a maintenance condition but does not prohibit APU operation.</Max>
        <Need title="Protective shutdown is automatic"><p>The ECU shuts the APU down when a detected fault could damage the APU or aircraft. The resulting FAULT, OVERSPEED or LOW OIL PRESSURE indication identifies the shutdown category.</p></Need>
      </section>

      <SystemPager current="Engines, APU" />
    </article><aside className="course-aside"><div className="aside-box"><p className="eyebrow">IN THIS CHAPTER</p><Contents sections={sections} /><hr /><h3>Control, start, sustain.</h3><p className="muted">NG operation is paired with the MAX differences that change crew indications, start logic or system architecture.</p></div></aside></div>
  </main>;
}
