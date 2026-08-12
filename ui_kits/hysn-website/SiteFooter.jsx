const { Wordmark, Icon } = window.HYSNDesignSystem_e25aa3;

const NAV = [['Aktion', '#aktion'], ['Software', '#software'], ['Warum HYSN', '#warum'], ['Vorteile', '#vorteile']];
const CONTACT = [
  ['phone', '+49 151 44300 333', 'tel:+4915144300333'],
  ['mail', 'info@hysn.de', 'mailto:info@hysn.de'],
];

function SiteFooter() {
  return (
    <footer data-screen-label="Footer" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(52% 70% at 12% 0%, rgba(123,75,196,.22) 0%, rgba(123,75,196,0) 62%), linear-gradient(180deg,#14101b 0%,#0b0a0e 70%)', color: 'var(--white)' }}>
      <style>{`.f-lnk{color:rgba(255,255,255,.66);text-decoration:none;transition:color .25s var(--ease-out)}.f-lnk:hover{color:var(--white)}.f-cta{color:var(--amber-500);text-decoration:none;display:inline-flex;align-items:center;gap:8px}.f-cta:hover{color:var(--amber-400,#ffb733)}`}</style>
      <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 3, background: 'var(--gradient-brand)' }}></div>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-9) var(--gutter-page) var(--space-5)' }}>
        <div data-rv style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-8)', alignItems: 'start' }} data-grid="footer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
            <Wordmark variant="white" height={30} base="../.." />
            <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'rgba(255,255,255,.6)', maxWidth: '34ch' }}>Digital Signage Menüboards für die Gastronomie. Ändern. Speichern. Fertig.</p>
            <a className="f-cta" href="#aktion" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-body-sm)', letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 4 }}>
              <span className="live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--amber-500)', boxShadow: '0 0 8px var(--amber-500)' }}></span>
              Wow-Aktion läuft bis 31.08.2026
              <Icon name="arrow-right" size={15} strokeWidth={2.4} />
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)' }}>Navigation</span>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map(([l, href]) => <a key={href} className="f-lnk" href={href} style={{ fontSize: 'var(--text-body)' }}>{l}</a>)}
            </nav>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)' }}>Kontakt</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CONTACT.map(([icon, label, href]) => (
                <a key={icon} className="f-lnk" href={href} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--text-body)' }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                    <Icon name={icon} size={16} color="var(--violet-300)" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 'var(--space-8)', paddingTop: 'var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'rgba(255,255,255,.42)' }}>© 2026 HYSN · Alle Rechte vorbehalten</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'rgba(255,255,255,.42)' }}>Alle Preise zzgl. MwSt. · Montage im Umkreis von 50 km inklusive</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
