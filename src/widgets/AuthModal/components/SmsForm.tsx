import React, { useState } from "react";
import styles from "../index.module.scss";

type Props = {
  onGetCode: () => void;
  onBack: () => void;
  onPartner: () => void;
};

export const SmsForm: React.FC<Props> = ({ onGetCode, onBack, onPartner }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      onGetCode();
    }
  };

  return (
    <>
      <h2 className={styles.title}>Вход или регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button className={styles.greenBtn} type="submit">Получить код</button>
      </form>
      <div className={styles.links}>
        <button type="button" className={styles.link} onClick={onBack}>Я уже зарегистрирован(-а)</button>
        <button type="button" className={styles.link} onClick={onPartner}>Вход для партнёров</button>
      </div>
    </>
  );
};

