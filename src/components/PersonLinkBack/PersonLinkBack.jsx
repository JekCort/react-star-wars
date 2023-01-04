import React from 'react';
import style from './PersonLinkBack.module.css'
import {useNavigate} from "react-router";
import iconBack from './img/back.svg'
const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1)
    }

    return (

        <>
            <a onClick={handleGoBack} href='#' className={style.link}>
                <img className={style.link__img} src={iconBack} alt="Go back icon"/>
                <span>Go back</span>
            </a>
        </>
    );
};

export default PersonLinkBack;