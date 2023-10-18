"use client"

import React from 'react';
import {
    SeasonSongImage,
    SeasonSongImageContainer,
    SeasonSongImageElement,
    SeasonSongText
} from "./SeasonSlider";

const SeasonSong = ({ songData }) => {
    return (
        <div css={seasonSongStyles}>
            <div css={imageContainerStyles}>
                <img css={imageElementStyles} src={songData.image} alt={songData.title} />
            </div>
            <div css={textStyles}>
                <p className="season-song-text-p">
                    <span className="season-song-text-span">{songData.title}</span>
                    {songData.artist}
                </p>
            </div>
        </div>
    );
};

export default SeasonSong;
