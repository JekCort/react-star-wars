import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.container}>
            <ul className={style.list__container}>
                <li><NavLink to="/" exact='true'>Home</NavLink></li>
                <li><NavLink to="/people/?page=1" exact='false'>People</NavLink></li>
                <li><NavLink to="/not-found" exact='true'>Not Found</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;