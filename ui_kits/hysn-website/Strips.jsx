const { SectionHeading, Eyebrow, IconCircle, Switch } = window.HYSNDesignSystem_e25aa3;

/* "Bewegung zieht Aufmerksamkeit an" is HYSN's own pitch — so the Branchen
   row moves like signage content: a slow, continuous rail that pauses on hover. */
const BRANCHEN = [
  ['utensils', 'Restaurants'], ['beef', 'Dönerläden'], ['croissant', 'Bäckereien'],
  ['coffee', 'Cafés'], ['ice-cream-cone', 'Eisdielen'], ['pizza', 'Pizzerien'], ['flame', 'Grillhäuser'],
];

function IdealFuer() {
  const tiles = [...BRANCHEN, ...BRANCHEN];
  return (
    <section id="ideal-fur" data-screen-label="Ideal für" style={{ background: 'var(--white)', padding: 'var(--space-10) 0' }}>
      <div data-rv style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: '0 var(--gutter-page)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-5)', marginBottom: 'var(--space-7)', flexWrap: 'wrap' }}>
        <SectionHeading size="sm">Ideal für</SectionHeading>
        <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--ink-400)' }}>…und jeden Betrieb mit einer Karte an der Wand.</span>
      </div>
      <div data-rv className="hysn-marquee" style={{ '--rd': '120ms', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)' }}>
        <div className="hysn-marquee-track" style={{ display: 'flex', gap: 'var(--space-4)', width: 'max-content', padding: '4px 0' }}>
          {tiles.map(([ic, label], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
              background: 'var(--violet-050)', borderRadius: 'var(--radius-pill)',
              padding: '14px 30px 14px 16px', whiteSpace: 'nowrap',
            }}>
              <IconCircle name={ic} size="md" tone="brand" />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* The CMS toggle is HYSN's most recognisable control (AKTION · 2 für 1 · toggle).
   So the benefits section IS a toggle: flip between the owner's everyday pain
   and what the same day looks like with HYSN. Cards cascade when flipped. */
const VORTEILE = [
  ['usb', 'Keine USB-Sticks mehr', 'USB-Stick bespielen, hintragen, einstecken – für jede Änderung'],
  ['timer', 'Änderungen in Sekunden', 'Stunden warten, bis neue Karten überall hängen'],
  ['printer', 'Keine Druckkosten', 'Neu drucken bei jeder Preisänderung'],
  ['monitor-check', 'Einheitliches Erscheinungsbild', 'Jede Filiale sieht anders aus'],
  ['clock', 'Zeit sparen', 'Abende gehen für die Karte drauf'],
  ['star', 'Professioneller Auftritt', 'Zettel, Klebeband und Provisorien'],
];

function VorteileSection() {
  const [mit, setMit] = React.useState(true);
  return (
    <section id="vorteile" data-screen-label="Vorteile" style={{ background: 'var(--surface-footer)' }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-10) var(--gutter-page)' }}>
        <div data-rv style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-6)', marginBottom: 'var(--space-7)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Eyebrow>Ihre Vorteile auf einen Blick</Eyebrow>
            <SectionHeading size="sm">{mit ? 'Mit HYSN.' : 'Ohne HYSN?'}</SectionHeading>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', background: 'var(--white)', borderRadius: 'var(--radius-pill)', padding: '10px 20px', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: mit ? 'var(--ink-300)' : 'var(--ink-800)', transition: 'color var(--duration-base) var(--ease-standard)' }}>Ohne</span>
            <Switch checked={mit} onChange={setMit} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12.5, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: mit ? 'var(--violet-700)' : 'var(--ink-300)', transition: 'color var(--duration-base) var(--ease-standard)' }}>Mit HYSN</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--space-4)' }} data-grid="vorteile">
          {VORTEILE.map(([ic, gut, schlecht], i) => (
            <div key={gut} data-rv style={{ '--rd': `${i * 60}ms`, display: 'flex' }}>
              <div style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                background: mit ? 'var(--white)' : 'transparent',
                border: mit ? '1px solid transparent' : '1px dashed var(--ink-300)',
                borderRadius: 'var(--radius-lg)', padding: 'var(--space-4) var(--space-5)',
                boxShadow: mit ? 'var(--shadow-sm)' : 'none',
                transition: `background var(--duration-slow) var(--ease-standard) ${i * 45}ms, box-shadow var(--duration-slow) var(--ease-standard) ${i * 45}ms, border-color var(--duration-slow) var(--ease-standard) ${i * 45}ms`,
              }}>
                <IconCircle name={mit ? ic : 'x'} size="sm" tone={mit ? 'brand' : 'outline'} style={{ transition: `background var(--duration-slow) var(--ease-standard) ${i * 45}ms` }} />
                <span style={{
                  fontFamily: mit ? 'var(--font-display)' : 'var(--font-body)',
                  fontWeight: mit ? 700 : 400,
                  fontSize: mit ? 13 : 'var(--text-body-sm)',
                  letterSpacing: mit ? 'var(--tracking-label)' : 0,
                  textTransform: mit ? 'uppercase' : 'none',
                  lineHeight: 1.4,
                  color: mit ? 'var(--ink-900)' : 'var(--ink-400)',
                  transition: `color var(--duration-slow) var(--ease-standard) ${i * 45}ms`,
                }}>{mit ? gut : schlecht}</span>
              </div>
            </div>
          ))}
        </div>
        <p data-rv style={{ '--rd': '380ms', margin: 'var(--space-5) 0 0', fontSize: 'var(--text-caption)', color: 'var(--ink-400)' }}>
          Der Schalter ist derselbe wie im HYSN CMS – eine Aktion einschalten dauert genau so lang.
        </p>
      </div>
    </section>
  );
}

function Strips() {
  return (<><IdealFuer /><VorteileSection /></>);
}
Object.assign(window, { Strips });
