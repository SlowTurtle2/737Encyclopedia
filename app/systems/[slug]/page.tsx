import Link from 'next/link';
import {notFound} from 'next/navigation';
import {chapters,slug} from '../../page';
export default async function Chapter({params}:{params:Promise<{slug:string}>}){const p=await params;const name=chapters.find(c=>slug(c)===p.slug);if(!name)notFound();return <main id="main" className="wrap empty-page"><p className="eyebrow">SYSTEMS LIBRARY</p><span className="pill">COMING SOON</span><h1 style={{marginTop:24}}>{name}</h1><p>This chapter is being prepared. Fuel is the first available course in the systems library.</p><Link className="button" href="/systems/fuel">Read the Fuel course →</Link><p><Link href="/#systems">← All systems</Link></p></main>}
