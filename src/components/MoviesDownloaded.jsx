import React from "react";
import Upload from "./Upload";

const MoviesDownloaded = ({handleFileSelect}) => {

    return(
        <div className="download">
            <div className="download__row">
                <h2 className="download__heading">Загруженные вами файлы</h2>
            </div>
            <Upload handleFileSelect={handleFileSelect}/>
        </div>
    );
};

export default MoviesDownloaded;