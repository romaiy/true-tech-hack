import React from "react";
import play from '../image/play.svg';
import pause from '../image/pause.svg';
import up from '../image/volume-plus.svg';
import down from '../image/volume-minus.svg';

const ControlsVideo = ({
    handlePlay,
    handlePause,
    volume,
    playing,
    played,
    func,
}) => {
    
    return(
        <div className="controls-wrapper">
            <input
                className="progress"
                type="range"
                min={0}
                max={1}
                step="any"
                value={played}
                onMouseDown={func.handleSeekMouseDown}
                onMouseUp={func.handleSeekMouseUp}
                onChange={func.handleSeekChange}
            />
            <div className="controls-row">
                <button onClick={(playing) ? handlePause : handlePlay}><img alt="play" src={(playing) ? pause : play}/></button>
                <button onClick={func.handleVolumeDown}><img alt="minus" src={down}></img></button>
                <button onClick={func.handleVolumeUp}><img alt="minus" src={up}></img></button>
                <button style={{color: 'white'}} onClick={func.handleFullscreenClick}>Fullscreen</button>
            </div>
        </div>
    );
};

export default ControlsVideo;