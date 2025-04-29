import { MdOutlineNotificationsActive, MdOutlineNotificationsNone, MdOutlineNotificationsOff } from "react-icons/md";
import styles from './styles.module.scss';

interface NotificationsProps {
    hasNotification?: boolean;
    isViewed?: boolean;
}

export default function Notifications({ hasNotification = false, isViewed = false }: NotificationsProps) {
    return (
        <div className={styles.containerNotifications}>
            {hasNotification && !isViewed ? (
                <MdOutlineNotificationsActive
                    size={24}
                    className={styles.notifications}
                />
            ) : !hasNotification ? (
                <MdOutlineNotificationsNone 
                    size={24} 
                    className={styles.notificationsNone} 
                />
            ) : (
                <MdOutlineNotificationsOff 
                    size={24} 
                    className={styles.notificationsOff} 
                />
            )}
        </div>
    );
}