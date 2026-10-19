import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './ComingSoon.module.css';

// Placeholder for routes the landing links to but that don't exist yet.
// Pages using it should also export `placeholderMetadata(...)` (noindex).
export default function ComingSoon({ eyebrow, title, children }) {
  return (
    <>
      <Navbar />
      <main id="conteudo" className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.body}>{children}</div>
          <div className={styles.actions}>
            <Link href="/#comecar" className="btn btn-primary">
              Entrar na lista de espera
            </Link>
            <Link href="/" className="btn btn-ghost">
              Voltar para o início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function placeholderMetadata(title) {
  return {
    title,
    robots: { index: false, follow: true },
  };
}
