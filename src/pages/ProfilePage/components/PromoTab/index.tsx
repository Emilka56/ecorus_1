import styles from "../../index.module.scss";
import { useUser } from '../../../../shared/context/UserContext';

export const PromoTab = () => {
    const context = useUser();
    if (!context) return null;
    const { user } = context;
    if (!user) return null;
    return (
        <div className={styles.tabContent}>
            {user.promos.map((promo, i) => (
                <div className={styles.promoCard} key={i}>
                    <div className={styles.promoValue} style={{ background: promo.color }}>
                        {promo.value}
                    </div>
                    <div>
                        <div className={styles.promoDate}>Дата создания: {promo.date}</div>
                        <div className={styles.promoLink}>
                            Ссылка на товар: <a href={`https://${promo.link}`} target="_blank" rel="noopener noreferrer">{promo.link}</a>
                        </div>
                    </div>
                    {promo.showQR && (
                        <button className={styles.qrBtn}>Показать qr-код</button>
                    )}
                </div>
            ))}
        </div>
    );
}

