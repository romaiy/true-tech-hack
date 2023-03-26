import React from "react";

const VideoGenre = ({genre, films}) => {
    return(
        <div className="genre">
            <h2 className="genre__heading">{genre}</h2>
            <ul className="genre__list">
                {films && films.map((film) => (
                    <div key={film.name}>{film.name}</div>
                ))}
            </ul>
        </div>
    );
};

export default VideoGenre;