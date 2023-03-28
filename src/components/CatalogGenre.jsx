import React from "react";

const CatalogGenre = ({ activeGenre, allGenres, handleGenreChange}) => {

    return(
        <ul className="catalog__list">
            {allGenres && allGenres.map((genre) => (
                <li key={genre} className="catalog__block">
                    <div 
                        style={(activeGenre === genre) ? {color: "#BB9A4D"} : {}} 
                        className="catalog__btn"
                        onClick={() => handleGenreChange(genre)}
                    >
                        {genre}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CatalogGenre;