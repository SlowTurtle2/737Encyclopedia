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
  ['overview', 'Overview'],
  ['airplane-general', 'Airplane General'],
];

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

            <h3>Weights</h3>
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

            <h3>Dimensions</h3>
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
                <strong>Advanced technology winglets:</strong> taller blades
                with only 3.1 m clearance (vs 3.9 m) — damage-prone on stand and
                closer to the ground in the flare. Worth ~1–1.8% fuel.
              </li>
              <li>
                <strong>LEAP-1B engine:</strong> 69-inch fan (vs 61-inch), moved
                up and forward; 27,000 lb thrust (+1,000), bypass ratio ~9, about
                15% less fuel and CO₂.
              </li>
              <li>
                <strong>Taller nose gear:</strong> strut 8 inches longer to keep
                the bigger engine clear of the ground — hence the higher nose.
              </li>
              <li>
                <strong>Nose-wheel intercom:</strong> an extra interphone jack
                and pilot call button in the nose wheel well, because the taller
                nose makes the ground power hatch harder to reach.
              </li>
              <li>
                <strong>Extra mid exits:</strong> one Type II mid-exit door on
                each side for 197 passengers, adding LEFT / RIGHT MID EXIT door
                lights; cabin zones shift slightly.
              </li>
              <li>
                <strong>APU inlet door:</strong> three positions — ground/open
                (~45°), in-flight (~17°) and closed. All APU cooling air now
                comes through this door.
              </li>
              <li>
                <strong>Redesigned tailcone:</strong> no tail vortex generators,
                ~1% less drag, and an extra strobe and position light on each
                side.
              </li>
              <li>
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
