"use client"
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBackward, faPause, faPlay, faForward, faShuffle, faVolumeHigh, faVolumeXmark, faBars, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
// import '../../../src/app/(player)/musicPlayer/MusicPlayer.css';
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
const url1 = "https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIENGR6FRCC%2F20231019%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231019T084321Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAOl7a%2Bhys7vaiERWcLC3QDpqf%2B%2FP166uUJeMsY3qCtzuAiEA130L%2BaHKJ5oXKPMRMmOHVkA0sKFM0ChHamSG8mh1ErAq%2FAIIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5Mjc4MDkyNTM4OTYiDBneFzmq1Ns4j9UdiCrQAmFM72JLD75ZwZ9GbyRmkPRD2Vyb4T1hygCKKdv4KruOPyt6CWXTV5%2FL9hs5E6OPyI4lGhyLaqErw8F99WJMU%2FQhDhv7iECYaJek93xuE6o0Vf7koOtOsgy6suDVL41A6yVoDy3Q4etpETCi5pHJ4UO4dpoEZl1X1miWC44JCLOoDjeGBEpgUV52wkaLhzVSZjiq72glMrAMBOUXLiNw7NuHUgRG1UKgUBd1fs2UygjlGbsEH%2BOvDbiiLY4S6owlYRnKcCA0zguJoeIuBifcsFOgCmXx2DJNX1uIlLusLuy3LNPxXqme3VfkrL4htDUIYXY6%2FwAuaDlyszT3BnmK%2B4mBd7%2FhMaVHyg0KHEwzDQLOXljcQy0irrca4XV%2B2F9v8MbYGmFtDfi5yTM%2FP%2FNrF0sC5VnSi%2FPFlkrDBuVP6AcZssSpoI4AfsipqoU0Pl3uoTCd2MOpBjqdAZRyx0rDsELO5v0ZD7%2FfK9gjrseu0tnXuPwJ8FODG14kS3iEhzvKw5MLgy0OkWyYcaSmZRmriaE542dBiWnhAL71Ic6L4dt6LmTkIsVqH0Hc1wUspbrhjMo8lI%2Fz1vDJDH5ik6ozPYwzPsnihj5laJjjVD%2Fyn5bpC5qm7vn3eJ2wH1wEcI8w4AbcqMgQDFmUoFvjUIfWKxRSJCv5yeE%3D&X-Amz-Signature=3e438c6ddbb3b9485b60cc4162926738c4d2bbdd0226d581ef13f7df7f198944"
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





    return (
        <>
            {songs ? (
                <div className="mt-16 musicPlayerContainer">
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
                        {playlist[currentSongIndex] && (
                            <div className="reactPlayerWrapper">
                                <MyCustomPlayer
                                    song={songs[0]}
                                    album={album}
                                    url={playlist[currentSongIndex].url}
                                    currentSongIndex={currentSongIndex}
                                    setCurrentSongIndex={setCurrentSongIndex}
                                />
                            </div>
                        )}

                    </div>
                </div>
            ) : (
                <p>No songs available.</p>
            )}
        </>
    );
}

export default MusicPlayer;