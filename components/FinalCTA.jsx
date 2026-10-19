import WaitlistForm from './WaitlistForm';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section id="comecar" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>
          Comece a organizar sua vida financeira hoje.
        </h2>
        <p className={styles.text}>
          O Finance Pro está em fase final de desenvolvimento. Entre na lista
          de espera e seja um dos primeiros a usar.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
