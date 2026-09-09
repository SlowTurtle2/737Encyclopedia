import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { Menu, Plane } from 'lucide-react';
import { chapters, slug } from '@/lib/systems';
import { HeaderAuth } from '@/components/auth';
import './globals.css';

export const metadata: Metadata = {
  title: '737Encyclopedia | Understand the aircraft',
  description: 'Detailed Boeing 737 NG systems courses, annotated schematics and 737-8200 MAX differences for pilots and simulator enthusiasts.',
};

function Navigation() {
  return <><Link href="/">Home</Link><details className="systems-menu"><summary>Systems</summary><div>{chapters.map(name => <Link key={name} href={'/systems/' + slug(name)}>{name}</Link>)}</div></details><details className="systems-menu compact-menu"><summary>Airline Assessment</summary><div><Link href="/airline-assessment/technical-interview">Technical Interview</Link><Link href="/airline-assessment/hr-interview">HR Interview</Link><Link href="/airline-assessment/simulator-session">Simulator Session</Link><Link href="/max-differences">MAX Differences</Link></div></details><details className="systems-menu compact-menu"><summary>Type Rating</summary><div><Link href="/#systems">Systems</Link><Link href="/type-rating/technical-exam">Technical Exam</Link><Link href="/type-rating/performance-exam">Performance Exam</Link><Link href="/type-rating/sop-exam">SOP Exam</Link><Link href="/fmc">FMC Tutorial</Link></div></details><details className="systems-menu compact-menu"><summary>Line Training</summary><div><Link href="/descent-management">Descent Management</Link><Link href="/line-training/refuelling-procedure">Refuelling Procedure</Link><Link href="/line-training/cpdlc">CPDLC</Link></div></details><Link href="/pricing">Pricing</Link><Link href="/weird-things">Weird things</Link></>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header className="site-header"><Link className="brand" href="/"><Plane size={29} fill="currentColor" strokeWidth={1.2} /><span><b>737</b>Encyclopedia<span className="brand-dot">.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation"><Navigation /></nav><details className="mobile-nav"><summary><Menu size={20} /> Menu</summary><nav aria-label="Mobile navigation"><Navigation /></nav></details><HeaderAuth /></header><div className="site-safety-note"><strong>Training information only.</strong> Always refer to current official aircraft manuals and operator procedures.</div>{children}<footer><Link className="brand" href="/"><b>737</b>Encyclopedia.</Link><p>Independent learning resource. For study and simulation. Use current, applicable aircraft manuals and operator procedures for flight operations.</p><div className="footer-meta"><Link href="/terms">Terms &amp; Conditions</Link><span>NG / MAX · Edition 01</span></div></footer></body></html>;
}
