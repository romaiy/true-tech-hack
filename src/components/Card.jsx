import React from "react";

const Card = ({children, image}) => {
    return(
        <div className="card">
            <div className="card__content">
                <div className="card__row row">
                    <div className="card__column">
                        {children}
                    </div>
                    <img alt="im" src={image}/>
                </div>
            </div>
        </div>
    );
};

export default Card;