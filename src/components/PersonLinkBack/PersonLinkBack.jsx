import React from 'react';
import style from './PersonLinkBack.module.css'
import {useNavigate} from "react-router";
import iconBack from './img/back.svg'
import {Link} from "react-router-dom";
const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1)
    }

    return (

        <>
            <Link onClick={handleGoBack} className={style.link}>
                <img className={style.link__img} src={iconBack} alt="Go back icon"/>
                <span>Go back</span>
            </Link>
        </>
    );
};

export default PersonLinkBack;