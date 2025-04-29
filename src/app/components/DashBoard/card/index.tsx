
import styles from './styles.module.scss';
import { IconType } from 'react-icons';

interface CardProps {
    icon: IconType;
    description: string;
    value: string;
    color: string;
    size: number;
}

export default function Card({ icon: Icon, description, value, color, size }: CardProps) {
    return (
        <div className={styles.container}>
            <Icon size={size} color={color} />
            <span>{description}</span>
        </div>
    );
}