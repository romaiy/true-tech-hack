import React from "react";
import axios from "axios";
import { VIDEO_UPLOAD_URL } from "../utils/api";
import image from '../image/home/Picture.png';

const VideoUpload = () => {
    
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

    return (
        <div className="download">
            <div className="download__content">
                <div className="download__row row">
                    <div className="download__column">
                        <h2 className="download__heading">Запросить аудиосопровождение <br/>
                            для конкретного фильма
                        </h2>
                        <p className="download__text">У фильма, который вы хотели посмотреть, нет тифлокомментариев? Вы можете запросить у сервиса их создание!</p>
                        <label className="download__input">
                            <input type="file" id="video-uploader" accept="video/*" onChange={(e) => handleFileSelect(e)} />		
                            <span>Запросить аудиосопровождение</span>
                        </label>
                    </div>
                    <img alt="im" src={image}/>
                </div>
            </div>
        </div>
    );
};

export default VideoUpload;