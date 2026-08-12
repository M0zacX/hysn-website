const { SectionHeading, Eyebrow, Button, Icon } = window.HYSNDesignSystem_e25aa3;

/* Portrait reel (9:16). Poster only for now — when the video is uploaded,
   swap the <img> for <video poster={POSTER} src="..." controls playsInline>. */
const POSTER = '../../assets/imagery/site/showroom-reel-poster.png';

function ReelSection() {
  return (
    <section id="showroom" data-screen-label="Showroom" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-10) var(--gutter-page)', display: 'grid', gridTemplateColumns: 'minmax(0,420px) minmax(0,1fr)', gap: 'var(--space-9)', alignItems: 'center' }} data-grid="reel">
        <div data-rv="z" className="reel" style={{ position: 'relative', maxWidth: 360, width: '100%', justifySelf: 'center', aspectRatio: '9/16', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-screen)', background: 'var(--ink-900)', cursor: 'pointer' }}>
          <img src={POSTER} alt="Rundgang durch den HYSN Showroom: Menüboards an der Wand, Bar Display in der Hand" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(17,17,17,.14)' }}>
            <span className="play" style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
              <Icon name="play" size={26} color="var(--violet-700)" strokeWidth={2.2} style={{ marginLeft: 3 }} />
            </span>
          </span>
        </div>
        <div data-rv style={{ '--rd': '120ms', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Eyebrow>Ansprechpartner vor Ort</Eyebrow>
          <SectionHeading size="sm" accent="im Einsatz.">Sehen Sie die Boards</SectionHeading>
          <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-500)', maxWidth: '46ch' }}>
            Ein Rundgang durch unseren Showroom: Menüboards, Bar Displays und die Software dahinter – gezeigt von den Menschen, die auch bei Ihnen montieren.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            {[['monitor', 'Alle Grössen live'], ['hand', 'Bar Display in der Hand'], ['map-pin', 'Showroom-Besuch möglich']].map(([ic, t]) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--ink-600)' }}>
                <Icon name={ic} size={16} color="var(--violet-700)" />{t}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <Button size="md" as="a" href="#kontakt" className="cta-r" iconRight={<Icon name="arrow-right" size={17} />}>Beratung anfragen</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ReelSection });
