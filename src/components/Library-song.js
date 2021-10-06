import React from "react";

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);
        audioRef.current.play();
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className="librarySong-container">
            <img alt={song.name} src={song.cover} className="librarySong-image"></img>
            <div className="librarySong-description">
                <h3 className="librarySong-name">{song.name}</h3>
                <h4 className="librarySong-artist">{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;