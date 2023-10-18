import React, { useState, useEffect, useRef } from 'react';

function Info({ song }) {
    return (
        <div className="info">
            {<h1 className="songName">{song.title}</h1>}
            {song.artist && <h1 className="artistName">{song.artist.singerName || song.artist.groupName}</h1>}

            {/*{song.album.soloArtist ? (*/}
            {/*    <h1 className="artistName">{song.album.soloArtist.singerName}</h1>*/}
            {/*) : (*/}
            {/*    <h1 className="artistName">{song.album.groupArtist.groupName}</h1>*/}
            {/*)}*/}
        </div>
    );
}

export default Info;