import Image from 'next/image';
import styles from './Footer.module.css';
import logo from '../public/logo.png';

const columns = [
  {
    title: 'Produto',
    links: ['Benefícios', 'Como funciona', 'Inteligência'],
  },
  {
    title: 'Empresa',
    links: ['Sobre', 'Contato'],
  },
  {
    title: 'Legal',
    links: ['Termos de uso', 'Privacidade'],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Image src={logo} alt="Finance Pro" width={28} height={28} />
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
            <span className={styles.colTitle}>{col.title}</span>
            <ul className={styles.colList}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
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
