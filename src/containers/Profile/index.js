import React from "react";
import Card from "../../components/Card";
import image from '../../image/Picture-profile.png';

const Profile = () => {

    return(
        <div className="profile">
            <div className="profile__content container">
                <Card image={image}>
                    <h2 className="card__heading">Хотите включить режим сайта для <br/>
                        лабовидящих?
                    </h2>
                    <p className="card__text">
                        В данном режиме по умолчанию будут включены тифлокомментарии 
                        для фильмов и сериалов, но вы можете перключить их  в плеере!
                        <br/> <br/>
                        Вы можете выключить данный режим в любой момент в настройках.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Profile;