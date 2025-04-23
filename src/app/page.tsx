"use client"
import Image from "next/image";
import styles from "../styles/page.module.scss";
import Formulario from "@/components/Formulario/Formulario";
import  logo from "../../public/assets/logo.png";
import Link from "next/link";
import AppRoutes from "./routes/routes";
export default function Home() {
  return (
    <AppRoutes />
  );
}
