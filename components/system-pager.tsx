import Link from '@/components/site-link';
import { chapters, slug } from '@/lib/systems';

export default function SystemPager({ current }: { current: string }) {
  const index = chapters.indexOf(current);
  const previous = index > 0 ? chapters[index - 1] : null;
  const next = index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null;
  return <div className="system-page-footer">
    <nav className="system-pager" aria-label="System chapter navigation">
      <div>{previous && <Link className="system-pager-button" href={'/systems/' + slug(previous)}><small>← PREVIOUS CHAPTER</small><span>{previous}</span></Link>}</div>
      <div className="pager-next">{next && <Link className="system-pager-button" href={'/systems/' + slug(next)}><small>NEXT CHAPTER →</small><span>{next}</span></Link>}</div>
    </nav>
    <Link className="system-glossary-link" href="/glossary">Open the 737 glossary</Link>
  </div>;
}
