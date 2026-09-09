'use client';

import { useEffect, useMemo, useState } from 'react';

type PageName = 'MENU' | 'IDENT' | 'POS INIT' | 'RTE' | 'LEGS' | 'PERF INIT' | 'PROGRESS';
type RouteData = { origin: string; destination: string; flightNo: string; runway: string };
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '+/-'];
const initialRoute: RouteData = { origin: '', destination: '', flightNo: '', runway: '' };

function Cell({ label, value, align = 'left' }: { label?: string; value?: string; align?: 'left' | 'right' }) {
  return <div className={`cdu-cell ${align}`}><span>{label}</span><b>{value || '-----'}</b></div>;
}

export function FmcTrainer() {
  const [page, setPage] = useState<PageName>('MENU');
  const [scratch, setScratch] = useState('');
  const [route, setRoute] = useState<RouteData>(initialRoute);
  const [activeRoute, setActiveRoute] = useState<RouteData>(initialRoute);
  const [modified, setModified] = useState(false);
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const title = page === 'RTE' && modified ? 'MOD RTE 1' : page;
  const routeReady = Boolean(route.origin && route.destination);

  const press = (key: string) => {
    setMessage('');
    if (key === 'CLR') return setScratch((s) => s.slice(0, -1));
    if (key === 'DEL') return setScratch('DELETE');
    if (key === 'SP') return setScratch((s) => `${s} `);
    if (key === '+/-') return setScratch((s) => s.startsWith('-') ? s.slice(1) : `-${s}`);
    if (scratch.length < 24) setScratch((s) => `${s}${key}`);
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (/^[a-z0-9.]$/i.test(event.key)) press(event.key.toUpperCase());
      if (event.key === 'Backspace') { event.preventDefault(); press('CLR'); }
      if (event.key === ' ') { event.preventDefault(); press('SP'); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const transfer = (field: keyof RouteData) => {
    if (!scratch) { setScratch(route[field]); return; }
    const value = scratch === 'DELETE' ? '' : scratch.replace(/\s/g, '').toUpperCase();
    setRoute((current) => ({ ...current, [field]: value })); setScratch(''); setModified(true);
  };
  const execute = () => {
    if (!modified) return;
    if (!routeReady) { setMessage('ENTER ORIGIN AND DEST'); return; }
    setActiveRoute(route); setModified(false); setMessage('ROUTE ACTIVATED'); setStep(Math.max(step, 3));
  };
  const reset = () => { setRoute(initialRoute); setActiveRoute(initialRoute); setScratch(''); setModified(false); setMessage(''); setPage('MENU'); setStep(1); };

  const screen = useMemo(() => {
    if (page === 'MENU') return <><div className="cdu-grid"><Cell label="FMC" value="<TRAINER" /><Cell align="right" label="STATUS" value="READY>" /><Cell label="TRAINING ROUTE" value={activeRoute.origin ? `${activeRoute.origin}/${activeRoute.destination}` : '<NEW FLIGHT'} /><Cell align="right" label="DATABASE" value="DEMO>" /></div><p className="cdu-hint">SELECT A PAGE KEY TO BEGIN</p></>;
    if (page === 'IDENT') return <div className="cdu-grid"><Cell label="MODEL" value="737 TRAINER" /><Cell align="right" label="ENGINES" value="CFM DEMO" /><Cell label="NAV DATA" value="TRAINING ONLY" /><Cell align="right" label="ACTIVE" value="SEP01OCT01" /><Cell label="SOFTWARE" value="ENCYCLO 1.0" /><Cell align="right" label="OP PROGRAM" value="WEB CDU" /></div>;
    if (page === 'POS INIT') return <div className="cdu-grid"><Cell label="LAST POS" value="N48°43.5 E002°22.3" /><Cell align="right" label="REF AIRPORT" value={route.origin || '----'} /><Cell label="GPS POS" value="N48°43.5 E002°22.3" /><Cell align="right" label="SET IRS POS" value="COPY>" /><Cell label="UTC" value="12:42:18Z" /><Cell align="right" label="STATUS" value="ALIGNED" /></div>;
    if (page === 'RTE') return <div className="cdu-grid"><button className="cdu-field" onClick={() => transfer('origin')}><Cell label="ORIGIN" value={route.origin || '□□□□'} /></button><button className="cdu-field" onClick={() => transfer('destination')}><Cell align="right" label="DEST" value={route.destination || '□□□□'} /></button><button className="cdu-field" onClick={() => transfer('runway')}><Cell label="RUNWAY" value={route.runway || '---'} /></button><button className="cdu-field" onClick={() => transfer('flightNo')}><Cell align="right" label="FLT NO" value={route.flightNo || '--------'} /></button><Cell label="ROUTE" value={routeReady ? `${route.origin} — ${route.destination}` : 'ENTER AIRPORTS'} /><Cell align="right" label="ACTIVATE" value={routeReady ? 'READY>' : 'INHIBIT'} /></div>;
    if (page === 'LEGS') return <div className="cdu-legs"><div><span>SEQ</span><span>WAYPOINT</span><span>SPD/ALT</span></div><div><b>1</b><strong>{activeRoute.origin || 'ORIGIN'}</strong><em>250/10000</em></div><div><b>2</b><strong>ABeam</strong><em>280/FL180</em></div><div><b>3</b><strong>CRUISE</strong><em>.78/FL350</em></div><div><b>4</b><strong>{activeRoute.destination || 'DEST'}</strong><em>210/3000</em></div></div>;
    if (page === 'PERF INIT') return <div className="cdu-grid"><Cell label="GR WT" value="68.4" /><Cell align="right" label="CRZ ALT" value="FL350" /><Cell label="RESERVES" value="2.5" /><Cell align="right" label="COST INDEX" value="25" /><Cell label="ZFW" value="61.2" /><Cell align="right" label="TRANS ALT" value="5000" /></div>;
    return <div className="cdu-grid"><Cell label="FROM/TO" value={activeRoute.origin ? `${activeRoute.origin}/${activeRoute.destination}` : '----/----'} /><Cell align="right" label="DIST TO GO" value="438 NM" /><Cell label="CRZ ALT" value="FL350" /><Cell align="right" label="ETA" value="14:08Z" /><Cell label="FUEL" value="7.2" /><Cell align="right" label="WIND" value="274/38" /></div>;
  }, [page, route, activeRoute, modified, routeReady]);

  return <div className="fmc-workspace"><section className="fmc-intro"><p className="eyebrow"><span className="status-dot" />INTERACTIVE TRAINER · BETA</p><h1>Build the flight.<br/><span>Understand the logic.</span></h1><p>A functional CDU-style trainer for learning the preflight flow. Type with the keypad, place values using the line keys, then activate and execute the route.</p><div className="fmc-steps"><span className={step >= 1 ? 'active' : ''}>1 · Identify</span><span className={step >= 2 ? 'active' : ''}>2 · Build route</span><span className={step >= 3 ? 'active' : ''}>3 · Execute</span></div><button className="fmc-reset" onClick={reset}>Reset training session</button><p className="fmc-legal">Independent educational simulation. Interface and sample data are original; not approved for operational use.</p></section><section className="cdu-shell" aria-label="Interactive flight management computer trainer"><div className="cdu-brand"><span>FLIGHT DATA TRAINER</span><small>CONTROL DISPLAY UNIT</small></div><div className="cdu-screen"><header><span>{title}</span><small>1/1</small></header>{screen}<div className={`scratchpad ${message ? 'message' : ''}`}>{message || scratch || ' '}</div></div><div className="cdu-function-row">{[['INIT REF','IDENT'],['RTE','RTE'],['LEGS','LEGS'],['PROG','PROGRESS'],['MENU','MENU']].map(([label, target]) => <button key={label} onClick={() => {setPage(target as PageName); if(target === 'RTE') setStep(Math.max(step, 2));}}>{label}</button>)}</div><div className="cdu-keyboard"><div className="cdu-alpha">{alphabet.map(k => <button key={k} onClick={() => press(k)}>{k}</button>)}<button onClick={() => press('SP')}>SP</button><button onClick={() => press('DEL')}>DEL</button></div><div className="cdu-numeric">{numbers.map(k => <button key={k} onClick={() => press(k)}>{k}</button>)}<button className="exec" onClick={execute}>EXEC</button><button className="clear" onClick={() => press('CLR')}>CLR</button></div></div><div className="cdu-subnav"><button onClick={() => setPage('POS INIT')}>POS INIT</button><button onClick={() => setPage('PERF INIT')}>PERF INIT</button></div></section></div>;
}
