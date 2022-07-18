import { useState } from 'react';
import styles from './AssinaturaNewsletter.module.scss';

export default function AssinaturaNewsletter() {

  const [emailValido, setEmailValido] = useState(false);
  const [email, setEmail] = useState('');

  function validarEmail(email: string) {
    if (/.+@.+\..+/.test(email)) {
      setEmailValido(true);
    } else {
      setEmailValido(false);
    }

    setEmail(email);
  }

  function aoSubmeter(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    console.log('clickei');
    alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}.`);

  };

  return (
    <div className={styles.newsletter}>
      <div className={styles.texto}>
        <p className={styles.titulo}>Sua casa com as</p>
        <p className={styles.destaque}>melhores plantas</p>
        <p className={styles.subtitulo}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
      </div>
      <form
        className={styles.formulario}
        onSubmit={aoSubmeter}
      >
        <input
          type='text'
          placeholder='Insira seu email'
          value={email}
          onChange={(event) => validarEmail(event.target.value)}
        />
        <button disabled={!emailValido} type='submit'>
          Assinar newsletter
        </button>
      </form>
    </div>
  );
}
