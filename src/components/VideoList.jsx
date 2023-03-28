import React, { useState, useEffect } from "react";
import axios from "axios";
import { VIDEO_PARSE_URL } from "../utils/api";
import VideoGenre from "./VideoGenre";

const VideoList = () => {
    const [videoData, setVideoData] = useState(null);
    const [keysData, setKeysData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const data = {
        'Боевики': [
            {
                name: 'Кокоиновый барон',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
                data: keysData,
            },
            {
                name: 'Братство',
                url: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
            },
            {
                name: 'Мулан',
                url: '',
            },
            {
                name: 'Кокоиновый барон1',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: 'Кокоиновый барон',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
                data: keysData,
            },
            {
                name: 'Братство',
                url: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
            },
            {
                name: 'Мулан',
                url: '',
            },
            {
                name: 'Кокоиновый барон1',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
        ],
        'Военные': [
            {
                name: 'Кокоиновый барон',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: 'Братство',
                url: '',
            },
            {
                name: 'Мулан',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
        ],
    };

    const keys = Object.keys(data);

    useEffect(() => {
        if(!localStorage.getItem('data')){
            if (!isLoaded) {
                axios.get(VIDEO_PARSE_URL)
                .then(response => {
                    setVideoData(response.data);
                    setKeysData(Object.keys(videoData));
                    setIsLoaded(true);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    }, [videoData, isLoaded]);

    return(
        <div className="video-list">
            {keys && keys.map((key) => (
                <VideoGenre key={key} genre={key} films={data[key]}/>
            ))}
        </div>
    );
};

export default VideoList;