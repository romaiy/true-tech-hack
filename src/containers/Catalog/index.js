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

    const data = {
        'Боевики': [
            {
                name: '1 1',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
                data: keysData,
            },
            {
                name: '1 2',
                url: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
            },
            {
                name: '1 3',
                url: '',
            },
            {
                name: '1 4',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: '1 5',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: '1 6',
                url: 'http://archive.org/download/20210610_20210610_0439/Братство.mp3',
            },
            {
                name: '1 7',
                url: '',
            },
            {
                name: '1 8',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
        ],
        'Военные': [
            {
                name: '2 1',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: '2 2',
                url: '',
            },
            {
                name: '2 3',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: '2 4',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
            {
                name: '2 5',
                url: '',
            },
            {
                name: '2 6',
                url: 'http://archive.org/download/20210508_20210508_0340/Кокоиновый барон.mp3',
            },
        ],
    };

    const keys = Object.keys(data);

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
                <VideoList activeGenre={activeGenre} data={data} keys={keys}/>
            </div>
        </div>
    );
};

export default Catalog;