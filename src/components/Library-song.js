import React from "react";

const LibrarySong = ({ song, setCurrentSong, songs, id }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        console.log(selectedSong);
        setCurrentSong(selectedSong[0]);
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