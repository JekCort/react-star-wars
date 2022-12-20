import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}) => {

const handleChangeNext = () => {
    getResource(nextPage)
}

    const handleChangePrevious = () => {
        getResource(prevPage)
    }

    return (
        <div>
            <Link to={`/people/?page=${counterPage - 1}`}  className={style.link}>
                <button
                    className={style.btn}
                    disabled={!prevPage}
                    onClick={handleChangePrevious}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={style.link}>
                <button
                    className={style.btn}
                    disabled={!nextPage}
                    onClick={handleChangeNext}
                >
                    Next
                </button>
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