import React, { useState, useEffect } from "react";
import axios from "axios";
import { VIDEO_PARSE_URL } from "../utils/api";
import VideoGenre from "./VideoGenre";

const VideoList = () => {
    const [videoData, setVideoData] = useState(null);
    const [keysData, setKeysData] = useState();

    const data = {
        'Боевики': [
            {
                name: '1 a'
            },
            {
                name: '1 b'
            },
        ],
        'Гонки': [
            {
                name: '1 c'
            },
            {
                name: '1 d'
            },
        ],
    };

    useEffect(() => {
        axios.get(VIDEO_PARSE_URL)
        .then(response => {
            setVideoData(response.data);
            setKeysData(Object.keys(videoData));
        })
        .catch(error => {
            console.log(error);
        });
    }, [videoData]);


    console.log(videoData);
    
    return(
        <div className="video-list">
            {videoData && videoData.map((key) => (
                <VideoGenre key={key} genre={key} films={data[key]}/>
            ))}
        </div>
    );
};

export default VideoList;