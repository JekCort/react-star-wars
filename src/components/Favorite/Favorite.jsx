import React, {useEffect, useState} from 'react';
import iconBookmark from './img/bookmark.svg';
import style from './Favorite.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";



const Favorite = () => {
    const [count, setCount] = useState(0 || '')

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(()=>{

        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
        setCount(length)
    },[storeData])

    return (
        <>
<div className={style.container}>
    <Link to="/favorites">
        <span className={style.counter}>{count}</span>
        <img className={style.icon} src={iconBookmark} alt='Favorites'/>
    </Link>

</div>
        </>
    );
};

export default Favorite;