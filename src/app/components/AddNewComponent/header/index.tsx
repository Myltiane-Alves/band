import styles from './styles.module.scss';
import { useSidebar } from '@/contexts/SidebarContext';
import AddNewComponent from "../add";
import NotificationsNewComponent from "../Notification";

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
            <div className={styles.containerNotifications}>        
                <AddNewComponent hasAddNew={true} isViewedAdd={false} onToggle={handleToggleSidebar} />
            </div>
        </div>
    );
}

