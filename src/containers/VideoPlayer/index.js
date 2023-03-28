import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import VideoControls from '../../components/VideoControls';
import './VideoPlayer.css';
import { lastLink } from '../../Data/lastLink';

function VideoPlayer({cName, lastAudio}) {
    const [volume, setVolume] = useState(0.1);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [screenState, setScreenState] = useState(true);
    const playerRefContainer = useRef(null);
    const playerRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            lastLink.splice(0, 1, location.state);
        }
    }, [location.state]);

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
        const timeRemaining = state.playedSeconds;
        setTimeRemaining(timeRemaining);
        if (!seeking) {
        setPlayed(state.played);
        }
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
        <div className={cName} ref={playerRefContainer}>
        <ReactPlayer
            id={'target'}
            ref={playerRef}
            url={'https://www.youtube.com/watch?v=qo3ewdnBDnA&ab_channel=WorkGeekOut'}
            playing={playing}
            volume={0}
            controls={false}
            width= "100%"
            height= "100%"
            onPlay={handlePlay}
            onPause={handlePause}
            config={{ file: 
                {   
                    attributes: { controlsList: 'nodownload' },
                    forceVideo: true,
                }
            }}
            onContextMenu={e => e.preventDefault()}
        />
        <ReactPlayer
            url={(lastAudio) ? lastAudio[0] : location.state}
            style={{zIndex: -1000}}
            ref={playerRef}
            playing={playing}
            volume={volume}
            controls={false}
            onProgress={handleProgress}
            width= "0"
            height= "0"
            onPlay={handlePlay}
            onPause={handlePause}
            config={{ file: 
                {   
                    attributes: { controlsList: 'nodownload' },
                    forceAudio: true,
                }
            }}
        />
        <VideoControls
            cName={cName}
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

/*
   */