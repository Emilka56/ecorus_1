import { useState } from "react";
import slide1 from '@/assets/images/photo/1-slide.png';
import slide2 from '@/assets/images/photo/2-slide.png';
import slide3 from '@/assets/images/photo/3-slide.png';
import arrowLeft from '@/assets/images/icon/arrowLeft.svg';
import arrowRight from '@/assets/images/icon/arrowRight.svg';
import styles from './index.module.scss';

const slides = [
  {
    image: slide1,
    title: 'Сделаем мир чище',
    description: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
    buttonText: 'Условия сервиса',
    buttonLink: '#',
    background: '#B3EDC8',
  },
  {
    image: slide2,
    title: 'А вы знали…',
    description: 'что среднее время разложения пластиковых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
    buttonText: 'Узнать больше',
    buttonLink: '#',
    background: '#FFE48F',
  },
  {
    image: slide3,
    title: 'Что с масками?',
    description: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
    buttonText: 'Пункты сбора масок',
    buttonLink: '#',
    background: '#BFF0DE',
  },
];

export const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slide} style={{ background: slide.background }}>
        <button className={styles.arrowLeft} onClick={prevSlide} aria-label="назад">
          <img src={arrowLeft} alt="left" />
        </button>
        <div className={styles.slideText}>
          <h2 className={styles.slideTitle}>{slide.title}</h2>
          <p className={styles.slideDesc}>{slide.description}</p>
          {slide.buttonText && (
            <a href={slide.buttonLink} className={styles.slideBtn}>{slide.buttonText}</a>
          )}
        </div>
        <img
          className={styles.image}
          src={slide.image}
          alt={`slide-${current}`}
        />
        <button className={styles.arrowRight} onClick={nextSlide} aria-label="Вперёд">
          <img src={arrowRight} alt="right" />
        </button>
      </div>
    </div>
  );
};

