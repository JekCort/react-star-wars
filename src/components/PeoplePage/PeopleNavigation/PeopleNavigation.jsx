import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from './PeopleNavigation.module.css'
import UiButton from "../../UI/UiButton/UiButton";

const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {

    const handleChangeNext = () => {
        getResource(nextPage)
    }

    const handleChangePrevious = () => {
        getResource(prevPage)
    }

    return (
        <div className={style.container}>
            <Link to={`/people/?page=${counterPage - 1}`} className={style.btns}>

                <UiButton
                    text='Previous'
                    onClick={handleChangePrevious}
                    disabled={!prevPage}
                />

            </Link>

            <Link to={`/people/?page=${counterPage + 1}`} className={style.btns}>

                <UiButton
                    text='Next'
                    disabled={!nextPage}
                    onClick={handleChangeNext}

                />

            </Link>
        </div>
    );
};


PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}
export default PeopleNavigation;