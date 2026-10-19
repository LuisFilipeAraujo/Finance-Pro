'use server';

import { addToWaitlist } from '../../lib/waitlist';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUCCESS_MESSAGE =
  'Pronto! Você está na lista. Avisaremos por e-mail assim que o Finance Pro abrir.';

export async function joinWaitlist(_prevState, formData) {
  // Honeypot: real users never see this field, bots usually fill it.
  // Pretend success so bots don't learn to skip it.
  if (formData.get('website')) {
    return { status: 'success', message: SUCCESS_MESSAGE };
  }

  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Informe um e-mail válido.', email };
  }

  try {
    const { alreadyListed } = await addToWaitlist(email);
    return {
      status: 'success',
      message: alreadyListed
        ? 'Esse e-mail já está na lista. Avisaremos assim que o Finance Pro abrir.'
        : SUCCESS_MESSAGE,
    };
  } catch (error) {
    console.error('[waitlist] failed to save sign-up', error);
    return {
      status: 'error',
      message: 'Não foi possível salvar agora. Tente novamente em instantes.',
      email,
    };
  }
}
