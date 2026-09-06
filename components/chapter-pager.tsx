import Link from '@/components/site-link';

export default function ChapterPager({ sections, current }: { sections: string[][]; current: string }) {
  const index = sections.findIndex(([id]) => id === current);
  const previous = index > 0 ? sections[index - 1] : null;
  const next = index >= 0 && index < sections.length - 1 ? sections[index + 1] : null;
  return <nav className="chapter-pager" aria-label="Chapter navigation"><div>{previous && <a href={'#' + previous[0]}><small>← PREVIOUS</small><span>{previous[1]}</span></a>}</div><Link className="pager-glossary" href="/glossary">Glossary</Link><div className="pager-next">{next && <a href={'#' + next[0]}><small>NEXT →</small><span>{next[1]}</span></a>}</div></nav>;
}
