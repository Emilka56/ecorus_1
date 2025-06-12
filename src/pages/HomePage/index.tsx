import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import mapImage from "../../assets/images/photo/map.png";
import ecoMarketImage from '../../assets/images/photo/ecoMarket.png';
import arrow from '../../assets/images/icon/arrow.svg';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Сделаем мир чище</h1>
          <p className={styles.description}>
            Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов
          </p>
          <Link to="/service-terms" className={styles.button}>
            Условия сервиса
          </Link>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <Link to="/collectionPoints" className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Пункты сбора</h2>
            <p className={styles.cardDescription}>
              Посмотри, где в твоем городе можно сдать вторсырье на переработку
            </p>
            <img src={arrow} alt="→" className={styles.arrow} />
          </div>
          <img src={mapImage} alt="Пункты сбора" className={styles.cardImage} />
        </Link>

        <Link to="/ecoMarket" className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>ЭкоМаркет</h2>
            <p className={styles.cardDescription}>
              Используй заработанные экокоины для покупки товаров из переработанных материалов
            </p>
            <img src={arrow} alt="→" className={styles.arrow} />
          </div>
          <img src={ecoMarketImage} alt="ЭкоМаркет" className={styles.cardImage} />
        </Link>
      </section>
    </div>
  );
};

