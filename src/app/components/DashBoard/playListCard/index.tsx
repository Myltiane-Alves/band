
import Button from '@/components/Button/Button';
import styles from './styles.module.scss';
import { IconType } from 'react-icons';

interface CardProps {
    url: string;
    title: string;
    description: string;
    tone: string;
}

export default function PlayListCard({ url, title, description, tone }: CardProps) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>Playlist da semana</h2>
            </header>
            <div className={styles.content}>

                <div className={styles.containerVideo}>
                    <iframe 
                        src={url.replace('watch?v=', 'embed/')}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{borderRadius: '10px'}}
                    ></iframe>
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.containerInfoDescription}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p className={styles.tone}>{tone}</p>
                    </div>
                    <div className={styles.containerInfoButton}>
                        <button 
                            type='button'
                            onClick={() =>console.log('teste')}
                            
                        
                        >

                            Go
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}