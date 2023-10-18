import React from 'react';
import ReactPlayer from 'react-player';
import '../../../src/app/(player)/musicPlayer/MusicPlayer.css';
import Controls from "./Controls";
import Album from "./Album";
import Info from "./Info";
const MyCustomPlayer = ({ song, album, url, isPlaying, onPlayPauseToggle, handlePlayPause, audioRef, playlist, currentSongIndex, setCurrentSongIndex }) => {
    return (
        <div className="custom-music-player">
            {/* Your custom UI elements, e.g., play/pause button */}
            <Album/>
            <Info
                song={song}
                album={album}
                isPlaying={isPlaying}
            />

            <button
                className={`play-button ${isPlaying ? 'playing' : 'paused'}`}
                onClick={onPlayPauseToggle}
            >
                {/* Your play/pause icon or content */}
            </button>



            {/* ReactPlayer for streaming */}
            <ReactPlayer
                url={url}
                playing={isPlaying}
                controls={false} // Disable ReactPlayer's built-in controls
                width={0} // Set width and height to 0 to hide ReactPlayer's UI
                height={0}
            />

            <Controls
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
                audioRef={audioRef}
                playlist={playlist}
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
            />
        </div>
    );
}

export default MyCustomPlayer;
