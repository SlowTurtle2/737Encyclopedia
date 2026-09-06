export function ProtectionOverview() {
  return (
    <figure className="figure anti-ice-overview">
      <div className="figure-header"><h3>Protected areas</h3><span className="pill">SYSTEM MAP</span></div>
      <svg viewBox="0 0 900 360" role="img" aria-label="Simplified 737 ice and rain protection component map">
        <path d="M110 178H790M300 178L80 290M600 178L820 290" fill="none" stroke="#aebdca" strokeWidth="24" strokeLinecap="round" />
        <path d="M205 178Q450 25 695 178Q450 230 205 178Z" fill="#edf3f8" stroke="#71859a" strokeWidth="3" />
        <path d="M405 94Q450 65 495 94L480 127H420Z" fill="#183d63" />
        <path d="M270 192L105 279M630 192L795 279" fill="none" stroke="#f0a327" strokeWidth="13" strokeLinecap="round" strokeDasharray="82 28" />
        <circle cx="325" cy="213" r="38" fill="#edf3f8" stroke="#71859a" strokeWidth="3" /><circle cx="575" cy="213" r="38" fill="#edf3f8" stroke="#71859a" strokeWidth="3" />
        <path d="M294 199Q325 177 356 199M544 199Q575 177 606 199" fill="none" stroke="#f0a327" strokeWidth="9" />
        <g fill="#234b73" fontSize="15" fontWeight="700">
          <text x="450" y="55" textAnchor="middle">HEATED WINDOWS · WIPERS</text>
          <text x="450" y="260" textAnchor="middle">ELECTRICALLY HEATED PROBES & SENSORS</text>
          <text x="450" y="330" textAnchor="middle">BLEED-AIR ANTI-ICE</text>
        </g>
        <g fill="#5f7182" fontSize="14">
          <text x="95" y="320">INBOARD SLATS</text><text x="690" y="320">INBOARD SLATS</text>
          <text x="282" y="270">COWL LIP</text><text x="548" y="270">COWL LIP</text>
        </g>
      </svg>
      <figcaption>Original simplified teaching diagram. Orange identifies the surfaces protected by engine or wing thermal anti-ice.</figcaption>
    </figure>
  );
}

export function WingAntiIceDiagram() {
  return (
    <figure className="figure compact-system-diagram">
      <div className="figure-header"><h3>Wing thermal anti-ice</h3><span className="pill">BLEED AIR</span></div>
      <svg viewBox="0 0 760 230" role="img" aria-label="Wing anti-ice bleed air path to three inboard leading edge slats on each wing">
        <path d="M380 48V103M380 103H170M380 103H590" fill="none" stroke="#d37724" strokeWidth="8" strokeLinecap="round" />
        <circle cx="380" cy="103" r="17" fill="white" stroke="#d37724" strokeWidth="5" />
        {[110,170,230,530,590,650].map((x)=><rect key={x} x={x-22} y="154" width="44" height="38" rx="12" fill="#fff0dc" stroke="#d37724" strokeWidth="3" />)}
        <path d="M170 103V154M590 103V154M110 135H230M530 135H650" fill="none" stroke="#d37724" strokeWidth="6" />
        <g fill="#294c6b" fontSize="14" fontWeight="700"><text x="380" y="29" textAnchor="middle">PNEUMATIC MANIFOLD</text><text x="170" y="222" textAnchor="middle">3 INBOARD SLATS</text><text x="590" y="222" textAnchor="middle">3 INBOARD SLATS</text></g>
      </svg>
      <figcaption>Leading-edge flaps and outboard slats are not heated. The system works with the slats in any position.</figcaption>
    </figure>
  );
}

export function StallLogicDiagram() {
  return (
    <figure className="figure logic-diagram">
      <div className="logic-row"><span>ENGINE ANTI-ICE ON</span><b>OR</b><span>WING ANTI-ICE used in flight</span></div>
      <div className="logic-arrow">↓</div>
      <div className="logic-output"><strong>ICING STALL-WARNING LOGIC</strong><span>Adjusted stick shaker and minimum maneuver-speed bars</span></div>
      <figcaption>FMC-displayed VREF is not adjusted automatically.</figcaption>
    </figure>
  );
}
