import Menu from 'components/Menu';
import AssinaturaNewsletter from 'components/AssinaturaNewsletter';

import { ReactComponent as Forma } from 'assets/forma.svg';
import { ReactComponent as Planta } from 'assets/planta.svg';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Forma className={styles.forma} />
      <Menu />
      <div className={styles.newsletter__container}>
        <AssinaturaNewsletter />
        <Planta className={styles.planta} />
      </div>
    </main>
  );
}