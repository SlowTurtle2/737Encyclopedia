'use client';

import { useCallback, useEffect, useState } from 'react';

type PageName = 'INDEX' | 'IDENT' | 'POS INIT' | 'RTE' | 'LEGS' | 'PERF INIT' | 'PROGRESS';
type RouteData = { origin: string; destination: string; flightNo: string; runway: string };
type PerfData = { zfw: string; reserves: string; costIndex: string; cruiseAlt: string };
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const initialRoute: RouteData = { origin: '', destination: '', flightNo: '', runway: '' };
const initialPerf: PerfData = { zfw: '', reserves: '', costIndex: '', cruiseAlt: '' };

function Pair({ leftLabel, left, rightLabel, right }: { leftLabel?: string; left?: string; rightLabel?: string; right?: string }) {
  return <div className="cdu-line"><div><small>{leftLabel}</small><strong>{left || ' '}</strong></div><div><small>{rightLabel}</small><strong>{right || ' '}</strong></div></div>;
}

function Key({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return <button className={`real-key ${className}`} onClick={onClick}>{children}</button>;
}

export function FmcTrainer() {
  const [page, setPage] = useState<PageName>('IDENT');
  const [scratch, setScratch] = useState('');
  const [message, setMessage] = useState('');
  const [route, setRoute] = useState<RouteData>(initialRoute);
  const [activeRoute, setActiveRoute] = useState<RouteData>(initialRoute);
  const [perf, setPerf] = useState<PerfData>(initialPerf);
  const [modified, setModified] = useState(false);
  const routeReady = Boolean(route.origin && route.destination);

  const press = useCallback((key: string) => {
    setMessage('');
    if (key === 'CLR') return setScratch((s) => s.slice(0, -1));
    if (key === 'DEL') return setScratch('DELETE');
    if (key === 'SP') return setScratch((s) => s.length < 24 ? `${s} ` : s);
    if (key === '+/-') return setScratch((s) => s.startsWith('-') ? s.slice(1) : `-${s}`);
    setScratch((s) => s.length < 24 ? `${s}${key}` : s);
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (/^[a-z0-9./]$/i.test(event.key)) press(event.key.toUpperCase());
      if (event.key === 'Backspace') { event.preventDefault(); press('CLR'); }
      if (event.key === ' ') { event.preventDefault(); press('SP'); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [press]);

  function transferRoute(field: keyof RouteData) {
    if (!scratch) return setScratch(route[field]);
    setRoute((old) => ({ ...old, [field]: scratch === 'DELETE' ? '' : scratch.replaceAll(' ', '').toUpperCase() }));
    setScratch(''); setModified(true);
  }
  function transferPerf(field: keyof PerfData) {
    if (!scratch) return setScratch(perf[field]);
    setPerf((old) => ({ ...old, [field]: scratch === 'DELETE' ? '' : scratch.toUpperCase() }));
    setScratch(''); setModified(true);
  }
  function execute() {
    if (!modified) return;
    if (!routeReady) return setMessage('ENTER ORIGIN AND DEST');
    setActiveRoute(route); setModified(false); setMessage('ROUTE ACTIVATED');
  }
  function reset() {
    setRoute(initialRoute); setActiveRoute(initialRoute); setPerf(initialPerf);
    setScratch(''); setMessage(''); setModified(false); setPage('IDENT');
  }

  const leftActions: Array<(() => void) | undefined> = Array(6);
  const rightActions: Array<(() => void) | undefined> = Array(6);
  if (page === 'IDENT') { leftActions[5] = () => setPage('INDEX'); rightActions[5] = () => setPage('POS INIT'); }
  if (page === 'INDEX') { leftActions[0] = () => setPage('IDENT'); leftActions[1] = () => setPage('POS INIT'); leftActions[2] = () => setPage('PERF INIT'); rightActions[0] = () => setPage('RTE'); }
  if (page === 'RTE') { leftActions[0] = () => transferRoute('origin'); leftActions[1] = () => transferRoute('runway'); rightActions[0] = () => transferRoute('destination'); rightActions[1] = () => transferRoute('flightNo'); rightActions[5] = () => setPage('PERF INIT'); }
  if (page === 'PERF INIT') { leftActions[1] = () => transferPerf('zfw'); leftActions[2] = () => transferPerf('reserves'); leftActions[3] = () => transferPerf('costIndex'); rightActions[0] = () => transferPerf('cruiseAlt'); leftActions[5] = () => setPage('INDEX'); }
  if (page === 'LEGS') { leftActions[5] = () => setMessage('ERASE NOT AVAILABLE'); rightActions[5] = () => setMessage('RTE DATA'); }

  let title = page === 'INDEX' ? 'INIT/REF INDEX' : page;
  if (page === 'RTE') title = `${modified ? 'MOD' : activeRoute.origin ? 'ACT' : ''} RTE`;
  if (page === 'LEGS') title = `${activeRoute.origin ? 'ACT RTE' : 'RTE'}  LEGS`;

  function ScreenContent() {
    if (page === 'IDENT') return <><Pair leftLabel="MODEL" left="737-800W" rightLabel="ENG RATING" right="26K"/><Pair leftLabel="NAV DATA" left="TRN0901" rightLabel="ACTIVE" right="SEP01OCT01"/><Pair leftLabel="OP PROGRAM" left="737TRN-001" rightLabel="SUPP DATA" right=""/><Pair/><Pair/><Pair left="<INDEX" right="POS INIT>"/></>;
    if (page === 'INDEX') return <><Pair left="<IDENT" right="NAV DATA>"/><Pair left="<POS" right="MSG RECALL>"/><Pair left="<PERF" right="ALTN DEST>"/><Pair left="<TAKEOFF" right="SEL CONFIG>"/><Pair left="<APPROACH" right="MAINT>"/><Pair left="<OFFSET"/></>;
    if (page === 'POS INIT') return <><Pair leftLabel="LAST POS" left="N48°43.5 E002°22.3"/><Pair leftLabel="REF AIRPORT" left={route.origin || '□□□□'} rightLabel="GATE" right="---"/><Pair leftLabel="GPS POS" left="N48°43.5 E002°22.3"/><Pair/><Pair rightLabel="SET IRS POS" right="COPY>"/><Pair left="<INDEX" right="ROUTE>"/></>;
    if (page === 'RTE') return <><Pair leftLabel="ORIGIN" left={route.origin || '□□□□'} rightLabel="DEST" right={route.destination || '□□□□'}/><Pair leftLabel="RUNWAY" left={route.runway || '-----'} rightLabel="FLT NO" right={route.flightNo || '--------'}/><Pair leftLabel="CO ROUTE" left="----------" right="SAVE ROUTE>"/><Pair/><Pair/><Pair left="<INDEX" right="PERF INIT>"/></>;
    if (page === 'PERF INIT') return <><Pair leftLabel="GW/CRZ CG" left="□□□.□/19.1%" rightLabel="TRIP/CRZ ALT" right={`---/${perf.cruiseAlt || '□□□□□'}`}/><Pair leftLabel="PLAN/FUEL" left="---/20.8" rightLabel="CRZ WIND" right="---°/---"/><Pair leftLabel="ZFW" left={perf.zfw || '□□□.□'}/><Pair leftLabel="RESERVES" left={perf.reserves || '□□.□'}/><Pair leftLabel="COST INDEX" left={perf.costIndex || '□□□'} rightLabel="TRANS ALT" right="18000"/><Pair left="<INDEX" right="N1 LIMIT>"/></>;
    if (page === 'LEGS') return <><div className="leg-head"><span>COURSE</span><span>DIST</span><span>SPD/ALT</span></div><div className="leg-row"><b>{activeRoute.origin || 'ORIGIN'}</b><span>358°</span><em>250/10000</em></div><div className="leg-row"><b>SUSIX</b><span>22NM</span><em>280/FL180</em></div><div className="leg-row"><b>AVANT</b><span>18NM</span><em>.780/FL355</em></div><div className="leg-row"><b>{activeRoute.destination || 'DEST'}</b><span>30NM</span><em>210/3000</em></div><Pair left="<ERASE" right="RTE DATA>"/></>;
    return <><Pair leftLabel="FROM/TO" left={activeRoute.origin ? `${activeRoute.origin}/${activeRoute.destination}` : '----/----'} rightLabel="DIST TO GO" right="438 NM"/><Pair leftLabel="CRZ ALT" left={perf.cruiseAlt || 'FL350'} rightLabel="ETA" right="14:08Z"/><Pair leftLabel="FUEL" left="7.2" rightLabel="WIND" right="274/38"/><Pair/><Pair/><Pair left="<INDEX" right="POS REPORT>"/></>;
  }

  const functionKeys: Array<[string, PageName | null]> = [['INIT\nREF','INDEX'],['RTE','RTE'],['CLB',null],['CRZ',null],['DES',null],['MENU','INDEX'],['LEGS','LEGS'],['DEP\nARR',null],['HOLD',null],['PROG','PROGRESS'],['N1\nLIMIT',null],['FIX',null],['PREV\nPAGE',null],['NEXT\nPAGE',null]];

  return <div className="fmc-workspace realistic"><section className="fmc-intro"><p className="eyebrow"><span className="status-dot"/>INTERACTIVE TRAINER · BETA 2</p><h1>A more authentic<br/><span>CDU experience.</span></h1><p>Use the six line-select keys beside the screen exactly as you would in a cockpit flow. Entries first appear in the scratchpad, then move into the selected field.</p><div className="fmc-guide"><b>Try this flight</b><span>RTE → LFPG at L1 → LFPO at R1</span><span>Add a flight number at R2 → EXEC</span><span>Open LEGS to inspect the active route</span></div><button className="fmc-reset" onClick={reset}>Reset training session</button><p className="fmc-legal">Independent educational simulation. Original software and training data. Not approved for operational use.</p></section><section className="cdu-shell cdu-real" aria-label="Interactive control display unit"><i className="screw s1"/><i className="screw s2"/><i className="screw s3"/><i className="screw s4"/><div className="display-unit"><div className="lsk-column left">{leftActions.map((action, i) => <button key={i} onClick={action} aria-label={`Left line key ${i + 1}`}><span/></button>)}</div><div className="cdu-screen"><header><span>{title}</span><small>1/1</small></header><div className="screen-lines"><ScreenContent/></div><div className={`scratchpad ${message ? 'message' : ''}`}>{message || scratch || ' '}</div></div><div className="lsk-column right">{rightActions.map((action, i) => <button key={i} onClick={action} aria-label={`Right line key ${i + 1}`}><span/></button>)}</div></div><div className="cdu-controls"><div className="function-grid">{functionKeys.map(([label,target], i) => <Key key={`${label}-${i}`} onClick={target ? () => setPage(target) : () => setMessage('FUNCTION NOT MODELLED')} className={label.includes('PAGE') ? 'page-key' : ''}>{label.split('\n').map((line,j)=><span key={j}>{line}</span>)}</Key>)}</div><div className="exec-zone"><span className="exec-light">EXEC</span><Key className="exec-key" onClick={execute}>EXEC</Key></div><div className="number-grid">{['1','2','3','4','5','6','7','8','9','.','0','+/-'].map(k=><Key key={k} onClick={()=>press(k)}>{k}</Key>)}</div><div className="letter-grid">{letters.map(k=><Key key={k} onClick={()=>press(k)}>{k}</Key>)}<Key onClick={()=>press('SP')}><span>SP</span></Key><Key onClick={()=>press('DEL')}><span>DEL</span></Key><Key onClick={()=>press('/')}><span>/</span></Key><Key onClick={()=>press('CLR')}><span>CLR</span></Key></div></div><div className="cdu-plate">FMC TRAINING UNIT · 737 ENCYCLOPEDIA</div></section></div>;
}
