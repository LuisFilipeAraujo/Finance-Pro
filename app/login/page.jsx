import ComingSoon, { placeholderMetadata } from '../../components/ComingSoon';

export const metadata = placeholderMetadata('Entrar');

export default function LoginPage() {
  return (
    <ComingSoon eyebrow="Em breve" title="O acesso à conta ainda não abriu.">
      <p>
        O Finance Pro está em desenvolvimento e o login será liberado no
        lançamento. Entre na lista de espera para ser avisado assim que sua
        conta puder ser criada.
      </p>
    </ComingSoon>
  );
}
