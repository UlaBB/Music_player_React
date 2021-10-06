import React from "react";
import LibrarySong from "./Library-song";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        setCurrentSong={setCurrentSong}
                        song={song}
                        songs={songs}
                        id={song.id}
                        key={song.key}
                        audioRef={audioRef}
                        isPlaying={isPlaying} />
                ))}
            </div>
        </div>
    )
}

export default Library;