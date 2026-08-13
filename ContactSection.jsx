const { SectionHeading, Button, Icon, Card } = window.HYSNDesignSystem_e25aa3;

function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true); setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.target) });
      const data = await res.json();
      if (data.success) setSent(true);
      else setError('Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an info@hysn.de.');
    } catch (err) {
      setError('Netzwerkfehler. Bitte versuchen Sie es erneut oder schreiben Sie an info@hysn.de.');
    } finally {
      setSending(false);
    }
  };
  const field = {
    width: '100%', boxSizing: 'border-box', padding: '12px 14px',
    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--ink-800)',
    background: 'var(--white)',
  };
  return (
    <section id="kontakt" data-screen-label="Kontakt" style={{ background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: 'var(--space-11) var(--gutter-page)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'center' }} data-grid="contact">
        <div data-rv style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <SectionHeading size="sm" accent="ohne Druckkosten.">Ändern. Speichern. Fertig –</SectionHeading>
          <p style={{ margin: 0, fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-500)', maxWidth: '44ch' }}>
            Wir beraten Sie zu Grösse, Montage und Software – und melden uns am selben Werktag zurück.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
            {[['Beratung anfragen', 'Formular oder WhatsApp – kostenlos, ca. 15 Minuten.'], ['Wir übernehmen alles', 'Montage, Installation und Ihr erster Karten-Content.'], ['Board läuft', 'Änderungen machen Sie ab jetzt in Sekunden selbst.']].map(([t, sub], i) => (
              <div key={t} className="srow" style={{ '--rd': `${180 + i * 110}ms`, display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, flex: '0 0 auto', borderRadius: '50%', background: 'var(--violet-100)', color: 'var(--violet-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 13 }}>{i + 1}</span>
                <span style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', color: 'var(--ink-700)' }}><b style={{ color: 'var(--ink-900)' }}>{t}.</b> {sub}</span>
              </div>
            ))}
          </div>
          <div className="srow" data-row="wa" style={{ '--rd': '520ms', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-2)' }}>
            <Button size="md" variant="secondary" as="a" href="https://wa.me/4915144300333?text=Hallo%20HYSN%2C%20bitte%20senden%20Sie%20mir%20die%20Preis%C3%BCbersicht." iconLeft={<Icon name="message-circle" size={17} />}>Preisübersicht per WhatsApp</Button>
          </div>
          <div className="srow" style={{ '--rd': '600ms', display: 'flex', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
            {[['mail', 'info@hysn.de'], ['phone', '+49 151 44300 333']].map(([ic, t]) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--ink-600)' }}>
                <Icon name={ic} size={17} color="var(--violet-700)" />{t}
              </span>
            ))}
          </div>
        </div>

        <div data-rv="r" style={{ '--rd': '150ms' }}>
          <Card tone="tint" padding="lg" radius="lg">
            {sent ? (
              <div className="pop" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-8) 0', textAlign: 'center' }}>
                <Icon name="check-circle-2" size={38} color="var(--green-500)" strokeWidth={1.7} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-h3)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)' }}>Anfrage gesendet</div>
                <p style={{ margin: 0, fontSize: 'var(--text-body-sm)', color: 'var(--ink-500)', maxWidth: '32ch', lineHeight: 'var(--leading-body)' }}>
                  Wir melden uns am selben Werktag bei Ihnen zurück.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <input type="hidden" name="access_key" value="4d673cdc-5b50-4247-bc90-da862c723efd" />
                <input type="hidden" name="subject" value="Neue Beratungsanfrage – HYSN Website" />
                <input type="hidden" name="from_name" value="HYSN Website" />
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                <input className="fld" style={field} name="Betrieb" placeholder="Betrieb" required />
                <input className="fld" style={field} name="Name" placeholder="Ihr Name" required />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <input className="fld" style={field} name="E-Mail" type="email" placeholder="E-Mail" required />
                  <input className="fld" style={field} name="Telefon" type="tel" placeholder="Telefon" required />
                </div>
                <textarea className="fld" style={{ ...field, minHeight: 96, resize: 'vertical' }} name="Nachricht" placeholder="Wie viele Bildschirme benötigen Sie?" />
                {promo ? (
                  <div className="pop" style={{ position: 'relative' }}>
                    <Icon name="tag" size={16} color="var(--violet-700)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <input className="fld" style={{ ...field, paddingLeft: 40, textTransform: 'uppercase', letterSpacing: '.06em' }} name="Aktionscode" placeholder="Aktionscode" autoFocus />
                  </div>
                ) : (
                  <button type="button" onClick={() => setPromo(true)} style={{ all: 'unset', cursor: 'pointer', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--violet-700)' }}>
                    <Icon name="tag" size={15} />Sie haben einen Aktionscode?
                  </button>
                )}
                {error && <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--red-600)' }}>{error}</span>}
                <Button size="md" fullWidth type="submit" disabled={sending}>{sending ? 'Wird gesendet…' : 'Beratung anfragen'}</Button>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--ink-400)' }}>
                  Alle Preise zzgl. MwSt. Montage im Umkreis von 50 km inklusive.
                </span>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ContactSection });
