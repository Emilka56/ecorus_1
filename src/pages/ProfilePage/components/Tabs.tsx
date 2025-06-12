import { useState } from "react";
import styles from "../index.module.scss";
import {HistoryTab} from "./HistoryTab/index.tsx";
import {PromoTab} from "./PromoTab/index.tsx";
import { useUser } from '../../../shared/context/UserContext';

export const Tabs = () => {
    const [active, setActive] = useState <"history" | "promo"> ("history");
    const context = useUser();
    if (!context) return null;
    const { user } = context;
    if (!user) {
        return <div className={styles.tabsNotAuth}>войдите чтобы видеть информацию профиля</div>;
    }

    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
                <button
                    className={active === "promo" ? styles.activeTab : ""}
                    onClick={() => setActive("promo")}>
                    Промокоды
                </button>
                <button
                    className={active === "history" ? styles.activeTab : ""}
                    onClick={() => setActive("history")}>
                    История
                </button>
            </div>
            <div>
                {active === "history" ?<HistoryTab /> : <PromoTab />}
            </div>
        </div>
    );
};

