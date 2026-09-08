import Link from '@/components/site-link';
import Contents from '../systems/fuel/contents';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

export const metadata = {
  title: 'MAX Differences | 737Encyclopedia',
  description:
    'A concise, chapter-by-chapter summary of what changes between the 737-800 NG and the 737-8200 MAX.',
};

function Need({ children }: { children: React.ReactNode }) {
  return (
    <aside className="need-to-know teal">
      <span className="need-label">REMEMBER THIS</span>
      <div>{children}</div>
    </aside>
  );
}
function Ops({ children }: { children: React.ReactNode }) {
  return (
    <aside className="configuration-data">
      <strong>OPERATIONAL NOTE</strong>
      <p>{children}</p>
    </aside>
  );
}
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <aside className="suction-warning">
      <strong>WATCH OUT</strong>
      <p>{children}</p>
    </aside>
  );
}

// Each chapter of this page mirrors a system chapter. Add a new entry here and
// a matching <section> below to publish another chapter.
const chapters = [
  ['overview', 'Overview', ''],
  ['airplane-general', 'Airplane General', '01'],
  ['air-systems', 'Air Systems', '02'],
  ['anti-ice', 'Anti-Ice', '03'],
];

function Tag({ kind }: { kind: 'new' | 'redesign' }) {
  return (
    <span className={'diff-tag ' + kind}>
      {kind === 'new' ? 'New Feature' : 'Redesign'}
    </span>
  );
}

export default function MAX() {
  return (
    <main id="main" className="system-course">
      <div className="wrap fuel-course-banner">
        <strong>MAX DIFFERENCES · 737-800 → 737-8200</strong>
        <div className="course-meta">
          <span className="pill available">NG → MAX</span>
          <span className="pill">TRAINING SUMMARY</span>
        </div>
      </div>
      <div className="wrap course-layout">
        <article>
          <section className="course-section" id="overview">
            <span className="section-num">OVERVIEW</span>
            <h2>
              The 737-8200 flies like a 737-800. Most differences are physical
              or in how the displays look.
            </h2>
            <p>
              Throughout this page the <strong>737-8200</strong> is the MAX and
              the <strong>737-800</strong> is the NG. Chapters follow the system
              chapters and are added over time.
            </p>
            <ul className="study-points">
              <li>
                <strong>No changes</strong> to memory items or procedure flows —
                only minor step changes and a few non-normal checklists.
              </li>
              <li>
                <strong>Same handling</strong> in pitch, roll and yaw, and the
                same landing-minima category (CAT C).
              </li>
              <li>
                The <strong>LEAP-1B</strong> has thrust characteristics similar
                to the CFM56-7B.
              </li>
              <li>
                The <strong>MAX Display System</strong> shows the same
                information as the NG — mostly restyled, not re-engineered.
              </li>
            </ul>
          </section>

          <section className="course-section" id="airplane-general">
            <span className="section-num">CHAPTER 1 / AIRPLANE GENERAL</span>
            <h2>
              More seats and a bigger engine drive nearly every airframe
              difference.
            </h2>

            <h3><Tag kind="redesign" />Weights</h3>
            <p>
              The MAX seats <strong>197</strong> against <strong>189</strong> on
              the NG, so every certified weight is higher. Use the figures on
              each aircraft&rsquo;s Weight Certificate.
            </p>
            <Table className="course-table">
              <TableCaption>Maximum certified weights (kg).</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Weight</TableHead>
                  <TableHead>737-800</TableHead>
                  <TableHead>737-8200</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ['MTOW', '74,990', '76,200'],
                  ['MLW', '65,317', '68,175'],
                  ['MZFW', '61,688', '64,818'],
                ].map((r) => (
                  <TableRow key={r[0]}>
                    {r.map((v) => (
                      <TableCell key={v}>{v}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <h3><Tag kind="redesign" />Dimensions</h3>
            <p>
              Practically the same length (~39.5 m) and wingspan (35.79 →
              35.92 m). The number that matters is winglet ground clearance.
            </p>
            <div className="dimension-compare">
              <article>
                <span>737-800 · BLENDED WINGLET</span>
                <strong>3.9 m</strong>
                <p>Ground clearance</p>
              </article>
              <article>
                <span>737-8200 · ADVANCED WINGLET</span>
                <strong>3.1 m</strong>
                <p>Ground clearance</p>
              </article>
            </div>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <strong>Advanced technology winglets:</strong> taller blades
                with only 3.1 m clearance (vs 3.9 m) — damage-prone on stand and
                closer to the ground in the flare. Worth ~1–1.8% fuel.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>LEAP-1B engine:</strong> 69-inch fan (vs 61-inch), moved
                up and forward; 27,000 lb thrust (+1,000), bypass ratio ~9, about
                15% less fuel and CO₂.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Taller nose gear:</strong> strut 8 inches longer to keep
                the bigger engine clear of the ground — hence the higher nose.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Nose-wheel intercom:</strong> an extra interphone jack
                and pilot call button in the nose wheel well, because the taller
                nose makes the ground power hatch harder to reach.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Extra mid exits:</strong> one Type II mid-exit door on
                each side for 197 passengers, adding LEFT / RIGHT MID EXIT door
                lights; cabin zones shift slightly.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>APU inlet door:</strong> three positions — ground/open
                (~45°), in-flight (~17°) and closed. All APU cooling air now
                comes through this door.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Redesigned tailcone:</strong> no tail vortex generators,
                ~1% less drag, and an extra strobe and position light on each
                side.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Flight deck:</strong> mostly presentation (MDS vs CDS);
                four circuit breakers move from the aisle stand to the P6 panel.
              </li>
            </ul>

            <Ops>
              The LEAP-1B has noticeable residual thrust at idle — the aircraft
              accelerates to taxi speed on idle alone, more so with anti-ice on
              (+4% N1). It also needs a 3-minute warm-up/cool-down and oil at
              least 31°C before takeoff.
            </Ops>
            <Warning>
              At just 3.1 m, the winglet tips are a hotspot for unreported ground
              damage and increase the risk of wingtip or nacelle contact in a
              mishandled landing. Report any winglet damage and apply the MEL for
              drag penalties.
            </Warning>
            <Need>
              <p>
                Same aircraft to fly. On the ground, expect a higher nose, low
                winglets, livelier idle taxi and two extra cabin exits.
              </p>
            </Need>
            <p className="muted">
              Engine start and handling are detailed in{' '}
              <Link href="/systems/engines-apu">Engines / APU</Link>; display
              changes in{' '}
              <Link href="/systems/flight-instruments-displays">
                Flight Instruments, Displays
              </Link>
              .
            </p>
            <p className="source">REFERENCE · 737-8200 Familiarisation, Ch.1 · FCOM Ch.1</p>
          </section>

          <section className="course-section" id="air-systems">
            <span className="section-num">CHAPTER 2 / AIR SYSTEMS</span>
            <h2>
              A new electronic bleed air system — same operation, smarter
              indications.
            </h2>
            <p>
              The 737-8200 uses an all-new, electronically controlled and
              pneumatically actuated bleed air system. It takes bleed air from
              the <strong>4th and 10th</strong> compressor stages (vs the
              <strong> 5th and 9th</strong> on the NG), a single engine bleed can
              feed both packs in flight, and it detects and isolates faults on
              its own. What you do at the panel does not change.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>BLEED light (was BLEED TRIP OFF):</strong> still lights
                for over-temperature or over-pressure, but now also for
                under-pressure or a system fault — which may not be resettable. A
                new BLEED non-normal checklist replaces BLEED TRIP OFF.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Configuration check:</strong> both BLEED lights come on
                45 seconds after flap retraction if both bleed switches are left
                OFF after take-off or go-around. Turning either switch ON clears
                a configuration light.
              </li>
              <li>
                <Tag kind="redesign" />
                <Tag kind="new" />
                <strong>PACK light:</strong> adds two cases — a Flow Control
                Valve stuck closed, and the same post-take-off configuration
                logic (both lights if both pack switches are OFF; either ON
                clears it).
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Cross bleed start:</strong> extra thrust is normally{' '}
                <strong>not</strong> needed to reach the 30 PSI duct pressure to
                start the second engine — the NG needs additional thrust.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>RAM DOOR FULL OPEN lights:</strong> removed — they were
                not used in normal or non-normal procedures.
              </li>
              <li>
                <Tag kind="new" />
                <strong>EQUIP SMOKE light:</strong> illuminates when smoke
                is detected in the equipment cooling system and clears 30 seconds
                after it is gone; the supply OFF lights move to the top of the
                panel, with a new non-normal checklist.
              </li>
            </ul>

            <Ops>
              On a No Engine Bleed take-off, the BLEED lights can illuminate if
              the after-take-off no-bleed checklist is not completed — sequence
              it deliberately to avoid the nuisance indication.
            </Ops>
            <Need>
              <p>
                Same panel, same actions. The system now watches itself: extra
                reasons for BLEED and PACK lights, a configuration check after
                take-off, and a new EQUIP SMOKE alert.
              </p>
            </Need>
            <p className="source">REFERENCE · 737-8200 Familiarisation, Ch.2 · FCOM Ch.2</p>
          </section>

          <section className="course-section" id="anti-ice">
            <span className="section-num">CHAPTER 3 / ANTI-ICE</span>
            <h2>
              New automatic engine-core protection, and anti-ice valve lights
              that switch from blue to amber.
            </h2>
            <p>
              The anti-ice system now draws bleed air from the{' '}
              <strong>4th and 10th</strong> compressor stages (vs the 5th and
              9th on the NG), and both the engine and wing anti-ice indications
              change. The way you operate the switches is unchanged.
            </p>

            <h3>Key differences at a glance</h3>
            <ul className="study-points">
              <li>
                <Tag kind="new" />
                <strong>Engine core anti-ice:</strong> the LEAP-1B adds core
                heating. The EEC directs bleed air to the engine core
                automatically as needed — no crew action and no indication in
                normal operation.
              </li>
              <li>
                <Tag kind="new" />
                <strong>ENG ANTI-ICE light:</strong> a new amber annunciator
                (none on the NG). It lights if cowl anti-ice is inhibited by a
                failure, or if an engine core anti-ice valve fails closed, with
                its own non-normal checklist.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Valve lights — blue to amber:</strong> all anti-ice
                valve lights are now amber, renamed (COWL VALVE OPEN → COWL
                VALVE; L/R VALVE OPEN → L/R VALVE). They flash amber in transit
                and are extinguished once the valve reaches the commanded
                position — open <em>or</em> closed.
              </li>
              <li>
                <Tag kind="new" />
                <strong>Disagreement alerting:</strong> if a valve disagrees
                with its switch, the light stays on and MASTER CAUTION
                illuminates after about 6 seconds — the NG only shows a steady
                bright-blue light.
              </li>
              <li>
                <Tag kind="redesign" />
                <strong>Wing valve lights on the ground:</strong> when the wing
                valves close for high thrust or a duct over-temperature, the
                lights are now inhibited on the ground instead of showing blue.
              </li>
            </ul>

            <Ops>
              Because a MAX valve light looks the same when the system is OFF and
              when it is ON (extinguished once in position), the light alone will
              not tell you anti-ice is running. Use the green TAI indication on
              the engine display to confirm engine anti-ice status, and stay
              alert to anti-ice left ON when it is not needed.
            </Ops>
            <Need>
              <p>
                Amber, not blue — and normally dark once in position. The engine
                now protects its core by itself; confirm engine anti-ice with
                the green TAI, not the valve light.
              </p>
            </Need>
            <p className="muted">
              Full valve indications and idle logic are in the{' '}
              <Link href="/systems/anti-ice-rain">Anti-Ice, Rain</Link> system
              course.
            </p>
            <p className="source">REFERENCE · 737-8200 Familiarisation, Ch.3 · FCOM Ch.3</p>
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
              One page, chapter by chapter. Airplane General is first; further
              chapters (Air Systems, and the rest) are added over time.
            </p>
            <Link href="/systems/airplane-general-emergency-equipment-doors-windows">
              Full Airplane General course →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
