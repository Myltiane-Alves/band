"use client"
import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Formulario from "@/components/Formulario/Formulario";
import  logo from "../../public/assets/logo.png";
import Link from "next/link";
export default function DashBoard() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>

          <Image
            className={styles.logo}
            src={logo}
            alt="Easy Band Logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className={styles.formContainer}>
          <header className={styles.header}>
            <div>

              <h1>Seja Bem-vindo</h1>
            </div>

            <div>

              <p> Seu sistema de gerenciamento de banda</p>
            </div>
          </header>
          <Formulario />

          <div>
            <Link href="#">Esqueceu sua senha?</Link>
            <Link href="/signup">Não tem uma conta?</Link>
          </div>
        </div>
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
