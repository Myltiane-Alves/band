import { MdAddCircle, MdOutlineClose } from "react-icons/md";
import styles from './styles.module.scss';
import { IoAdd } from "react-icons/io5";
import { useSidebar } from '@/contexts/SidebarContext';

interface AddNewProps {
    hasAddNew?: boolean;
    isViewedAdd?: boolean;
    onToggle?: () => void;
}

export default function AddNewComponent({ hasAddNew = false, isViewedAdd = false, onToggle }: AddNewProps) {
    const { isOpen, toggleSidebar } = useSidebar();

    const handleClick = () => {
        toggleSidebar();
        if (onToggle) {
            onToggle();
        }
    };

    return (
        <div className={styles.containerAdd}>
            {hasAddNew && !isViewedAdd ? (
                <button className={styles.buttonAdd} onClick={handleClick}>
                    <MdOutlineClose size={24} className={styles.add} />
                </button>
            ) : !hasAddNew ? (
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
