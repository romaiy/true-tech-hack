import React from "react";
import { useLocation } from 'react-router-dom';
import logo from '../image/footer-logo.svg';
import aderaLogo from '../image/adera-logo.svg';

const Footer = () => {
    const location = useLocation();
    if (location.pathname !== '/player') {
        return(
            <div className="footer">
                <div className="footer__content container">
                    <div className="footer__column">
                        <div className="footer__row">
                            <img src={logo} alt="logo"/>
                            <img src={aderaLogo} alt="logo"/>
                        </div>
                        <div className="footer__row">
                            <div className="footer__date">2023 г</div>
                            <div className="footer__team">Команда Адера</div>
                            <div className="footer__place">г. Омск, Омская Область</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return;
    };
};

export default Footer;