// import React, {useEffect, useState} from 'react';
// import ReactPlayer from 'react-player';
// // import '../../../src/app/(player)/musicPlayer/MusicPlayer.css';
// import Controls from "./Controls";
//
// import styled from 'styled-components';
//
// import Album from "./Album";
// import Info from "./Info";
// import ReactPlayerController from "./ReactPlayerController";
//
//
// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }
//
// const PlayerContainer = styled.div`
//     background: white;
//     position: relative;
//     margin: auto;
//     width: 800px;
//     height: 500px;
//     border-radius: 10px;
//     box-shadow: 5px 5px 15px rgb(128, 128, 128);
//     transition: all 0.5s ease-in-out;
//     z-index: 0;
//
//     &:hover {
//         transform: scale(1.05);
//     }
// `;
//
// const AlbumCss = styled.div`
//     width: 100%;
//     height: 100%;
//     position: absolute;
// `;
//
// const AlbumImg = styled.div`
//     background: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.bugsm.co.kr%2Falbum%2Fimages%2F500%2F40885%2F4088574.jpg&type=sc960_832") no-repeat;
//     background-size: 300px;
//     border-radius: 10px;
//     box-shadow: 0px 10px 10px 0px rgb(128, 128, 128);
//     height: 300px;
//     width: 300px;
//     position: relative;
//     top: 0;
//     left: 50%;
//     transform: translate(-50%, -20%);
//     overflow: hidden;
// `;
//
// const ProgressBar = styled.div`
//   width: 100%;
//   height: 4px;
//   background-color: #ccc;
// `;
//
// const ProgressBarFilled = styled.div`
//   height: 100%;
//   width: ${(props) => props.progress}%;
//   background-color: #3d619e;
// `;
//
// const TimeDisplay = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 8px;
// `;
//
// const MyCustomPlayer = ({ song, album, url,list, currentSongIndex, setCurrentSongIndex }) => {
//
//
//
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [played, setPlayed] = useState(0);
//     const [volume, setVolume] = useState(50); // State for volume
//     const [isMuted, setIsMuted] = useState(false); // State for muting
//     const [isRepeatClicked, setIsRepeatClicked] = useState(false); // State for repeat
//     const [isShuffleClicked, setIsShuffleClicked] = useState(false); // State for shuffle
//     const [seeking, setSeeking] = useState(false);
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//
//     const handleSeek = (e) => {
//         if (!seeking) {
//             const seekTo = (e.nativeEvent.offsetX / e.target.clientWidth) * 100;
//
//             // Ensure that seekTo is within valid bounds (0 to 100)
//             if (!isNaN(seekTo) && seekTo >= 0 && seekTo <= 100) {
//                 setPlayed(seekTo);
//                 const seekToTime = (seekTo / 100) * duration;
//                 setCurrentTime(seekToTime);
//             }
//         }
//     };
//
//     useEffect(() => {
//         if (isPlaying) {
//             const timer = setInterval(() => {
//                 if (!seeking) {
//                     setCurrentTime((prevTime) => prevTime + 1);
//                     setPlayed((prevPlayed) => (currentTime / duration) * 100);
//                 }
//             }, 1000);
//
//             return () => {
//                 clearInterval(timer);
//             };
//         }
//     }, [isPlaying, currentTime, seeking, duration]);
//
//     const handleNextClick = () => {
//         const nextSongIndex = (currentSongIndex + 1) % list.length;
//         setCurrentSongIndex(nextSongIndex);
//     };
//
//     const handlePreviousClick = () => {
//         const previousSongIndex = (currentSongIndex - 1 + list.length) % list.length;
//         setCurrentSongIndex(previousSongIndex);
//     };
//
//     const onPlayPauseToggle = () => {
//         setIsPlaying(!isPlaying);
//     };
//
//     const handlePlayPause = () => {
//         onPlayPauseToggle(); // Call the provided function to toggle play/pause
//     };
//
//     const handleToggleRepeat = () => {
//         setIsRepeatClicked(!isRepeatClicked);
//     };
//
//     const handleToggleShuffle = () => {
//         setIsShuffleClicked(!isShuffleClicked);
//     };
//
//     const handleToggleMute = () => {
//         setIsMuted(!isMuted);
//         const newVolume = isMuted ? 50 : 0;
//         setVolume(newVolume);
//     };
//
//
//
//
//     return (
//         <PlayerContainer className="custom-music-player">
//             {/* Your custom UI elements, e.g., play/pause button */}
//             <AlbumImg></AlbumImg>
//             {/*<Info*/}
//             {/*    song={song}*/}
//             {/*    album={album}*/}
//             {/*    isPlaying={isPlaying}*/}
//             {/*/>*/}
//
//             <ProgressBar onClick={handleSeek}>
//                 <ProgressBarFilled progress={played} />
//             </ProgressBar>
//             <TimeDisplay>
//                 <span>{formatTime(currentTime)}</span>
//                 <span>{formatTime(duration)}</span>
//             </TimeDisplay>
//
//
//
//             {/* ReactPlayer for streaming */}
//             <ReactPlayer
//                 url={url}
//                 playing={isPlaying}
//                 controls={false} // Disable ReactPlayer's built-in controls
//                 width={0} // Set width and height to 0 to hide ReactPlayer's UI
//                 height={0}
//                 onEnded={handleNextClick}
//                 onPlay={() => setIsPlaying(true)} // Update isPlaying when playing
//                 onPause={() => setIsPlaying(false)} // Update isPlaying when paused
//             />
//
//             <ReactPlayerController
//                 isPlaying={isPlaying}
//                 handlePlayPause={handlePlayPause}
//                 handleNextClick={handleNextClick}
//                 handlePreviousClick={handlePreviousClick}
//                 handleToggleRepeat={handleToggleRepeat}
//                 handleToggleShuffle={handleToggleShuffle}
//                 volume={volume}
//                 setVolume={setVolume}
//                 isMuted={isMuted}
//                 handleToggleMute={handleToggleMute}
//             />
//         </PlayerContainer>
//     );
//
//
// }
//
// export default MyCustomPlayer;
