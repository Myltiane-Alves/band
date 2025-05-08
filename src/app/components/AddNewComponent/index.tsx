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
import Header from "../DashBoard/header";
import { useSidebar } from '@/contexts/SidebarContext';
import HeaderNewComponent from "./header";

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
        </div>
    );
}