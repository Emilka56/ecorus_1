import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icon/logo.svg';
import styles from '../index.module.scss';

export const LogoLink = () => (
    <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="ECORUS" width={130}/>
    </Link>
)