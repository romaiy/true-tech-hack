import React from "react";
import VideoUpload from "../../components/VideoUpload";

const Home = () => {

    return(
        <div className="home">
            <div className="home__content container">
                <VideoUpload/>
            </div>
        </div>
    );
};

export default Home;