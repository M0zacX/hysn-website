const { Wordmark, Button, Icon } = window.HYSNDesignSystem_e25aa3;

const LINKS = [['Aktion', '#aktion'], ['Software', '#software'], ['Warum HYSN', '#warum'], ['Vorteile', '#vorteile'], ['FAQ', '#faq']];

function SiteHeader() {
  const bar = React.useRef(null);
  const head = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = head.current; if (!el) return;
    const fit = () => { el.style.marginBottom = -el.offsetHeight + 'px'; document.documentElement.style.setProperty('--header-h', el.offsetHeight + 'px'); };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    window.addEventListener('resize', fit);
    return () => { ro.disconnect(); window.removeEventListener('resize', fit); };
  }, []);
  React.useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = Math.min(1, Math.max(0, h.scrollTop / ((h.scrollHeight - window.innerHeight) || 1)));
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      setScrolled((s) => (h.scrollTop > 8) === s ? s : !s);
    };
    window.addEventListener('scroll', on, { passive: true }); on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header ref={head} data-dark={scrolled ? undefined : ''} style={{
      position: 'sticky', top: 0, zIndex: 20, marginBottom: -87,
      background: scrolled ? 'rgba(255,255,255,.82)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'background var(--duration-slow) var(--ease-standard), box-shadow var(--duration-slow) var(--ease-standard), border-color var(--duration-slow) var(--ease-standard)',
    }}>
      <div style={{ maxWidth: 'var(--max-width-content)', margin: '0 auto', padding: '14px var(--gutter-page)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }} data-nav="site">
        <a href="#aktion" style={{ display: 'flex' }}><Wordmark variant={scrolled ? 'gradient' : 'white'} height={26} base="../.." /></a>
        <nav style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {LINKS.map(([l, href]) => (
            <a key={l} href={href} className="navlnk"
              style={{ fontSize: 'var(--text-body-sm)', color: scrolled ? 'var(--ink-600)' : 'rgba(255,255,255,.85)', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color var(--duration-slow) var(--ease-standard)' }}>{l}</a>
          ))}
        </nav>
        <a href="tel:+4915144300333" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: scrolled ? 'var(--ink-700)' : 'var(--white)', textDecoration: 'none', transition: 'color var(--duration-slow) var(--ease-standard)' }}>
          <Icon name="phone" size={16} color={scrolled ? 'var(--violet-700)' : 'var(--violet-300)'} /><span style={{ whiteSpace: 'nowrap' }}>+49 151 44300 333</span>
        </a>
        <Button size="sm" as="a" href="#kontakt">Beratung anfragen</Button>
      </div>
      <div ref={bar} aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 2, background: 'var(--gradient-brand)', transformOrigin: '0 50%', transform: 'scaleX(0)' }}></div>
    </header>
  );
}
Object.assign(window, { SiteHeader });
