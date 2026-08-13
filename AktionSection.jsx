const { Eyebrow, PromoSeal, Button, Icon } = window.HYSNDesignSystem_e25aa3;

const DEADLINE = new Date('2026-08-31T23:59:59+02:00');

function useCountdown() {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const ms = Math.max(0, DEADLINE - now);
  return { d: Math.floor(ms / 864e5), h: Math.floor(ms / 36e5) % 24, m: Math.floor(ms / 6e4) % 60, s: Math.floor(ms / 1e3) % 60, over: ms === 0 };
}

const PAKET = [
  ['palette', 'Content Kreation', 'Wir gestalten Ihre komplette Karte'],
  ['download', 'Software Installation', 'Einrichtung & Schulung inklusive'],
  ['wrench', 'Montage*', 'Im Umkreis von 50 km inklusive'],
  ['shield-check', '5 Jahre Garantie', 'Läuft nicht? Wir tauschen.'],
];

function ScreenPanel({ video, poster, alt }) {
  const media = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' };
  return (
    <div style={{ position: 'relative', flex: '1 1 0', background: '#26262b', borderRadius: 2, padding: 3, boxShadow: '0 40px 70px -26px rgba(0,0,0,.66)' }}>
      <div style={{ position: 'relative', borderRadius: 0, overflow: 'hidden', background: 'var(--ink-900)', aspectRatio: '9/16' }}>
        <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-label={alt} style={media}>
          <source src={video + '.mp4'} type="video/mp4" />
          <source src={video + '.webm'} type="video/webm" />
        </video>
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(112deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.03) 24%,rgba(255,255,255,0) 42%)', pointerEvents: 'none' }}></span>
        <span className="glare"></span>
      </div>
    </div>
  );
}

function OfferBoard() {
  return (
    <div style={{ display: 'flex', gap: 'clamp(5px,0.6vw,9px)', alignItems: 'stretch' }}>
      <ScreenPanel video="/assets/imagery/site/board-pizza" poster="/assets/imagery/site/board-pizza.png" alt="Pizza- und Dessert-Menü auf einem vertikalen HYSN Menüboard" />
      <ScreenPanel video="/assets/imagery/site/board-drinks" poster="/assets/imagery/site/board-drinks.png" alt="Drinks-Menü auf einem vertikalen HYSN Menüboard" />
      <ScreenPanel video="/assets/imagery/site/board-kicherbowl" poster="/assets/imagery/site/board-kicherbowl.png" alt="Kicher-Bowl-Kampagne auf einem vertikalen HYSN Menüboard" />
    </div>
  );
}

function BonusCard({ icon, img, imgAlt, kicker, title, value }) {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 18, padding: 'clamp(9px,1.05vw,15px) clamp(12px,1.5vw,22px)', display: 'flex', alignItems: 'center', gap: 'clamp(9px,1.1vw,16px)', boxShadow: '0 20px 44px -22px rgba(0,0,0,.5)', whiteSpace: 'nowrap' }}>
      {img ? (
        <img src={img} alt={imgAlt || ''} style={{ width: 'clamp(170px,18vw,260px)', height: 'auto', flex: '0 0 auto' }} />
      ) : (
      <span style={{ width: 'clamp(38px,3.9vw,56px)', height: 'clamp(38px,3.9vw,56px)', borderRadius: 14, background: 'var(--violet-050)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
        <Icon name={icon} size={30} color="var(--violet-700)" strokeWidth={1.7} style={{ width: 'clamp(20px,2.1vw,30px)', height: 'clamp(20px,2.1vw,30px)' }} />
      </span>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(11px,1.05vw,15px)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--violet-700)' }}>{kicker}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(14px,1.32vw,19px)', color: 'var(--ink-900)' }}>{title}</span>
        <span style={{ fontSize: 'clamp(11.5px,1vw,14.5px)', color: 'var(--ink-500)' }}>im Wert von <b style={{ color: 'var(--violet-700)' }}>{value}</b></span>
      </div>
    </div>
  );
}

function QuickForm() {
  const [sent, setSent] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const fld = { flex: '1 1 180px', minWidth: 0, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.16)', borderRadius: 999, padding: '17px 22px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', color: 'var(--white)', outline: 'none' };
  if (sent) return (
    <div className="pop" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0' }}>
      <Icon name="check-circle-2" size={26} color="var(--green-500)" strokeWidth={1.7} />
      <span style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,.85)' }}><b style={{ color: 'var(--white)' }}>Anfrage erhalten!</b> Wir melden uns innerhalb von 24 Stunden bei Ihnen.</span>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', flex: '1 1 auto' }}>
      <input className="fld-dark" style={fld} placeholder="Betrieb" required />
      <input className="fld-dark" style={fld} placeholder="Ihr Name" required />
      <input className="fld-dark" style={fld} type="tel" placeholder="Telefon oder E-Mail" required />
      {promo && (
        <div className="pop" style={{ position: 'relative', flex: '1 1 180px', minWidth: 0, display: 'flex' }}>
          <Icon name="tag" size={16} color="var(--violet-300)" style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <input className="fld-dark" style={{ ...fld, flex: '1 1 auto', paddingLeft: 46, textTransform: 'uppercase', letterSpacing: '.06em' }} placeholder="Aktionscode" autoFocus />
        </div>
      )}
      <Button size="lg" variant="onDark" type="submit" className="cta-r" style={{ padding: '20px 34px', flex: '0 0 auto' }} iconRight={<Icon name="arrow-right" size={19} />}>Aktion sichern</Button>
      {!promo && (
        <button type="button" onClick={() => setPromo(true)} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--violet-300)', flex: '0 0 auto' }}>
          <Icon name="tag" size={15} />Sie haben einen Aktionscode?
        </button>
      )}
    </form>
  );
}

function AktionSection() {
  const c = useCountdown();
  return (
    <section id="aktion" data-screen-label="Aktion" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(48% 52% at 86% -4%, rgba(123,75,196,.28) 0%, rgba(123,75,196,0) 60%), linear-gradient(180deg,#14101b 0%,#0d0b10 55%)', color: 'var(--white)' }}>
      <div style={{ maxWidth: 'calc(var(--max-width-content) + 320px)', margin: '0 auto', position: 'relative', padding: 'calc(var(--header-h, 87px) + 16px) var(--gutter-page) var(--space-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.88fr) minmax(0,1.12fr)', gap: 'var(--space-7)', alignItems: 'center', position: 'relative' }} data-grid="aktion">
          <div aria-hidden="true" style={{ position: 'absolute', right: '-14%', top: '-18%', width: '68%', height: '130%', background: 'radial-gradient(50% 50% at 50% 46%, rgba(255,166,0,.13) 0%, rgba(123,75,196,.12) 42%, rgba(0,0,0,0) 72%)', pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div data-rv><Eyebrow tone="onDark">3x 43 Zoll Menüboards</Eyebrow></div>
            <h1 data-rv style={{ '--rd': '90ms', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px,2.7vw,38px)', lineHeight: 1.08, letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', textWrap: 'balance', color: 'var(--white)' }}>
              Unsere Wow – <span style={{ color: 'var(--violet-300)' }}>das muss ich haben Aktion!</span>
            </h1>
            <p data-rv style={{ '--rd': '170ms', margin: 0, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: 'rgba(255,255,255,.72)', maxWidth: '42ch' }}>
              3x Digital Signage Menüboards 43” inkl. Wandhalterung und Leistungspaket*.
            </p>
            <div data-rv data-count="" style={{ '--rd': '230ms', display: 'flex', gap: 10, marginTop: 'var(--space-2)' }}>
              {[[c.d, 'Tage'], [c.h, 'Std'], [c.m, 'Min'], [c.s, 'Sek']].map(([v, l]) => (
                <span key={l} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.13)', borderRadius: 10, padding: '11px 8px', textAlign: 'center', minWidth: 72, overflow: 'hidden' }}>
                  <span key={String(v)} className="tick" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, color: 'var(--amber-500)', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{String(v).padStart(2, '0')}</span>
                  <span style={{ display: 'block', fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginTop: 3 }}>{l}</span>
                </span>
              ))}
            </div>
            <div data-rv style={{ '--rd': '260ms', fontSize: 'var(--text-body)', color: 'rgba(255,255,255,.75)' }}>Aktion endet am <b style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--white)' }}>31.08.2026</b></div>
          </div>
          <div data-rv="z" data-el="boards" style={{ '--rd': '200ms', position: 'relative', marginTop: 8, maxWidth: 560, width: '100%', justifySelf: 'end' }}>
            <div style={{ animation: 'drift 8s ease-in-out infinite' }}><OfferBoard /></div>
            <div data-el="seal" style={{ position: 'absolute', left: -80, top: '40%', zIndex: 3, transform: 'rotate(-5deg)' }}>
              <PromoSeal label="Gesamtwert" value="949€" sub="gratis" size={156} style={{ background: 'var(--gradient-brand)', boxShadow: '0 22px 44px -16px rgba(0,0,0,.6)' }} />
            </div>
          </div>
        </div>
        <div data-rv data-row="bonus" style={{ '--rd': '120ms', display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,32px)', flexWrap: 'wrap', marginTop: 'var(--space-6)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(34px,3.8vw,54px)', lineHeight: 1, color: 'var(--white)', letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>2799,99€</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginTop: 6 }}>Statt <s>3547,99€</s></div>
          </div>
          <span aria-hidden="true" style={{ display: 'inline-flex', color: 'var(--violet-400)', flex: '0 0 auto' }}>
            <Icon name="chevron-right" size={34} strokeWidth={2.6} style={{ marginRight: -17, width: 'clamp(24px,2.4vw,34px)', height: 'clamp(24px,2.4vw,34px)' }} />
            <Icon name="chevron-right" size={34} strokeWidth={2.6} style={{ marginRight: -17, opacity: .65, width: 'clamp(24px,2.4vw,34px)', height: 'clamp(24px,2.4vw,34px)' }} />
            <Icon name="chevron-right" size={34} strokeWidth={2.6} style={{ opacity: .35, width: 'clamp(24px,2.4vw,34px)', height: 'clamp(24px,2.4vw,34px)' }} />
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,1.25vw,18px)' }}>
            <BonusCard img="/assets/bar-display.png" imgAlt="Bar Display mit Getränke-Motiven" kicker="+ Gratis" title="1x Bar Display" value="499€" />
            <span aria-hidden="true" style={{ width: 'clamp(28px,2.8vw,40px)', height: 'clamp(28px,2.8vw,40px)', borderRadius: '50%', background: 'var(--violet-700)', color: 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(16px,1.55vw,22px)', flex: '0 0 auto' }}>+</span>
            <BonusCard icon="monitor-play" kicker="+ 3 Monate" title="Software-Abo gratis" value="450€" />
          </div>
        </div>
        <div data-rv data-row="cta" style={{ '--rd': '200ms', marginTop: 'var(--space-6)' }}>
          <QuickForm />
        </div>
        <div data-rv style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap', margin: 'var(--space-7) 0 var(--space-4)' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-h4)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', color: 'var(--white)' }}>Leistungspaket</h2>
          <span style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(255,255,255,.55)' }}>Alles im Aktionspreis enthalten.</span>
        </div>
        <div data-rv style={{ '--rd': '120ms', display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 'var(--space-6)' }} data-grid="paket">
          {PAKET.map(([ic, title, sub]) => (
            <div key={title} style={{ borderTop: '1px solid rgba(255,255,255,.16)', paddingTop: 'var(--space-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name={ic} size={18} color="var(--violet-300)" strokeWidth={1.6} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16.5, lineHeight: 'var(--leading-tight)', color: 'var(--white)' }}>{title}</div>
              </div>
              <div style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', color: 'rgba(255,255,255,.6)', marginTop: 8 }}>{sub}</div>
            </div>
          ))}
        </div>
        <p data-rv style={{ margin: 'var(--space-6) 0 0', fontSize: 'var(--text-caption)', color: 'rgba(255,255,255,.45)' }}>* Montage im Umkreis von 50km inklusive. Angebot gültig bis 31.08.2026. Alle Preise zzgl. MwSt.</p>
      </div>
    </section>
  );
}
Object.assign(window, { AktionSection });
