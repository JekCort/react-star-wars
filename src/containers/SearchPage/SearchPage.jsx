import React, {useState} from 'react';
import style from './SearchPage.module.css'
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import PropTypes from "prop-types";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {

        const res = await getApiResource(API_SEARCH + param)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        setInputSearchValue(value)
        getResponse(value)
    }
    return (
        <>
            <h1 className={style.header__text}>Search</h1>
            <input
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Input characters name"
            />
        </>
    );
};

SearchPage.protoTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);