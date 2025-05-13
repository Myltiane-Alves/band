'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiLogOut, FiMenu, FiSettings, FiUser, FiX } from "react-icons/fi";
import styles from '../../styles/sidebar.module.scss';
import Image from "next/image";
import image from "../../../public/assets/logo.png";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileBreakpoint = 767;
      setIsMobile(window.innerWidth <= mobileBreakpoint);
      
      // Se não for mobile, garante que a sidebar esteja aberta
      if (window.innerWidth > mobileBreakpoint) {
        // Você pode querer adicionar uma lógica aqui para forçar abrir no desktop
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.containerLogo}>
          <div className={styles.logo}>
            <Image 
              src={image}
              width={100}
              alt="Logo"
            />
          </div>
        </div>

        {isMobile && (
          <button 
            className={styles.menuButton} 
            onClick={toggleSidebar}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}

        <nav className={styles.nav}>
          <Link href="/" className={styles.link} onClick={handleLinkClick}>
            <FiHome className={styles.icon} />
            <span>Início</span>
          </Link>
          <Link href="/perfil" className={styles.link} onClick={handleLinkClick}>
            <FiUser className={styles.icon} />
            <span>Perfil</span>
          </Link>
          <Link href="/configuracoes" className={styles.link} onClick={handleLinkClick}>
            <FiSettings className={styles.icon} />
            <span>Configurações</span>
          </Link>
        </nav>

        <div className={styles.bottom}>
          <Link href="/logout" className={styles.link} onClick={handleLinkClick}>
            <FiLogOut className={styles.icon} />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}