import React from "react";
import routes from "../utils/routes";
import logo from "../image/home/logo.svg";
import profile from "../image/home/profile.svg";
import profileActive from "../image/home/profile-active.svg";
import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    if (location.pathname !== '/player') {
        return(
            <header className="header">
                <div className="header__content container">
                    <div className="header__row">
                        <div className="header__logo"><img alt="logo" src={logo}/></div>
                        <nav className="header__nav">
                            <nav id="nav" className="header__list">
                            {routes.map((item) => {
                                return(
                                    <NavLink to={item.path} key={item.id}>
                                        <div className="header__block">{item.text}</div>
                                    </NavLink>
                                )
                            })}
                            </nav>
                        </nav>
                        <div className="header__profile">
                            <NavLink to='/profile'>
                                <img src={(location.pathname === '/profile') ? profileActive : profile} alt="profile"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return;
    }
};

export default Header;