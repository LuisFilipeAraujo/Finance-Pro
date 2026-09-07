import styles from './ProductShowcase.module.css';

const bars = [
  { label: 'Moradia', pct: 78 },
  { label: 'Alimentação', pct: 54 },
  { label: 'Transporte', pct: 32 },
  { label: 'Lazer', pct: 41 },
  { label: 'Saúde', pct: 22 },
];

const transactions = [
  { name: 'Supermercado Boa Vista', category: 'Alimentação', value: '− R$ 186,40' },
  { name: 'Transferência recebida', category: 'Receita', value: '+ R$ 3.200,00' },
  { name: 'Academia Corpo & Cia', category: 'Saúde', value: '− R$ 129,90' },
];

export default function ProductShowcase() {
  return (
    <section id="produto" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Uma visão completa, sem esforço para montar.
          </h2>
          <p className={styles.text}>
            O painel do Finance Pro reúne saldo, categorias de gasto e
            movimentações recentes — atualizados automaticamente conforme
            suas contas se conectam. Dados ilustrativos abaixo.
          </p>
        </div>

        <div className={styles.frame}>
          <div className={styles.frameBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>

          <div className={styles.frameBody}>
            <div className={styles.stats}>
              <div className={styles.statBlock}>
                <span className={styles.statLabel}>Saldo total</span>
                <span className={styles.statValue}>R$ 18.420,50</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statLabel}>Economia do mês</span>
                <span className={`${styles.statValue} ${styles.statValuePositive}`}>
                  R$ 1.180,00
                </span>
              </div>
            </div>

            <div className={styles.chartBlock}>
              <span className={styles.chartLabel}>Gastos por categoria</span>
              <div className={styles.bars}>
                {bars.map((bar) => (
                  <div key={bar.label} className={styles.barItem}>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ height: `${bar.pct}%` }} />
                    </div>
                    <span className={styles.barLabel}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.transactions}>
              <span className={styles.chartLabel}>Movimentações recentes</span>
              <ul className={styles.txList}>
                {transactions.map((tx) => (
                  <li key={tx.name} className={styles.txRow}>
                    <div>
                      <p className={styles.txName}>{tx.name}</p>
                      <p className={styles.txCategory}>{tx.category}</p>
                    </div>
                    <span
                      className={`${styles.txValue} ${tx.value.startsWith('+') ? styles.txPositive : ''}`}
                    >
                      {tx.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
