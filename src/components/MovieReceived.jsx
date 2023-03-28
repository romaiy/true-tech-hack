import React from "react";
import film from '../image/movies/video.svg';

const MovieReceived = ({movie}) => {

    return(
        <li className="movie">
            <div className="movie__content">
                <div className="movie__row">
                    <div className="movie__row">
                        <div className="movie__icon">
                            <img src={film} alt="film"/>
                        </div>
                        <div className="movie__column">
                            <div className="movie__name">{movie.name}</div>
                            <div className="movie__state">Обработка</div>
                        </div>
                    </div>
                    <div className="movie__btn">
                        Смотреть
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MovieReceived;