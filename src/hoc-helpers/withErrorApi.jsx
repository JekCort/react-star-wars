import React, {useState} from 'react';
import PeopleList from "../components/PeoplePage/PeopleList/PeopleList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = View => {

    return props => {
        const [errorApi, setErrorApi] = useState(false)
        return (
            <>
                {errorApi
                    ? <ErrorMessage/>
                    : (
                           <View setErrorApi = {setErrorApi} {...props}/>
                    )
                }
            </>
        )
    }
}

// <View/>
// <h1>Navigation</h1>
// {people && <PeopleList people={people}/>}