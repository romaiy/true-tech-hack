import React from "react";
import MovieReceived from "./MovieReceived";

const MoviesList = ({movies}) => {
    const data = [
        {
            name: 'Шрек'
        },
        {
            name: 'Пус ин бутс'
        },
        {
            name: 'Шрек2'
        },
        {
            name: 'Пус ин бутс2'
        },
    ];
    
    return(
        <ul className="movies-list">
            {data && data.map((movie) => (
                <MovieReceived key={movie.name} movie={movie}/>
            ))}
        </ul>
    );
};

export default MoviesList;