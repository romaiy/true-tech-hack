import React, { useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card";
import Valuation from "../../components/Valuation";
import { lastLink } from "../../Data/lastLink";
import image from '../../image/Picture-estimation.png';
import { EVALUATION_POST_URL } from '../../utils/api';

const Estimation = () => {

    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(EVALUATION_POST_URL, { text })
        .then(response => {
            console.log(response.data);
            setText('');
        })
        .catch(error => {
            console.error(error);
            setText('');
        });
    }
    
    const handleTextChange = (event) => {
        setText(event.target.value);
    }

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
                <Valuation handleTextChange={handleTextChange} text={text} handleSubmit={handleSubmit} lastAudio={lastLink}/>
            </div>
        </div>
    );
};

export default Estimation;