"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Formulario from "@/components/Formulario/Formulario";
import  logo from "../../public/assets/logo.png";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>

          <Image
            className={styles.logo}
            src={logo}
            alt="Easy Band Logo"
            width={180}
            height={38}
            priority
          />
        </div>
        
        <Formulario />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
    
        
      </footer>
    </div>
  );
}
