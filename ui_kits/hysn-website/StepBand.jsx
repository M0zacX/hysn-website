const { Icon } = window.HYSNDesignSystem_e25aa3;

/* The process claim gets its own moment: each word stamps in on scroll,
   the arrow slides in last. */
function StepBand() {
  const words = ['Ändern.', 'Speichern.', 'Fertig.'];
  return (
    <section data-screen-label="Prozess" style={{ background: 'var(--surface-footer)', overflow: 'hidden' }}>
      <div data-rv="stage" style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-9) var(--gutter-page)', display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
        {words.map((w, i) => (
          <span key={w} className="step-w">
            <span style={{
              '--rd': `${i * 150}ms`,
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)',
              fontWeight: 'var(--weight-black)', textTransform: 'uppercase', letterSpacing: '-.005em',
              color: i === words.length - 1 ? 'var(--violet-700)' : 'var(--ink-900)',
            }}>{w}</span>
          </span>
        ))}
        <span className="step-a" style={{ '--rd': '560ms', display: 'inline-flex' }}>
          <Icon name="arrow-right" size={34} color="var(--violet-700)" strokeWidth={2.2} />
        </span>
      </div>
    </section>
  );
}
Object.assign(window, { StepBand });
