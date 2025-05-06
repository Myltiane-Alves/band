'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiLogOut, FiMenu, FiSettings, FiUser, FiX } from "react-icons/fi";
import styles from '../../styles/sidebar.module.scss';
import Image from "next/image";
import image from "../../../public/assets/logo.png";
export default function Sidebar() {
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
        <div className={styles.containerLogo}>
          <div className={styles.logo}>

            <Image 
              src={image}
              width={100}
              // height={100}
            />
          </div>
         
          {isMobile && (
            <button 
              className={styles.menuButton} 
              onClick={toggleSidebar}
              style={{ left: isOpen ? '240px' : '1rem' }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}

        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link} onClick={() => isMobile && setIsOpen(false)}>
            <FiHome className={styles.icon} />
            <span>Início</span>
          </Link>
          <Link href="/perfil" className={styles.link} onClick={() => isMobile && setIsOpen(false)}>
            <FiUser className={styles.icon} />
            <span>Perfil</span>
          </Link>
          <Link href="/configuracoes" className={styles.link} onClick={() => isMobile && setIsOpen(false)}>
            <FiSettings className={styles.icon} />
            <span>Configurações</span>
          </Link>
        </nav>

        <div className={styles.bottom}>
          <Link href="/logout" className={styles.link} onClick={() => isMobile && setIsOpen(false)}>
            <FiLogOut className={styles.icon} />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}