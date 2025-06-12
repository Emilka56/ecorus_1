import { Link, useLocation } from 'react-router-dom';
import styles from '../index.module.scss';

export const NavLink = ({ url, text }: { url: string; text: string }) => {
    const location = useLocation();
    const isActive = location.pathname === url;

    return (
        <Link to={url} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
            {text}
        </Link>
    );
}