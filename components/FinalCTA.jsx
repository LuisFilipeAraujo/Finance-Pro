import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section id="comecar" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>
          Comece a organizar sua vida financeira hoje.
        </h2>
        <p className={styles.text}>
          Leva poucos minutos para configurar sua conta e ver seus primeiros
          números organizados.
        </p>
        <a href="#" className={`btn btn-primary ${styles.cta}`}>
          Criar minha conta
        </a>
      </div>
    </section>
  );
}
