const { Button, Icon, Badge } = window.HYSNDesignSystem_e25aa3;

/* The hero shows the product doing its job: a change is made in the CMS,
   saved, and goes live on the board — told by a cycling toast over the mockup. */
const TOASTS = [
  ['pencil-line', 'Preis angepasst', 'Cheese Burger · 12,90 €'],
  ['check', 'Gespeichert', 'Änderung übernommen'],
  ['monitor-check', 'Live auf allen Bildschirmen', 'gleichzeitig aktualisiert'],
];

function Hero() {
  const wrap = React.useRef(null);
  const [toast, setToast] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setToast((v) => (v + 1) % TOASTS.length), 3200); return () => clearInterval(t); }, []);
  const onMove = (e) => {
    const el = wrap.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5).toFixed(3));
    el.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5).toFixed(3));
  };
  const onLeave = () => { const el = wrap.current; if (el) { el.style.setProperty('--px', 0); el.style.setProperty('--py', 0); } };
  const [tIc, tTitle, tSub] = TOASTS[toast];
  const layer = (f) => ({ transform: `translate3d(calc(var(--px,0)*${f}px), calc(var(--py,0)*${Math.round(f * .7)}px), 0)`, transition: 'transform .5s var(--ease-out)' });
  return (
    <section id="produkt" data-screen-label="Produkt" style={{ background: 'var(--white)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(46% 64% at 14% 22%, var(--violet-050) 0%, rgba(242,240,251,0) 70%), radial-gradient(34% 42% at 100% 64%, var(--violet-050) 0%, rgba(242,240,251,0) 68%)', pointerEvents: 'none' }}></div>
      <div style={{
        maxWidth: 'var(--max-width-content)', margin: '0 auto', position: 'relative',
        padding: 'var(--space-6) var(--gutter-page) var(--space-10)',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.02fr) minmax(0,1fr)', gap: 'var(--space-9)', alignItems: 'center',
      }} data-grid="hero">
        <div data-rv="stage" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', order: 2 }}>
          <div className="srow"><Badge tone="subtle" size="sm">Digital Signage für Gastronomie</Badge></div>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'clamp(26px, 2.9vw, 40px)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', color: 'var(--ink-900)' }}>
            <span className="h-mask"><span style={{ '--rd': '120ms' }}>Ihre Speisekarte</span></span>
            <span className="h-mask"><span style={{ '--rd': '240ms' }}>war noch nie so</span></span>
            <span className="h-mask"><span style={{ '--rd': '360ms', color: 'var(--violet-700)' }}>einfach zu verwalten.</span></span>
          </h2>
          <p className="srow" style={{ '--rd': '440ms', margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: 'var(--ink-500)', maxWidth: '38ch' }}>
            Änderungen in wenigen Sekunden – auf allen Bildschirmen gleichzeitig. Und Ihre Aktionen laufen dort, wo Gäste bestellen: direkt über der Theke. Das verkauft mit.
          </p>
          <div className="srow" data-cta style={{ '--rd': '540ms', display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'nowrap' }}>
            <Button size="md" as="a" href="#kontakt" className="cta-r" style={{ whiteSpace: 'nowrap', padding: '13px 22px', flex: '0 1 auto' }} iconRight={<Icon name="arrow-right" size={17} />}>Beratung anfragen</Button>
            <Button size="md" variant="secondary" as="a" href="#software" style={{ whiteSpace: 'nowrap', padding: '13px 22px', flex: '0 1 auto' }}>Software ansehen</Button>
          </div>
          <div className="srow" style={{ '--rd': '640ms', display: 'flex', gap: 'var(--space-3) var(--space-5)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
            {[['timer', 'Änderungen in Sekunden'], ['printer', 'Keine Druckkosten'], ['shield-check', '5 Jahre Garantie']].map(([ic, t]) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--ink-600)', whiteSpace: 'nowrap' }}>
                <Icon name={ic} size={16} color="var(--violet-700)" />{t}
              </span>
            ))}
          </div>
        </div>

        <div ref={wrap} onMouseMove={onMove} onMouseLeave={onLeave} className="h-visual" data-rv="z" style={{ '--rd': '200ms', position: 'relative', paddingBottom: 'var(--space-8)', order: 1 }}>
          <div style={layer(-7)}>
            <img src="/assets/imagery/site/hero-cms-desktop.png" alt="HYSN CMS auf einem Bildschirm im Restaurant: Menüboard bearbeiten"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-lg)' }} />
          </div>
          <svg width="112" height="128" viewBox="0 0 120 138" fill="none" aria-hidden="true" style={{ position: 'absolute', left: '68%', bottom: '29.5%', zIndex: 2, overflow: 'visible', filter: 'drop-shadow(0 2px 5px rgba(123,75,196,.4)) drop-shadow(0 0 16px rgba(123,75,196,.3))', ...layer(10) }}>
            <defs><linearGradient id="swoosh" x1="20" y1="0" x2="104" y2="120" gradientUnits="userSpaceOnUse"><stop stopColor="#B394E3" /><stop offset="1" stopColor="#7B4BC4" /></linearGradient></defs>
            <path d="M10 14 C 62 2, 100 32, 98 92" stroke="url(#swoosh)" strokeWidth="4.5" strokeLinecap="round" opacity=".35" />
            <path d="M10 14 C 62 2, 100 32, 98 92" pathLength="100" stroke="url(#swoosh)" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="26 74" style={{ animation: 'arrowFlow 2.2s linear infinite' }} />
            <path d="M85 96 L98 112 L111 94" stroke="#7B4BC4" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ position: 'absolute', right: '-6%', bottom: 0, width: '62%', ...layer(16) }}>
            <div style={{ position: 'relative', animation: 'drift 7s ease-in-out infinite' }}>
            <div style={{ position: 'relative', background: 'linear-gradient(175deg,#3d3d44,#17171b 55%,#0b0b0e)', borderRadius: 13, padding: '6px 6px 16px', boxShadow: '0 36px 60px -20px rgba(0,0,0,.62), 0 12px 72px -8px rgba(255,166,0,.2), inset 0 1px 0 rgba(255,255,255,.16)' }}>
              <span style={{ position: 'absolute', left: '50%', bottom: '100%', transform: 'translateX(-50%)', width: 9, height: 44, background: 'linear-gradient(90deg,#101013,#3c3c43 46%,#101013)', borderRadius: '3px 3px 0 0' }}></span>
              <span style={{ position: 'absolute', left: '50%', top: -3, transform: 'translateX(-50%)', width: 26, height: 5, background: '#0b0b0e', borderRadius: 2 }}></span>
              <div style={{ position: 'relative', borderRadius: 7, overflow: 'hidden', background: '#000' }}>
                <img src="/assets/imagery/site/board-cheeseburger-wide.png" alt="Digitales Menüboard mit Cheese Burger Aktion"
                  style={{ width: '100%', display: 'block' }} />
                <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(112deg,rgba(255,255,255,.12) 0%,rgba(255,255,255,.04) 24%,rgba(255,255,255,0) 42%)', pointerEvents: 'none' }}></span>
                <span className="glare"></span>
                <span style={{ position: 'absolute', top: 10, right: 10, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(17,17,17,.72)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', color: 'var(--white)', borderRadius: 'var(--radius-pill)', padding: '4px 10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, letterSpacing: '.14em' }}>
                  <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-500)' }}></span>LIVE
                </span>
              </div>
              <span style={{ position: 'absolute', left: '50%', bottom: 4, transform: 'translateX(-50%)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7, letterSpacing: '.5em', textIndent: '.5em', color: 'rgba(255,255,255,.42)', lineHeight: 1 }}>HYSN</span>
              <span className="live-dot" style={{ position: 'absolute', right: 11, bottom: 7, width: 4, height: 4, borderRadius: '50%', background: 'var(--green-500)', boxShadow: '0 0 7px var(--green-500)' }}></span>
            </div>
            </div>
          </div>
          <div key={toast} className="toast" style={{ position: 'absolute', left: 0, bottom: '26%', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: '11px 16px 11px 12px', maxWidth: 260 }}>
            <span style={{ width: 36, height: 36, flex: '0 0 auto', borderRadius: '50%', background: 'var(--violet-050)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={tIc} size={17} color="var(--violet-700)" />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink-900)', lineHeight: 1.25 }}>{tTitle}</span>
              <span style={{ fontSize: 12, color: 'var(--ink-500)', lineHeight: 1.3 }}>{tSub}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
