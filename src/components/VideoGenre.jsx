import React from "react";

const VideoGenre = ({genre, films}) => {
    return(
        <>
            {genre}
            {films && films.map((film) => (
                <div key={film.name}>{film.name}</div>
            ))}
        </>
    );
};

export default VideoGenre;