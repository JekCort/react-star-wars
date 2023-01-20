import React, {useCallback, useEffect, useState} from 'react';
import style from './SearchPage.module.css'
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import PropTypes from "prop-types";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import {value} from "lodash/seq";
import {debounce} from "lodash";

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        console.log(param)
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

    useEffect(()=>{
        getResponse('')
    }, [])

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300), []
    )


    const handleInputChange = (event) => {
        const value = event.target.value

        setInputSearchValue(value)
        debounceGetResponse(value)
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

            <SearchPageInfo people={people}/>
        </>
    );
};

SearchPage.protoTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);