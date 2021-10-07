import React from "react";

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);
        //Add active state

        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);

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
        <div
            onClick={songSelectHandler}
            className={`librarySong-container ${song.active ? 'selected' : ""}`} >
            <img alt={song.name} src={song.cover} className="librarySong-image"></img>
            <div className="librarySong-description">
                <h3 className="librarySong-name">{song.name}</h3>
                <h4 className="librarySong-artist">{song.artist}</h4>
            </div>
        </div >
    )
}

export default LibrarySong;