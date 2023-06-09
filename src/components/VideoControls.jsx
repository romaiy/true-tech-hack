import React from "react";
import screenfull from "screenfull";
import play from '../image/play.svg';
import pause from '../image/pause.svg';
import up from '../image/volume-plus.svg';
import down from '../image/volume-minus.svg';
import skip from '../image/skip.svg';
import screenUp from '../image/ScreenUp.svg';
import screenDown from '../image/ScreenDown.svg';
import back from '../image/back.svg'

const VideoControls = ({
    cName,
    handlePlay,
    handlePause,
    playing,
    played,
    timeRemaining,
    screenState,
    func,
}) => {
    
    return(
        <div>
        <div style={(cName === 'estimation-wrapper') ? {display: 'none'} : {}} className="controls-wrapper-up">
            <img alt="back" style={{width: '40px', heigh: '40px'}} src={back} onClick={func.handleBack}/>
        </div>
        <div className="controls-wrapper">
            <div className="controls-row" style={{justifyContent: 'space-between'}}>
                <input
                    className="progress"
                    type="range"
                    style={(cName === 'estimation-wrapper') ? (screenfull.isFullscreen) ? 
                    {width: '1785px'} : {width: '960px'} : {width: '1785px'}}
                    min={0}
                    max={1}
                    step="any"
                    value={played}
                    onMouseDown={func.handleSeekMouseDown}
                    onMouseUp={func.handleSeekMouseUp}
                    onChange={func.handleSeekChange}
                />
                <div className="video-time" style={{ color: 'white'}}>
                    {func.formatTime(Math.round(timeRemaining))}
                </div>
            </div>
            <div className="controls-row">
                <div className="button-row" style={{marginRight: '64px'}}>
                    <button 
                        style={{marginLeft: '16px'}} 
                        onClick={(playing) ? handlePause : handlePlay}>
                        <img alt="play" src={(playing) ? pause : play}/>
                    </button>
                    <button
                        style={{marginLeft: '24px'}}>
                        <img alt="skip" src={skip}/>
                    </button>
                </div>
                
                <div className="button-row">
                    <button 
                        onClick={func.handleVolumeDown}>
                        <img alt="minus" src={down}></img>
                    </button>
                    <button 
                        style={{marginLeft: '24px'}} 
                        onClick={func.handleVolumeUp}>
                        <img alt="minus" src={up}></img>
                    </button>
                </div>
                <button style={{color: 'white', marginLeft: 'auto'}} onClick={func.handleFullscreenClick}>
                    <img alt="fullscreen" src={(screenState) ? screenUp : screenDown}/>
                </button>
            </div>
        </div>    
        </div>
    );
};

export default VideoControls;