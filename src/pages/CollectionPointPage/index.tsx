import mapImg from '../../assets/images/photo/map.png';
import styles from './index.module.scss';

export const CollectionPointPage = () => (
  <div className={styles.container}>
    <h1>Пункты сбора</h1>
    <img src={mapImg} alt="Пункты сбора" className={styles.img} />
    <p className={styles.p}>здесь нужно доделать информацию о пунктах сбора</p>
  </div>
);

