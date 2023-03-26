import React, { useState, useEffect } from "react";
import axios from "axios";
import { VIDEO_PARSE_URL } from "../utils/api";
import VideoGenre from "./VideoGenre";

const VideoList = () => {
    const [videoData, setVideoData] = useState(null);
    const [keysData, setKeysData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            axios.get(VIDEO_PARSE_URL)
            .then(response => {
                setVideoData(response.data);
                setKeysData(Object.keys(videoData));
            })
            .catch(error => {
                console.log(error);
            });
            setIsLoaded(true);
        }
    }, [videoData, isLoaded]);

    return(
        <div className="video-list">
            {keysData && keysData.map((key) => (
                <VideoGenre key={key} genre={key} films={videoData[key]}/>
            ))}
        </div>
    );
};

export default VideoList;