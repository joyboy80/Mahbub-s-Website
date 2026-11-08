import React from 'react';

/*
  Illustrated, animated scenes for each project so non-technical visitors
  instantly see what the project does. Pure SVG — crisp at any size.
*/

const Frame = ({ from, to, children }) => (
  <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice" role="img">
    <defs>
      <linearGradient id={`bg-${from}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#fff" opacity=".14" />
      </pattern>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000" floodOpacity=".35" />
      </filter>
    </defs>
    <rect width="640" height="400" fill={`url(#bg-${from})`} />
    <rect width="640" height="400" fill="url(#dots)" />
    {children}
  </svg>
);

/* ---------- Safar: bus tracker ---------- */
export function SafarArt() {
  const route = 'M60 330 C 150 330, 150 220, 250 220 S 360 110, 470 120 S 590 80, 600 60';
  return (
    <Frame from="#0ea5e9" to="#4f46e5">
      {/* city blocks */}
      {[[40, 60, 90, 70], [150, 40, 70, 110], [300, 260, 110, 80], [470, 220, 120, 120], [60, 170, 70, 50]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="10" fill="#fff" opacity=".08" />
      ))}
      {/* route */}
      <path d={route} fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="18" strokeLinecap="round" />
      <path d={route} fill="none" stroke="#fde047" strokeWidth="5" strokeDasharray="14 12" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.2s" repeatCount="indefinite" />
      </path>
      {/* stops */}
      {[[60, 330], [250, 220], [470, 120], [600, 60]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="16" fill="#fff" opacity=".25">
            <animate attributeName="r" values="12;22;12" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={y} r="9" fill="#fff" />
          <circle cx={x} cy={y} r="4" fill="#4f46e5" />
        </g>
      ))}
      {/* moving bus */}
      <g>
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={route} />
        <g transform="translate(-26 -16)" filter="url(#soft)">
          <rect width="52" height="30" rx="8" fill="#facc15" />
          <rect x="6" y="6" width="12" height="9" rx="2" fill="#1e3a8a" />
          <rect x="21" y="6" width="12" height="9" rx="2" fill="#1e3a8a" />
          <rect x="36" y="6" width="10" height="9" rx="2" fill="#1e3a8a" />
          <circle cx="13" cy="30" r="5" fill="#111827" />
          <circle cx="40" cy="30" r="5" fill="#111827" />
        </g>
      </g>
      {/* phone card */}
      <g transform="translate(400 250)" filter="url(#soft)">
        <rect width="200" height="120" rx="18" fill="#0b1020" opacity=".85" />
        <text x="18" y="34" fill="#93c5fd" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">NEXT BUS · CAMPUS</text>
        <text x="18" y="72" fill="#fff" fontSize="30" fontFamily="Sora, Inter, sans-serif" fontWeight="700">4 min</text>
        <rect x="18" y="90" width="164" height="8" rx="4" fill="#fff" opacity=".12" />
        <rect x="18" y="90" width="110" height="8" rx="4" fill="#fde047">
          <animate attributeName="width" values="40;164;40" dur="7s" repeatCount="indefinite" />
        </rect>
      </g>
    </Frame>
  );
}

/* ---------- CUET Lost & Found ---------- */
export function LostFoundArt() {
  const Item = ({ x, y, delay, children }) => (
    <g transform={`translate(${x} ${y})`}>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -12; 0 0" dur="3s" begin={delay} repeatCount="indefinite" />
        <g filter="url(#soft)">{children}</g>
      </g>
    </g>
  );
  return (
    <Frame from="#10b981" to="#0e7490">
      {/* box */}
      <g transform="translate(230 210)" filter="url(#soft)">
        <path d="M0 40 L90 0 L180 40 L90 80 Z" fill="#fcd34d" />
        <path d="M0 40 L90 80 L90 180 L0 140 Z" fill="#f59e0b" />
        <path d="M180 40 L90 80 L90 180 L180 140 Z" fill="#d97706" />
        <rect x="56" y="22" width="68" height="36" rx="8" fill="#fff" opacity=".9" transform="matrix(1 .44 -1 .44 90 -14)" />
      </g>
      <g transform="translate(262 168)" filter="url(#soft)">
        <rect width="116" height="30" rx="15" fill="#fff" />
        <text x="58" y="20" textAnchor="middle" fill="#0e7490" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">LOST &amp; FOUND</text>
      </g>
      {/* floating items */}
      <Item x={130} y={90} delay="0s">
        {/* keys */}
        <circle cx="20" cy="20" r="18" fill="none" stroke="#fff" strokeWidth="7" />
        <rect x="34" y="16" width="48" height="9" rx="4" fill="#fff" />
        <rect x="66" y="22" width="8" height="14" rx="2" fill="#fff" />
      </Item>
      <Item x={300} y={50} delay=".6s">
        {/* ID card */}
        <rect width="96" height="62" rx="10" fill="#fff" />
        <circle cx="26" cy="30" r="13" fill="#34d399" />
        <rect x="46" y="20" width="38" height="7" rx="3" fill="#94a3b8" />
        <rect x="46" y="34" width="28" height="7" rx="3" fill="#cbd5e1" />
      </Item>
      <Item x={460} y={110} delay="1.2s">
        {/* wallet */}
        <rect width="88" height="60" rx="12" fill="#7c3aed" />
        <rect x="52" y="20" width="36" height="22" rx="8" fill="#a78bfa" />
        <circle cx="66" cy="31" r="4" fill="#fff" />
      </Item>
      {/* search pill */}
      <g transform="translate(40 300)" filter="url(#soft)">
        <rect width="190" height="54" rx="27" fill="#fff" />
        <circle cx="30" cy="27" r="10" fill="none" stroke="#0e7490" strokeWidth="4" />
        <line x1="37" y1="34" x2="45" y2="42" stroke="#0e7490" strokeWidth="4" strokeLinecap="round" />
        <text x="56" y="33" fill="#334155" fontSize="15" fontFamily="Inter, sans-serif">black wallet…</text>
      </g>
      {/* found badge */}
      <g transform="translate(470 300)" filter="url(#soft)">
        <rect width="130" height="54" rx="27" fill="#065f46" />
        <circle cx="28" cy="27" r="13" fill="#34d399" />
        <path d="M21 27 l5 5 l9 -10" fill="none" stroke="#065f46" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="33" fill="#fff" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">Found!</text>
        <animateTransform attributeName="transform" type="translate" values="470 300; 470 294; 470 300" dur="2s" repeatCount="indefinite" additive="replace" />
      </g>
    </Frame>
  );
}

/* ---------- Biometric attendance ---------- */
export function BiometricArt() {
  const rows = ['Rahim', 'Ayesha', 'Tanvir', 'Nusrat'];
  return (
    <Frame from="#a855f7" to="#4338ca">
      {/* scanner */}
      <g transform="translate(70 70)" filter="url(#soft)">
        <rect width="200" height="260" rx="28" fill="#0f0a1f" />
        <rect x="30" y="40" width="140" height="140" rx="24" fill="#1e1b4b" />
        <g fill="none" stroke="#c4b5fd" strokeWidth="5" strokeLinecap="round" transform="translate(100 110)">
          {[16, 28, 40, 52].map((r, i) => (
            <path key={r} d={`M${-r} 10 A ${r} ${r} 0 0 1 ${r} 10`} opacity={1 - i * 0.15} transform={`translate(0 ${i * 4})`} />
          ))}
          <path d="M0 -6 L0 40" />
        </g>
        {/* scan line */}
        <rect x="30" y="40" width="140" height="6" rx="3" fill="#22d3ee" opacity=".9">
          <animate attributeName="y" values="40;174;40" dur="2.6s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="205" width="120" height="30" rx="15" fill="#22c55e" />
        <text x="100" y="225" textAnchor="middle" fill="#052e16" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">VERIFIED</text>
      </g>
      {/* dashboard */}
      <g transform="translate(320 80)" filter="url(#soft)">
        <rect width="270" height="240" rx="20" fill="#fff" />
        <text x="22" y="38" fill="#1e1b4b" fontSize="16" fontWeight="700" fontFamily="Sora, sans-serif">Today's attendance</text>
        <text x="22" y="58" fill="#64748b" fontSize="12" fontFamily="Inter, sans-serif">CSE · Section A</text>
        {rows.map((n, i) => (
          <g key={n} transform={`translate(22 ${80 + i * 38})`}>
            <circle cx="14" cy="14" r="14" fill={['#c4b5fd', '#a5f3fc', '#fbcfe8', '#bbf7d0'][i]} />
            <text x="38" y="19" fill="#334155" fontSize="14" fontFamily="Inter, sans-serif">{n}</text>
            <rect x="160" y="3" width="66" height="22" rx="11" fill={i === 3 ? '#fee2e2' : '#dcfce7'} />
            <text x="193" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill={i === 3 ? '#b91c1c' : '#15803d'} fontFamily="Inter, sans-serif">
              {i === 3 ? 'Absent' : 'Present'}
            </text>
            <animate attributeName="opacity" values="0;1" dur=".5s" begin={`${0.3 + i * 0.3}s`} fill="freeze" />
          </g>
        ))}
      </g>
    </Frame>
  );
}

/* ---------- EduSync CLI ---------- */
export function EduSyncArt() {
  const lines = [
    { t: '$ ./edusync.sh --setup CSE-3-2', c: '#fde68a' },
    { t: '✔ created  /courses/CSE-321', c: '#86efac' },
    { t: '✔ created  /courses/CSE-322', c: '#86efac' },
    { t: '✔ permissions set (chmod 750)', c: '#86efac' },
    { t: '✔ workspace ready in 0.4s', c: '#7dd3fc' },
  ];
  return (
    <Frame from="#f59e0b" to="#db2777">
      {/* terminal */}
      <g transform="translate(40 60)" filter="url(#soft)">
        <rect width="360" height="250" rx="16" fill="#0b0b12" />
        <rect width="360" height="36" rx="16" fill="#1f1f2e" />
        <rect y="20" width="360" height="16" fill="#1f1f2e" />
        {['#f87171', '#fbbf24', '#4ade80'].map((c, i) => <circle key={c} cx={22 + i * 20} cy="18" r="6" fill={c} />)}
        {lines.map((l, i) => (
          <text key={i} x="20" y={70 + i * 32} fill={l.c} fontSize="14" fontFamily="JetBrains Mono, monospace" opacity="0">
            {l.t}
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.9;1" dur="6s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </text>
        ))}
        <rect x="20" y="222" width="10" height="18" fill="#e5e7eb">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>
      {/* folders */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${440 + (i % 2) * 70} ${70 + i * 90})`} filter="url(#soft)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            <path d="M0 14 Q0 0 14 0 H52 L64 12 H112 Q126 12 126 26 V78 Q126 92 112 92 H14 Q0 92 0 78 Z" fill="#fff" opacity=".95" />
            <rect x="0" y="26" width="126" height="66" rx="14" fill={['#fde68a', '#fbcfe8', '#fed7aa'][i]} />
            <text x="63" y="66" textAnchor="middle" fill="#7c2d12" fontSize="14" fontWeight="700" fontFamily="JetBrains Mono, monospace">
              {['CSE-321', 'CSE-322', 'Labs'][i]}
            </text>
          </g>
        </g>
      ))}
    </Frame>
  );
}

export const projectArt = {
  safar: SafarArt,
  'cuet-lost-found': LostFoundArt,
  'biometrics-attendance': BiometricArt,
  edusync: EduSyncArt,
};
