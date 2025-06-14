"use client"

import PlayListComponent from "../components/PlayList";

export default function PlayList() {
    return (
        <main>
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
        </main>
    )
}