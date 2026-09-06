import Link from '@/components/site-link';

export const metadata = { title: 'Glossary | 737Encyclopedia', description: 'Common Boeing 737 systems terms and abbreviations.' };

const terms = [
  ['AC', 'Alternating current electrical power.'], ['APU', 'Auxiliary Power Unit.'], ['CDS', 'Common Display System.'], ['COWL', 'The aerodynamic engine nacelle structure surrounding the inlet and engine.'], ['DC', 'Direct current electrical power.'], ['EEC', 'Electronic Engine Control.'], ['Effectivity', 'The specific aircraft, modification status or production range to which information applies.'], ['FMC', 'Flight Management Computer.'], ['FCOM', 'Flight Crew Operations Manual.'], ['IMBAL', 'Fuel imbalance indication between main tanks 1 and 2.'], ['NG', '737 Next Generation family.'], ['NGS', 'Nitrogen Generation System.'], ['Pitot probe', 'A probe that senses total pressure for airspeed-related calculations.'], ['Slat', 'A movable leading-edge lift device.'], ['Static port', 'A flush opening that senses ambient static pressure.'], ['TAI', 'Thermal Anti-Ice indication.'], ['TAT', 'Total Air Temperature.'], ['Ullage', 'The space above the liquid fuel inside a tank.'], ['VREF', 'Reference landing speed calculated for the selected landing configuration.'], ['Wing anti-ice', 'Bleed-air heating of the three inboard leading-edge slats on each wing.'],
];

export default function Glossary() {
  return <main id="main" className="wrap glossary-page"><p className="eyebrow">REFERENCE</p><h1>737 Glossary</h1><p className="lead">Quick definitions for terms used throughout the systems courses.</p><div className="glossary-grid">{terms.map(([term, definition]) => <article key={term} id={term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}><h2>{term}</h2><p>{definition}</p></article>)}</div><Link className="button" href="/">Return home →</Link></main>;
}
