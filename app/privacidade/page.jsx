import ComingSoon, { placeholderMetadata } from '../../components/ComingSoon';

export const metadata = placeholderMetadata('Privacidade');

export default function PrivacidadePage() {
  return (
    <ComingSoon eyebrow="Legal" title="Privacidade">
      <p>
        Hoje o único dado que coletamos é o e-mail informado na lista de
        espera. Ele é usado apenas para avisar sobre o lançamento do Finance
        Pro e não é compartilhado com terceiros.
      </p>
      <p>
        A política de privacidade completa será publicada antes da abertura
        das contas.
      </p>
    </ComingSoon>
  );
}
