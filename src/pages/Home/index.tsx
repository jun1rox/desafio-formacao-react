import Menu from 'components/Menu';
import AssinaturaNewsletter from 'components/AssinaturaNewsletter';
import { ReactComponent as Forma } from 'assets/forma.svg';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main>
      <Forma className={styles.forma} />
      <Menu />
      <AssinaturaNewsletter />
    </main>
  );
}