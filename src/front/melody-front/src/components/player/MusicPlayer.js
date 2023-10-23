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
import MyCustomPlayerVersionTwo from "./MyCustomPlayerVersionTwo";

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
const url1 ="https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIEPDAOYUUL%2F20231023%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231023T003823Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkYwRAIgBL1bOYOq3rS101pSL%2FpEFot9lxTJ41fIuxjTCTZxOY0CIAlhx4FeHQ0J8F7%2BZb09Pi7skCfkDyADo48nCvSQWAImKvMCCCIQABoMOTI3ODA5MjUzODk2IgzSpjSpgLovWpzcUD4q0AKKA3TI2VRHUA2SUNaEvTQa2o%2BfxK%2FmJixsQmhmdmlddi10yDetB%2FBWRKTRB6zcqxfneVKLYfa%2BVUujnxMW%2FoN92knkWIhMmm%2BSkvs9wRFvcwN%2BiKeKyt6kPBOsmCBSH5hX%2FfSOZ1UM1%2Fe7r8e7YbxiUBcqM9HCkLRfDcDQReWiXzjUE%2BIi0OMFbHD6ua7C%2Ff5Pv042s8f%2BO8srG4Y5DycfoM7DlZlZ7xlFw3je%2FYTyeA1rU9w2Vjk3%2FmDkhX7yscXcLPYOoo7LWtA%2BEIpfN15F9hj%2B34gNI7hQwkdHuqPcrXBBSzNX21NDZsJ6sjac5g%2BIKzciU0Gqsj62MlUkkCw%2BpiLJZG3viD3yxPQ7UVvWGRS2JVfifhwZ46K4th%2B7qic9mGalZwuNyOkCjprAlpRDND8jxdBCzzKh6TKqiLSumfGaAk%2Bomr2IS3NnXooXXqEwyP%2FWqQY6nwEur4X1M7AoUEjTjX1gmq0oAy4dO%2Bql2N0gF7JOeOCuExySpipsnks1iFSFvEyoFsy0UQcI2UoAHbuKKfRUcBSusDfIzQkStmbA1hylh6zQv7nabuC9yrf3az0ibBCx9BxKS4g%2BUhIroVY075ISoGdf0mD4tTqqeQai4mxu%2F%2FiTEVC2ilGovOtzezGoZGCc4%2FDjVPYY02ri8k2vSyZ0WqA%3D&X-Amz-Signature=7ca17511352493595a9559c1b4d14514393e44b1617119b76680593ac201c1b4"
const url2 = "https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIEIKDS6DEW%2F20231017%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231017T052717Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aDmFwLW5vcnRoZWFzdC0yIkcwRQIhAItOi%2B39av7QkgnLlSMqSP80MIut%2FYymxyoQ3bXAe4EDAiACqAUHj59gURrSix3w4N%2B%2BLQlngQSwgmuQ8J2d6YvkHSr8AgiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkyNzgwOTI1Mzg5NiIMeVM9gnc0V9ZrZ4uuKtACg4793BXp8P0eFbVVmj8teUbwpfguwdyG31LaflRwRbePXMi7yMOFQSsgqQFVxAfjTNp5XYfMVqCccV4qi8XxONWO8PQwuDWcAFvtjwNHlphqK83899jB3oY7R846ihGuDks77SpBsetAbTyIcjbO8NqmXMwNbDnSgFSw%2FZ4TVDPTzRwyg7a5Oqz6v%2Bczkd7rYJhpjWiwobg7JO%2B3K0KJLmlxLjRPFiqRY%2BAA9%2FZMFZ%2FxzzDnd1531ozlFoUemmvbzF0rM%2FjZzNUJWceueq%2FafKW2F9%2FGS0OvN4cqgQEaUqso2xL4YUEsqp%2FHDHMHI0Jrtx3uSDKkp8o3JHwr1QvSE4X6QIK%2B%2FrFE69ZCu2IQdWqPGdYHYXYoBZ44N8T%2BvnKFAmo6BthPLi%2BZKj3IUxVI50UtfrU0ZqlpAqZZj85tkSJbYRCifuH7ne2L55YgE8bEMIq2uKkGOp4Bl%2ByuAjbhhtSuXLIfSMKipaTFhTZEGXTvKbR0IegcBDxnPji%2BHkk2S94vKxxRCeR8iyBCkUbOsaSWSoCBp5akwpBW3FFaB4bo7is2M0rt5XKl91CnjXur2NEhdjgKOeHT3c8vUW0yZIclgW2%2FL89ME0xMEdM5JnRPsVBfSzV5sZB3rExPa2%2FVt9piDdnMzzeFy7kJhDmVb6lE9V4aylQ%3D&X-Amz-Signature=8fdde399fedbe40799faeb8f9ca90d29af72706b4e3f7854325c691227c5cf70";
const playlist = [
    {
        title: "Attention",
        artist : "New Jeans",
        url: url1,
    },
    {
        title: "Hype boy",
        artist : "New Jeans",
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

                    {/*<div id="player" className="playerContainer">*/}
                    {/*    {playlist[currentSongIndex] && (*/}
                    {/*        <div className="reactPlayerWrapper">*/}
                    {/*            <MyCustomPlayer*/}
                    {/*                song={songs[0]}*/}
                    {/*                album={album}*/}
                    {/*                url={playlist[currentSongIndex].url}*/}
                    {/*                currentSongIndex={currentSongIndex}*/}
                    {/*                setCurrentSongIndex={setCurrentSongIndex}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    )}*/}

                    {/*</div>*/}

                    <MyCustomPlayerVersionTwo
                        song={songs[currentSongIndex]}
                        playlistEl={playlist[currentSongIndex]}
                        playlist={playlist}
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                    />


                </div>
            ) : (
                <p>No songs available.</p>
            )}
        </>
    );
}

export default MusicPlayer;