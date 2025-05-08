import { MdOutlineNotificationsActive, MdOutlineNotificationsNone, MdOutlineNotificationsOff } from "react-icons/md";
import styles from './styles.module.scss';
import { useSidebar } from "@/contexts/SidebarContext";

interface NotificationsProps {
    hasNotification?: boolean;
    isViewed?: boolean;
    onToggleNotification?: () => void;
}

export default function NotificationsNewComponent({ hasNotification = false, isViewed = false, onToggleNotification }: NotificationsProps) {
    const { isOpen, toggleSidebar } = useSidebar();

    const handleClick = () => {
        toggleSidebar();
        if (onToggleNotification) {
            onToggleNotification();
        }
    };


    return (
        <div className={styles.containerNotifications}>
            {hasNotification && !isViewed ? (
                <button className={styles.buttonNotification} onClick={handleClick}>

                    <MdOutlineNotificationsActive
                        size={24}
                        className={styles.notifications}
                    />
                </button>
            ) : !hasNotification ? (
                <button className={styles.buttonNotification}  onClick={handleClick}>

                    <MdOutlineNotificationsNone 
                        size={24} 
                        className={styles.notificationsNone} 
                    />
                </button>
            ) : (
                <button className={styles.buttonNotification}  onClick={handleClick}>

                    <MdOutlineNotificationsOff 
                        size={24} 
                        className={styles.notificationsOff} 
                    />
                </button>
            )}
        </div>
    );
}