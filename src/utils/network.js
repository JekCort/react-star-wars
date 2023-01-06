/**
 * sends a request Fetch
 * @param {String} url - for request
 * @returns {Promise<String>} - query result
 */
export const getApiResource = async (url) => {


    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false
        }
        return await res.json()
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }

}
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body))

// (async () => {
//     const body =await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body)
// })();


export const makeConcyrrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res
};

