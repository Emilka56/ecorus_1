import { type FC } from 'react';
import styles from './styles.module.scss';
import type { Product } from '../../index';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.brand}>{product.brand}</div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.price}>
          <span className={styles.priceIcon}>E</span>
          {product.price}
        </div>
      </div>
    </div>
  );
}; 