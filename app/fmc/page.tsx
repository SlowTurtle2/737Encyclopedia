import { RequireAccess } from '@/components/auth';
import Contents from '../systems/fuel/contents';
import { FmcTrainer } from './trainer';

export const metadata = {
  title: 'FMC Tutorial | 737Encyclopedia',
  description:
    'Step-by-step FMC preflight tutorials for the 737, from initial set up to route activation, with an interactive CDU trainer for study and simulation.',
};

const chapters = [
  ['initial-setup', 'Initial set up', '01'],
  ['final-cdu', 'Final CDU', '02'],
  ['app-setup', 'Approach set up', '03'],
  ['trainer', 'Interactive trainer', ''],
];

function Key({ children }: { children: React.ReactNode }) {
  return <span className="lsk">{children}</span>;
}
function PageTag({ children }: { children: React.ReactNode }) {
  return <span className="fmc-page-tag">{children}</span>;
}
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <aside className="suction-warning">
      <strong>WATCH OUT</strong>
      <p>{children}</p>
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

export default function FMC() {
  return (
    <RequireAccess>
      <main id="main" className="system-course fmc-tutorial-page">
        <div className="wrap fuel-course-banner">
          <strong>TYPE RATING / FMC TUTORIAL</strong>
          <div className="course-meta">
            <span className="pill available">CDU PREFLIGHT</span>
            <span className="pill">STEP BY STEP</span>
          </div>
        </div>

        <div className="wrap assessment-scope-note">
          <span className="scope-badge">FOCUS</span>
          <p>
            These FMC flows follow the <strong>Irish low-cost carrier</strong>{' '}
            SOPs and typical Dublin-based routings. The line-key positions,
            speed gates and examples match that operator, not a generic 737
            set up.
          </p>
        </div>

        <div className="wrap course-layout">
          <article>
            <section className="course-section" id="initial-setup">
              <span className="section-num">TUTORIAL 01</span>
              <h2>Initial set up</h2>
              <p>
                The cockpit preparation flow, from the first checks to route
                activation. Work through each page top to bottom, then move on
                to the next one. Line keys are written as their row number with
                L for the left column and R for the right column, so{' '}
                <Key>2L</Key> is the second key down on the left.
              </p>

              <ol className="fmc-tut-steps">
                <li>
                  <PageTag>IDENT</PageTag>
                  <p>Confirm the page matches the aircraft and the day.</p>
                  <ul>
                    <li>Correct aircraft model</li>
                    <li>Correct engine rating</li>
                    <li>Navigation database valid for today</li>
                  </ul>
                </li>

                <li>
                  <PageTag>POS INIT</PageTag>
                  <p>
                    Type the current airport into the scratchpad and line-select
                    it into <strong>REF AIRPORT</strong> <Key>2L</Key>.
                  </p>
                  <ol className="fmc-substeps">
                    <li>
                      Go to the next page (POS REF). Read the left GPS position
                      and copy it into the scratchpad.
                    </li>
                    <li>
                      Go back to the previous page. Line-select that position
                      into <strong>SET IRS POS</strong> <Key>4R</Key> to align
                      the IRS.
                    </li>
                  </ol>
                </li>

                <li>
                  <PageTag>ROUTE · page 1</PageTag>
                  <p>
                    The origin airport is already in the scratchpad from POS
                    INIT. Paste it into <strong>ORIGIN</strong>, then complete
                    the rest of page 1: destination, flight number and origin
                    runway.
                  </p>
                </li>

                <li>
                  <PageTag>DEP / ARR</PageTag>
                  <p>
                    Set the departure procedure and departure runway, then the
                    arrival procedure and arrival runway.
                  </p>
                </li>

                <li>
                  <PageTag>ROUTE · page 2</PageTag>
                  <p>
                    Insert the routing from the OFP routing section, waypoint by
                    waypoint. Clear every route discontinuity before moving on.
                  </p>
                </li>

                <li>
                  <PageTag>LEGS</PageTag>
                  <ol className="fmc-substeps">
                    <li>
                      Set a maximum of 220 kt on the first turn, or lower if the
                      departure requires it (operator SOPs).
                    </li>
                    <li>
                      Enter the speed and altitude restrictions from the chart.
                      For example, on the LIFFY7A departure set 220B/90 at DUB
                      (220 kt or below, 9,000 ft).
                    </li>
                  </ol>
                </li>

                <li>
                  <PageTag>FIX</PageTag>
                  <ol className="fmc-substeps">
                    <li>
                      Enter the airport on a FIX page and draw a 25 nm ring for
                      terrain awareness (the MSA ring). For example, DUB with 25
                      nm.
                    </li>
                    <li>
                      Enter the engine-out SID (EOSID) from the OPT TKO dispatch
                      page as a second fix. For example, DUBX4 with radial R277.
                    </li>
                  </ol>
                </li>

                <li>
                  <PageTag>PERF INIT</PageTag>
                  <p>Fill the page from the OFP:</p>
                  <ul>
                    <li>Cost index (CI)</li>
                    <li>Reserves</li>
                    <li>Estimated zero fuel weight (eZFW)</li>
                    <li>Cruise altitude (CRZ ALT)</li>
                    <li>Cruise wind (CRZ WIND)</li>
                    <li>
                      Transition altitude, entered as the chart value plus 1 ft
                      (operator SOPs)
                    </li>
                  </ul>
                </li>

                <li>
                  <PageTag>N1 LIMIT</PageTag>
                  <p>
                    Set the outside air temperature (OAT) from the ATIS so the
                    FMC computes the correct takeoff N1.
                  </p>
                </li>

                <li>
                  <PageTag>ROUTE · activate</PageTag>
                  <p>
                    Return to the ROUTE page and press <strong>ACTIVATE</strong>.
                    Do not execute yet.
                  </p>
                </li>
              </ol>

              <Warning>
                Do not press EXEC at this stage. The route is activated but only
                executed later, during the route check in the RIBETS flow.
                Executing early locks in a route that is not yet cross-checked.
              </Warning>

              <Tip>
                Keep the OFP beside you and work one page at a time. Clearing
                every discontinuity on the ROUTE and LEGS pages before PERF INIT
                saves you from surprises further down the flow.
              </Tip>
            </section>

            <section className="course-section" id="final-cdu">
              <span className="section-num">TUTORIAL 02</span>
              <h2>Final CDU</h2>
              <p className="fmc-soon">In preparation</p>
            </section>

            <section className="course-section" id="app-setup">
              <span className="section-num">TUTORIAL 03</span>
              <h2>Approach set up</h2>
              <p className="fmc-soon">In preparation</p>
            </section>

            <section className="course-section" id="trainer">
              <span className="section-num">PRACTICE</span>
              <h2>Interactive trainer</h2>
              <p>
                Run the pages of the initial set up on the CDU below. Use the
                line keys to enter data and PREV/NEXT PAGE to move through
                multi-page sections.
              </p>
            </section>
          </article>

          <aside className="course-aside">
            <div className="aside-box">
              <p className="eyebrow">TUTORIALS</p>
              <Contents sections={chapters} />
              <hr />
              <p className="muted">
                Try each step on the interactive trainer at the bottom of the
                page.
              </p>
            </div>
          </aside>
        </div>

        <div className="fmc-trainer-wrap">
          <FmcTrainer />
        </div>
      </main>
    </RequireAccess>
  );
}
