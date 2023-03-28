import React, { useState } from "react";
import VideoList from "../../components/VideoList";
import VideoUpload from "../../components/VideoUpload";
import axios from "axios";
import { VIDEO_UPLOAD_URL } from "../../utils/api";

const Home = () => {
    const [style, setStyle] = useState({});
    
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
                <VideoList/>
            </div>
        </div>
    );
};

export default Home;