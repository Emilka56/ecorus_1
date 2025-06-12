import React, { useState } from "react";
import styles from "../index.module.scss";
import { useUser } from '@/shared/context/UserContext';
import ava from '@/assets/images/ava/ava.jpg';

type Props = {
  onSms: () => void;
  onPartner: () => void;
  onError: (msg: string) => void;
  onSuccess: () => void;
};

export const AuthForm: React.FC<Props> = ({ onSms, onPartner, onError, onSuccess }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && password) {
      setUser({
        name: "Полина",
        email: "polina@gmail.com",
        phone: "88008008888",
        avatar: ava,
        city: 'Казань',
        coins: 1000,
        history: [],
        promos: []
      });
      onSuccess();
    } else {
      onError("Введите телефон и пароль");
    }
  };

  return (
    <>
      <h2 className={styles.title}>Вход</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.greenBtn} type="submit">Войти</button>
      </form>
      <div className={styles.links}>
        <button type="button" className={styles.link} onClick={onSms}>Войти с помощью смс</button>
        <button type="button" className={styles.link} onClick={onPartner}>Вход для партнёров</button>
      </div>
    </>
  );
};

