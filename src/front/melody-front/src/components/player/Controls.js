import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import VolumeControl from "./VolumeControl";

function Controls({ isPlaying, handlePlayPause, audioRef, playlist, currentSongIndex, setCurrentSongIndex }) {
    const [volume, setVolumeState] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    const [isRepeatClicked, setIsRepeatClicked] = useState(false);
    const [isShuffleClicked, setIsShuffleClicked] = useState(false);


    const setVolume = (newVolume) => {
        if (audioRef && audioRef.current) {
            setVolumeState(newVolume);
            audioRef.current.volume = newVolume / 100;
        }
    };

    function handleToggle(type) {
        if (type === "mute") {
            setIsMuted(!isMuted);
            const newVolume = isMuted ? 50 : 0;
            setVolume(newVolume);
        } else if (type === "repeat") {
            setIsRepeatClicked(!isRepeatClicked);
            if (audioRef && audioRef.current) {
                audioRef.current.loop = isRepeatClicked;
            }
        } else if (type === "shuffle") {
            setIsShuffleClicked(!isShuffleClicked);
            if (isShuffleClicked) {
                const shuffledPlaylist = shuffleArray(playlist);
                // Update the 'playlist' state with the shuffled playlist
                // playlistStateSetter(shuffledPlaylist);
            }
        }
    }

    const shuffleArray = (array) => {
        if (!Array.isArray(array) && !isIterable(array)) {
            // array가 반복 가능한 객체가 아닌 경우 빈 배열 반환
            return [];
        }
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    // 반복 가능한 객체인지 확인하는 함수
    function isIterable(obj) {
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    const handlePreviousClick = () => {
        if (audioRef && audioRef.current && audioRef.current.currentTime <= 2) {
            // Calculate the index of the previous song
            const prevSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;

            // Update the audio source and play the previous song
            audioRef.current.src = playlist[prevSongIndex].url;
            audioRef.current.currentTime = 0;
            audioRef.current.play();

            // Update the current song index (optional??)
            setCurrentSongIndex(prevSongIndex);
        } else if (audioRef && audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="controls">
            <div className={`repeat ${isRepeatClicked ? 'clicked' : ''}`} onClick={() => handleToggle("repeat")}>
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

            <div className="next">
                <FontAwesomeIcon icon="forward" />
            </div>

            <div className={`shuffle ${isShuffleClicked ? 'clicked' : ''}`} onClick={() => handleToggle("shuffle")}>
                <FontAwesomeIcon icon="shuffle" />
            </div>

            <div className="volume" onClick={() => handleToggle("mute")}>
                {isMuted ? (
                    <FontAwesomeIcon icon="volume-mute" />
                ) : (
                    <FontAwesomeIcon icon="volume-up" />
                )}
                <input
                    type="hidden"
                    value={isMuted ? 0 : 50}
                    min="0"
                    max="100"
                    step="1"
                    onChange={(e) => {
                        setVolume(e.target.value);
                        audioRef.current.volume = e.target.value / 100;
                    }}
                />
            </div>

            {volume > 0 && <VolumeControl volume={volume} setVolume={setVolume} />}

            <div className="option">
                <FontAwesomeIcon icon="bars" />
            </div>

        </div>
    )
}

export default Controls;