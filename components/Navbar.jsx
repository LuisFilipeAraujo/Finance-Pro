import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { navLinks } from './navLinks';
import styles from './Navbar.module.css';
import logo from '../public/logo.png';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image src={logo} alt="" width={34} height={34} priority />
          <span className={styles.brandText}>
            finance <em>pro</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={`btn btn-ghost ${styles.loginBtn}`}>
            Entrar
          </Link>
          <Link href="/#comecar" className={`btn btn-primary ${styles.ctaBtn}`}>
            Começar agora
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
