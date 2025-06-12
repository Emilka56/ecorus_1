import { useUser } from '../../../shared/context/UserContext';
import styles from './index.module.scss';

export const ProfileCard = () => {
  const context = useUser();
  if (!context) return null;
  const { user } = context;

  if (!user) return <div className={styles.notAuth}>Вы не авторизованы</div>;

  return (
    <div className={styles.profileCard}>
      <img src={user.avatar} alt="avatar" className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.phone}>{user.phone}</p>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
};

