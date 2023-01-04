import React from 'react';
import PropTypes from "prop-types";
import style from './PersonPhoto.module.css'
const PersonPhoto = ({personPhoto, personName}) => {
    return (
        <>
            <div className={style.container}>
                <img className={style.photo} src={personPhoto} alt={personName}/>
            </div>
        </>
    );
};

PersonPhoto.protoTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string
}
export default PersonPhoto;