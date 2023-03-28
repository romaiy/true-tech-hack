import React from "react";
import { NavLink } from "react-router-dom";
import VideoReceived from "./VideoReceived";

const VideoGenre = ({genre, films}) => {

    return(
        <div className="genre">
            <div className="genre__row">
                <h2 className="genre__heading">{genre}</h2>
                <div className="genre__btn">
                    <NavLink state={[films, genre]} to={'/catalog'}>
                        {(films.length > 4) ? 'Полный список' : ''}
                    </NavLink>
                </div>
            </div>
            <ul className="genre__list">
                {films && films.filter((film, idx) => idx < 4).map((film) => {
                    return(
                        <NavLink className="film" key={film.name} to={'/player'} state={film.url}>
                            <VideoReceived film={film}/>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    );
};

export default VideoGenre;