import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import Favorite from "../Favorite/Favorite";

const Header = () => {
    return (
        <div className={style.container}>
            <ul className={style.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people?page=1" exact='false'>People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>

            </ul>
            <Favorite/>
        </div>
    );
};

export default Header;