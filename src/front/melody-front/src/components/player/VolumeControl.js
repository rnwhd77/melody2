import React from 'react';

function VolumeControl({ volume, setVolume }) {
    return (
        <div className="volumeCtrl">
            <div className="volumeBg">
                <input className="volumeRange" type="range" min="0" max="100" step="1" value={volume} onChange={(e) => {
                    setVolume(e.target.value)
                }} />
            </div>
        </div>
    );
}

export default VolumeControl;