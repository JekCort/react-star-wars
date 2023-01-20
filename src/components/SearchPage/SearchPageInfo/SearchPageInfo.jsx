import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from './SearchPageInfo.module.css'

const SearchPageInfo = ({people}) => {
    return (
        <>
            {people.length
                ? (
                    <ul className={style.list__container}>
                        {people.map(({id, name, img})=>
                        <li className={style.list__item} key={id}>
                            <Link to={`/people/${id}`}>
                                <img className={style.person__photo} src={img} alt={name}/>
                                <p className={style.person__name}>{name}</p>
                            </Link>
                        </li>
                        )}
                    </ul>
                )
                : <h2 className={style.person__comment}>No results</h2>
            }
        </>
    );
};

SearchPageInfo.protoTypes = {
    people: PropTypes.array
}
export default SearchPageInfo;