import Link from '@/components/site-link';
import SystemPager from '@/components/system-pager';
import { notFound } from 'next/navigation';
import { chapters, slug } from '@/lib/systems';

export function generateStaticParams() {
  return chapters.filter(name => name !== 'Fuel' && name !== 'Air Systems' && name !== 'Anti-Ice, Rain' && name !== 'Airplane General, Emergency Equipment, Doors, Windows' && name !== 'Fire Protection' && name !== 'Landing Gear').map(name => ({ slug: slug(name) }));
}

export default async function Chapter({ params }: { params: Promise<{ slug: string }> }) {
  const route = await params;
  const name = chapters.find(chapter => slug(chapter) === route.slug);
  if (!name) notFound();
  return <main id="main" className="wrap empty-page"><p className="eyebrow">SYSTEMS LIBRARY</p><span className="pill">COMING SOON</span><h1 style={{ marginTop: 24 }}>{name}</h1><p>This chapter is being prepared.</p><p><Link href="/#systems">← All systems</Link></p><SystemPager current={name} /></main>;
}
