"use client"
import styles from './styles.module.scss';
import PlayListComponent from "../components/PlayList";
import PlayListHeader from "../components/PlayList/header";

export default function PlayList() {
    return (
        <main>
            <div className={styles.container} >

                    <PlayListHeader />
                <div className={styles.containerPlayList}>

                    <PlayListComponent
                        onPlay={() => {}}
                        isPlaying={false}
                        title="Play List"
                        selectOptions={["Festas da igreja", "1", "2"]}
                        onSelectChange={(value) => console.log(value)}
                        imageSrc="/assets/music.png"
                        musicName="Só tu és santo"
                        band="Morada"
                        time="19:00"
                    />
                    <PlayListComponent
                        onPlay={() => {}}
                        isPlaying={false}
                        title="Play List"
                        selectOptions={["Festas da igreja", "1", "2"]}
                        onSelectChange={(value) => console.log(value)}
                        imageSrc="/assets/music.png"
                        musicName="Só tu és santo"
                        band="Morada"
                        time="19:00"
                    />
                    <PlayListComponent
                        onPlay={() => {}}
                        isPlaying={false}
                        title="Play List"
                        selectOptions={["Festas da igreja", "1", "2"]}
                        onSelectChange={(value) => console.log(value)}
                        imageSrc="/assets/music.png"
                        musicName="Só tu és santo"
                        band="Morada"
                        time="19:00"
                    />
                </div>
            </div>
        </main>
    )
}