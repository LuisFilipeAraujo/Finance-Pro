import styles from './AIHighlight.module.css';

const capabilities = [
  'Reconhecer padrões de consumo ao longo dos meses',
  'Sugerir ajustes de orçamento antes que o saldo aperte',
  'Responder perguntas sobre suas próprias finanças',
];

export default function AIHighlight() {
  return (
    <section id="inteligencia" className={styles.section}>
      <div className={styles.glow} aria-hidden="true">
        <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M300 380C300 380 120 340 90 240C64 156 130 90 200 96C258 101 260 160 220 180C176 202 150 150 190 120C240 84 320 90 360 140C404 196 380 260 330 270"
            stroke="var(--color-leaf)"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>
          O próximo passo é o Finance Pro entender seus números por conta
          própria.
        </h2>
        <p className={styles.text}>
          Estamos construindo uma camada de inteligência, hoje em
          desenvolvimento, que vai além dos gráficos: capaz de ler seu
          histórico financeiro e transformá-lo em orientação prática, no
          momento em que você precisar dela.
        </p>

        <ul className={styles.list}>
          {capabilities.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
