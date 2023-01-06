import React from 'react';
import PropTypes from "prop-types";
import style from './PersonPhoto.module.css'
import {useDispatch} from "react-redux";
import {removePersonFromFavorite, setPersonToFavorite} from "../../../store/actions";

const PersonPhoto = ({personPhoto, personName, personId, personFavorite, setPersonFavorite}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavorite(true)
        }
    }


    return (
        <>
            <div className={style.container}>
                <img className={style.photo} src={personPhoto} alt={personName}/>
            </div>

            <button onClick={dispatchFavoritePeople}>
                {personFavorite ? 'Delete' : 'Add'}
            </button>
        </>
    );
};

PersonPhoto.protoTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}
export default PersonPhoto;