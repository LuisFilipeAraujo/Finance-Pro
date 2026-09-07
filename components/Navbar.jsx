import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from '../public/logo.png';

const links = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#produto', label: 'Como funciona' },
  { href: '#inteligencia', label: 'Inteligência' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="#" className={styles.brand}>
          <Image src={logo} alt="Finance Pro" width={34} height={34} priority />
          <span className={styles.brandText}>
            finance <em>pro</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#comecar" className={`btn btn-ghost ${styles.loginBtn}`}>
            Entrar
          </a>
          <a href="#comecar" className="btn btn-primary">
            Começar agora
          </a>
        </div>
      </div>
    </header>
  );
}
