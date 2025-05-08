import Add from "../add";
import Profile from "../profile";
import Notifications from "../../DashBoard/";
import styles from './styles.module.scss';
import { useSidebar } from '@/contexts/SidebarContext';

interface HeaderProps {
    onToggleSidebar?: () => void;
}

export default function HeaderNewComponent({ onToggleSidebar }: HeaderProps) {
    const { toggleSidebar } = useSidebar();

    const handleToggleSidebar = () => {
        toggleSidebar();
        if (onToggleSidebar) {
            onToggleSidebar();
        }
    };

    return (
        <div className={styles.containerHeader}>
            {/* <Profile /> */}
            <div className={styles.containerNotifications}>
                {/* <Notifications  hasNotification={true} isViewed={false} onToggle={handleToggleSidebar} /> */}
                <Notifications  hasNotification={false} isViewed={false} onToggleNotification={handleToggleSidebar} />

             
                <Add hasNotificationAdd={true} isViewedAdd={false} onToggle={handleToggleSidebar} />
            </div>
        </div>
    );
}