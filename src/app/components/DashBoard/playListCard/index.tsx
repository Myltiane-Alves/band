
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
            <div className={styles.containerVideo}>
                <iframe 
                    src={url.replace('watch?v=', 'embed/')}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.containerInfo}>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>{tone}</h4>
            </div>
        </div>
    );
}