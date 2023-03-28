import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import CatalogGenre from "../../components/CatalogGenre";
import { allGenres } from "../../Data/allGenres";
import { VIDEO_PARSE_URL } from "../../utils/api";
import VideoList from "../../components/VideoList";
import arrow from "../../image/arrow.svg";


const Catalog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeGenre, setActiveGenre] = useState();
    const [videoData, setVideoData] = useState(null);
    const [keysData, setKeysData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            axios.get(VIDEO_PARSE_URL)
            .then(response => {
                setVideoData(response.data);
                setKeysData(Object.keys(videoData));
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [videoData, isLoaded]);

    useEffect(() => {
        if (location.state) {
            setActiveGenre(location.state[1]);
        };
    }, [location.state]);
    
    const handleGenreChange = (genreName) => {
        setActiveGenre(genreName);
    };

    return(
        <div className="catalog">
            <div className="catalog__content container">
                <div className="catalog__back">
                    <img src={arrow} alt="back" onClick={() => navigate(-1)}/>
                    Категории фильмов 
                </div>
                <CatalogGenre handleGenreChange={handleGenreChange} activeGenre={activeGenre} allGenres={allGenres}/>
                <VideoList activeGenre={activeGenre} data={videoData} keys={keysData}/>
            </div>
        </div>
    );
};

export default Catalog;