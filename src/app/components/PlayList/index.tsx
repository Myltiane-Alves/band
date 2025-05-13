import { FaRegCalendarAlt } from 'react-icons/fa';
import ButtonNewComponent from '../AddNewComponent/Button';
import styles from './styles.module.scss';
import { FaCirclePlay } from 'react-icons/fa6';
import { IoIosMusicalNote } from 'react-icons/io';
import Image from 'next/image';
import music from "../../../../public/assets/music.png";
import play from "../../../../public/assets/play.png";
import { useState } from 'react';

export default function PlayListComponent () {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        // Here you can add your audio playing logic
    };

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
                        <Image src={music} width={70} alt="Music icon"/>
                        <IoIosMusicalNote size={30} color='#d7d7d7'/>
                    </div>
                    <div className={styles.containerInfo}>
                        <p>Só tu és santo</p>
                        <div className={styles.description}>
                            <span>Morada</span>
                            <span>19:00</span>
                        </div>
                    </div>
                    <div className={styles.containerButton}>
                        <button onClick={handlePlay} aria-label={isPlaying ? "Pause music" : "Play music"}>
                            <Image src={play} width={100} alt="Play button"/>
                        </button>
                    </div>
            </div>
        </div>
    )
}