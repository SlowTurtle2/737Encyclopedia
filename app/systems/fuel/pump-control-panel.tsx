export default function PumpControlPanel() {
  return (
    <figure className="pump-panel">
      <svg viewBox="0 0 900 330" role="img" aria-labelledby="pump-panel-title">
        <title id="pump-panel-title">737 overhead fuel pump control panel</title>
        <rect x="18" y="18" width="864" height="294" rx="18" fill="#252b30" stroke="#68727a" strokeWidth="4" />
        <text x="450" y="53" textAnchor="middle" fill="#f2f4e8" fontSize="22" fontWeight="700">FUEL</text>
        {[
          [145, 'FWD', '1'], [275, 'AFT', '1'], [385, 'L', 'CTR'],
          [515, 'R', 'CTR'], [625, 'FWD', '2'], [755, 'AFT', '2'],
        ].map(([x, pos, tank]) => (
          <g key={`${x}`}>
            <rect x={Number(x) - 47} y="78" width="94" height="38" rx="5" fill="#181c20" stroke="#59636a" />
            <text x={x} y="103" textAnchor="middle" fill="#e3b36b" fontSize="15" fontWeight="700">LOW PRESSURE</text>
            <path d={`M ${Number(x)-24} 151 L ${Number(x)+24} 151 L ${Number(x)+18} 246 L ${Number(x)-18} 246 Z`} fill="#d9d8ce" stroke="#0d1012" strokeWidth="5" />
            <rect x={Number(x)-13} y="171" width="26" height="54" rx="4" fill="#1d2226" />
            <text x={x} y="271" textAnchor="middle" fill="#f2f4e8" fontSize="16" fontWeight="700">{pos}</text>
            <text x={x} y="293" textAnchor="middle" fill="#aeb8bd" fontSize="14">TANK {tank}</text>
          </g>
        ))}
      </svg>
      <figcaption>Fuel pump controls — simplified overhead-panel study view.</figcaption>
    </figure>
  );
}
