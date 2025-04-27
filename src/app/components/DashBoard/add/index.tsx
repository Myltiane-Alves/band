import { MdAddCircle } from "react-icons/md";
import styles from './styles.module.scss';
import { IoAdd } from "react-icons/io5";
export default function Add() {
    return (
        <div className={styles.containerAdd}>
            {/* <MdAddCircle size={24} className={styles.add}  color="#ffffff"/> */}
            <IoAdd size={24} className={styles.add}  />
        </div>
    );
}
