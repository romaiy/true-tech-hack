import React from "react";
import MovieReceived from "./MovieReceived";

const MoviesList = ({movies}) => {
    
    return(
        <ul className="movies-list">
            {movies && movies.map((movie) => (
                <MovieReceived key={movie.name} movie={movie}/>
            ))}
        </ul>
    );
};

export default MoviesList;