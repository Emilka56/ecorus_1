import React, { useState } from "react";
import styles from "../index.module.scss";
import { useUser } from '@/shared/context/UserContext';
import ava from '@/assets/images/ava/ava.jpg';

type Props = {
  phone: string;
  onSuccess: () => void;
  onError: (msg: string) => void;
  onBack: () => void;
  onPartner: () => void;
};

export const CodeForm: React.FC<Props> = ({ phone, onSuccess, onError, onBack, onPartner }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === "1234") {
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
      setError("Введите действительный код");
      onError("Введите действительный код");
    }
  };

  return (
    <>
      <h2 className={styles.title}>Ввести код</h2>
      <div className={styles.smsInfo}>
        Введите код отправленный вам на телефон <span className={styles.phone}>{phone || "+7 (917) 888 88 88"}</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Код"
          value={code}
          onChange={e => setCode(e.target.value)}
          className={error ? styles.inputError : ""}
        />
        {error && <div className={styles.errorMsg}>{error}</div>}
        <button className={styles.greenBtn} type="submit">Отправить</button>
      </form>
      <div className={styles.links}>
        <button type="button" className={styles.link} onClick={onBack}>Не получил(-а) код</button>
        <button type="button" className={styles.link} onClick={onPartner}>Вход для партнёров</button>
      </div>
    </>
  );
};

