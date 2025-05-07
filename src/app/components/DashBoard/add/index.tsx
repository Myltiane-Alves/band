import { MdAddCircle, MdOutlineClose } from "react-icons/md";
import styles from './styles.module.scss';
import { IoAdd } from "react-icons/io5";
import { useSidebar } from '@/contexts/SidebarContext';

interface NotificationsProps {
    hasNotification?: boolean;
    isViewed?: boolean;
}

export default function Add({ hasNotification = false, isViewed = false }: NotificationsProps) {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div className={styles.containerAdd}>
            {hasNotification && !isViewed ? (
                <button className={styles.buttonAdd} onClick={toggleSidebar}>
                    <MdOutlineClose size={24} className={styles.add} />
                </button>
            ) : !hasNotification ? (
                <button className={styles.buttonAdd} onClick={toggleSidebar}>
                    <IoAdd size={24} className={styles.add} />
                </button>
            ) : (
                <button className={styles.buttonAdd} onClick={toggleSidebar}>
                    <MdOutlineClose size={24} className={styles.add} />
                </button>
            )}
        </div>
    );
}
