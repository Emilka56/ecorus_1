import { useNavigate } from "react-router-dom";
import mapImg from '../../../assets/images/photo/map.png';
import ecoMarketImg from '../../../assets/images/photo/ecoMarket.png';
import arrow from '../../../assets/images/icon/arrow.svg';
import styles from './index.module.scss';

const cards = [
  {
    title: 'Пункты сбора',
    text: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
    img: mapImg,
    link: '/collectionPoints',
  },
  {
    title: 'ЭкоМаркет',
    text: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
    img: ecoMarketImg,
    link: '/ecoMarket',
  },
];

export const CardsSection = () => {
  const navigate = useNavigate();
  return (
      <div className={styles.cardsWrapper}>
        {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardText}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button
                    className={styles.cardBtn}
                    onClick={() => navigate(card.link)}
                    aria-label="Подробнее">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
              <img src={card.img} alt={card.title} className={styles.cardImg} />
            </div>
        ))}
      </div>
  );
};
