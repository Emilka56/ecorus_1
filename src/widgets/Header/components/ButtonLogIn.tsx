import { useState } from "react";
import styles from '../index.module.scss';
import logIn from '../../../assets/images/icon/Login.svg'
import { AuthModal } from '../../../widgets/AuthModal';

export const ButtonLogIn = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={styles.buttonLogIn}>
                <img src={logIn} alt="icon LogIn" width={35}/>
                войти
            </button>
            {isOpen && <AuthModal onClose={() => setIsOpen(false)} />}
        </>
    )
};