import React from "react";
import routes from "../utils/routes";
import logo from "../image/home/logo.svg";
import profile from "../image/home/profile.svg";

const Header = () => {
    return(
        <header className="header">
            <div className="header__content container">
                <div className="header__row">
                    <div className="header__logo"><img alt="logo" src={logo}/></div>
                    <nav className="header__nav">
                        <ul className="header__list">
                        {routes.map((item) => {
                            return(
                                <li className="header__block" key={item.id}>{item.text}</li>
                            )
                        })}
                        </ul>
                    </nav>
                    <div className="header__profile">
                        <img src={profile} alt="profile"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;