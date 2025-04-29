import Add from "../add";
import Profile from "../profile";
import Notifications from "../warnings";
import styles from './styles.module.scss';

export default function Header() {
    return (
        <div className={styles.containerHeader}>
            <Profile />
            <div className={styles.containerNotifications}>

                <Notifications />
                <Add />
            </div>
        </div>
    );
}