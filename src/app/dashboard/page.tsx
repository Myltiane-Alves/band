"use client"
import Image from "next/image";
import styles from "../../styles/dashboard.module.scss";
import Link from "next/link";
import Cipher from "../components/cipher";
import DashBoardComponent from "../components/DashBoard";
import NotificationComponent from "../components/Notifications";
import AddNewComponent from "../components/AddNewComponent";
import PlayListComponent from "../components/PlayList";

export default function DashBoard() {
  return (
    <div className={styles.container}>
      <main>
        <DashBoardComponent />
        {/* <Cipher /> */}
        {/* <NotificationComponent /> */}
        {/* <AddNewComponent /> */}
        {/* <PlayListComponent /> */}
      </main>
    </div>
  );
}
