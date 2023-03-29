import React, { useState, useEffect } from "react";
import MoviesDownloaded from "../../components/MoviesDownloaded";
import axios from "axios";
import { VIDEO_UPLOAD_URL, DOWNLOAD_VIDEO_PARSE_URL } from "../../utils/api.js";
import MoviesList from "../../components/MoviesList";

const Movies = () => {
    const [videoData, setVideoData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            axios.get(DOWNLOAD_VIDEO_PARSE_URL)
            .then(response => {
                setVideoData(response.data);
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

    const handleUpdate = () => {
        setIsLoaded(false);
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
            handleUpdate();
        } catch (error) {
            console.error(error);
        }
    };

    const data = [
        {
            name: 'gec',
            audurl: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
            vidurl: 'https://www.youtube.com/watch?v=qo3ewdnBDnA&t=104s&ab_channel=WorkGeekOut',
        }
    ];
    
    return(
        <div className="movies">
            <div className="movies__content container">
                <MoviesDownloaded handleUpdate={handleUpdate} handleFileSelect={handleFileSelect}/>
                <MoviesList movies={data}/>
            </div>
        </div>
    );
};

export default Movies;