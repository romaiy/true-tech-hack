import React from "react";
import VideoList from "../../components/VideoList";
import VideoUpload from "../../components/VideoUpload";

const Home = () => {

    return(
        <div className="home">
            <div className="home__content container">
                <VideoList/>
                <VideoUpload/>
            </div>
        </div>
    );
};

export default Home;