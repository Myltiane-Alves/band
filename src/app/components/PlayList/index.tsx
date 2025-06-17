import styles from './styles.module.scss';
import Image from 'next/image';
import music from "../../../../public/assets/music.png";
import play from "../../../../public/assets/play.png";
import { useState } from 'react';

interface PlayListProps {
    onPlay: () => void;
    isPlaying: boolean;
    title: string;
    selectOptions: string[];
    onSelectChange: (value: string) => void;
    imageSrc: string;
    musicName: string;
    band: string;
    time: string;
}

export default function PlayListComponent ({
    onPlay,
    // isPlaying,
    title,
    selectOptions,
    onSelectChange,
    imageSrc,
    musicName,
    band,
    time
}:  PlayListProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
    
        <div className={styles.container}>
            <div className={styles.content}>
                    <div className={styles.containerIcon}>
                        <Image src={music} width={70} alt="Music icon"/>
                        {/* <IoIosMusicalNote size={30} color='#d7d7d7'/> */}
                    </div>
                    <div className={styles.containerInfo}>
                        <p>Só tu és santo</p>
                        <div className={styles.description}>
                            <span className={styles.music}>Morada</span>
                            <span className={styles.hour}>19:00</span>
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