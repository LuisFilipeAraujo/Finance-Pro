import ComingSoon, { placeholderMetadata } from '../../components/ComingSoon';

export const metadata = placeholderMetadata('Termos de uso');

export default function TermosPage() {
  return (
    <ComingSoon eyebrow="Legal" title="Termos de uso">
      <p>
        Os termos de uso do Finance Pro serão publicados antes do lançamento,
        junto com a abertura das contas.
      </p>
    </ComingSoon>
  );
}
