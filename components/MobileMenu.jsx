'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { navLinks } from './navLinks';
import styles from './Navbar.module.css';

// Must match the breakpoint where Navbar.module.css hides the desktop nav.
const DESKTOP_QUERY = '(min-width: 861px)';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    const desktop = window.matchMedia(DESKTOP_QUERY);
    function onBreakpoint(event) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.mobile}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div id={panelId} className={styles.mobilePanel} hidden={!open}>
        <nav aria-label="Navegação principal (menu)">
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.mobileLink} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileActions}>
          <Link href="/login" className="btn btn-ghost" onClick={close}>
            Entrar
          </Link>
          <Link href="/#comecar" className="btn btn-primary" onClick={close}>
            Começar agora
          </Link>
        </div>
      </div>
    </div>
  );
}
