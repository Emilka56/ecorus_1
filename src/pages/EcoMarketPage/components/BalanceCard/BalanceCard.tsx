import { type FC } from 'react';
import styles from './styles.module.scss';

interface BalanceCardProps {
  balance: number;
  onGetPromo: () => void;
}

export const BalanceCard: FC<BalanceCardProps> = ({ balance, onGetPromo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.label}>На вашем балансе</div>
        <div className={styles.balance}>
          <span className={styles.icon}>E</span>
          {balance}
        </div>
        <div className={styles.hint}>Вы можете обменять их на скидку 10% на покупку в экомаркете</div>
      </div>
      <button className={styles.button} onClick={onGetPromo}>
        Получить промокод
      </button>
    </div>
  );
}; 