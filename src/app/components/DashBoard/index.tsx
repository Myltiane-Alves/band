import { MdMusicNote, MdOutlineCalendarMonth } from "react-icons/md";
import Card from "./card";
import Header from "./header";
import styles from "./styles.module.scss";
import { BsMusicNoteList } from "react-icons/bs";
import Notice from "./notice";
import calendar from "../../../../public/assets/calendar.png";
import PlayListCard from "./playListCard";
import { useSidebar } from '@/contexts/SidebarContext';

export default function DashBoardComponent() {
    const { toggleSidebar } = useSidebar();

    return (
        <div className={styles.container}>
            <Header onToggleSidebar={toggleSidebar} />
            <div className={styles.containerCards}>
                <Card 
                    icon={MdOutlineCalendarMonth}
                    description="Proximos Eventos"
                    value="10"
                    color="#A688FF"
                    size={30}
                />
                <Card 
                    icon={MdMusicNote}
                    description="Playlist"
                    value="10"
                    color="#A688FF"
                    size={30}
                />
                <Card 
                icon={BsMusicNoteList}
                    description="Cifras"
                    value="10"
                    color="#A688FF"
                    size={30}
                />
            </div>
            <div className={styles.containerNotices}>
                <Notice 
                    img={calendar}
                    description="Ensaio da Santa ceia"
                    color="#A688FF"
                    size={100}
                    date=" 2024-01-01 16:40h"
                    music=" Ele vem Gabriel Guedes"
                    artist="Artista 1"
                />
                <Notice 
                    img={calendar}
                    description="Ensaio culto Nova geração"
                    color="#A688FF"
                    size={100}
                    date=" 2024-01-01 16:40h"
                    music=" Ele vem Gabriel Guedes"
                    artist="Artista 1"
                />
                <Notice 
                    img={calendar}
                    description="Ensaio culto Nova geração"
                    color="#A688FF"
                    size={100}
                    date=" 2024-01-01 16:40h"
                    music=" Ele vem Gabriel Guedes"
                    artist="Artista 1"
                />
            </div>
            <div className={styles.containerPlayList}>
                <PlayListCard 
                    url="https://www.youtube.com/watch?v=NLTi5YXJTtU"
                    title="Na unção de Deuss"
                    description="Attos 2 worship"
                    tone="TOM: C#"
                />
                <PlayListCard 
                    url="https://www.youtube.com/watch?v=NLTi5YXJTtU"
                    title="Na unção de Deuss"
                    description="Attos 2 worship"
                    tone="TOM: C#"
                />
                <PlayListCard 
                    url="https://www.youtube.com/watch?v=NLTi5YXJTtU"
                    title="Na unção de Deuss"
                    description="Attos 2 worship"
                    tone="TOM: C#"
                />
            </div>
        </div>
    );
}
// https://www.youtube.com/watch?v=NLTi5YXJTtU