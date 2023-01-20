import React, {useCallback, useEffect, useState} from 'react';
import style from './SearchPage.module.css'
import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import PropTypes from "prop-types";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo/SearchPageInfo";
import {debounce} from "lodash";
import UiInput from "../../components/UI/UiInput/UiInput";

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

    useEffect(()=>{
        getResponse('')
    }, [])

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300), []
    )


    const handleInputChange = (value) => {

        setInputSearchValue(value)
        debounceGetResponse(value)
    }
    return (
        <>
            <h1 className={style.header__text}>Search</h1>

            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters name"
                classes={style.input__search}
            />

            <SearchPageInfo people={people}/>
        </>
    );
};

SearchPage.protoTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);