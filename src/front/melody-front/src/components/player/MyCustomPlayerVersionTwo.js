import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Controls from './Controls'; // Import your Controls component
import TailwindPlayer from './TailwindPlayer';
import ReactPlayerController from "./ReactPlayerController"; // Import your TailwindPlayer component

const MyCustomPlayer2 = ({ song, playlistEl, list, currentSongIndex, setCurrentSongIndex }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const [volume, setVolume] = useState(50); // State for volume
    const [isMuted, setIsMuted] = useState(false); // State for muting
    const [isRepeatClicked, setIsRepeatClicked] = useState(false); // State for repeat
    const [isShuffleClicked, setIsShuffleClicked] = useState(false); // State for shuffle
    const [seeking, setSeeking] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSeek = (e) => {
        if (!seeking) {
            const seekTo = (e.nativeEvent.offsetX / e.target.clientWidth) * 100;

            // Ensure that seekTo is within valid bounds (0 to 100)
            if (!isNaN(seekTo) && seekTo >= 0 && seekTo <= 100) {
                setPlayed(seekTo);
                const seekToTime = (seekTo / 100) * duration;
                setCurrentTime(seekToTime);
            }
        }
    };

    useEffect(() => {
        if (isPlaying) {
            const timer = setInterval(() => {
                if (!seeking) {
                    setCurrentTime((prevTime) => prevTime + 1);
                    setPlayed((prevPlayed) => (currentTime / duration) * 100);
                }
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [isPlaying, currentTime, seeking, duration]);

    // Existing logic for play, pause, and more goes here

    const handleNextClick = () => {
        const nextSongIndex = (currentSongIndex + 1) % list.length;
        setCurrentSongIndex(nextSongIndex);
    };

    const handlePreviousClick = () => {
        const previousSongIndex = (currentSongIndex - 1 + list.length) % list.length;
        setCurrentSongIndex(previousSongIndex);
    };

    const onPlayPauseToggle = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePlayPause = () => {
        onPlayPauseToggle();
    };

    const handleToggleRepeat = () => {
        setIsRepeatClicked(!isRepeatClicked);
    };

    const handleToggleShuffle = () => {
        setIsShuffleClicked(!isShuffleClicked);
    };

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
        const newVolume = isMuted ? 50 : 0;
        setVolume(newVolume);
    };

    useEffect(() => {
        // You can add any custom logic here, such as a timer or progress tracking.
    }, [isPlaying, currentSongIndex, playlistEl, list]);

    return (
        <div>
            <TailwindPlayer
                playlistEl = {playlistEl}
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
                handleNextClick={handleNextClick}
                handlePreviousClick={handlePreviousClick}
                handleToggleRepeat={handleToggleRepeat}
                handleToggleShuffle={handleToggleShuffle}
                volume={volume}
                setVolume={setVolume}
                isMuted={isMuted}
                handleToggleMute={handleToggleMute}

            />

                <ReactPlayer
                    url={playlistEl.url}
                    playing={isPlaying}
                    controls={false} // Disable ReactPlayer's built-in controls
                    width={0} // Set width and height to 0 to hide ReactPlayer's UI
                    height={0}
                    onEnded={handleNextClick}
                    onPlay={() => setIsPlaying(true)} // Update isPlaying when playing
                    onPause={() => setIsPlaying(false)} // Update isPlaying when paused
                />
                {/*<ReactPlayerController*/}
                {/*    isPlaying={isPlaying}*/}
                {/*    handlePlayPause={handlePlayPause}*/}
                {/*    handleNextClick={handleNextClick}*/}
                {/*    handlePreviousClick={handlePreviousClick}*/}
                {/*    handleToggleRepeat={handleToggleRepeat}*/}
                {/*    handleToggleShuffle={handleToggleShuffle}*/}
                {/*    volume={volume}*/}
                {/*    setVolume={setVolume}*/}
                {/*    isMuted={isMuted}*/}
                {/*    handleToggleMute={handleToggleMute}*/}
                {/*/>*/}
                {/* Add more components or UI elements here as needed */}


        </div>


    );
};

export default MyCustomPlayer2;
