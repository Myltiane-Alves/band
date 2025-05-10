import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosMusicalNote } from 'react-icons/io';
import { GiMusicalScore } from 'react-icons/gi';

interface ButtonProps {
    text: string;
    Icon: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    onClick: () => void;
}

export default function ButtonNewComponent({ text, Icon, type, onClick }: ButtonProps) {
    return (
        <div className={styles.container}>
            <button type={type} onClick={onClick}>
                {Icon}
                <a>

                    {text}
                </a>
            </button>
        </div>
    );
}