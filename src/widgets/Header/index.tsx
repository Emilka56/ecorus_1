import styles from './index.module.scss';
import { LogoLink } from './components/LogoLink';
import { pages } from './constants';
import { NavLink } from './components/NavLink';
import { ButtonLogIn } from './components/ButtonLogIn';
import { useUser } from '../../shared/context/UserContext';
import { useNavigate } from 'react-router-dom';
import coinIcon from '../../assets/images/icon/coins.svg';
import locationIcon from '../../assets/images/icon/Pin.svg';
import { useState } from 'react';
import menuIcon from '../../assets/images/icon/Menu.svg';
import closeIcon from '../../assets/images/icon/Close.svg';

export const Header = () => {
    const context = useUser();
    if (!context) return null;
    const { user } = context;
    if (!user) return null;
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <LogoLink/>
                <nav className={styles.nav}>
                    {pages.map((page) => (
                        <NavLink key={page.url} url={page.url} text={page.text}/>
                    ))}
                </nav>
            </div>
            {user ? (
                <div className={styles.userInfo}>
                    <span className={styles.city}>
                        <img src={locationIcon} alt="location" className={styles.icon} />
                        {user.city}
                    </span>
                    <span className={styles.coins}>
                        <img src={coinIcon} alt="coins" className={styles.icon} />
                        {user.coins}
                    </span>
                    <button className={styles.profileBtn} onClick={() => navigate('/profile')}>
                        <img src={user.avatar} alt="avatar" className={styles.avatar} />
                        <span className={styles.userName}>{user.name}</span>
                    </button>
                </div>
            ) : (
                <ButtonLogIn />
            )}
            {!isMenuOpen && (
                <button className={styles.menuBtn} onClick={() => setIsMenuOpen(true)}>
                    <img src={menuIcon} alt="menu" width={32} height={32} />
                </button>
            )}
            {isMenuOpen && (
                <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}>
                    <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                            <img src={closeIcon} alt="close" width={28} height={28} />
                        </button>
                        {user ? (
                            <div className={styles.mobileUserInfo}>
                                <button className={styles.profileBtn} onClick={() => { navigate('/profile'); setIsMenuOpen(false); }} style={{background: 'none', border: 'none', padding: 0}}>
                                    <img src={user.avatar} alt="avatar" className={styles.avatar} />
                                    <div className={styles.mobileUserName}>{user.name}</div>
                                </button>
                                <div className={styles.mobileCoins}>
                                    <img src={coinIcon} alt="coins" className={styles.icon} />
                                    {user.coins}
                                </div>
                                <div className={styles.mobileCity}>
                                    <img src={locationIcon} alt="location" className={styles.icon} />
                                    {user.city}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.mobileLogin}><ButtonLogIn /></div>
                        )}
                        <nav className={styles.mobileNav}>
                            {pages.map((page) => (
                                <NavLink key={page.url} url={page.url} text={page.text} />
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}