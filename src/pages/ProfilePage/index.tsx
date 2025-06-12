import {ProfileCard} from "./ProfileCard/index.tsx";
import {Tabs} from "./components/Tabs";
import styles from "./index.module.scss";

export const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <ProfileCard />
            <Tabs />
        </div>
    );
};

