import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import VideoControls from '../../components/VideoControls';
import './VideoPlayer.css';
import { lastLink } from '../../Data/lastLink';

function VideoPlayer({cName, lastAudio}) {
    const location = useLocation();
    const [audVolume, setAudVolume] = useState(0.1);
    const [vidVolume, setVidVolume] = useState(
        (lastAudio) ? (lastAudio[1] !== 2) ?
        0.2 : 0 : (location.state) ?
        (location.state.length === 2) ? 0.2 : 0 : 0);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [screenState, setScreenState] = useState(true);
    const playerRefContainer = useRef(null);
    const playerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state) {
            if (location.state.length === 2) {
                lastLink.splice(0, 1, location.state[0]);
                lastLink.splice(1, 1, location.state[1]);
            } else {
                lastLink.splice(0, 1, location.state);
                lastLink.splice(1, 1, 2);
            }
        }
    }, [location.state]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleVolumeUp = () => {
        if (lastAudio) {
            if (lastAudio[1] === 2) {
                if (audVolume < 0.6) {
                    setAudVolume(audVolume + 0.1);
                } else {
                    setAudVolume(0.7);
                }
                return;
            }
        } else if (location.state) {
            if (location.state.length > 2) {
                if (audVolume < 0.6) {
                    setAudVolume(audVolume + 0.1);
                } else {
                    setAudVolume(0.7);
                }
                return;
            }
        }

        if (vidVolume < 0.9) {
            if (vidVolume === 0) {
                setVidVolume(vidVolume + 0.2);
            } else {
                setVidVolume(vidVolume + 0.1);
            }
            if (audVolume < 0.6) {
                setAudVolume(audVolume + 0.1);
            } else {
                setAudVolume(0.7);
            }
        } else {
            setVidVolume(1);
        }
    };

    const handleVolumeDown = () => {
        if (lastAudio) {
            if (lastAudio[1] === 2) {
                if (audVolume > 0.1) {
                    setAudVolume(audVolume - 0.1);
                } else {
                    setAudVolume(0);
                };
                return;
            }
        } else if (location.state) {
            if (location.state.length > 2) {
                if (audVolume > 0.1) {
                    setAudVolume(audVolume - 0.1);
                } else {
                    setAudVolume(0);
                };
                return;
            }
        }
        
        if (audVolume < 0.05) {
            setVidVolume(0);
            return;
        };
        if (vidVolume > 0.1) {
            if (vidVolume === 1) {
                setVidVolume(vidVolume - 0.2);
            } else {
                setVidVolume(vidVolume - 0.1);
            }
            setAudVolume(audVolume - 0.1);
        } else {
            setVidVolume(0);
            setAudVolume(0);
        };
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
            url={(lastAudio) ? (lastAudio[1] !== 2) ?
                lastAudio[1] : 'http://91.185.86.61:8080/video/fire.mp4' 
                : (location.state) ?
                (location.state.length === 2) ? location.state[1] :
                'http://91.185.86.61:8080/video/fire.mp4' :
                'http://91.185.86.61:8080/video/fire.mp4'}
            playing={playing}
            volume={vidVolume}
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
            url={(lastAudio) ? lastAudio[0] :
            (location.state) ? (location.state.length === 2) ? location.state[0] : location.state : lastAudio[0]}
            style={{zIndex: -1000}}
            ref={playerRef}
            playing={playing}
            volume={audVolume}
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
