import React from 'react';
import {useSelector} from "react-redux";


const FavoritesPage = () => {
    const storeData = useSelector(state => state.favoriteReducer)
    return (
        <>
            <h1>FavoritesPage</h1>
        </>
    );
};

export default FavoritesPage;