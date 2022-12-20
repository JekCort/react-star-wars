import React from 'react';
import img from './img/notfound.png'
import style from './NotFoundPage.module.css'
import {useLocation} from "react-router";

const NotFoundPage = () => {
    let location = useLocation();


    return (
        <>
            <img className={style.img} src={img} alt='not found'/>
            <p className={style.text}>No match for <u>{location.pathname}</u></p>

        </>
    );
};

export default NotFoundPage;