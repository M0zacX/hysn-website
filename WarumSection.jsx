const { SectionHeading, Eyebrow, Icon, Badge, Wordmark } = window.HYSNDesignSystem_e25aa3;

const ROWS = [
  { pro: 'Dauerbetrieb 24 Std/Tag', con: 'Kurzzeitbetrieb: 4–8 Std/Tag' },
  { pro: 'Brandschutzvorgaben erfüllt, Zulassung garantiert', con: 'Brandschutzvorgabe nicht erfüllt, Sicherheitsrisiko' },
  { pro: 'hohe Leuchtstärke', con: 'geringe Leuchtstärke' },
  { pro: 'Einbrennschutz', con: 'kein Einbrennschutz' },
  { pro: '36 Monate Garantie ab Werk, verlängerbar auf 60 Monate', con: 'Garantieverlust (Laufzeiten werden ausgelesen)' },
  { pro: 'Fernwartung möglich', con: 'Keine Fernwartung möglich' },
  { pro: 'Quer- und Hochformat', con: 'Ausschließlich Querformat' },
  { pro: 'High Brightness', con: 'Eingeschränkte Helligkeit' },
  { pro: 'Ansprechpartner vor Ort', con: 'Kein Ansprechpartner vor Ort' },
];

function Mark({ ok, d }) {
  return (
    <span className="mark" style={{
      '--rd': d, width: 22, height: 22, flex: '0 0 auto', borderRadius: '50%', marginTop: 1,
      background: ok ? 'var(--green-100)' : 'var(--ink-100)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon name={ok ? 'check' : 'x'} size={13} strokeWidth={2.6} color={ok ? 'var(--green-600)' : 'var(--ink-400)'} />
    </span>
  );
}

/* Modern two-column comparison: the HYSN column is an elevated white "winner"
   card with a violet crown edge; the LCD column recedes on the lavender wash.
   Check marks pop in row by row as the cards scroll into view. */
function ComparisonModern() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.08fr) minmax(0,1fr)', gap: 'var(--space-5)', alignItems: 'stretch' }} data-grid="vergleich">
      <div data-rv style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 6, background: 'var(--gradient-brand)' }}></div>
        <div style={{ padding: 'var(--space-5) var(--space-6) var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
            <Wordmark variant="gradient" height={16} base="" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-h4)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--ink-900)' }}>Digital Menüboard</span>
          </div>
          <Badge tone="brand" size="sm">Empfohlen</Badge>
        </div>
        <div style={{ padding: '0 var(--space-5) var(--space-6)', display: 'flex', flexDirection: 'column' }}>
          {ROWS.map((r, i) => (
            <div key={i} className="cmp-row" style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', padding: '11px 10px', borderTop: i ? '1px solid var(--violet-050)' : 'none' }}>
              <Mark ok d={`${160 + i * 55}ms`} />
              <span style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-tight)', color: 'var(--ink-800)', fontWeight: 500 }}>{r.pro}</span>
            </div>
          ))}
        </div>
      </div>

      <div data-rv style={{ '--rd': '140ms', background: 'transparent', border: '1px solid var(--violet-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: 'var(--space-6) var(--space-6) var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-h4)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--ink-500)' }}>LCD – TV</span>
          <Badge tone="outline" size="sm" style={{ color: 'var(--ink-400)', boxShadow: 'inset 0 0 0 2px var(--ink-200)' }}>Consumer-Gerät</Badge>
        </div>
        <div style={{ padding: '0 var(--space-5) var(--space-6)', display: 'flex', flexDirection: 'column' }}>
          {ROWS.map((r, i) => (
            <div key={i} className="cmp-row" style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', padding: '11px 10px', borderTop: i ? '1px solid var(--violet-100)' : 'none' }}>
              <Mark ok={false} d={`${240 + i * 55}ms`} />
              <span style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-tight)', color: 'var(--ink-400)' }}>{r.con}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SIZES = [
  ['size-32.png', '32”', 'Digitales Menüboard 32 Zoll', .62],
  ['size-55.png', '55”', 'Digitales Menüboard 55 Zoll', .84],
  ['size-65.png', '65”', 'Digitales Menüboard 65 Zoll', 1],
];

function WarumSection() {
  return (
    <section id="warum" data-screen-label="Warum HYSN" style={{ background: 'var(--surface-footer)' }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-10) var(--gutter-page)' }}>
        <div data-rv style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', maxWidth: '56ch' }}>
          <Eyebrow>Der Unterschied zum Fernseher</Eyebrow>
          <SectionHeading size="sm">Warum HYSN Digital Menüboards?</SectionHeading>
        </div>
        <ComparisonModern />
        <div style={{ marginTop: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div data-rv><SectionHeading size="xs" as="h3">Weitere Grössen auf Anfrage</SectionHeading></div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 'var(--space-8)' }} data-grid="sizes">
            {SIZES.map(([src, label, alt, scale], i) => (
              <div key={label} data-rv style={{ '--rd': `${i * 100}ms`, width: `${(scale / 2.46 * 100).toFixed(1)}%`, minWidth: 0 }}>
                <figure className="hvc" style={{ margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <div style={{ width: '100%', position: 'relative', background: 'linear-gradient(175deg,#3d3d44,#17171b 55%,#0b0b0e)', borderRadius: 9, padding: '4px 4px 13px', boxShadow: '0 30px 44px -22px rgba(0,0,0,.45), 0 10px 18px -12px rgba(0,0,0,.35)' }}>
                    <span style={{ position: 'absolute', inset: '0 0 auto 0', height: 1, borderRadius: '9px 9px 0 0', background: 'rgba(255,255,255,.22)' }}></span>
                    <div style={{ position: 'relative', borderRadius: 5, overflow: 'hidden', background: '#000' }}>
                      <img src={'/assets/imagery/site/' + src} alt={alt} style={{ width: '100%', display: 'block' }} />
                      <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(112deg,rgba(255,255,255,.13) 0%,rgba(255,255,255,.05) 26%,rgba(255,255,255,0) 44%)', pointerEvents: 'none' }}></span>
                    </div>
                    <span style={{ position: 'absolute', left: '50%', bottom: 4, transform: 'translateX(-50%)', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 6, letterSpacing: '.22em', color: '#6b6b74', lineHeight: 1 }}>HYSN</span>
                    <span style={{ position: 'absolute', right: 8, bottom: 5, width: 3.5, height: 3.5, borderRadius: '50%', background: 'var(--green-500)', boxShadow: '0 0 5px var(--green-500)' }}></span>
                  </div>
                  <figcaption><Badge tone="subtle" size="sm">{label}</Badge></figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { WarumSection });
