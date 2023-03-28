import React, { useState, useEffect } from "react";
import VideoList from "../../components/VideoList";
import VideoUpload from "../../components/VideoUpload";
import axios from "axios";
import { VIDEO_UPLOAD_URL, VIDEO_PARSE_URL } from "../../utils/api";

const Home = () => {
    const [style, setStyle] = useState({});
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
            {
                name: 'Кокоиновый бар123он',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: 'Брат123ство',
                url: '',
            },
            {
                name: 'Му123лан',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
        ],
    };

    const keys = Object.keys(data);

    useEffect(() => {
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
    }, [videoData, isLoaded]);
    
    const handleFileSelect = e => {
        const fileInput = e.target;
        const file = fileInput.files[0];
        if (file) {
            handleVideoSubmit(file);
        }
    };

    const handleVideoSubmit = async file => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('filename', file.name)

        try {
            const response = await axios.post(VIDEO_UPLOAD_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        setStyle({display: 'none'});
        localStorage.setItem('visitedBefore', true);
    };

    return(
        <div className="home">
            <div className="home__content container">
                <VideoUpload handleFileSelect={handleFileSelect} handleClose={handleClose} style={style}/>
                <VideoList data={data} keys={keys}/>
            </div>
        </div>
    );
};

export default Home;