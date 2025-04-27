import { MdOutlineNotificationsActive, MdOutlineNotificationsNone, MdOutlineNotificationsOff } from "react-icons/md";
import styles from './styles.module.scss';
export default function Notifications() {
    return (
        <div className={styles.containerNotifications}>
            <MdOutlineNotificationsActive
                size={24}
                className={styles.notifications}
            />
            <MdOutlineNotificationsNone size={24} className={styles.notificationsNone} />
            <MdOutlineNotificationsOff size={24} className={styles.notificationsOff} />
        </div>
    );
}