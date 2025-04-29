"use client"
import Image from "next/image";
import styles from "../../styles/dashboard.module.scss";

import Link from "next/link";
import Sidebar from "@/components/Sidebar/Sidebar";
import Cipher from "../components/cipher";
import DashBoardComponent from "../components/DashBoard";
export default function DashBoard() {
  return (
    <div className={styles.container}>
      <main >
          <h1>Dashboard</h1>
          {/* <Sidebar /> */}
          <DashBoardComponent />
          {/* <Cipher /> */}
      </main>
  
    </div>
  );
}
