import Link from "next/link";
import { useState } from "react";
import { FiHome, FiLogOut, FiMenu, FiSettings, FiUser } from "react-icons/fi";
import styles from '@/styles/Sidebar.module.scss';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => setIsOpen(!isOpen);
  
    return (
      <>
        {/* Toggle Button for Mobile */}
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>
  
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
          <div className={styles.logo}>MinhaLogo</div>
  
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
              <FiHome className={styles.icon} />
              <span>Início</span>
            </Link>
            <Link href="/perfil" className={styles.link}>
              <FiUser className={styles.icon} />
              <span>Perfil</span>
            </Link>
            <Link href="/configuracoes" className={styles.link}>
              <FiSettings className={styles.icon} />
              <span>Configurações</span>
            </Link>
          </nav>
  
          <div className={styles.bottom}>
            <Link href="/logout" className={styles.link}>
              <FiLogOut className={styles.icon} />
              <span>Sair</span>
            </Link>
          </div>
        </aside>
      </>
    );
  }