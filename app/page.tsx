import Link from '@/components/site-link';
import { chapters, slug } from '@/lib/systems';
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Box,
  Wind,
  Gauge,
  SlidersHorizontal,
  Power,
  Radio,
  Zap,
  BriefcaseMedical,
  Flame,
  Move,
  GitBranch,
  PanelsTopLeft,
  Calculator,
  Fuel,
  Droplets,
  Snowflake,
  CircleDot,
  Compass,
  Waves,
  Fan,
  TriangleAlert,
  BookOpen,
  Layers,
  GitCompareArrows,
} from 'lucide-react';
const icons = [
  Plane,
  Box,
  Wind,
  Gauge,
  SlidersHorizontal,
  Power,
  Radio,
  Zap,
  BriefcaseMedical,
  Flame,
  Move,
  GitBranch,
  PanelsTopLeft,
  Calculator,
  Fuel,
  Droplets,
  Snowflake,
  CircleDot,
  Compass,
  Waves,
  Fan,
  TriangleAlert,
];
export default function Home() {
  return (
    <main id="main" className="landing">
      <section className="landing-hero wrap">
        <p className="landing-label">BOEING 737 NG & MAX</p>
        <h1>
          <span>Prepare for the airline. Master the 737.</span>
        </h1>
        <p className="lead">
          Free airline-assessment preparation, growing NG/MAX systems courses,
          and practical tools for type rating and line training.
        </p>
        <p className="hero-audience">
          Built for Irish low-cost carrier cadets and serious 737 simmers.
        </p>
        <div className="assessment-free-note">
          <strong>Airline assessment preparation</strong>
          <span>All the material you need, completely free.</span>
        </div>
      </section>
      <div className="intro-strip wrap">
        <span>
          <BookOpen size={19} /> In-depth explanations
        </span>
        <span>
          <Layers size={19} /> Interactive schematics
        </span>
        <span>
          <GitCompareArrows size={19} /> NG & MAX comparisons
        </span>
      </div>
      <section className="wrap assessment-path" aria-labelledby="assessment-path-title">
        <div className="assessment-path-head">
          <div>
            <p className="eyebrow">PREPARE YOUR AIRLINE ASSESSMENT</p>
            <h2 id="assessment-path-title">Prepare each stage before assessment day.</h2>
            <p>Move from technical preparation to the HR interview and simulator session with direct access to each study area.</p>
          </div>
          <span className="free-access-tag">100% FREE</span>
        </div>
        <div className="assessment-steps">
          <article className="assessment-step assessment-step-double">
            <span className="assessment-step-number">01</span>
            <h3>Technical preparation</h3>
            <div className="assessment-step-links">
              <Link href="/airline-assessment/technical-interview">Technical interview <ArrowUpRight size={17} /></Link>
              <Link href="/max-differences">MAX differences <ArrowUpRight size={17} /></Link>
            </div>
          </article>
          <ArrowRight className="assessment-flow-arrow" aria-hidden="true" />
          <article className="assessment-step">
            <span className="assessment-step-number">02</span>
            <h3>HR interview</h3>
            <Link href="/airline-assessment/hr-interview">Open section <ArrowUpRight size={17} /></Link>
          </article>
          <ArrowRight className="assessment-flow-arrow" aria-hidden="true" />
          <article className="assessment-step">
            <span className="assessment-step-number">03</span>
            <h3>Simulator session</h3>
            <Link href="/airline-assessment/simulator-session">Open section <ArrowUpRight size={17} /></Link>
          </article>
        </div>
      </section>
      <section className="wrap section" id="systems">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE AIRCRAFT</p>
            <h2>Study the 737, system by system.</h2>
            <p className="library-description">
              Each aircraft system has its own dedicated page. Courses are added
              as their content is completed and verified.
            </p>
          </div>
          <span className="library-count">
            15 systems <span> / 5 available</span>
          </span>
        </div>
        <div className="system-shortcuts">
          {chapters.map((name, index) => {
            const Icon = icons[index];
            const available = name === 'Fuel' || name === 'Anti-Ice, Rain' || name === 'Airplane General, Emergency Equipment, Doors, Windows' || name === 'Fire Protection' || name === 'Landing Gear';
            return (
              <Link
                key={name}
                className="system-shortcut"
                href={'/systems/' + slug(name)}
              >
                <div className="shortcut-top">
                  <Icon size={24} strokeWidth={1.6} />
                  <ArrowUpRight size={18} className="shortcut-arrow" />
                </div>
                <h3>{name}</h3>
                <span
                  className={
                    available
                      ? 'shortcut-status available-status'
                      : 'shortcut-status'
                  }
                >
                  {available ? (
                    <>
                      <span className="status-dot" />
                      Course available
                    </>
                  ) : (
                    'Coming soon'
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="wrap study-banner">
        <div>
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>Test what you know.</h2>
          <p>
            Use the available free questions to turn systems knowledge into
            reliable exam and interview recall.
          </p>
        </div>
        <Link className="button" href="/academy">
          Study access <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
