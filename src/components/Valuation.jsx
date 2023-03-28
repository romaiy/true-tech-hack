import React from "react";
import VideoPlayer from "../containers/VideoPlayer";

const Valuation = ({lastAudio}) => {

    return(
        <div className="valuation">
            <h2 className="valuation__heading">
                Оценка озвучки
            </h2>
            <div className="valuation__video">
                {(!lastAudio[0].length) ? 
                    <div className="valuation__heading">У вас пока нет просмотренных фильмов(</div> :
                    <VideoPlayer lastAudio={lastAudio} cName={'estimation-wrapper'}/>
                }
            </div>
            {(!lastAudio[0].length) ? <></> :
            <div className="valuation__row">
                <div className="valuation__block">
                    Время начала момента:
                    <div className="valuation__time">00:02:20</div>
                </div>
                <div className="valuation__block">
                    Время конца момента:
                    <div className="valuation__time">00:02:50</div>
                </div>
                <div className="valuation__block">
                    Длительность момента:
                    <div className="valuation__time" style={{color: 'white'}}>30 сек</div>
                </div>
            </div>}
            {(!lastAudio[0].length) ? <></> :
            <div className="valuation__column">
                <textarea className="valuation__area"></textarea>
                <div className="valuation__btn">Отправить</div>
            </div>}
        </div>
    );
};

export default Valuation;