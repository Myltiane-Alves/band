"use client";
import Image from "next/image";
import styles from "../styles/page.module.scss";
import Formulario from "@/components/Formulario/Formulario";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={logo}
            alt="GoBand Logo"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className={styles.formContainer}>
          <header className={styles.header}>
            <div>
              <h1>Bem-vindo ao GoBand</h1>
            </div>

            <div>
              <p> Faça login agora mesmo!</p>
            </div>
          </header>
          <Formulario />

          <div>
            <Link href="#">Esqueceu sua senha?</Link>

            <small>Não tem uma conta? </small>
            <Link href="/signup">inscreva-se no GoBand</Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}
