
import Image from 'next/image';
import styles from './styles.module.scss';


interface CardProps {
    img: string;
    description: string;
    value: string;
    color: string;
    size: number;
    date: string;
    hour: string;
    music: string;
    artist: string;
}

export default function Notice({ img: img, description, value, color, size, date, hour, music, artist }: CardProps) {
    return (
        <div className={styles.container}>
           

                <Image src={img} alt={description} width={size} height={size} />
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