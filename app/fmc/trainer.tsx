'use client';

import { useCallback, useEffect, useState } from 'react';

type PageName = 'INDEX' | 'IDENT' | 'POS INIT' | 'RTE' | 'LEGS' | 'PERF INIT' | 'N1 LIMIT' | 'PROGRESS' | 'DEP ARR' | 'DEPARTURES' | 'ARRIVALS' | 'TAKEOFF REF' | 'FIX INFO';
type RouteData = { origin: string; destination: string; flightNo: string; runway: string };
type PerfData = { zfw: string; reserves: string; costIndex: string; cruiseAlt: string };
type ExtraData = { refAirport: string; gate: string; irsPos: string; flaps: string; cg: string; v1: string; vr: string; v2: string; fix: string; selTemp: string; oat: string };
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const initialRoute: RouteData = { origin: '', destination: '', flightNo: '', runway: '' };
const initialPerf: PerfData = { zfw: '', reserves: '', costIndex: '', cruiseAlt: '' };
const initialExtra: ExtraData = { refAirport: '', gate: '', irsPos: '', flaps: '', cg: '', v1: '', vr: '', v2: '', fix: '', selTemp: '', oat: '' };
const pageCounts: Partial<Record<PageName, number>> = { 'POS INIT': 3, 'RTE': 2, 'PERF INIT': 2, 'TAKEOFF REF': 2, 'FIX INFO': 2 };

function Pair({ leftLabel, left, rightLabel, right }: { leftLabel?: string; left?: string; rightLabel?: string; right?: string }) {
  return <div className="cdu-line"><div><small>{leftLabel}</small><strong>{left || ' '}</strong></div><div><small>{rightLabel}</small><strong>{right || ' '}</strong></div></div>;
}

function NavLine({ left, right }: { left?: string; right?: string }) {
  return <div className="cdu-line cdu-nav-line"><div><strong>{left || ' '}</strong></div><div><strong>{right || ' '}</strong></div></div>;
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
  const [extra, setExtra] = useState<ExtraData>(initialExtra);
  const [routePoints, setRoutePoints] = useState(['', '', '', '']);
  const [airways, setAirways] = useState(['', '', '', '']);
  const [takeoffMode, setTakeoffMode] = useState<'TO' | 'TO-1' | 'TO-2'>('TO-1');
  const [climbMode, setClimbMode] = useState<'CLB' | 'CLB-1' | 'CLB-2'>('CLB-1');
  const [pageNumber, setPageNumber] = useState(1);
  const [modified, setModified] = useState(false);
  const [sid, setSid] = useState('');
  const [sidTrans, setSidTrans] = useState('');
  const [arrStar, setArrStar] = useState('');
  const [arrAppr, setArrAppr] = useState('');
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
  function transferExtra(field: keyof ExtraData) {
    if (!scratch) return setScratch(extra[field]);
    setExtra((old) => ({ ...old, [field]: scratch === 'DELETE' ? '' : scratch.toUpperCase() }));
    setScratch(''); setModified(true);
  }
  function transferRouteRow(row: number, side: 'point' | 'airway') {
    const values = side === 'point' ? routePoints : airways;
    if (!scratch) return setScratch(values[row]);
    const value = scratch === 'DELETE' ? '' : scratch.replaceAll(' ', '').toUpperCase();
    const update = (old: string[]) => old.map((item, index) => index === row ? value : item);
    if (side === 'point') setRoutePoints(update); else setAirways(update);
    setScratch(''); setModified(true);
  }
  function transferSelOat() {
    if (!scratch) return setScratch(extra.oat ? `/${extra.oat}` : extra.selTemp);
    if (scratch.startsWith('/')) setExtra((old) => ({ ...old, oat: scratch.slice(1).toUpperCase() }));
    else setExtra((old) => ({ ...old, selTemp: scratch.replace('/','').toUpperCase() }));
    setScratch(''); setModified(true);
  }
  function go(next: PageName) { setPage(next); setPageNumber(1); setMessage(''); }
  function goRouteFromPos() {
    setPage('RTE'); setPageNumber(1); setMessage('');
    setScratch(extra.refAirport || '');
  }
  function changePage(delta: number) {
    const count = pageCounts[page] || 1;
    if (count === 1) return setMessage('1 OF 1');
    setPageNumber((current) => ((current - 1 + delta + count) % count) + 1);
  }
  function execute() {
    if (!modified) return;
    if (!routeReady) return setMessage('ENTER ORIGIN AND DEST');
    setActiveRoute(route); setModified(false); setMessage('ROUTE ACTIVATED');
  }
  function reset() {
    setRoute(initialRoute); setActiveRoute(initialRoute); setPerf(initialPerf); setExtra(initialExtra); setRoutePoints(['', '', '', '']); setAirways(['', '', '', '']); setTakeoffMode('TO-1'); setClimbMode('CLB-1');
    setSid(''); setSidTrans(''); setArrStar(''); setArrAppr('');
    setScratch(''); setMessage(''); setModified(false); setPage('IDENT'); setPageNumber(1);
  }

  const leftActions: Array<(() => void) | undefined> = Array.from({ length: 6 }, () => undefined);
  const rightActions: Array<(() => void) | undefined> = Array.from({ length: 6 }, () => undefined);
  if (page === 'IDENT') { leftActions[5] = () => go('INDEX'); rightActions[5] = () => go('POS INIT'); }
  if (page === 'INDEX') { leftActions[0] = () => go('IDENT'); leftActions[1] = () => go('POS INIT'); leftActions[2] = () => go('PERF INIT'); leftActions[3] = () => go('TAKEOFF REF'); rightActions[0] = () => go('RTE'); }
  if (page === 'POS INIT' && pageNumber === 1) { leftActions[1] = () => transferExtra('refAirport'); leftActions[2] = () => transferExtra('gate'); rightActions[3] = () => transferExtra('irsPos'); leftActions[5] = () => go('INDEX'); rightActions[5] = goRouteFromPos; }
  if (page === 'POS INIT' && pageNumber === 3) { leftActions[5] = () => setPageNumber(1); }
  if (page === 'RTE' && pageNumber === 1) { leftActions[0] = () => transferRoute('origin'); leftActions[2] = () => transferRoute('runway'); rightActions[0] = () => transferRoute('destination'); rightActions[1] = () => transferRoute('flightNo'); leftActions[5] = () => setMessage('RTE 2 NOT AVAILABLE'); rightActions[5] = execute; }
  if (page === 'RTE' && pageNumber === 2) { for (let row = 0; row < 4; row++) { leftActions[row] = () => transferRouteRow(row, 'airway'); rightActions[row] = () => transferRouteRow(row, 'point'); } leftActions[5] = () => setMessage('RTE 2 NOT AVAILABLE'); rightActions[5] = execute; }
  if (page === 'PERF INIT' && pageNumber === 1) { leftActions[2] = () => transferPerf('zfw'); leftActions[3] = () => transferPerf('reserves'); leftActions[4] = () => transferPerf('costIndex'); rightActions[0] = () => transferPerf('cruiseAlt'); leftActions[5] = () => go('INDEX'); rightActions[5] = () => go('N1 LIMIT'); }
  if (page === 'N1 LIMIT') { leftActions[0] = transferSelOat; leftActions[1] = () => setTakeoffMode('TO'); leftActions[2] = () => setTakeoffMode('TO-1'); leftActions[3] = () => setTakeoffMode('TO-2'); rightActions[1] = () => setClimbMode('CLB'); rightActions[2] = () => setClimbMode('CLB-1'); rightActions[3] = () => setClimbMode('CLB-2'); leftActions[5] = () => go('PERF INIT'); rightActions[5] = () => go('TAKEOFF REF'); }
  if (page === 'LEGS') { leftActions[5] = () => setMessage('ERASE NOT AVAILABLE'); rightActions[5] = () => setMessage('RTE DATA'); }
  if (page === 'DEP ARR') { leftActions[0] = () => go('DEPARTURES'); rightActions[0] = () => go('ARRIVALS'); rightActions[1] = () => go('ARRIVALS'); leftActions[2] = () => setMessage('RTE 2 NOT AVAILABLE'); rightActions[2] = () => setMessage('RTE 2 NOT AVAILABLE'); rightActions[3] = () => setMessage('RTE 2 NOT AVAILABLE'); }
  if (page === 'DEPARTURES') { leftActions[0] = () => { setSid((s) => (s === 'LACRE3' ? '' : 'LACRE3')); setModified(true); }; leftActions[1] = () => { setSidTrans((t) => (t === 'HUMPP' ? '' : 'HUMPP')); setModified(true); }; leftActions[2] = () => { setSidTrans((t) => (t === 'ORTIN' ? '' : 'ORTIN')); setModified(true); }; leftActions[3] = () => { setSidTrans((t) => (t === 'VAMPS' ? '' : 'VAMPS')); setModified(true); }; rightActions[0] = () => { setRoute((r) => ({ ...r, runway: '13R' })); setModified(true); }; rightActions[1] = () => { setRoute((r) => ({ ...r, runway: '31L' })); setModified(true); }; leftActions[5] = () => { setSid(''); setSidTrans(''); }; rightActions[5] = () => go('RTE'); }
  if (page === 'ARRIVALS') { leftActions[0] = () => { setArrStar((s) => (s === 'GLASR1' ? '' : 'GLASR1')); setModified(true); }; leftActions[1] = () => { setArrStar((s) => (s === 'HAWKZ4' ? '' : 'HAWKZ4')); setModified(true); }; rightActions[0] = () => { setArrAppr((a) => (a === 'ILS 13R' ? '' : 'ILS 13R')); setModified(true); }; rightActions[1] = () => { setArrAppr((a) => (a === 'RNAV 31L' ? '' : 'RNAV 31L')); setModified(true); }; leftActions[5] = () => { setArrStar(''); setArrAppr(''); }; rightActions[5] = () => go('RTE'); }
  if (page === 'TAKEOFF REF' && pageNumber === 1) { leftActions[0] = () => transferExtra('flaps'); leftActions[2] = () => transferExtra('cg'); leftActions[4] = () => transferRoute('runway'); rightActions[0] = () => transferExtra('v1'); rightActions[1] = () => transferExtra('vr'); rightActions[2] = () => transferExtra('v2'); leftActions[5] = () => go('PERF INIT'); }
  if (page === 'FIX INFO') leftActions[0] = () => transferExtra('fix');

  function displayedLineValues() {
    const left = Array<string>(6).fill('');
    const right = Array<string>(6).fill('');
    if (page === 'IDENT') { left[0] = '737-800W'; right[0] = '26K'; left[1] = 'TRN0901'; right[1] = 'SEP01OCT01'; left[2] = '737TRN-001'; }
    if (page === 'POS INIT' && pageNumber === 1) { right[0] = 'N47°32.4 W122°18.6'; left[1] = extra.refAirport; left[2] = extra.gate; left[3] = '000'; right[3] = extra.irsPos; left[4] = '1432.2Z'; right[4] = 'MAR21/15'; }
    if (page === 'POS INIT' && pageNumber === 2) { left.splice(0, 6, 'N47°32.4 W122°18.6', 'N47°32.4 W122°18.7', 'N47°32.4 W122°18.6', 'N47°32.4 W122°18.6', 'N47°32.3 W122°18.5', 'N47°32.4 W122°18.7'); right.splice(0, 3, '1KT', '2KT', '3KT'); }
    if (page === 'RTE' && pageNumber === 1) { left[0] = route.origin; right[0] = route.destination; left[1] = '----------'; right[1] = route.flightNo; left[2] = route.runway; }
    if (page === 'RTE' && pageNumber === 2) { for (let row = 0; row < 4; row++) { left[row] = routePoints[row]; right[row] = airways[row] || (routePoints[row] ? 'DIRECT' : ''); } }
    if (page === 'PERF INIT' && pageNumber === 1) { left[0] = '68.4/8.0'; right[0] = `FL190/${perf.cruiseAlt || 'FL060'}`; left[1] = '6.3'; left[2] = perf.zfw; left[3] = perf.reserves; left[4] = perf.costIndex; right[4] = '18000'; }
    if (page === 'PERF INIT' && pageNumber === 2) { left[0] = '19.1%'; right[0] = 'ICAO'; left[1] = '-37C'; right[1] = 'FL410'; left[2] = 'ECON'; }
    if (page === 'N1 LIMIT') { left[0] = `${extra.selTemp}/${extra.oat}`; right[0] = '94.6/94.6'; left[2] = 'TO-1'; right[2] = 'CLB-1'; left[3] = 'TO-2'; right[3] = 'CLB-2'; }
    if (page === 'TAKEOFF REF' && pageNumber === 1) { left[0] = extra.flaps; right[0] = extra.v1; left[1] = '94.6/94.6'; right[1] = extra.vr; left[2] = extra.cg || '22.5'; right[2] = extra.v2; left[4] = route.runway; right[4] = 'QRH OFF'; }
    if (page === 'TAKEOFF REF' && pageNumber === 2) { left[0] = '1500'; right[0] = '3000'; left[1] = '800'; left[2] = '0.0/DRY'; }
    if (page === 'FIX INFO') { left[0] = extra.fix; left[4] = '236/41'; right[4] = '2000.9 27 FL350'; }
    if (page === 'PROGRESS') { left[0] = activeRoute.origin ? `${activeRoute.origin}/${activeRoute.destination}` : ''; right[0] = '438'; left[1] = perf.cruiseAlt || 'FL350'; right[1] = '1408Z'; left[2] = '7.2'; right[2] = '274/38'; }
    return { left, right };
  }
  function copyDisplayed(side: 'left' | 'right', index: number) {
    const value = displayedLineValues()[side][index];
    setMessage('');
    if (value && !value.includes('□') && !/^[-]+$/.test(value)) setScratch(value);
    else setMessage('NO DATA');
  }

  let title = page === 'INDEX' ? 'INIT/REF INDEX' : page;
  if (page === 'POS INIT' && pageNumber === 2) title = 'POS REF';
  if (page === 'POS INIT' && pageNumber === 3) title = 'POS SHIFT';
  if (page === 'DEP ARR') title = 'DEP/ARR INDEX';
  if (page === 'DEPARTURES') title = `${activeRoute.origin || route.origin || 'ORIG'} DEPARTURES`;
  if (page === 'ARRIVALS') title = `${activeRoute.destination || route.destination || 'DEST'} ARRIVALS`;
  if (page === 'RTE') title = `${modified ? 'MOD' : activeRoute.origin ? 'ACT' : ''} RTE`;
  if (page === 'LEGS') title = `${activeRoute.origin ? 'ACT RTE' : 'RTE'}  LEGS`;

  function ScreenContent() {
    if (page === 'IDENT') return <><Pair leftLabel="MODEL" left="737-800W" rightLabel="ENG RATING" right="26K"/><Pair leftLabel="NAV DATA" left="TRN0901" rightLabel="ACTIVE" right="SEP01OCT01"/><Pair leftLabel="OP PROGRAM" left="737TRN-001" rightLabel="SUPP DATA" right=""/><Pair/><Pair/><NavLine left="<INDEX" right="POS INIT>"/></>;
    if (page === 'INDEX') return <><Pair left="<IDENT" right="NAV DATA>"/><Pair left="<POS" right="MSG RECALL>"/><Pair left="<PERF" right="ALTN DEST>"/><Pair left="<TAKEOFF" right="SEL CONFIG>"/><Pair left="<APPROACH" right="MAINT>"/><Pair left="<OFFSET"/></>;
    if (page === 'POS INIT' && pageNumber === 1) return <><Pair rightLabel="LAST POS" right="N47°32.4 W122°18.6"/><Pair leftLabel="REF AIRPORT" left={extra.refAirport || '----'}/><Pair leftLabel="GATE" left={extra.gate || '-----'}/><Pair leftLabel="SET HDG" left="---°" rightLabel="SET IRS POS" right={extra.irsPos || '□□°□□.□'}/><Pair leftLabel="UTC (XXX)" left="1432.2Z" rightLabel="MMMD D/YY" right="MAR21/15"/><NavLine left="<INDEX" right="ROUTE>"/></>;
    if (page === 'POS INIT' && pageNumber === 2) return <><Pair leftLabel="FMC POS" left="N47°32.4 W122°18.6" rightLabel="GS" right="1KT"/><Pair leftLabel="IRS L" left="N47°32.4 W122°18.7" rightLabel="" right="2KT"/><Pair leftLabel="IRS R" left="N47°32.4 W122°18.6" rightLabel="" right="3KT"/><Pair leftLabel="GPS L" left="N47°32.4 W122°18.6"/><Pair leftLabel="GPS R" left="N47°32.3 W122°18.5"/><Pair leftLabel="RADIO" left="N47°32.4 W122°18.7"/></>;
    if (page === 'POS INIT' && pageNumber === 3) return <><Pair leftLabel="GPS L" left="N47°32.4 W122°18.6" rightLabel="GPS R" right="N47°32.3 W122°18.5"/><Pair leftLabel="RNP/ACTUAL" left="2.00 / 0.02"/><Pair leftLabel="REQD POS" left="□□°□□.□  □□□°□□.□"/><Pair/><Pair/><NavLine left="<POS INIT"/></>;
    if (page === 'RTE' && pageNumber === 1) return <><Pair leftLabel="ORIGIN" left={route.origin || '----------'} rightLabel="DEST" right={route.destination || '□□□□'}/><Pair leftLabel="CO ROUTE" left="----------" rightLabel="FLT NO" right={route.flightNo || '--------'}/><Pair leftLabel="RUNWAY" left={route.runway || '-----'}/><Pair/><Pair/><NavLine left="<RTE 2" right="ACTIVATE>"/></>;
    if (page === 'RTE') return <><Pair leftLabel="VIA" left={airways[0] || (routePoints[0] ? 'DIRECT' : '----------')} rightLabel="TO" right={routePoints[0] || '□□□□□'}/><Pair left={airways[1] || (routePoints[1] ? 'DIRECT' : '----------')} right={routePoints[1] || '----------'}/><Pair left={airways[2] || (routePoints[2] ? 'DIRECT' : '----------')} right={routePoints[2] || '----------'}/><Pair left={airways[3] || (routePoints[3] ? 'DIRECT' : '----------')} right={routePoints[3] || '----------'}/><Pair/><NavLine left="<RTE 2" right="ACTIVATE>"/></>;
    if (page === 'PERF INIT' && pageNumber === 1) return <><Pair leftLabel="GW/CRZ CG" left="□□□.□/ 8.0%" rightLabel="TRIP/CRZ ALT" right={`FL190/${perf.cruiseAlt || 'FL060'}`}/><Pair leftLabel="PLAN/FUEL" left="---/6.3" rightLabel="CRZ WIND" right="---°/---"/><Pair leftLabel="ZFW" left={perf.zfw || '□□□.□'} rightLabel="ISA DEV" right="---°F ---°C"/><Pair leftLabel="RESERVES" left={perf.reserves || '□□.□'} rightLabel="T/C OAT" right="---°F ---°C"/><Pair leftLabel="COST INDEX" left={perf.costIndex || '□□□'} rightLabel="TRANS ALT" right="18000"/><NavLine left="<INDEX" right="N1 LIMIT>"/></>;
    if (page === 'PERF INIT') return <><Pair leftLabel="CRZ CG" left="19.1%" rightLabel="STEP SIZE" right="ICAO"/><Pair leftLabel="MIN FUEL TEMP" left="-37°C" rightLabel="MAX ALT" right="FL410"/><Pair leftLabel="CRZ MODE" left="ECON"/><Pair/><Pair/><NavLine left="<INDEX" right="N1 LIMIT>"/></>;
    if (page === 'N1 LIMIT') return <><Pair leftLabel="SEL/OAT" left={`${extra.selTemp || '---'}/${extra.oat || '---'}°C`} rightLabel={`${takeoffMode} N1`} right="94.6/94.6"/><Pair left={`<TO${takeoffMode === 'TO' ? '  <ACT>' : ''}`} right={`${climbMode === 'CLB' ? '<ACT>  ' : ''}CLB>`}/><Pair leftLabel="XX% DERATE" left={`<TO-1${takeoffMode === 'TO-1' ? '  <ACT>' : ''}`} right={`${climbMode === 'CLB-1' ? '<ACT>  ' : ''}CLB-1>`}/><Pair leftLabel="XX% DERATE" left={`<TO-2${takeoffMode === 'TO-2' ? '  <ACT>' : ''}`} right={`${climbMode === 'CLB-2' ? '<ACT>  ' : ''}CLB-2>`}/><Pair/><NavLine left="<PERF INIT" right="TAKEOFF>"/></>;
    if (page === 'LEGS') return <><div className="leg-head"><span>COURSE</span><span>DIST</span><span>SPD/ALT</span></div><div className="leg-row"><b>{activeRoute.origin || 'ORIGIN'}</b><span>358°</span><em>250/10000</em></div><div className="leg-row"><b>SUSIX</b><span>22NM</span><em>280/FL180</em></div><div className="leg-row"><b>AVANT</b><span>18NM</span><em>.780/FL355</em></div><div className="leg-row"><b>{activeRoute.destination || 'DEST'}</b><span>30NM</span><em>210/3000</em></div><Pair left="<ERASE" right="RTE DATA>"/></>;
    if (page === 'DEP ARR') return <><Pair leftLabel="RTE 1 (ACT)" left={`<DEP     ${activeRoute.origin || route.origin || '----'}`} right={`${activeRoute.origin || route.origin || '----'}     ARR>`}/><Pair right={`${activeRoute.destination || route.destination || '----'}     ARR>`}/><Pair leftLabel="------------ RTE 2 ------------" left={`<DEP     ${activeRoute.destination || route.destination || '----'}`} right={`${activeRoute.destination || route.destination || '----'}     ARR>`}/><Pair right={`${activeRoute.origin || route.origin || '----'}     ARR>`}/><Pair/><NavLine left="DEP <----" right="----> ARR"/></>;
    if (page === 'DEPARTURES') return <><Pair leftLabel="SIDS" left={`LACRE3${sid === 'LACRE3' ? ' <SEL>' : ''}`} rightLabel="RUNWAYS" right={`${route.runway === '13R' ? '<SEL> ' : ''}13R`}/><Pair leftLabel="TRANS" left={`HUMPP${sidTrans === 'HUMPP' ? ' <SEL>' : ''}`} right={`${route.runway === '31L' ? '<SEL> ' : ''}31L`}/><Pair left={`ORTIN${sidTrans === 'ORTIN' ? ' <SEL>' : ''}`}/><Pair left={`VAMPS${sidTrans === 'VAMPS' ? ' <SEL>' : ''}`}/><Pair/><NavLine left="<ERASE" right="ROUTE>"/></>;
    if (page === 'ARRIVALS') return <><Pair leftLabel="STARS" left={`GLASR1${arrStar === 'GLASR1' ? ' <SEL>' : ''}`} rightLabel="APPROACHES" right={`${arrAppr === 'ILS 13R' ? '<SEL> ' : ''}ILS 13R`}/><Pair left={`HAWKZ4${arrStar === 'HAWKZ4' ? ' <SEL>' : ''}`} right={`${arrAppr === 'RNAV 31L' ? '<SEL> ' : ''}RNAV 31L`}/><Pair/><Pair/><Pair/><NavLine left="<ERASE" right="ROUTE>"/></>;
    if (page === 'TAKEOFF REF' && pageNumber === 1) return <><Pair leftLabel="FLAPS" left={extra.flaps || '□□'} rightLabel="V1" right={extra.v1 || '---'}/><Pair leftLabel="TO-X N1" left="94.6/94.6%" rightLabel="VR" right={extra.vr || '---'}/><Pair leftLabel="CG   TRIM" left={`${extra.cg || '22.5%'} / 5.25`} rightLabel="V2" right={extra.v2 || '---'}/><Pair/><Pair leftLabel="RUNWAY" left={route.runway || '----------'} rightLabel="SELECT" right="QRH OFF>"/><NavLine left="<PERF INIT"/></>;
    if (page === 'TAKEOFF REF') return <><Pair leftLabel="THR REDUCTION" left="1500 FT" rightLabel="ACCEL HT" right="3000 FT"/><Pair leftLabel="EO ACCEL HT" left="800 FT" rightLabel="WIND" right="---/---"/><Pair leftLabel="SLOPE/COND" left="0.0/DRY"/><Pair/><Pair/><NavLine left="<PERF INIT"/></>;
    if (page === 'FIX INFO') return <><Pair leftLabel="FIX" left={extra.fix || '□□□□□'} rightLabel="RAD/DIS FR" right=""/><Pair leftLabel="RAD/DIS" left="---" rightLabel="ETA / DTG / ALT" right=""/><Pair left="---"/><Pair left="---"/><Pair leftLabel="ABEAM" left="236/41" right="2000.9  27 FL350"/><Pair/></>;
    return <><Pair leftLabel="FROM/TO" left={activeRoute.origin ? `${activeRoute.origin}/${activeRoute.destination}` : '----/----'} rightLabel="DIST TO GO" right="438 NM"/><Pair leftLabel="CRZ ALT" left={perf.cruiseAlt || 'FL350'} rightLabel="ETA" right="14:08Z"/><Pair leftLabel="FUEL" left="7.2" rightLabel="WIND" right="274/38"/><Pair/><Pair/><NavLine left="<INDEX" right="POS REPORT>"/></>;
  }

  const functionKeys: Array<[string, PageName | 'PREV' | 'NEXT' | null]> = [['INIT\nREF','INDEX'],['RTE','RTE'],['DEP\nARR','DEP ARR'],['ATC',null],['VNAV',null],['FIX','FIX INFO'],['LEGS','LEGS'],['HOLD',null],['FMC\nCOMM',null],['PROG','PROGRESS'],['MENU','INDEX'],['N1\nLIMIT','N1 LIMIT'],['PREV\nPAGE','PREV'],['NEXT\nPAGE','NEXT']];

  return <div className="fmc-workspace realistic"><section className="fmc-intro"><p className="eyebrow"><span className="status-dot"/>INTERACTIVE TRAINER · BETA 4</p><h1>Pages that behave<br/><span>like a real sequence.</span></h1><p>The photographed preflight pages are now linked into one continuous workflow. Use the line keys to enter data and PREV/NEXT PAGE to move through multi-page sections.</p><div className="fmc-guide"><b>Suggested flow</b><span>IDENT → POS INIT/POS REF → RTE pages 1–2</span><span>PERF INIT → N1 LIMIT → TAKEOFF REF</span><span>Activate with EXEC, then review LEGS</span></div><button className="fmc-reset" onClick={reset}>Reset training session</button><p className="fmc-legal">Independent educational simulation. Original software and training data. Not approved for operational use.</p></section><section className="cdu-shell cdu-real" aria-label="Interactive control display unit"><i className="screw s1"/><i className="screw s2"/><i className="screw s3"/><i className="screw s4"/><div className="display-unit"><div className="lsk-column left">{leftActions.map((action, i) => <button key={i} onClick={action || (() => copyDisplayed('left', i))} aria-label={`Left line key ${i + 1}`}><span/></button>)}</div><div className="cdu-screen"><header><span>{title}</span><small>{pageNumber}/{pageCounts[page] || 1}</small></header><div className="screen-lines"><ScreenContent/></div><div className={`scratchpad ${message ? 'message' : ''}`}>{message || scratch || ' '}</div></div><div className="lsk-column right">{rightActions.map((action, i) => <button key={i} onClick={action || (() => copyDisplayed('right', i))} aria-label={`Right line key ${i + 1}`}><span/></button>)}</div></div><div className="cdu-controls"><div className="function-grid">{functionKeys.map(([label,target], i) => <Key key={`${label}-${i}`} onClick={target === 'PREV' ? () => changePage(-1) : target === 'NEXT' ? () => changePage(1) : target ? () => go(target) : () => setMessage(`${label.replace('\n',' ')} NOT MODELLED`)} className={label.includes('PAGE') ? 'page-key' : ''}>{label.split('\n').map((line,j)=><span key={j}>{line}</span>)}</Key>)}</div><div className="exec-zone"><div className="brightness" aria-label="Brightness control"><span>BRT</span><i/></div><span className="exec-light">EXEC</span><Key className="exec-key" onClick={execute}>EXEC</Key></div><div className="number-grid">{['1','2','3','4','5','6','7','8','9','.','0','+/-'].map(k=><Key key={k} onClick={()=>press(k)}>{k}</Key>)}</div><div className="letter-grid">{letters.map(k=><Key key={k} onClick={()=>press(k)}>{k}</Key>)}<Key onClick={()=>press('SP')}><span>SP</span></Key><Key onClick={()=>press('DEL')}><span>DEL</span></Key><Key onClick={()=>press('/')}><span>/</span></Key><Key onClick={()=>press('CLR')}><span>CLR</span></Key></div></div><div className="cdu-plate">FMC TRAINING UNIT · 737 ENCYCLOPEDIA</div></section></div>;
}
