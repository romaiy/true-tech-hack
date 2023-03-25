import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import ControlsVideo from '../../components/ControlsVideo';
import './VideoPlayer.css';

function VideoPlayer() {
    const [volume, setVolume] = useState(0.1);
    const [played, setPlayed] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);
    const playerRefContainer = useRef(null);

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
    };

    return (
        <div className='video-wrapper' ref={playerRefContainer}>
        <ReactPlayer
            id={'target'}
            ref={playerRef}
            url="<https://www.youtube.com/watch?v=ifLXzPgQWLk&ab_channel=cornwave-Topic>"
            playing={playing}
            volume={volume}
            controls={false}
            onProgress={handleProgress}
            width= "100%"
            height= "100%"
            onPlay={handlePlay}
            onPause={handlePause}
            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
            onContextMenu={e => e.preventDefault()}
        />
        <ControlsVideo
            handlePlay={handlePlay}
            handlePause={handlePause}
            volume={volume}
            playing={playing}
            played={played}
            func={{
                handleSeekMouseDown,
                handleSeekMouseUp,
                handleSeekChange,
                handleFullscreenClick,
                handleVolumeChange,
                handleVolumeUp,
                handleVolumeDown,
            }}
        />
        </div>
    );
};

export default VideoPlayer;