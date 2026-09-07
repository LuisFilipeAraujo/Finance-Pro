import styles from './Hero.module.css';

const rows = [
  { label: 'Moradia', value: 'R$ 2.140,00', trend: '−3%' },
  { label: 'Alimentação', value: 'R$ 980,00', trend: '+6%' },
  { label: 'Transporte', value: 'R$ 410,00', trend: '−12%' },
  { label: 'Investimentos', value: 'R$ 1.250,00', trend: '+18%', highlight: true },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            Sua vida financeira, organizada com clareza.
          </h1>
          <p className={styles.subheadline}>
            Finance Pro reúne seus gastos, revela padrões no seu comportamento
            e transforma números soltos em decisões. Uma base sólida para
            planejar o que vem a seguir.
          </p>
          <div className={styles.ctaRow}>
            <a href="#comecar" className="btn btn-primary">
              Começar agora
            </a>
            <a href="#produto" className="btn btn-ghost">
              Ver como funciona
            </a>
          </div>
          <p className={styles.microcopy}>
            Sem cartão de crédito. Configuração em poucos minutos.
          </p>
        </div>

        <div className={styles.panelWrap} aria-hidden="true">
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>Resumo do mês</span>
              <span className={styles.panelDate}>Março</span>
            </div>
            <ul className={styles.panelRows}>
              {rows.map((row) => (
                <li
                  key={row.label}
                  className={`${styles.panelRow} ${row.highlight ? styles.panelRowHighlight : ''}`}
                >
                  <span className={styles.rowLabel}>{row.label}</span>
                  <span className={styles.rowValue}>{row.value}</span>
                  <span
                    className={`${styles.rowTrend} ${row.trend.startsWith('+') ? styles.trendUp : styles.trendDown}`}
                  >
                    {row.trend}
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.panelFooter}>
              <span>Saldo projetado</span>
              <svg
                className={styles.sparkline}
                viewBox="0 0 160 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 32C18 30 26 34 36 26C46 18 54 8 66 12C78 16 84 28 96 24C108 20 114 6 128 8C142 10 148 20 158 6"
                  stroke="var(--color-leaf)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
