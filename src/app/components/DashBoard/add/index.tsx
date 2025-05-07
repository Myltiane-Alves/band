import { MdAddCircle, MdOutlineClose } from "react-icons/md";
import styles from './styles.module.scss';
import { IoAdd } from "react-icons/io5";
interface NotificationsProps {
    hasNotification?: boolean;
    isViewed?: boolean;
}


export default function Add({ hasNotification = false, isViewed = false }: NotificationsProps) {
    return (
        <div className={styles.containerAdd}>
            {hasNotification && !isViewed ? (
                <MdOutlineClose size={24} className={styles.add} />
            ) : !hasNotification ? (
                <IoAdd size={24} className={styles.add} />
            ) : (
                <MdOutlineClose size={24} className={styles.add} />
            )}
            {/* <MdOutlineClose size={24} className={styles.add} />
            <IoAdd size={24} className={styles.add}  /> */}
        </div>
    );
}
