import ComingSoon, { placeholderMetadata } from '../../components/ComingSoon';

export const metadata = placeholderMetadata('Contato');

export default function ContatoPage() {
  return (
    <ComingSoon eyebrow="Contato" title="Nossos canais de contato estão a caminho.">
      <p>
        Em breve você poderá falar com a equipe por aqui. Enquanto isso, entre
        na lista de espera para receber as novidades do lançamento.
      </p>
    </ComingSoon>
  );
}
