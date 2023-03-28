import React from "react";

const Upload = ({handleFileSelect}) => {

    return(
        <label className="upload__input">
            <input type="file" id="video-uploader" accept="video/*" onChange={(e) => handleFileSelect(e)} />		
            <span>Запросить аудиосопровождение</span>
        </label>
    );
};

export default Upload;