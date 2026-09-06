import Link from '@/components/site-link';

export default function ComingSoonPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main id="main" className="wrap empty-page"><p className="eyebrow">{eyebrow}</p><span className="pill">COMING SOON</span><h1 style={{ marginTop: 24 }}>{title}</h1><p>{description}</p><Link className="button" href="/">Return home →</Link></main>;
}
