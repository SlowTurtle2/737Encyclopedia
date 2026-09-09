import Link from '@/components/site-link';
import { ArrowUpRight, Check, LockKeyhole } from 'lucide-react';

export const metadata = {
  title: 'Pricing | 737Encyclopedia',
  description: 'Compare free study access with full Type Rating and Line Training access.',
};

export default function PricingPage() {
  return <main id="main" className="wrap pricing-page">
    <header className="pricing-head">
      <p className="eyebrow">PRICING</p>
      <h1>Start free.<br /><span>Unlock the complete training path.</span></h1>
      <p className="lead">Use the aircraft systems and airline assessment resources for free. Full Access adds every Type Rating and Line Training resource with one payment.</p>
    </header>

    <div className="pricing-comparison">
      <section className="pricing-plan">
        <div className="pricing-plan-top">
          <span className="pill available">FREE ACCESS</span>
          <h2>Free</h2>
          <p className="pricing-amount">€0</p>
          <p>Core preparation for understanding the aircraft and approaching an airline assessment.</p>
        </div>
        <h3>Included</h3>
        <ul>
          <li><Check size={18} />All published aircraft system chapters</li>
          <li><Check size={18} />NG and MAX system differences</li>
          <li><Check size={18} />Technical interview preparation</li>
          <li><Check size={18} />HR interview preparation</li>
          <li><Check size={18} />Simulator session preparation</li>
          <li><Check size={18} />MAX Differences course</li>
        </ul>
        <Link className="button secondary" href="/#systems">Explore free resources <ArrowUpRight size={17} /></Link>
      </section>

      <section className="pricing-plan pricing-plan-full">
        <div className="pricing-plan-top">
          <span className="pill">FULL ACCESS</span>
          <h2>Complete preparation</h2>
          <p className="pricing-amount">€29.99 <small>one-time payment</small></p>
          <p>Everything in Free Access, plus the complete Type Rating and Line Training study areas.</p>
        </div>
        <h3>Everything free, plus</h3>
        <ul>
          <li><Check size={18} />Type Rating technical exam</li>
          <li><Check size={18} />Type Rating performance exam</li>
          <li><Check size={18} />Type Rating SOP exam</li>
          <li><Check size={18} />FMC tutorial</li>
          <li><Check size={18} />Descent management</li>
          <li><Check size={18} />Refuelling procedure</li>
          <li><Check size={18} />CPDLC training</li>
          <li><Check size={18} />Future Type Rating and Line Training additions</li>
        </ul>
        <Link className="button" href="/account"><LockKeyhole size={17} /> Get Full Access</Link>
      </section>
    </div>

    <section className="pricing-note">
      <strong>One payment. Ongoing access.</strong>
      <p>Full Access is attached to your account. Log in at any time to use the available Type Rating and Line Training material.</p>
    </section>
  </main>;
}
