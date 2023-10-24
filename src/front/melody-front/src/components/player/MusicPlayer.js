"use client"
import React, { useState, useEffect, useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faBackward, faPause, faPlay, faForward, faShuffle, faVolumeHigh, faVolumeXmark, faBars, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
const url1 = "https://store-mp3-temp-melody2.s3.amazonaws.com//test.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5QBN5WIEIW5GJN4W%2F20231024%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231024T045610Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAJqdOishLAfMf6U0Obe2cFjmvc23IfRW89LtlBBseciuAiEAtcncl%2FZnEwJz78U4tDw8kzcz1i%2FdUngb07WI%2F4Xe3bgq8wIIPhAAGgw5Mjc4MDkyNTM4OTYiDB5c0W3V08gQYFyQ6SrQAgNvgqaXv8zY2943pC%2FY5ooQ2SaHMyS%2FXdIhprKUwsqhdr%2F9L06b1oCfopkR%2FU0w9osOUOOhG7Juh6HbQk0hWeTldzRD4Y0Zz2f5WkYWGa1YYd9yzG7j48uEhXhf5Defb7BTjWYuTcQqgsIYmbt%2FuDOp9gjiAPjJDXiH31RnS78e4DgFSx2hFCHb%2BWIncRoCEoKe0WnXSSvzjyOLWUOKZSS7alOTuOSxcAWMvaZ1iQDncUqLZtwsckDY%2BSVjtg0Z5hNivxqccCUwLT28MZJjH0huii7jZdI1jIOXm5tnXKkSzOQv2lmoCRo7b7LeU%2F2IQqCPT0%2F7QzIy9SOURz2b58XmgFtnhBI5KVIGa5Q2Rtb%2FAxYWJ3VrxoyJvR6ae95E0FqM%2BJS39F0iLbJMcG5qcCeZJWQd%2BchS8RdlYZuH%2FnZVpQuuT07LWgL3BEYETgZl8TDenN2pBjqdAeZGd7x2YzKlXzMtZ7Eqf1pr5Lnr0%2FnLb6DximE9TlGKac%2BTV%2BYLJmWQ8tmA%2Bg2oGsM%2Fg0pSkK2JjiSDAI2S04uB6fyXZYSf%2BhF%2BTbfGd7mLfkBRhR5bn884pAwoknDANR0pcdVHsUDHcPtiAsFlh2yShIWy1FjHP4OCvdLleak3JdsEjSfCnnSpkdF0kkFtE0VIxZaOzGcScFWbY8k%3D&X-Amz-Signature=e091a6d2d231f7654cc2766ab2c6bbeeac9855a6ee425c44de3a3dc928330ea6"
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
    const [currentSongIndex, setCurrentSongIndex] = useState(0); // currentSongIndex를 정의하고 초기값 설정
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
                    <MyCustomPlayer
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