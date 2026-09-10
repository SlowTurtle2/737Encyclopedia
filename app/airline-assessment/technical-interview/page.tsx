import Link from '@/components/site-link';
import Contents from '../../systems/fuel/contents';

export const metadata = {
  title: 'Technical Interview | 737Encyclopedia',
  description:
    'A question bank for the 737 technical interview, grouped into ATPL basics, your previous aircraft and the 737, with the topics seen most often in recent assessments.',
};

function Hot() {
  return <span className="diff-tag hot">Hot</span>;
}
function Need({ children }: { children: React.ReactNode }) {
  return (
    <aside className="need-to-know teal">
      <span className="need-label">REMEMBER THIS</span>
      <div>{children}</div>
    </aside>
  );
}
function Tip({ children }: { children: React.ReactNode }) {
  return (
    <aside className="configuration-data">
      <strong>ADVICE</strong>
      <p>{children}</p>
    </aside>
  );
}

const chapters = [
  ['overview', 'Overview', ''],
  ['atpl-basics', 'Know your ATPL basics', '01'],
  ['previous-aircraft', 'Know your previous aircraft', '02'],
  ['master-737', 'Master the 737', '03'],
  ['advice', 'Advice', '04'],
];

export default function TechnicalInterview() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>AIRLINE ASSESSMENT / TECHNICAL INTERVIEW</strong>
        <div className="course-meta">
          <span className="pill available">QUESTION BANK</span>
          <span className="pill">
            <span className="diff-tag hot" style={{ marginRight: 0 }}>
              Hot
            </span>
            &nbsp;= SEEN &lt; 6 MONTHS
          </span>
        </div>
      </div>
      <div className="wrap assessment-scope-note">
        <span className="scope-badge">FOCUS</span>
        <p>
          This preparation is tailored to the{' '}
          <strong>Irish low-cost carrier</strong> selection process. The
          questions, flows and expectations follow that operator&rsquo;s
          assessment, not a generic airline assessment.
        </p>
      </div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">OVERVIEW</span>
            <h2>
              A short, conversational check that you have broad basic knowledge,
              not deep detail on any one subject.
            </h2>
            <p>
              The technical interview is usually brief (around 15 to 20 minutes).
              The assessor is ticking boxes: they want to hear the key idea, then
              they move on. They often start with one question and jump to a
              related one, so the conversation can go anywhere. It falls into
              three themes, your ATPL theory, the aircraft you have flown, and
              the 737.
            </p>
            <p>
              Questions are usually steered by your background. A candidate with
              an engineering background should expect more technical questions
              about the aircraft, while a candidate from a social-sciences
              background is more likely to get CRM or human-factors questions.
            </p>
            <p>
              Questions marked <Hot /> come from assessment feedback in the last
              six months. The rest are long-standing favourites.
            </p>
            <Need>
              <p>
                Have something to say on every subject, and steer toward what you
                know well. It is better to give the short, correct answer than a
                long one.
              </p>
            </Need>
          </section>

          <section className="course-section" id="atpl-basics">
            <span className="section-num">CHAPTER 1 / KNOW YOUR ATPL BASICS</span>
            <h2>
              The theory questions that come up most: meteorology,
              aerodynamics, instruments and performance.
            </h2>

            <h3>Meteorology</h3>
            <ul className="study-points q-list">
              <li><Hot />Where do you find turbulence, and what causes it?<span className="q-hint">Mechanical, thermal, frontal, wind-shear, mountain-wave and CAT near jet streams.</span></li>
              <li><Hot />What is a jet stream? What phenomena go with it, and how would you cross one?<span className="q-hint">Narrow high-altitude wind core near the tropopause; brings CAT; cross at 90° and change level to clear it fast.</span></li>
              <li><Hot />How can you anticipate clear air turbulence (CAT)?<span className="q-hint">SIGWX charts, jet-stream position and PIREPs, no reliable onboard detection.</span></li>
              <li><Hot />How does a thunderstorm form, and what are the stages?<span className="q-hint">Needs moisture, instability and a lift trigger; cumulus → mature → dissipating.</span></li>
              <li><Hot />You have a storm cell ahead on takeoff, what are the hazards?<span className="q-hint">Wind shear/microburst, gusts, hail, turbulence, lightning, heavy rain, downdraughts.</span></li>
              <li><Hot />How do you avoid a thunderstorm in the cruise? And if the wind is coming from your left?<span className="q-hint">Deviate ~20 nm, upwind of the cell (hail drifts downwind), into the wind, so to the left here.</span></li>
              <li><Hot />What is a microburst, and what is windshear?<span className="q-hint">Windshear = sudden change in wind speed/direction; microburst = intense local downdraught spreading out at the surface.</span></li>
              <li><Hot />Which system detects windshear, and how does it work (Doppler)?<span className="q-hint">Predictive windshear from the weather radar (Doppler frequency shift), plus a reactive GPWS-based warning.</span></li>
              <li><Hot />What is a temperature inversion, and how does it affect performance?<span className="q-hint">Warmer air above colder; very stable, poor mixing; degrades climb/engine performance and traps haze.</span></li>
              <li><Hot />Read back this METAR group for me (for example MI, SH, VC, SN, GR, BR, FG, TSRA).<span className="q-hint">MI shallow, SH showers, VC vicinity, SN snow, GR hail, BR mist, FG fog, TSRA thunderstorm with rain.</span></li>
              <li>What is the minimum wind speed that defines a jet stream?<span className="q-hint">60 kt or more.</span></li>
              <li>Temperature 15°C, dew point 14°C, what weather would you expect?<span className="q-hint">~1° spread → very humid → mist/fog or low cloud likely.</span></li>
              <li>How does a low- or high-pressure system drive the weather?<span className="q-hint">Lows: rising air, cloud, precip, wind; highs: sinking air, settled/clear.</span></li>
              <li>What is the definition of twilight?<span className="q-hint">Period after sunset/before sunrise; civil twilight = sun 6° below the horizon.</span></li>
            </ul>

            <h3>Principles of flight &amp; high-speed aerodynamics</h3>
            <ul className="study-points q-list">
              <li><Hot />Why are the wings swept? What angle, and why not more?<span className="q-hint">Raises M<sub>crit</sub>/delays compressibility; more sweep costs low-speed lift and handling, a compromise (~25°).</span></li>
              <li><Hot />What is M<sub>crit</sub>? What is Mach tuck, and what is Mach trim?<span className="q-hint">M<sub>crit</sub> = Mach where flow first goes sonic; Mach tuck = nose-down from aft shock/CP shift; Mach trim adds nose-up to counter it.</span></li>
              <li><Hot />What is the critical engine, and why is it critical?<span className="q-hint">The one whose failure most degrades control/performance; on a conventional twin the left (P-factor, descending blade further from centreline).</span></li>
              <li>Where does a swept wing tend to stall first, and why?<span className="q-hint">At the tips (spanwise flow) → pitch-up risk; hence washout, fences, vortilons.</span></li>
              <li>What is the Mach number, and roughly what level do you change from an IAS to a Mach reference?<span className="q-hint">TAS ÷ local speed of sound; change to Mach at the crossover, ~FL290.</span></li>
              <li>What is the absolute ceiling versus the service ceiling? Can you reach the service ceiling at MTOW?<span className="q-hint">Absolute = zero climb rate; service = 100 ft/min left; not at MTOW, burn down or step-climb.</span></li>
              <li>What is dihedral, and what does it do?<span className="q-hint">Upward wing angle giving lateral (roll) stability.</span></li>
              <li>What are spoilers for, and how do they work?<span className="q-hint">Reduce lift / add drag, speedbrake in flight, lift-dump and roll assist on the ground.</span></li>
              <li>Does a single-engine piston aircraft have a P-factor?<span className="q-hint">Yes, asymmetric blade loading yaws the nose (left with a clockwise prop) at high AoA.</span></li>
              <li>What is a deep stall on a T-tail aircraft?<span className="q-hint">Stalled-wing wake blankets the high tailplane → loss of pitch authority, hard to recover.</span></li>
              <li>Explain wake turbulence.<span className="q-hint">Wingtip vortices from lift; worst heavy/clean/slow; sink and drift downwind → separation minima.</span></li>
            </ul>

            <h3>Instruments &amp; air data</h3>
            <ul className="study-points q-list">
              <li><Hot />What is a pitot tube, and what is a static port? Which instruments use each?<span className="q-hint">Pitot = total pressure (ASI); static = static pressure (ALT, VSI).</span></li>
              <li><Hot />The pitot blocks with ice in the climb (or descent), what does the airspeed do, and how do you fly (pitch and power)?<span className="q-hint">Acts like an altimeter: over-reads in the climb, under-reads in the descent; fly known pitch + power.</span></li>
              <li><Hot />What is a radio altimeter, and which systems use it (for example the GPWS)?<span className="q-hint">Height AGL below ~2500 ft; feeds GPWS/EGPWS, autoland and minima callouts.</span></li>
              <li><Hot />What is TAT? Is it higher or lower than the real air temperature, and why?<span className="q-hint">Total Air Temperature: higher than SAT, because ram/kinetic heating adds a rise.</span></li>
              <li><Hot />Does TAS increase or decrease with altitude for a fixed IAS, and why?<span className="q-hint">Increases, lower air density with height.</span></li>
              <li><Hot />You set 1023 instead of 1013 on the altimeter, are you higher or lower than indicated? What is this error called?<span className="q-hint">Subscale ~10 hPa too high → altimeter under-reads (~280 ft low) → you are actually higher; a pressure-setting error.</span></li>
              <li>What is a gyroscope, and which of your instruments used one?<span className="q-hint">Rigidity &amp; precession; attitude indicator, heading indicator/DG, turn coordinator.</span></li>
              <li>You take off with the pitot cover left on, what does the airspeed show?<span className="q-hint">Reads low or zero, no ram/dynamic pressure.</span></li>
            </ul>

            <h3>Performance &amp; flight planning</h3>
            <ul className="study-points q-list">
              <li><Hot />Your destination is forecast foggy, what conditions make an alternate legal?<span className="q-hint">Alternate forecast at/above its planning minima for the ETA window, with fuel to reach it.</span></li>
              <li><Hot />Why do we carry contingency fuel? What is final reserve fuel, and how much is it?<span className="q-hint">Contingency (~5% of trip fuel) covers the unexpected in flight, such as wind or routing that differs from the plan, ATC re-routes, or a level lower than planned. Final reserve = 30 min holding at 1500 ft.</span></li>
              <li><Hot />When do you call &ldquo;MAYDAY FUEL&rdquo;?<span className="q-hint">When usable fuel on landing at the nearest suitable will be below final reserve.</span></li>
              <li><Hot />Work through a simple crosswind calculation.<span className="q-hint">Crosswind = wind × sin(angle); rule of thumb 30°≈½, 45°≈0.7, 60°≈full.</span></li>
              <li><Hot />Flying in cold or hot weather, how do indicated altitude and airspeed change, and how many feet do you add or subtract per degree?<span className="q-hint">Cold → altimeter over-reads (true lower) → add corrections; ~4 ft per 1000 ft per °C from ISA.</span></li>
              <li><Hot />Why must you be careful flying into very cold weather?<span className="q-hint">True altitude is below indicated, apply cold-temperature corrections to minima and terrain clearance.</span></li>
              <li>What is TODA? What are a stopway and a clearway? Can you taxi on a clearway?<span className="q-hint">TODA = TORA + clearway; stopway = paved area to stop in; clearway = obstacle-free area beyond, no taxiing on it.</span></li>
              <li>What is screen height?<span className="q-hint">The height the aircraft must reach or clear over the runway end. Takeoff: 35 ft dry, 15 ft wet. Landing: 50 ft over the threshold.</span></li>
              <li>What is V<sub>MCG</sub>, and can it be higher than V1?<span className="q-hint">Min speed for directional control on the ground with an engine out; V1 is not set below V<sub>MCG</sub>.</span></li>
              <li>What are CAT I / II / III minima? What are planning minima? What is the difference between MDA and DA?<span className="q-hint">DA (precision, no level-off) vs MDA (non-precision, don&rsquo;t go below). CAT I: DH 200 ft, RVR 550 m. CAT II: DH 100 ft, RVR 300 m. CAT III: IIIA DH below 100 ft, RVR 200 m; IIIB DH below 50 ft, RVR 75 m; IIIC no DH, RVR 0. Planning minima are applied at the planning stage.</span></li>
              <li>What is TUC at 40,000 ft?<span className="q-hint">Time of useful consciousness ~15 to 20 seconds.</span></li>
              <li>Why might a runway have a permanently displaced threshold?<span className="q-hint">Approach obstacles, noise, or declared-distance limits (landing displaced, takeoff can use full length).</span></li>
            </ul>

            <h3>Navigation, communication &amp; surveillance</h3>
            <ul className="study-points q-list">
              <li><Hot />What would you do in the event of a radio / communications failure?<span className="q-hint">Squawk 7600, continue per last clearance / expected route and level, follow lost-comms rules, try other means.</span></li>
              <li><Hot />What is the difference between VHF and HF?<span className="q-hint">VHF line-of-sight, short range, clear; HF long-range sky-wave for oceanic, noisier.</span></li>
              <li><Hot />Do you have to monitor HF continuously?<span className="q-hint">No, SELCAL chimes when they call you.</span></li>
              <li><Hot />Explain datalink / CPDLC.<span className="q-hint">Text clearances/messages between crew and ATC; cuts R/T, used oceanic and remote.</span></li>
              <li><Hot />Tell me about the North Atlantic tracks, routing, required equipment and position reporting.<span className="q-hint">Organised daily tracks; need MNPS/PBN plus HF or CPDLC; position reports at waypoints.</span></li>
              <li><Hot />What is TCAS? What are the two alert types, which one do you manoeuvre for, and what do you tell ATC after an RA?<span className="q-hint">TA (advisory, don&rsquo;t manoeuvre) and RA (follow it, even against ATC); report &ldquo;TCAS RA&rdquo;, then &ldquo;clear of conflict&rdquo;.</span></li>
              <li><Hot />What is the difference between the GPWS and the EGPWS? Explain the EGPWS.<span className="q-hint">GPWS is reactive (radio alt, modes 1 to 7); EGPWS adds a terrain database + GPS for predictive look-ahead and a terrain display.</span></li>
              <li>You get a TCAS RA to climb at your service ceiling. What do you do?<span className="q-hint">Follow the RA with the performance available; it may not achieve the full rate.</span></li>
              <li>What equipment is required to fly in Class D airspace, and what are the differences between airspace classes?<span className="q-hint">D: two-way radio and a clearance (transponder as required); classes differ by IFR/VFR mix, clearance and separation.</span></li>
              <li>What is CFIT, and what is UPRT?<span className="q-hint">CFIT = Controlled Flight Into Terrain: an airworthy aircraft, under the control of the crew, is flown unintentionally into terrain, water or an obstacle, usually with no awareness by the crew until too late. UPRT = upset prevention &amp; recovery training.</span></li>
            </ul>

            <h3>Icing &amp; unreliable airspeed</h3>
            <ul className="study-points q-list">
              <li><Hot />What are the effects of icing conditions on the aircraft?<span className="q-hint">Added weight and drag, disrupted lift and stall margin, blocked probes, AoA/control effects, use anti-/de-ice.</span></li>
              <li><Hot />Unreliable airspeed, what are your actions?<span className="q-hint">Disconnect A/P, A/T and FD; set memory pitch + thrust; then use the QRH tables.</span></li>
              <li><Hot />What is the difference between a windshear escape manoeuvre and a go-around?<span className="q-hint">Escape: max thrust, wings level, follow FD/pitch, don&rsquo;t change configuration; go-around is the normal missed approach with config changes.</span></li>
            </ul>
          </section>

          <section className="course-section" id="previous-aircraft">
            <span className="section-num">CHAPTER 2 / KNOW YOUR PREVIOUS AIRCRAFT</span>
            <h2>
              Expect to be walked through the aircraft you trained on: engines,
              systems and how you handled failures.
            </h2>
            <p className="q-intro">
              Swap the types below for the ones you actually flew (C152/C172,
              PA28, DA42, PA44/Seminole, DR400, A320, B737…). The assessor uses
              your aircraft as the starting point and jumps from there.
            </p>

            <h3>Talking about your aircraft</h3>
            <ul className="study-points q-list">
              <li><Hot />Tell me about your multi-engine aircraft.</li>
              <li><Hot />Tell me about your flight school, how many aircraft, what types, the airport and facilities.</li>
              <li><Hot />Which airspace did you fly in, and what are the dangers at the airports you used?</li>
              <li><Hot />What are the differences between two types you flew (for example C150 vs C172, or a DR400 vs the rest)?</li>
            </ul>

            <h3>Piston engines &amp; propellers</h3>
            <ul className="study-points q-list">
              <li><Hot />What causes carburettor icing, and how do you prevent it? Explain the carb-heat system.</li>
              <li><Hot />How is cockpit heating produced, and what is the risk (carbon-monoxide poisoning)?</li>
              <li><Hot />When you press the starter, why does the propeller turn (direct-drive engine)?</li>
              <li><Hot />What is the Otto cycle, and how does it differ from a turbine engine?</li>
              <li><Hot />What is the difference between a FADEC diesel and a carburetted engine?</li>
              <li>Where are the fuel tanks, and are there any extra fuel pumps?</li>
              <li>Can you feather the propeller? What happens if a propeller suddenly stops?</li>
            </ul>

            <h3>Multi-engine handling</h3>
            <ul className="study-points q-list">
              <li><Hot />Which is the critical engine, and why? (And why does a twin like the DA42 or Seminole sometimes not have one?)</li>
              <li><Hot />How are counter-rotating propellers achieved?</li>
              <li><Hot />What is V<sub>MCA</sub>, and what is the rotation speed? Why is rotation higher?</li>
              <li><Hot />Walk me through the engine-failure procedure (&ldquo;dead foot, dead engine&rdquo;).</li>
              <li>What flaps are fitted, and what setting would you use landing with and without a crosswind, and why?</li>
            </ul>

            <h3>Systems &amp; induction</h3>
            <ul className="study-points q-list">
              <li><Hot />How is electrical power generated, and what failures can occur?</li>
              <li><Hot />Describe the anti-ice and hydraulic systems on your twin (for example the PA44).</li>
              <li><Hot />What is the difference between a normally-aspirated and a turbocharged engine?</li>
              <li><Hot />How does a turbocharged engine cool the intake air (intercooler)?</li>
              <li><Hot />What are slats and flaps, and how do they differ from those on the 737?</li>
              <li>What is the difference between a turbocharger and a supercharger?</li>
            </ul>
          </section>

          <section className="course-section" id="master-737">
            <span className="section-num">CHAPTER 3 / MASTER THE 737</span>
            <h2>
              The 737 questions that come up again and again. Start broad, then
              be ready to go one level deeper.
            </h2>
            <p className="q-intro">
              <strong>Note:</strong> the depth of these questions usually depends
              on your MCC. Candidates who did their MCC on the 737 tend to get
              more detailed 737 questions, while those coming from an A320 MCC are
              generally asked at a more basic level.
            </p>
            <p className="q-intro">
              Many of these are covered on the{' '}
              <Link href="/max-differences">MAX Differences</Link> page and in
              the systems courses.
            </p>

            <h3>The aircraft &amp; NG vs MAX</h3>
            <ul className="study-points q-list">
              <li><Hot />Tell me about the 737.</li>
              <li><Hot />What are the differences between the 8200 and the -800, inside and outside?</li>
              <li><Hot />What is MCAS on the 737-8200? What does it do, and can you comment on the accidents?</li>
              <li>Why does the 8200 have 197 seats?</li>
              <li>Why is there no OFF position on the 8200 landing-gear lever, and what is the OFF position for on the -800?</li>
            </ul>

            <h3>Engines</h3>
            <ul className="study-points q-list">
              <li><Hot />What are the differences between the CFM56-7B and the LEAP-1B?</li>
              <li><Hot />Why is the MAX more efficient than the -800?</li>
              <li><Hot />What is the bypass ratio, and what are the NG and MAX values?</li>
              <li><Hot />The LEAP is quieter, why do we care about keeping noise low?</li>
              <li>Explain in simple terms how a jet engine works (intake, compression, combustion, turbine, exhaust).</li>
              <li>What does the turbine drive, and how many spools are there? What is the main driven component (the fan)?</li>
              <li>What does the APU provide, and what is its power output?</li>
            </ul>

            <h3>Wings, flaps &amp; slats</h3>
            <ul className="study-points q-list">
              <li><Hot />During a flaps-5 takeoff ENG2 fails, can you retract the flaps?</li>
              <li>What is the difference between flaps and slats? How are the slats and engine cowls heated?</li>
              <li>What are the flap gates at 1 and 15 for?</li>
              <li>Why would you take off at flaps 1?</li>
              <li>Why are the wings swept, and how much dihedral does the 737 have?</li>
              <li>What are the &ldquo;spikey&rdquo; things below the wings (static dischargers / vortex generators)?</li>
            </ul>

            <h3>Pressurization &amp; air</h3>
            <ul className="study-points q-list">
              <li><Hot />How is the 737 pressurised? What are the PACKs for?</li>
              <li>What position is the outflow valve in during the cruise?</li>
              <li>You are at FL410 and the outflow valve opens fully, what happens?</li>
            </ul>

            <h3>Hydraulics</h3>
            <ul className="study-points q-list">
              <li><Hot />What are the hydraulics used for, and how many systems are there?</li>
              <li><Hot />How do you brake if you lose all hydraulics? How do you de-ice the wings?</li>
              <li>What is powered by system A and what by system B?</li>
              <li>What is the PTU / landing-gear transfer unit?</li>
            </ul>

            <h3>Electrical, gear &amp; brakes</h3>
            <ul className="study-points q-list">
              <li><Hot />Tell me about the electrical system. How is AC converted to DC?</li>
              <li>Tell me about the landing gear. What would you do if the gear did not retract?</li>
              <li>What is this antenna on the fuselage?</li>
            </ul>

            <h3>Ice, probes &amp; windows</h3>
            <ul className="study-points q-list">
              <li><Hot />Where are the heated probes and vanes, and which are heated?</li>
              <li>Which system, captain or first officer, heats window L3 / R3? Explain window heating.</li>
            </ul>

            <h3>Warnings, surveillance &amp; abnormals</h3>
            <ul className="study-points q-list">
              <li><Hot />What are your actions for a windshear event near the runway?</li>
              <li><Hot />You have a fire in the main landing gear in the cruise. What do you do? (Go to the QRH.)</li>
              <li>What is TCAS on the 737? Do you have to follow an RA? What is the call for &ldquo;Go Around, One Engine Inoperative&rdquo;?</li>
              <li>How many pitots are there on the 737?</li>
              <li>Tell me about the 737 fire protection and suppression.</li>
            </ul>
          </section>

          <section className="course-section" id="advice">
            <span className="section-num">CHAPTER 4 / ADVICE</span>
            <h2>
              How you answer matters as much as what you know, they are looking
              for a trainable, honest cadet.
            </h2>
            <ul className="study-points q-list">
              <li>
                <strong>&ldquo;I don&rsquo;t know&rdquo; beats a bluff.</strong>{' '}
                If you are unsure, say so, or say it is an educated guess and
                reason it out. A confident wrong answer looks worse than an
                honest gap.
              </li>
              <li>
                <strong>Get to the point.</strong> The assessor wants the key
                idea, then moves on. Give the short, correct answer first; add
                detail only if asked.
              </li>
              <li>
                <strong>Steer the conversation.</strong> They jump from topic to
                topic, so lead toward the subjects you know well. Whatever you
                are comfortable talking about, bring it up.
              </li>
              <li>
                <strong>Show you are trainable.</strong> If the assessor explains
                something, engage with it and ask a follow-up. If they do not,
                it is fine to ask &ldquo;what would the answer be? I&rsquo;d like
                to know.&rdquo;
              </li>
              <li>
                <strong>Be humble, not cocky.</strong> Do not oversell past
                experience. They want a trainable cadet; everything else is a
                nice-to-have. Humble candidates often get an easier ride.
              </li>
              <li>
                <strong>Recover from mistakes.</strong> Catching and correcting
                an error is a good sign, do not let one slip rattle you.
              </li>
              <li>
                <strong>Prioritise a busy request.</strong> The assessor may pack
                several instructions into one message, deal with them in order
                of importance and read them back.
              </li>
            </ul>
            <Tip>
              Build a basic, confident level across every subject, especially
              meteorology, principles of flight, aircraft general knowledge and
              instruments, rather than deep expertise in one. Breadth wins this
              interview.
            </Tip>
          </section>

          <div className="system-page-footer">
            <Link className="system-glossary-link" href="/glossary">
              Open the 737 glossary
            </Link>
          </div>
        </article>
        <aside className="course-aside">
          <div className="aside-box">
            <p className="eyebrow">CHAPTERS</p>
            <Contents sections={chapters} />
            <hr />
            <p className="muted">
              <span className="diff-tag hot" style={{ marginRight: 6 }}>
                Hot
              </span>
              marks a question seen in assessment feedback within the last six
              months.
            </p>
            <Link href="/max-differences">NG → MAX differences →</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
