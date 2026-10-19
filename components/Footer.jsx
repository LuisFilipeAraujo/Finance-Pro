import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from './navLinks';
import styles from './Footer.module.css';
import logo from '../public/logo.png';

const columns = [
  {
    title: 'Produto',
    links: navLinks,
  },
  {
    title: 'Empresa',
    links: [
      { href: '/sobre', label: 'Sobre' },
      { href: '/contato', label: 'Contato' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/termos', label: 'Termos de uso' },
      { href: '/privacidade', label: 'Privacidade' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Image src={logo} alt="" width={28} height={28} />
            <span>
              finance <em>pro</em>
            </span>
          </div>
          <p className={styles.tagline}>
            Clareza financeira para o dia a dia.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <h2 className={styles.colTitle}>{col.title}</h2>
            <ul className={styles.colList}>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Finance Pro. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
