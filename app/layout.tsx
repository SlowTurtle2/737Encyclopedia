import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { ArrowUpRight, Plane } from 'lucide-react';
import { chapters, slug } from '@/lib/systems';
import './globals.css';
export const metadata: Metadata = { title: '737Encyclopedia | Understand the aircraft', description: 'Detailed Boeing 737 NG systems courses, annotated schematics and 737-8200 MAX differences for pilots and simulator enthusiasts.' };
export default function RootLayout({children}: {children: React.ReactNode}) {
return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header className="site-header"><Link className="brand" href="/"><Plane size={29} fill="currentColor" strokeWidth={1.2}/><span><b>737</b>Encyclopedia<span className="brand-dot">.</span></span></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/max-differences">MAX differences</Link><details className="systems-menu"><summary>Systems</summary><div>{chapters.map(name=><Link key={name} href={'/systems/'+slug(name)}>{name}</Link>)}</div></details><Link href="/fmc">FMC</Link><Link href="/academy">Quiz</Link><Link href="/weird-things">Weird things</Link></nav><Link className="header-cta" href="/academy">Study access <ArrowUpRight size={17}/></Link></header><div className="site-safety-note"><strong>Training information only.</strong> Always refer to current official aircraft manuals and operator procedures.</div>{children}<footer><Link className="brand" href="/"><b>737</b>Encyclopedia.</Link><p>Independent learning resource. For study and simulation. Use current, applicable aircraft manuals and operator procedures for flight operations.</p><span>NG / MAX · Edition 01</span></footer></body></html>
}
