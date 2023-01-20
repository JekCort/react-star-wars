import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import Favorite from "../Favorite/Favorite";
import imgDroid from './img/droid.png'
import imglightsaber from './img/lightsaber.png'
import imgSpaceStation from './img/space-station.png'
import {useTheme} from "../../context/ThemeProvider";
import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from "../../constants/context";

const Header = () => {
    const [icon, setIcon] = useState(imgSpaceStation)
    const isTheme = useTheme()

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT :
                setIcon(imglightsaber);
                break;
            case THEME_DARK :
                setIcon(imgSpaceStation);
                break;
            case THEME_NEUTRAL :
                setIcon(imgDroid);
                break;
            default: setIcon(imgSpaceStation)
        }

    }, [isTheme])

    return (
        <div className={style.container}>
            <img className={style.logo} src={icon} alt="Star Wars"/>
            <ul className={style.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people?page=1" exact='false'>People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>

            </ul>
            <Favorite/>
        </div>
    );
};

export default Header;