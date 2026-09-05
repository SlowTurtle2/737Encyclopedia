'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const explanations: Record<string, string> = {
  center: 'Center pumps supply both engine feed lines at higher pressure. Main tank pumps remain on, but center fuel takes priority. The crossfeed valve is closed.',
  main: 'With center pumps off, each main tank supplies its own engine. The two engine feed lines are isolated by the closed crossfeed valve.',
  crossfeed: 'Illustrative configuration: center pumps off, main 1 pumps on, main 2 pumps off and crossfeed open. Main 1 supplies both engines. Fuel does not transfer into main 2.',
};

export default function FuelDiagram() {
  const [mode, setMode] = useState('center');
  const blue = '#246ab6';
  const grey = '#b4c4d5';
  const on = {
    left: mode === 'main' || mode === 'crossfeed',
    center: mode === 'center',
    right: mode === 'main',
    crossfeed: mode === 'crossfeed',
  };
  const color = (active: boolean) => (active ? blue : grey);

  return (
    <figure className="figure">
      <div className="figure-header"><h3>Follow the fuel</h3><span className="pill">SIMPLIFIED FEED SCHEMATIC</span></div>
      <Tabs className="scenario-tabs" value={mode} onValueChange={(value) => setMode(String(value))}>
        <TabsList aria-label="Fuel feed scenario">
          <TabsTrigger value="center">Center tank feed</TabsTrigger>
          <TabsTrigger value="main">Main tank feed</TabsTrigger>
          <TabsTrigger value="crossfeed">Crossfeed example</TabsTrigger>
        </TabsList>
      </Tabs>
      <svg className="diagram" viewBox="0 0 760 410" role="img" aria-label={explanations[mode]}>
        <defs><marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill={blue} /></marker></defs>
        {[
          { x: 30, title: 'MAIN TANK 1', quantity: '3,915 kg', active: on.left },
          { x: 290, title: 'CENTER TANK', quantity: '13,066 kg', active: on.center },
          { x: 550, title: 'MAIN TANK 2', quantity: '3,915 kg', active: on.right },
        ].map((tank) => <g key={tank.title}>
          <rect x={tank.x} y="28" width="180" height="108" rx="5" fill="#e8f0f9" stroke="#a9c1da" />
          <text x={tank.x + 90} y="57" textAnchor="middle" fontSize="14" fill="#41617f">{tank.title}</text>
          <text x={tank.x + 90} y="86" textAnchor="middle" fontSize="22" fill="#163b60">{tank.quantity}</text>
          {[58, 122].map((offset, index) => <g key={offset}><circle cx={tank.x + offset} cy="121" r="16" fill="#fff" stroke={color(tank.active)} strokeWidth="3" /><text x={tank.x + offset} y="126" textAnchor="middle" fontSize="13" fill="#315373">P{index + 1}</text></g>)}
        </g>)}
        <g fill="none" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" className="fuel-flow-lines">
          <path d="M88 138V192H175V255M152 138V192" stroke={color(on.left)} />
          <path d="M608 138V192H585V255M672 138V192" stroke={color(on.right)} />
          <path d="M348 138V220H175V255" stroke={color(on.center)} />
          <path d="M412 138V220H585V255" stroke={color(on.center)} />
          <path d="M175 255H361M399 255H585" stroke={color(on.crossfeed)} />
          <path d="M175 255V328" stroke={blue} markerEnd="url(#flow-arrow)" />
          <path d="M585 255V328" stroke={blue} markerEnd="url(#flow-arrow)" />
          <path d="M175 280H55V335" stroke={blue} markerEnd="url(#flow-arrow)" />
        </g>
        <circle cx="380" cy="255" r="18" fill="white" stroke={color(on.crossfeed)} strokeWidth="3" />
        <path d={on.crossfeed ? 'M366 255H394' : 'M380 241V269'} stroke={color(on.crossfeed)} strokeWidth="3" />
        <text x="380" y="295" textAnchor="middle" fontSize="13" fill="#41617f">CROSSFEED {on.crossfeed ? 'OPEN' : 'CLOSED'}</text>
        {[[125, 'ENGINE 1'], [535, 'ENGINE 2']].map(([x, title]) => <g key={title}><rect x={Number(x)} y="340" width="100" height="40" rx="4" fill="#173b60" /><text x={Number(x) + 50} y="365" textAnchor="middle" fontSize="14" fill="white">{title}</text></g>)}
        <text x="55" y="365" textAnchor="middle" fontSize="14" fill="#41617f">APU</text>
      </svg>
      <p className="scenario-copy" aria-live="polite">{explanations[mode]}</p>
      <figcaption>Original teaching diagram based on NG / MAX FCOM 12.20.1–5. Blue = active feed; grey = inactive feed in this example. Shutoff valves, check valves, suction and scavenge paths are omitted.</figcaption>
    </figure>
  );
}
