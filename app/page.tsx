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
          <span>Know the systems. Fly the logic.</span>
        </h1>
        <p className="lead">
          Built for Irish low-cost carrier cadets and serious 737 simmers.
        </p>
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
      <section className="wrap section" id="systems">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE AIRCRAFT</p>
            <h2>Choose your system.</h2>
            <p className="library-description">
              Each aircraft system has its own dedicated page. Courses are added
              as their content is completed and verified.
            </p>
          </div>
          <span className="library-count">
            15 systems <span> / 3 available</span>
          </span>
        </div>
        <div className="system-shortcuts">
          {chapters.map((name, index) => {
            const Icon = icons[index];
            const available = name === 'Fuel' || name === 'Anti-Ice, Rain' || name === 'Airplane General, Emergency Equipment, Doors, Windows';
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
          <h2>Read it. Understand it. Recall it.</h2>
          <p>
            Try the available free questions. Discover the planned premium
            question bank and original English revision sheets.
          </p>
        </div>
        <Link className="button" href="/academy">
          Study access <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
