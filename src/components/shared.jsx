import React, { useEffect, useRef, useState, useCallback } from 'react';

// ── Scroll reveal hook ────────────────────────────────────────
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Reveal wrapper component ──────────────────────────────────
export function Reveal({ children, delay = 0, className = '', threshold = 0.1 }) {
  const { ref, visible } = useScrollReveal(threshold);
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

// ── Scroll progress bar ───────────────────────────────────────
export function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? scrolled / total : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

// ── Navigation ────────────────────────────────────────────────
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#identity', label: 'Who I Am' },
    { href: '#journey',  label: 'Journey & Timeline' },
    { href: '#projects', label: 'Selected Builds' },
    { href: '#vision',   label: 'Who I Want To Be' },
    { href: '#skills',   label: 'Arsenal' },
    { href: '#connect',  label: 'Connect' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => handleNav(e, '#hero')}>AG</a>
          <div className="nav-links" role="list">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link" role="listitem"
                onClick={e => handleNav(e, l.href)}>{l.label}</a>
            ))}
          </div>
          <button
            className="nav-mobile-toggle btn-ghost"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
                : <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="15" x2="19" y2="15"/></>
              }
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-mobile-link"
              onClick={e => handleNav(e, l.href)}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
