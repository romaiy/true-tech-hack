import React from "react";
import { useLocation } from "react-router-dom";
import CatalogGenre from "../../components/CatalogGenre";
import { allGenres } from "../../Data/allGenres";


const Catalog = () => {
    const location = useLocation();

    return(
        <div className="catalog">
            <div className="catalog__content container">
                <CatalogGenre activeGenre={location.state[1]} allGenres={allGenres}/>
            </div>
        </div>
    );
};

export default Catalog;