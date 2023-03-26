import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import VideoControls from '../../components/VideoControls';
import './VideoPlayer.css';

function VideoPlayer() {
    const [volume, setVolume] = useState(0.1);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [screenState, setScreenState] = useState(true);
    const playerRefContainer = useRef(null);
    const playerRef = useRef(null);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleVolumeUp = () => {
        if (volume < 1) {
            setVolume(volume + 0.1);
        } else {
            setVolume(1);
        }
    };

    const handleVolumeDown = () => {
        if (volume > 0.1) {
            setVolume(volume - 0.1);
        } else {
            setVolume(0);
        }
    };

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value));
    };

    const handleSeekMouseDown = () => {
        setSeeking(true);
    };

    const handleSeekMouseUp = (e) => {
        setSeeking(false);
        playerRef.current.seekTo(parseFloat(e.target.value));
    };

    const handleProgress = (state) => {
        const timeRemaining = duration - state.playedSeconds;
        setTimeRemaining(timeRemaining);
        if (!seeking) {
        setPlayed(state.played);
        }
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const handlePlay = () => {
        setPlaying(true);
    };

    const handlePause = () => {
        setPlaying(false);
    };

    const handleFullscreenClick = () => {
        screenfull.toggle(playerRefContainer.current);
        fullscreenIcon();
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `- ${formattedMinutes}:${formattedSeconds}`;
    };

    const fullscreenIcon = () => {
        if (screenfull.isEnabled) {
            if (screenfull.isFullscreen) {
                setScreenState(true);
            } else {
                setScreenState(false);
            }
            } else {
                setScreenState(false);
        }
    };

    return (
        <div className='video-wrapper' ref={playerRefContainer}>
        <ReactPlayer
            id={'target'}
            ref={playerRef}
            url="https://www.youtube.com/watch?v=3cnKTOosN40&ab_channel=Rudi1k"
            playing={playing}
            volume={volume}
            controls={false}
            onProgress={handleProgress}
            onDuration={handleDuration}
            width= "100%"
            height= "100%"
            onPlay={handlePlay}
            onPause={handlePause}
            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
            onContextMenu={e => e.preventDefault()}
        />
        <VideoControls
            handlePlay={handlePlay}
            handlePause={handlePause}
            playing={playing}
            played={played}
            timeRemaining={timeRemaining}
            screenState={screenState}
            func={{
                handleSeekMouseDown,
                handleSeekMouseUp,
                handleSeekChange,
                handleFullscreenClick,
                handleVolumeChange,
                handleVolumeUp,
                handleVolumeDown,
                formatTime,
                handleBack,
            }}
        />
        </div>
    );
};

export default VideoPlayer;