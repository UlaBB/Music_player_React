import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} className="song-image"></img>
            <h1 className="song-name">{currentSong.name}</h1>
            <h3 className="song-artist">{currentSong.artist}</h3>
        </div>
    )
}

export default Song;