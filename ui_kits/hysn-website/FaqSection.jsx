const { Eyebrow, SectionHeading, Icon, Button } = window.HYSNDesignSystem_e25aa3;

const QA = [
  ['Was ist im Aktionspreis von 2799,99€ enthalten?',
   'Drei 43-Zoll Digital Signage Menüboards inklusive Wandhalterung, dazu das komplette Leistungspaket: Content Kreation (wir gestalten Ihre Karte), Software-Installation mit Schulung, Montage im Umkreis von 50 km und 5 Jahre Garantie. Gratis obendrauf: ein Bar Display im Wert von 499€ und 3 Monate Software-Abo im Wert von 450€. Alle Preise zzgl. MwSt.'],
  ['Was kostet die Software nach den 3 Gratis-Monaten?',
   'Danach läuft das Software-Abo zu 150€ pro Monat weiter. Damit sind Updates, Fernwartung und der Ansprechpartner vor Ort abgedeckt — die Details klären wir im Beratungsgespräch.'],
  ['Kann ich Preise und Inhalte selbst ändern?',
   'Ja — Ändern. Speichern. Fertig. Preise, Gerichte und Aktionen passen Sie selbst in der Software an, ohne Techniker und ohne Wartezeit. Die Schulung dafür ist in der Installation enthalten.'],
  ['Ist die Montage wirklich inklusive?',
   'Ja, im Umkreis von 50 km ist die Montage im Aktionspreis enthalten. Liegt Ihr Standort weiter entfernt, erstellen wir Ihnen ein Angebot für die Anfahrt.'],
  ['Was passiert, wenn ein Board nicht läuft?',
   'Dafür steht die 5-Jahre-Garantie: Läuft nicht? Wir tauschen. Vieles lösen wir vorab per Fernwartung, ohne dass jemand vorbeikommen muss.'],
  ['Warum nicht einfach ein normaler Fernseher?',
   'Consumer-TVs sind für 4–8 Stunden Betrieb gebaut — Menüboards laufen 24 Stunden im Dauerbetrieb, mit hoher Leuchtstärke, Einbrennschutz und erfüllten Brandschutzvorgaben. Der volle Vergleich steht unter „Warum HYSN“.'],
  ['Gibt es andere Größen als 43 Zoll?',
   'Ja — 32, 55 und 65 Zoll sind direkt verfügbar, weitere Größen auf Anfrage. Alle Boards laufen wahlweise im Quer- oder Hochformat.'],
  ['Wie lange gilt die Aktion?',
   'Die Wow-Aktion gilt bis zum 31.08.2026. Danach gelten wieder die regulären Preise — der Countdown oben auf der Seite zählt mit.'],
];

function FaqItem({ q, a, open, onToggle, i }) {
  return (
    <div data-rv style={{ '--rd': `${i * 60}ms`, background: open ? 'var(--white)' : 'transparent', border: '1px solid', borderColor: open ? 'var(--violet-200)' : 'var(--violet-100)', borderRadius: 'var(--radius-lg)', boxShadow: open ? 'var(--shadow-md)' : 'none', transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out), box-shadow .3s var(--ease-out)', overflow: 'hidden' }}>
      <button type="button" onClick={onToggle} aria-expanded={open} style={{ all: 'unset', boxSizing: 'border-box', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', width: '100%', padding: '18px 22px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-tight)', color: open ? 'var(--violet-700)' : 'var(--ink-900)', transition: 'color .3s var(--ease-out)' }}>
        <span>{q}</span>
        <span aria-hidden="true" style={{ width: 30, height: 30, flex: '0 0 auto', borderRadius: '50%', background: open ? 'var(--violet-700)' : 'var(--violet-050)', color: open ? 'var(--white)' : 'var(--violet-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .35s var(--ease-out), background .3s var(--ease-out), color .3s var(--ease-out)' }}>
          <Icon name="chevron-down" size={17} strokeWidth={2.4} />
        </span>
      </button>
      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows .38s var(--ease-out)' }}>
        <div style={{ overflow: 'hidden' }}>
          <p style={{ margin: 0, padding: '0 56px 20px 22px', fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-600)' }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" data-screen-label="FAQ" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-10) var(--gutter-page)', display: 'grid', gridTemplateColumns: 'minmax(0,.72fr) minmax(0,1fr)', gap: 'var(--space-9)', alignItems: 'start' }} data-grid="faq">
        <div data-rv style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', position: 'sticky', top: 110 }}>
          <Eyebrow>Häufige Fragen</Eyebrow>
          <SectionHeading size="sm">Noch Fragen zur Aktion?</SectionHeading>
          <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-600)', maxWidth: '38ch' }}>Hier sind die Antworten, die wir am häufigsten geben. Alles andere klären wir am schnellsten persönlich.</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-2)' }}>
            <Button as="a" href="#kontakt" iconRight={<Icon name="arrow-right" size={17} />}>Beratung anfragen</Button>
            <Button as="a" href="tel:+4915144300333" variant="secondary" iconLeft={<Icon name="phone" size={17} />}>+49 151 44300 333</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {QA.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { FaqSection });
