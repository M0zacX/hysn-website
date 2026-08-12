/* Vector recreations of the six HYSN CMS feature illustrations (photos: burgers + video poster only). */
const FM_IMG = '/assets/imagery/site/';
const fmPanel = (extra) => ({ position: 'relative', height: 186, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', ...extra });

const FM_CSS = `
@keyframes fmAnts{to{stroke-dashoffset:-22}}
@keyframes fmCurF{0%,100%{transform:translate(0,0)}50%{transform:translate(-5px,-6px)}}
@keyframes fmSeg{0%,28%{transform:translateX(0)}33%,61%{transform:translateX(100%)}66%,94%{transform:translateX(200%)}100%{transform:translateX(0)}}
@keyframes fmBar{0%,6%{width:15%;opacity:1}26%{width:77%}80%{width:77%;opacity:1}86%{width:77%;opacity:0}92%,96%{width:15%;opacity:0}100%{width:15%;opacity:1}}
@keyframes fmCurGo{0%,6%{left:15%;opacity:1}26%{left:72%}80%{left:72%;opacity:1}86%{opacity:0}92%,96%{left:15%;opacity:0}100%{left:15%;opacity:1}}
@keyframes fmPop{0%{transform:scale(0);opacity:0}7%{transform:scale(1.25);opacity:1}11%{transform:scale(1)}88%{transform:scale(1);opacity:1}96%,100%{transform:scale(0);opacity:0}}
@keyframes fmPulse{from{stroke-dashoffset:0}to{stroke-dashoffset:-410}}
@keyframes fmSpin{to{transform:rotate(360deg)}}
@keyframes fmProg{from{width:4%}to{width:98%}}
.fm-ants{animation:fmAnts 1.4s linear infinite}
.fm-cur{animation:fmCurF 4.6s ease-in-out infinite}
@keyframes fmSegC1{0%,28%{color:var(--white)}34%,92%{color:var(--ink-800)}100%{color:var(--white)}}
@keyframes fmSegC2{0%,30%{color:var(--ink-800)}34%,61%{color:var(--white)}67%,100%{color:var(--ink-800)}}
@keyframes fmSegC3{0%,63%{color:var(--ink-800)}67%,94%{color:var(--white)}100%{color:var(--ink-800)}}
.fm-seg{animation:fmSeg 7.5s cubic-bezier(.6,.05,.2,1) infinite}
.fm-segc1{animation:fmSegC1 7.5s ease infinite}
.fm-segc2{animation:fmSegC2 7.5s ease infinite}
.fm-segc3{animation:fmSegC3 7.5s ease infinite}
.fm-bar{animation:fmBar 7s ease infinite}
.fm-curgo{animation:fmCurGo 7s ease infinite}
.fm-pop{animation:fmPop 5.6s ease infinite}
.fm-pulse{animation:fmPulse 3.2s linear infinite}
.fm-spin{display:inline-flex;animation:fmSpin 5.5s linear infinite}
.fm-prog{animation:fmProg 9s linear infinite}
`;

function FMCursor({ className = 'fm-cur', style, size = 19 }) {
  return (
    <svg className={className} style={{ position: 'absolute', filter: 'drop-shadow(0 2px 3px rgba(17,17,17,.35))', ...style }} width={size} height={size} viewBox="0 0 24 24">
      <path d="M5.2 2.4 L5.5 19.5 L9.9 15.7 L12.6 21.6 L15.5 20.2 L12.8 14.5 L18.6 13.9 Z" fill="var(--ink-900)" stroke="var(--white)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
const FMCheck = ({ size = 9 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none"><path d="M2.2 6.4 4.9 9 9.8 3.2" stroke="var(--white)" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* 1 — Speisekarte ändern: CMS thumbnail picker, third burger selected */
function FMThumb({ src, flip, selected }) {
  const handle = { position: 'absolute', width: 7, height: 7, background: 'var(--white)', border: '1.5px solid var(--violet-600)' };
  return (
    <div style={{ position: 'relative', flex: 1, minWidth: 0, display: 'flex' }}>
      <div style={{ flex: 1, minWidth: 0, background: selected ? 'var(--violet-025)' : 'var(--white)', border: '1px solid var(--ink-100)', borderRadius: 8, padding: '8px 8px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <img src={FM_IMG + src} alt="" style={{ width: '100%', height: 70, objectFit: 'contain', transform: flip ? 'scaleX(-1)' : 'none' }} />
        <span style={{ display: 'block', height: 6, borderRadius: 99, background: 'var(--ink-100)', width: '86%' }}></span>
        <span style={{ display: 'block', height: 6, borderRadius: 99, background: 'var(--ink-100)', width: '58%' }}></span>
      </div>
      {selected ? <>
        <svg style={{ position: 'absolute', inset: -6, width: 'calc(100% + 12px)', height: 'calc(100% + 12px)', overflow: 'visible', pointerEvents: 'none' }}>
          <rect className="fm-ants" x="1" y="1" style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }} rx="7" fill="none" stroke="var(--violet-600)" strokeWidth="1.6" strokeDasharray="6 5" />
        </svg>
        <span style={{ ...handle, top: -9, left: -9 }}></span><span style={{ ...handle, top: -9, right: -9 }}></span>
        <span style={{ ...handle, bottom: -9, left: -9 }}></span><span style={{ ...handle, bottom: -9, right: -9 }}></span>
        <FMCursor style={{ right: -8, bottom: -13 }} />
      </> : null}
    </div>
  );
}
function MenuEditMedia() {
  return (
    <div aria-hidden="true" style={fmPanel({ padding: '18px 16px', display: 'flex', alignItems: 'center' })}>
      <div style={{ display: 'flex', gap: 13, width: '100%', alignItems: 'stretch' }}>
        <FMThumb src="burger-cheese.png" />
        <FMThumb src="burger-double.png" />
        <FMThumb src="burger-cheese.png" flip selected />
      </div>
    </div>
  );
}

/* 2 — Automatische Tageszeiten: segmented control, active daypart slides automatically */
const FMSegIcon = ({ d, circle }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {circle ? <circle cx="12" cy="12" r="4" /> : null}
    <path d={d} />
  </svg>
);
const FM_SEG = [
  ['M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0', false, 'Frühstück', '09:00 – 11:00'],
  ['M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41', true, 'Mittag', '11:00 – 16:00'],
  ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', false, 'Abend', '16:00 – 22:00'],
];
function DaypartsMedia() {
  return (
    <div aria-hidden="true" style={fmPanel({ display: 'flex', alignItems: 'center', padding: '0 18px' })}>
      <div style={{ position: 'relative', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: 'var(--violet-025)', border: '1px solid var(--ink-100)', borderRadius: 14, padding: 5 }}>
        <span className="fm-seg" style={{ position: 'absolute', top: 5, bottom: 5, left: 5, width: 'calc((100% - 10px)/3)', borderRadius: 10, background: 'var(--violet-700)', boxShadow: '0 6px 14px -6px rgba(69,23,122,.55)' }}></span>
        {FM_SEG.map(([d, circle, label, time], i) => (
          <div key={label} className={'fm-segc' + (i + 1)} style={{ position: 'relative', color: 'var(--ink-800)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '15px 4px 13px', textAlign: 'center' }}>
            <FMSegIcon d={d} circle={circle} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</span>
            <span style={{ fontSize: 10.5, fontWeight: 600, opacity: .75, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 3 — Videos & Animationen: player over the Crispy-Chicken poster */
function VideoMedia() {
  return (
    <div aria-hidden="true" style={fmPanel({ background: '#000', border: 'none' })}>
      <img src={FM_IMG + 'video-poster-crispy-wide.png'} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
      <span className="play" style={{ position: 'absolute', left: '50%', top: '44%', marginLeft: -25, marginTop: -25, width: 50, height: 50, borderRadius: '50%', background: 'rgba(17,17,17,.32)', border: '2px solid rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(2px)' }}>
        <svg width="16" height="16" viewBox="0 0 20 20" style={{ marginLeft: 3 }}><path d="M4.5 2.8 L17 10 L4.5 17.2 Z" fill="var(--white)" /></svg>
      </span>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 11, height: 4, borderRadius: 99, background: 'rgba(255,255,255,.3)' }}>
        <div className="fm-prog" style={{ position: 'relative', height: '100%', borderRadius: 99, background: 'var(--white)' }}>
          <span style={{ position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)', width: 9, height: 9, borderRadius: '50%', background: 'var(--white)', boxShadow: '0 1px 4px rgba(0,0,0,.4)' }}></span>
        </div>
      </div>
    </div>
  );
}

/* 4 — Aktionen planen: week calendar, promo bar draws itself in */
const FM_DAYS = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
function CalendarMedia() {
  return (
    <div aria-hidden="true" style={fmPanel({ padding: '14px 14px 12px', display: 'flex', flexDirection: 'column' })}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', paddingBottom: 8 }}>
        {FM_DAYS.map((d) => <span key={d} style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 10.5, letterSpacing: '.05em', color: 'var(--ink-800)' }}>{d}</span>)}
      </div>
      <div style={{ position: 'relative', flex: 1, borderTop: '1px solid var(--ink-200)', background: 'repeating-linear-gradient(90deg,transparent 0,transparent calc(100%/7 - 1px),var(--ink-100) calc(100%/7 - 1px),var(--ink-100) calc(100%/7))' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: 'var(--ink-100)' }}></div>
        <div className="fm-bar" style={{ position: 'absolute', left: '1.5%', top: 10, width: '15%', height: 30, borderRadius: 7, background: 'var(--gradient-brand)', boxShadow: '0 6px 14px -6px rgba(69,23,122,.5)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', fontSize: 11, fontWeight: 700, color: 'var(--white)', padding: '0 12px' }}>2 für 1 Burger Aktion</span>
        </div>
        <FMCursor className="fm-curgo" style={{ top: 30, left: '15%' }} />
      </div>
    </div>
  );
}

/* 5 — Alles online steuern: laptop / tablet / phone with sync ticks */
function FMSyncDisc({ size, delay }) {
  return (
    <span className="fm-pop" style={{ animationDelay: delay, width: size, height: size, borderRadius: '50%', background: 'var(--violet-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px -3px rgba(69,23,122,.5)' }}>
      <FMCheck size={Math.round(size * 0.48)} />
    </span>
  );
}
function DevicesMedia() {
  const screen = { border: '3px solid var(--ink-800)', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  return (
    <div aria-hidden="true" style={fmPanel({ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(14px,6%,26px)', padding: '0 16px' })}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ ...screen, width: 116, height: 72, borderRadius: '8px 8px 2px 2px' }}><FMSyncDisc size={28} delay="0s" /></div>
        <div style={{ width: 140, height: 8, background: 'var(--ink-800)', borderRadius: '1px 1px 7px 7px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: 30, height: 3, background: 'var(--white)', borderRadius: '0 0 3px 3px', opacity: .9 }}></span>
        </div>
      </div>
      <div style={{ ...screen, width: 62, height: 84, borderRadius: 10 }}><FMSyncDisc size={24} delay=".45s" /></div>
      <div style={{ ...screen, width: 38, height: 66, borderRadius: 9 }}><FMSyncDisc size={18} delay=".9s" /></div>
    </div>
  );
}

/* 6 — Mehrere Standorte: central monitor syncing three Filialen */
const FMSync = ({ size = 15, color = 'var(--violet-700)' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2 v3.33 h-3.33" /><path d="M14 8 a6 6 0 1 1 -6 -6 c1.68 0 3.29 .67 4.49 1.83 L14 5.33" />
  </svg>
);
const FMStore = () => (
  <svg width="32" height="27" viewBox="0 0 34 28" fill="none" stroke="var(--ink-800)" strokeWidth="1.7">
    <rect x="7" y="1.2" width="20" height="4.6" fill="var(--white)" />
    <rect x="6" y="12.2" width="22" height="14" fill="var(--white)" />
    <rect x="3.5" y="5.8" width="27" height="6.4" fill="var(--violet-100)" />
    <line x1="10.25" y1="5.8" x2="10.25" y2="12.2" /><line x1="17" y1="5.8" x2="17" y2="12.2" /><line x1="23.75" y1="5.8" x2="23.75" y2="12.2" />
    <rect x="13.8" y="17" width="6.4" height="9.2" rx="1" fill="var(--ink-800)" stroke="none" />
  </svg>
);
function FMLocCard({ n, delay }) {
  return (
    <div style={{ width: '100%', background: 'var(--white)', border: '1px solid var(--ink-100)', borderRadius: 10, padding: '10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <FMStore />
        <span className="fm-pop" style={{ animationDelay: delay, position: 'absolute', top: -6, right: -8, width: 15, height: 15, borderRadius: '50%', background: 'var(--violet-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(69,23,122,.4)' }}><FMCheck size={8} /></span>
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 9.5, letterSpacing: '.06em', color: 'var(--ink-800)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Filiale {n}</span>
    </div>
  );
}
function StandorteMedia() {
  const pulse = { stroke: 'var(--violet-600)', strokeWidth: 2, strokeLinecap: 'round', strokeDasharray: '10 400', fill: 'none' };
  const fork = ['M150 0 V14 Q150 24 140 24 H60 Q50 24 50 34 V56', 'M150 0 V56', 'M150 0 V14 Q150 24 160 24 H240 Q250 24 250 34 V56'];
  return (
    <div aria-hidden="true" style={fmPanel({ padding: '16px 7px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
      <div style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--violet-700)', borderRadius: 99, padding: '6px 12px', boxShadow: '0 6px 14px -6px rgba(69,23,122,.55)', whiteSpace: 'nowrap' }}>
        <span className="fm-spin"><FMSync size={11} color="var(--white)" /></span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 9.5, letterSpacing: '.1em', color: 'var(--white)' }}>HYSN CMS</span>
      </div>
      <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 44 }}>
        <svg width="100%" height="100%" viewBox="0 0 300 56" preserveAspectRatio="none" fill="none" style={{ position: 'absolute', inset: 0, display: 'block' }}>
          <g stroke="var(--violet-200)" strokeWidth="1.5">{fork.map((d) => <path key={d} d={d} />)}</g>
          <path className="fm-pulse" d={fork[0]} {...pulse} />
          <path className="fm-pulse" style={{ animationDelay: '.9s' }} d={fork[1]} {...pulse} />
          <path className="fm-pulse" style={{ animationDelay: '1.7s' }} d={fork[2]} {...pulse} />
        </svg>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        {[['.2s', 1], ['.5s', 2], ['.8s', 3]].map(([delay, n]) => (
          <div key={n} style={{ width: '33.333%', padding: '0 7px', boxSizing: 'border-box' }}><FMLocCard n={n} delay={delay} /></div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { FM_CSS, MenuEditMedia, DaypartsMedia, VideoMedia, CalendarMedia, DevicesMedia, StandorteMedia });