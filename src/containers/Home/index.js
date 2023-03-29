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

    const data = {
        'Боевик': 
        [
            {
                name: 'asdasd',
                url: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
                keys: keysData,
            }
        ]
    };

    const keys = Object.keys(data);

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