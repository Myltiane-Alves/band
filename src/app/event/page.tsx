"use client"
import styles from './styles.module.scss';
import PlayListComponent from "../components/PlayList";
import PlayListHeader from "../components/PlayList/header";
import SidebarForm from '../components/FormEvent';

export default function Event() {
    return (
        <main>
            <div className={styles.container} >

                    
                <SidebarForm  />
            </div>
        </main>
    )
}