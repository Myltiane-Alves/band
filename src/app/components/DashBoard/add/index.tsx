import { MdAddCircle, MdOutlineClose } from "react-icons/md";
import styles from './styles.module.scss';
import { IoAdd } from "react-icons/io5";
import { useSidebar } from '@/contexts/SidebarContext';

interface NotificationsProps {
    hasNotificationAdd?: boolean;
    isViewedAdd?: boolean;
    onToggle?: () => void;
}

export default function Add({ hasNotificationAdd = false, isViewedAdd = false, onToggle }: NotificationsProps) {
    const { isOpen, toggleSidebar } = useSidebar();

    const handleClick = () => {
        toggleSidebar();
        if (onToggle) {
            onToggle();
        }
    };

    return (
        <div className={styles.containerAdd}>
            {hasNotificationAdd && !isViewedAdd ? (
                <button className={styles.buttonAdd} onClick={handleClick}>
                    <MdOutlineClose size={24} className={styles.add} />
                </button>
            ) : !hasNotificationAdd ? (
                <button className={styles.buttonAdd} onClick={handleClick}>
                    <IoAdd size={24} className={styles.add} />
                </button>
            ) : (
                <button className={styles.buttonAdd} onClick={handleClick}>
                    <MdOutlineClose size={24} className={styles.add} />
                </button>
            )}
        </div>
    );
}
