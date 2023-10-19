import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VolumeControl from "./VolumeControl";

function ReactPlayerController({
                      isPlaying,
                      handlePlayPause,
                      handleNextClick,
                      handlePreviousClick,
                      handleToggleRepeat,
                      handleToggleShuffle,
                      volume,
                      setVolume,
                      isMuted,
                      handleToggleMute,
                  }) {
    return (
        <div className="controls">
            <div className="repeat" onClick={handleToggleRepeat}>
                <FontAwesomeIcon icon="repeat" style={{ color: "#3d619e" }} />
            </div>

            <div className="previous" onClick={handlePreviousClick}>
                <FontAwesomeIcon icon="backward" />
            </div>

            {isPlaying ? (
                <div className="pause" onClick={handlePlayPause}>
                    <FontAwesomeIcon icon="pause" />
                </div>
            ) : (
                <div className="play" onClick={handlePlayPause}>
                    <FontAwesomeIcon icon="play" />
                </div>
            )}

            <div className="next" onClick={handleNextClick}>
                <FontAwesomeIcon icon="forward" />
            </div>

            <div className={`shuffle`} onClick={handleToggleShuffle}>
                <FontAwesomeIcon icon="shuffle" />
            </div>

            <div className="volume" onClick={handleToggleMute}>
                {isMuted ? (
                    <FontAwesomeIcon icon="volume-mute" />
                ) : (
                    <FontAwesomeIcon icon="volume-up" />
                )}
                <input
                    type="range"
                    value={isMuted ? 0 : volume}
                    min="0"
                    max="100"
                    step="1"
                    onChange={(e) => setVolume(e.target.value)}
                />
            </div>

            {volume > 0 && <VolumeControl volume={volume} setVolume={setVolume} />}
        </div>
    );
}

export default ReactPlayerController;
