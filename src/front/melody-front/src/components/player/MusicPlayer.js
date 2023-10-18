"use client"
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBackward, faPause, faPlay, faForward, faShuffle, faVolumeHigh, faVolumeXmark, faBars, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import '../../../src/app/(player)/musicPlayer/MusicPlayer.css';
import axios from 'axios';
import Info from "./Info";
import Controls from "./Controls";
import PlayPauseButton from "./PlayPauseButton";
import VolumeControl from "./VolumeControl";
import Album from "./Album";
import MyCustomPlayer from "./MyCustomPlayer";

library.add(
    faHeart,
    farHeart,
    faBackward,
    faPause,
    faPlay,
    faForward,
    faShuffle,
    faVolumeHigh,
    faVolumeXmark,
    faBars,
    faRepeat
);

// const url = "";
const url1 = "https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIEPCSLMNNB%2F20231018%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231018T052437Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkYwRAIgEHGmUcsB4%2BOWceJRL7tmoWmUEecby76u0lq6gjd8VaICIBQxyX9GiZ1dAcTIDuFyLOkhd9RoOL4UXLBLXfI%2BNrxZKvwCCJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMOTI3ODA5MjUzODk2Igz%2FtMmyF5zHT%2FPre6sq0AJKs7fZ6G%2BAjKY8f5UboezDXRw7v7zDRevy9mzlZhvmAQYOzbdmacrBj%2FhJQKLAVEV7%2BVZk8XP%2BtVBmY7MkSbFRfkwUmOMRgQKFsaR70RDHvzITVdU8V7PkKE7I4j8Gt%2FGUQuxXTvYHxgcknpsgkvknCJm7md7Vsn5w66jSAf4ylx0QIUXDPsAU5w5Wur39%2BylYkk7SIlcdglAntSzynO%2F6TMinmstkQWzPjDFZj785V4T%2B9r9v2kiSnIFrDtUgK%2Bjux6WQVWEVzRAXOkeeXv5LsJJdBS%2BAOBPzvVTM0PS0vog%2FlQXHwqmJTEOXSITDZyEPx69DgVtGpFuq4B766pVYpZ1viPo0r2Gnrysj%2FP5TC6enfgf66k7VQGh7XuKxxSl79hzweTFcDMvY0c9tDZyfyg8sw0ThRM3Y7Stm07yd%2FsAH29iamurlpYqVbYNf57gw%2B9W9qQY6nwHZgyfaO9ouD63SuZyXxdEvW4UvBuxuioDcj5gx6%2BHOVfKoIaPYO8WbmBQ7rxMX6hU2R1%2Fb2oLAzWRCbh1OSjrb2S3mF2VcCSChJfTCgo9X0uk8W6obrUwVyMcBF3Wy828HG7Ug6j4b9warCM0Ji0ZP0QO7dhxPtIpa2xKliicvp6k%2FjeidQAP4rbQsq6dLjblqG9zjKZO3G9rau8tQWBY%3D&X-Amz-Signature=0a04a13bc9954370feceba170cc2ee72203777b0df6916c9883b9f6954a929c1"
const url2 = "https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIEIKDS6DEW%2F20231017%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231017T052717Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDmFwLW5vcnRoZWFzdC0yIkcwRQIhAItOi%2B39av7QkgnLlSMqSP80MIut%2FYymxyoQ3bXAe4EDAiACqAUHj59gURrSix3w4N%2B%2BLQlngQSwgmuQ8J2d6YvkHSr8AgiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkyNzgwOTI1Mzg5NiIMeVM9gnc0V9ZrZ4uuKtACg4793BXp8P0eFbVVmj8teUbwpfguwdyG31LaflRwRbePXMi7yMOFQSsgqQFVxAfjTNp5XYfMVqCccV4qi8XxONWO8PQwuDWcAFvtjwNHlphqK83899jB3oY7R846ihGuDks77SpBsetAbTyIcjbO8NqmXMwNbDnSgFSw%2FZ4TVDPTzRwyg7a5Oqz6v%2Bczkd7rYJhpjWiwobg7JO%2B3K0KJLmlxLjRPFiqRY%2BAA9%2FZMFZ%2FxzzDnd1531ozlFoUemmvbzF0rM%2FjZzNUJWceueq%2FafKW2F9%2FGS0OvN4cqgQEaUqso2xL4YUEsqp%2FHDHMHI0Jrtx3uSDKkp8o3JHwr1QvSE4X6QIK%2B%2FrFE69ZCu2IQdWqPGdYHYXYoBZ44N8T%2BvnKFAmo6BthPLi%2BZKj3IUxVI50UtfrU0ZqlpAqZZj85tkSJbYRCifuH7ne2L55YgE8bEMIq2uKkGOp4Bl%2ByuAjbhhtSuXLIfSMKipaTFhTZEGXTvKbR0IegcBDxnPji%2BHkk2S94vKxxRCeR8iyBCkUbOsaSWSoCBp5akwpBW3FFaB4bo7is2M0rt5XKl91CnjXur2NEhdjgKOeHT3c8vUW0yZIclgW2%2FL89ME0xMEdM5JnRPsVBfSzV5sZB3rExPa2%2FVt9piDdnMzzeFy7kJhDmVb6lE9V4aylQ%3D&X-Amz-Signature=8fdde399fedbe40799faeb8f9ca90d29af72706b4e3f7854325c691227c5cf70";
const playlist = [
    {
        title: "Attention",
        url: url1,
    },
    {
        title: "Hype boy",
        url: url2,
    },
];

function MusicPlayer({ song = { title: 'Song Title' }, album = { singerName: 'Artist Name' } }) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); // audioRef 정의
    const [currentSongIndex, setCurrentSongIndex] = useState(0); // currentSongIndex를 정의하고 초기값 설정
    // const [isShuffled, setIsShuffled] = useState(false);
    // const [response, setResponse] = useState(null);
    const [songs, setSongs] = useState(null);

    const loadSongs = async () => {
        try {
            const response = await axios.get('/api/songs');
            setSongs(response.data);
        } catch (error) {
            console.error('Error loading songs:', error);
        }
    };

    useEffect(() => {
        loadSongs();
    }, []);

    const handleEnded = () => {
        // Repeat the current song
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const handleNextClick = () => {
        const nextSongIndex = (currentSongIndex + 1) % playlist.length;
        setCurrentSongIndex(nextSongIndex);
    };

    const handlePlayPause = () => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    return (
        <>
            {songs ? (
                <div className="musicPlayerContainer">
                    {/*<div>*/}
                    {/*    <h3 className="text-xl font-semibold mb-2">Song List</h3>*/}
                    {/*    <ul>*/}
                    {/*        {songs.map((song) => (*/}
                    {/*            <li key={song.songId} className="border-b py-2">*/}
                    {/*                <p>{song.title}</p>*/}
                    {/*                <p>{song.songInfo}</p>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    <div id="player" className="playerContainer">
                        {/*<Album/>*/}
                        {/*<Info*/}
                        {/*    song={songs[0]}*/}
                        {/*    album={album}*/}
                        {/*    isPlaying={isPlaying}*/}
                        {/*/>*/}
                        {playlist[currentSongIndex] && (
                            <div className="reactPlayerWrapper">
                                <MyCustomPlayer
                                    song={songs[0]}
                                    album={album}
                                    url={playlist[currentSongIndex].url}
                                    playing={isPlaying}
                                    handlePlayPause={handlePlayPause}
                                    audioRef={audioRef}
                                    playlist={playlist}
                                    currentSongIndex={currentSongIndex}
                                    controls
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    onProgress={(state) => setCurrentTime(state.playedSeconds)}
                                    onDuration={(duration) => setDuration(duration)}
                                    onEnded={handleEnded}
                                />
                            </div>
                        )}
                        {/*<Controls*/}
                        {/*    isPlaying={isPlaying}*/}
                        {/*    handlePlayPause={handlePlayPause}*/}
                        {/*    audioRef={audioRef}*/}
                        {/*    playlist={playlist}*/}
                        {/*    currentSongIndex={currentSongIndex}*/}
                        {/*    setCurrentSongIndex={setCurrentSongIndex}*/}
                        {/*/>*/}
                        {/*<VolumeControl></VolumeControl>*/}
                    </div>
                </div>
            ) : (
                <p>No songs available.</p>
            )}
        </>
    );
}

export default MusicPlayer;