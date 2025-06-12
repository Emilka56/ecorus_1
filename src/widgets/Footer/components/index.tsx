import styles from "./index.module.scss";
import mailIcon from "../../../assets/images/icon/Mail.svg";
import phoneIcon from "../../../assets/images/icon/Call.svg";

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.info}>
              <span>
                <img src={mailIcon} alt="mail" className={styles.icon} />
                info@ecorus.ru
              </span>
            <span>
                <img src={phoneIcon} alt="phone" className={styles.icon} />
                +7 (800) 880-88-88
            </span>
        </div>
    </footer>
);

