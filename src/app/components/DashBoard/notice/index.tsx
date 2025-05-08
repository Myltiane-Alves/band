import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

interface NoticeProps {
    img: StaticImageData;
    description: string;
    color: string;
    size: number;
    date: string;
    music: string;
    artist: string;
}

export default function Notice({ img, description, color, size, date, music, artist }: NoticeProps) {
    return (
        <div className={styles.container}>
            <div className={styles.cardImage}>

                <Image src={img.src} alt={description} width={size} height={size} />
            </div>
            <div className={styles.cardDescription}>    
                
                <h2 className={styles.title}>{description}</h2>
                <div className={styles.contentDate}>
                    <h3 className={styles.subTitle}>Data:</h3>
                    <span className={styles.description}>{date}</span>
                </div>
                <div className={styles.contentMusic}>
                    <h3 className={styles.subTitle}>Música:</h3>
                    <span className={styles.description}>{music}</span>
                </div>
            </div>
        </div>
    );
}