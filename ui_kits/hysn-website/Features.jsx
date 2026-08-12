const { FeatureCard, SectionHeading, Eyebrow } = window.HYSNDesignSystem_e25aa3;
const { FM_CSS, MenuEditMedia, DaypartsMedia, VideoMedia, CalendarMedia, DevicesMedia, StandorteMedia } = window;

const FT_CSS = `
[data-ftcell]:hover{background:var(--violet-025)!important}
[data-ftcell]:hover [data-num]{color:var(--violet-700)!important}
[data-ftcell]:hover [data-num] span{background:var(--violet-700)!important}
`;

const ITEMS = [
  ['Speisekarte ändern', 'Preise, Gerichte oder Bilder jederzeit selbst anpassen.', MenuEditMedia],
  ['Automatische Tageszeiten', 'Frühstück, Mittag- und Abendkarte wechseln automatisch.', DaypartsMedia],
  ['Videos & Animationen', 'Videos, GIFs und moderne Animationen sorgen für mehr Aufmerksamkeit.', VideoMedia],
  ['Aktionen planen', 'Planen Sie Angebote heute für nächste Woche oder den ganzen Monat.', CalendarMedia],
  ['Alles online steuern', 'Änderungen von überall aus – Laptop, Tablet oder Smartphone.', DevicesMedia],
  ['Mehrere Standorte verwalten', 'Alle Filialen zentral verwalten oder jede einzeln steuern.', StandorteMedia],
];

function Features() {
  return (
    <section id="software" data-screen-label="Software" style={{ background: 'var(--white)' }}>
      <style>{FM_CSS + FT_CSS}</style>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-11) var(--gutter-page)' }}>
        <div data-rv style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', maxWidth: '52ch' }}>
          <Eyebrow>HYSN CMS</Eyebrow>
          <SectionHeading size="sm">Was Sie selbst steuern</SectionHeading>
        </div>
        <div data-rv style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 1, background: 'var(--border-default)' }} data-grid="features">
            {ITEMS.map(([title, body, Media], i) => (
              <FeatureCard key={title} n={i + 1} title={title} media={<Media />}>{body}</FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Features });
