import styles from './Benefits.module.css';

const items = [
  {
    title: 'Organização financeira',
    description:
      'Contas, cartões e categorias reunidos em um único lugar, sem planilhas soltas ou anotações espalhadas.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 13H27" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 18H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Acompanhamento de gastos',
    description:
      'Cada transação é categorizada automaticamente, mostrando para onde o dinheiro realmente está indo.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 24V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5 24H27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 19L14 13L18 16L24 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Insights financeiros',
    description:
      'Padrões de consumo e oportunidades de economia identificados a partir do seu próprio histórico.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 10V16L20 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Planejamento financeiro',
    description:
      'Metas de curto e longo prazo com previsões claras de quando cada uma delas será alcançada.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26L12 16L18 20L26 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 7H26V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>
            Feito para quem quer entender o próprio dinheiro.
          </h2>
          <p className={styles.text}>
            Quatro pilares simples sustentam o Finance Pro — cada um resolve
            uma dificuldade real de quem tenta manter as contas em ordem.
          </p>
        </div>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.row}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.rowBody}>
                <h3 className={styles.rowTitle}>{item.title}</h3>
                <p className={styles.rowText}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
