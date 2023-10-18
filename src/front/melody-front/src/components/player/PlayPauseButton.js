import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PlayPauseButton({ isPlaying, handlePlayPause }) {
    return (
        <button className="playButton" onClick={handlePlayPause}>
            {isPlaying ? (
                <FontAwesomeIcon icon="pause" className="playPauseIcon" />
            ) : (
                <FontAwesomeIcon icon="play" className="playPauseIcon" />
            )}
        </button>
    );
};

export default PlayPauseButton;