'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiLogOut, FiMenu, FiSettings, FiUser, FiX } from "react-icons/fi";
import styles from './styles.module.scss';
import Image from "next/image";
import image from "../../../public/assets/logo.png";
import Notice from "../DashBoard/notice";
import calendar from "../../../../public/assets/calendar.png";
import music from "../../../../public/assets/music.png"
export default function NotificationComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const checkIfMobile = () => {
            const mobileBreakpoint = 767;
            setIsMobile(window.innerWidth <= mobileBreakpoint);

            // Se NÃO for mobile, força a sidebar a ficar aberta
            if (window.innerWidth > mobileBreakpoint) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkIfMobile(); // Verifica no carregamento
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    return (
        <>

            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.containerNotices}>
                    <Notice
                        img={calendar}
                        description="Ensaio da Santa ceia"
                        color="#A688FF"
                        size={70}
                        date=" 2024-01-01 16:40h"
                        music=" Ele vem Gabriel Guedes"
                        artist="Artista 1"
                    />
                    <Notice
                        img={calendar}
                        description="Ensaio culto Nova geração"
                        color="#A688FF"
                        size={70}
                        date=" 2024-01-01 16:40h"
                        music=" Ele vem Gabriel Guedes"
                        artist="Artista 1"
                    />
                    <Notice
                        img={music}
                        description="Nova Musica Adicionada"
                        color="#A688FF"
                        size={70}
                        date=" 2024-01-01 16:40h"
                        music="So tu es santo  Morada"
                        artist="Artista 1"
                    />
                    <Notice
                        img={music}
                        description="Nova Cifra Adicionada"
                        color="#A688FF"
                        size={70}
                        date=" 2024-01-01 16:40h"
                        music="So tu es santo  Morada"
                        artist="Artista 1"
                    />
                </div>
            </aside>
        </>
    );
}