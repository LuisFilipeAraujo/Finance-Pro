import ComingSoon, { placeholderMetadata } from '../../components/ComingSoon';

export const metadata = placeholderMetadata('Sobre');

export default function SobrePage() {
  return (
    <ComingSoon eyebrow="Sobre" title="Clareza financeira para o dia a dia.">
      <p>
        Estamos construindo o Finance Pro para transformar números soltos em
        decisões. Esta página vai contar mais sobre quem somos e o que nos
        move — por enquanto, a melhor forma de acompanhar é entrando na lista
        de espera.
      </p>
    </ComingSoon>
  );
}
