export default function ValveLocations() {
  return (
    <figure className="valve-locations">
      <div className="figure-header">
        <h3>Where are the valves?</h3>
        <span className="pill">SIMPLIFIED LOCATION VIEW</span>
      </div>
      <svg viewBox="0 0 900 390" role="img" aria-labelledby="valve-location-title">
        <title id="valve-location-title">
          Simplified underside view showing engine, spar and crossfeed valve locations
        </title>
        <path d="M430 25h40l18 120 286 91-8 38-278-42-15 128h-46l-15-128-278 42-8-38 286-91z" fill="#edf2f5" stroke="#78909f" strokeWidth="3" />
        <ellipse cx="276" cy="260" rx="43" ry="63" fill="#dbe5ea" stroke="#607d8b" strokeWidth="3" />
        <ellipse cx="624" cy="260" rx="43" ry="63" fill="#dbe5ea" stroke="#607d8b" strokeWidth="3" />
        <path d="M276 258H450H624" fill="none" stroke="#486b7c" strokeWidth="7" />
        <circle cx="276" cy="258" r="11" fill="#2e77a8" /><circle cx="624" cy="258" r="11" fill="#2e77a8" />
        <circle cx="329" cy="258" r="11" fill="#32a07c" /><circle cx="571" cy="258" r="11" fill="#32a07c" />
        <circle cx="450" cy="258" r="11" fill="#d28a20" />
        <g fontSize="15" fontWeight="700">
          <text x="82" y="315" fill="#2e77a8">ENGINE VALVES</text><path d="M220 305L270 269" stroke="#2e77a8" strokeWidth="2" />
          <text x="350" y="335" fill="#268064">SPAR VALVES</text><path d="M410 320L339 267M490 320L561 267" stroke="#268064" strokeWidth="2" />
          <text x="650" y="315" fill="#a66a11">CROSSFEED VALVE</text><path d="M650 305L461 264" stroke="#a66a11" strokeWidth="2" />
        </g>
      </svg>
      <figcaption>
        Simplified underside location view. Positions show system relationships,
        not maintenance access points or exact structural coordinates.
      </figcaption>
    </figure>
  );
}
