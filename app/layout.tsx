import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { LockKeyhole, Menu, Plane } from 'lucide-react';
import { chapters, slug } from '@/lib/systems';
import { HeaderAuth } from '@/components/auth';
import './globals.css';

const SITE_URL = 'https://737encyclopedia.com';
const SITE_DESCRIPTION =
  'Boeing 737 NG and MAX systems courses, annotated schematics, MAX differences and free preparation for Irish low-cost airline assessments: technical, HR and simulator sessions.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '737Encyclopedia | Understand the Boeing 737',
  description: SITE_DESCRIPTION,
  keywords: [
    'Boeing 737', '737 NG', '737 MAX', '737-800', '737-8200',
    'FCOM', 'type rating', 'airline assessment', 'pilot interview',
    'SOP exam', 'simulator preparation', 'cadet pilot', 'descent management',
  ],
  applicationName: '737Encyclopedia',
  authors: [{ name: '737Encyclopedia', url: SITE_URL }],
  creator: '737Encyclopedia',
  publisher: '737Encyclopedia',
  category: 'education',
  openGraph: {
    type: 'website',
    siteName: '737Encyclopedia',
    locale: 'en_US',
    url: SITE_URL,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '737Encyclopedia' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': SITE_URL + '/#website',
      url: SITE_URL + '/',
      name: '737Encyclopedia',
      description: SITE_DESCRIPTION,
      inLanguage: 'en',
    },
    {
      '@type': 'EducationalOrganization',
      '@id': SITE_URL + '/#org',
      name: '737Encyclopedia',
      url: SITE_URL + '/',
      logo: SITE_URL + '/og.png',
      description: 'Independent Boeing 737 study resource for airline cadets and 737 simmers.',
    },
  ],
};

function Navigation() {
  return <><Link href="/">Home</Link><details className="systems-menu"><summary>Systems</summary><div>{chapters.map(name => <Link key={name} href={'/systems/' + slug(name)}>{name}</Link>)}</div></details><details className="systems-menu compact-menu"><summary>Airline Assessment</summary><div><Link href="/airline-assessment/technical-interview">Technical Interview</Link><Link href="/airline-assessment/hr-interview">HR Interview</Link><Link href="/airline-assessment/simulator-session">Simulator Session</Link><Link href="/max-differences">MAX Differences</Link></div></details><details className="systems-menu compact-menu"><summary>Type Rating</summary><div><Link href="/#systems">Systems</Link><Link className="paid-nav-link" href="/type-rating/technical-exam"><LockKeyhole size={13} />Technical Exam</Link><Link className="paid-nav-link" href="/type-rating/performance-exam"><LockKeyhole size={13} />Performance Exam</Link><Link className="paid-nav-link" href="/type-rating/sop-exam"><LockKeyhole size={13} />SOP Exam</Link><Link className="paid-nav-link" href="/fmc"><LockKeyhole size={13} />FMC Tutorial</Link></div></details><details className="systems-menu compact-menu"><summary>Line Training</summary><div><Link className="paid-nav-link" href="/descent-management"><LockKeyhole size={13} />Descent Management</Link><Link className="paid-nav-link" href="/line-training/refuelling-procedure"><LockKeyhole size={13} />Refuelling Procedure</Link><Link className="paid-nav-link" href="/line-training/cpdlc"><LockKeyhole size={13} />CPDLC</Link></div></details><Link href="/pricing">Pricing</Link></>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><a className="skip" href="#main">Skip to content</a><header className="site-header"><Link className="brand" href="/"><Plane size={29} fill="currentColor" strokeWidth={1.2} /><span><b>737</b>Encyclopedia<span className="brand-dot">.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation"><Navigation /></nav><details className="mobile-nav"><summary><Menu size={20} /> Menu</summary><nav aria-label="Mobile navigation"><Navigation /></nav></details><HeaderAuth /></header><div className="site-safety-note"><strong>Training information only.</strong> Always refer to current official aircraft manuals and operator procedures.</div>{children}<footer><Link className="brand" href="/"><b>737</b>Encyclopedia.</Link><p>Independent learning resource built specifically for Irish low-cost carrier cadets and serious 737 simmers. The content follows the flows, exams and procedures used in that operator&rsquo;s selection and training. For study and simulation only. Always use current, applicable aircraft manuals and operator procedures for flight operations.</p><div className="footer-meta"><Link href="/terms">Terms &amp; Conditions</Link><span>NG / MAX · Edition 01</span></div><p className="footer-copyright">&copy; {new Date().getFullYear()} 737Encyclopedia. All rights reserved. Content built for Irish low-cost carrier cadets.</p></footer></body></html>;
}
