import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import styles from './Menu.module.scss';

export default function Menu() {

  const rotas = [{
    label: 'Como fazer',
    to: '/comofazer'
  }, {
    label: 'Ofertas',
    to: '/ofertas'
  }, {
    label: 'Depoimentos',
    to: '/depoimentos'
  }, {
    label: 'Vídeos',
    to: '/videos'
  }, {
    label: 'Meu carrinho',
    to: '/carrinho'
  }];

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__logo}>
        <Link to='/'>
          <img src={Logo} alt='Logo da CasaVerde' />
        </Link>
      </div>
      <ul className={styles.menu__lista}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__item}>

            {index !== 0 ? <span className={styles.menu__divisoria} >/</span> : ''}

            <Link to={rota.to} className={styles.menu__link}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}