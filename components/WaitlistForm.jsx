'use client';

import { useActionState, useId } from 'react';
import Link from 'next/link';
import { joinWaitlist } from '../app/actions/waitlist';
import styles from './WaitlistForm.module.css';

const initialState = { status: 'idle', message: '', email: '' };

export default function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const inputId = useId();
  const messageId = useId();
  const hasError = state.status === 'error';

  // One persistent live region, so screen readers announce both the inline
  // error and the success message that replaces the form.
  return (
    <div aria-live="polite">
      {state.status === 'success' ? (
        <p className={styles.success}>{state.message}</p>
      ) : (
        <form action={formAction} className={styles.form} noValidate>
          <div className={styles.row}>
            <label htmlFor={inputId} className="sr-only">
              Seu e-mail
            </label>
            <input
              id={inputId}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="seu@email.com"
              required
              maxLength={254}
              defaultValue={state.email}
              aria-invalid={hasError || undefined}
              aria-describedby={messageId}
              className={styles.input}
            />
            <button type="submit" className="btn btn-primary" disabled={pending}>
              {pending ? 'Enviando…' : 'Entrar na lista'}
            </button>
          </div>

          <div className={styles.honeypot} aria-hidden="true">
            <label>
              Deixe em branco
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p id={messageId} className={styles.message}>
            {hasError ? <span className={styles.error}>{state.message}</span> : null}
          </p>

          <p className={styles.note}>
            Usamos seu e-mail apenas para avisar sobre o lançamento.{' '}
            <Link href="/privacidade">Privacidade</Link>
          </p>
        </form>
      )}
    </div>
  );
}
