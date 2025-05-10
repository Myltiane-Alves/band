
import { useState, useEffect } from "react";
import styles from './styles.module.scss';
import { useSidebar } from '@/contexts/SidebarContext';
import HeaderNewComponent from "./header";
import ButtonNewComponent from "./Button";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosMusicalNote } from 'react-icons/io';
import { GiMusicalScore } from 'react-icons/gi';
export default function AddNewComponent() {
    const { isOpen, toggleSidebar } = useSidebar();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIfMobile = () => {
            const mobileBreakpoint = 767;
            setIsMobile(window.innerWidth <= mobileBreakpoint);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className={styles.container}>
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.containerHeader}>
                    <HeaderNewComponent onToggleSidebar={toggleSidebar} />
                </div>
                <header className={styles.containerHeader}>
                    <h2>
                        Adicionar
                    </h2>
                </header>
                <div className={styles.containerNotices}>
                    <ButtonNewComponent
                        Icon={<FaRegCalendarAlt size={30} />}
                        text="Adicionar Novo Evento"
                        type="button"
                        onClick={() => console.log('Adicionar Novo Evento')}
                    />
                    <ButtonNewComponent
                        Icon={<FaRegCalendarAlt size={30} />}
                        text="Adicionar Nova Música "
                        type="button"
                        onClick={() => console.log('Adicionar Novo Evento')}
                    />
                    <ButtonNewComponent
                        Icon={<FaRegCalendarAlt size={30} />}
                        text="Adicionar Nova Cifra 
"
                        type="button"
                        onClick={() => console.log('Adicionar Novo Evento')}
                    />
               
              
                </div>
            </aside>
        </div>
    );
}