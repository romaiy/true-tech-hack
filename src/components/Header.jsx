import React from "react";
import routes from "../utils/routes";
import logo from "../image/home/logo.svg";

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
                                <li key={item.id}>{item.text}</li>
                            )
                        })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;