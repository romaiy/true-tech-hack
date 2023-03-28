import React from "react";
import VideoGenre from "./VideoGenre";

const VideoList = ({data, keys, activeGenre }) => {

    if (activeGenre) {
        return(
            <div className="video-list">
                <VideoGenre genre={activeGenre} films={data[activeGenre]}/>
            </div>
        );
    } else {
        return(
            <div className="video-list">
                { keys && keys.map((key) => (
                    <VideoGenre key={key} genre={key} films={data[key]}/>
                ))}
            </div>
        );
    }
};

export default VideoList;