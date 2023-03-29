import React from "react";
import image from '../image/home/Picture.png';
import close from '../image/close.svg';
import Upload from "./Upload";

const VideoUpload = ({handleFileSelect, handleClose, style}) => {

    if (localStorage.getItem('visitedBefore')) {
        return null;
    };

    return (
        <div className="upload">
            <div className="upload__content">
                <div className="upload__row end" style={style}><img src={close} alt="close" onClick={handleClose}/></div>
                <div className="upload__row row">
                    <div className="upload__column">
                        <h2 className="upload__heading">Запросить аудиосопровождение <br/>
                            для конкретного фильма
                        </h2>
                        <p className="upload__text">У фильма, который вы хотели посмотреть, нет тифлокомментариев? Вы можете запросить у сервиса их создание!</p>
                        <Upload handleFileSelect={handleFileSelect}/>
                    </div>
                    <img className="upload__img" alt="im" src={image}/>
                </div>
            </div>
        </div>
    );
};

export default VideoUpload;