import React, { useState } from "react";
import styles from "../index.module.scss";

type Props = {
  onBack: () => void;
};

export const PartnerForm: React.FC<Props> = ({ onBack }) => {
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBack();
  };

  return (
    <>
      <h2 className={styles.title}>Вход</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Наименование организации"
          value={org}
          onChange={e => setOrg(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.greenBtn} type="submit">Получить код</button>
      </form>
      <div className={styles.links}>
        <button type="button" className={styles.link} onClick={onBack}>Я уже зарегистрирован(-а)</button>
      </div>
    </>
  );
};

