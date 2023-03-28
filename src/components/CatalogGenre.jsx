import React from "react";

const CatalogGenre = ({allGenres}) => {

    return(
        <ul className="catalog__list">
            {allGenres && allGenres.map((genre) => (
                <li className="catalog__block">{genre}</li>
            ))}
        </ul>
    );
};

export default CatalogGenre;