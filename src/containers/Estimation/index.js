import React from "react";
import Card from "../../components/Card";
import Valuation from "../../components/Valuation";
import { lastLink } from "../../Data/lastLink";
import image from '../../image/Picture-estimation.png';

const Estimation = () => {
    console.log(lastLink)

    return(
        <div className="estimation">
            <div className="estimation__content container">
                <Card image={image}>
                    <h2 className="card__heading">
                        Помогите нам сделать аудиодескрипцию лучше!
                    </h2>
                    <p className="card__text">
                        Оценивайте точность озвучки или указыайте на лучшее описание сцены, 
                        а в конце месяца получайте бонусы за помощь в том, чтобы сделать сервис доступнее!
                    </p>
                </Card>
                <Valuation lastAudio={lastLink}/>
            </div>
        </div>
    );
};

export default Estimation;