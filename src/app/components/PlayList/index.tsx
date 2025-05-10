import { FaRegCalendarAlt } from 'react-icons/fa';
import ButtonNewComponent from '../AddNewComponent/Button';
import styles from './styles.module.scss';
import { FaCirclePlay } from 'react-icons/fa6';
import { IoIosMusicalNote } from 'react-icons/io';
export default function PlayListComponent () {

    return (
        <div className={styles.container}>
            <header className={styles.containerHeader}>
                    <h2>Play List</h2>

                    <div className={styles.containerSelect}>
                        <select>
                            <option value="0"> Festas da igreja</option>
                            <option value="0"> 1</option>
                            <option value="0"> 2</option>
                        </select>
                    </div>
            </header>
            <div className={styles.content}>
                    <div className={styles.containerIcon}>

                        <IoIosMusicalNote size={30} color='#d7d7d7'/>
                    </div>
                    <div className={styles.containerInfo}>
                        <p>Só tu és santo</p>
                        <div className={styles.description}>

                            <span>Morada</span>
                            <span>19:00</span>
                        </div>
                    </div>
                 
                <button>
                <FaCirclePlay />
                </button>
            </div>
        </div>
    )
}