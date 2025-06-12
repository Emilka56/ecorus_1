import { useUser } from '../../../../shared/context/UserContext';
import type { HistoryItem } from '../../types';
import styles from './index.module.scss';
import coins from '../../../../assets/images/icon/coins.svg';

export const HistoryTab = () => {
    const userContext = useUser();

    if (!userContext || !userContext.user) {
        return null;
    }

    const { user } = userContext;

    return (
        <div>
            {user.history.map((item: HistoryItem, index: number) => (
                <div key={index} className={styles.historyCard}>
                    <div className={styles.address}>{item.address}</div>
                    <div className={styles.material}>{item.material}</div>
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.coins}>
                        <img src={coins} alt="coins" />
                        {item.coins}
                    </div>
                </div>
            ))}
        </div>
    );
};

