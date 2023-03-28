import React from "react";

import star from '../image/home/star.svg';
import cover from '../image/home/cover.png';

const VideoReceived = ({ film }) => {

    return(
        <div className="film">
            <div className="film__content">
                <div className="film__column">
                    <img alt="cover" src={cover}/>
                    <div className="film__name">{film.name}</div>
                    <div className="film__row">
                        <img alt="star" src={star}/>
                        <div className="film__mmr">7,8</div>
                        <div className="film__tif">{(film.url) ? 'Тифлокомментарии' : 'Ориг. озвучка'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoReceived;