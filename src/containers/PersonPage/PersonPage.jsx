import React, {Suspense, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import {useParams} from "react-router";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getPeopleImg} from "../../services/getPeopleData";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
import style from './PersonPage.module.css'
import PersonLinkBack from "../../components/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/UI/UiLoading/UiLoading";
import {useSelector} from "react-redux";

// import PersonFilms from "../../components/PersonPage/PersonFilms/PersonFilms";

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({setErrorApi}) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setpersonInfo] = useState(null)
    const [personName, setpersonName] = useState(null)
    const [personPhoto, setpersonPhoto] = useState(null)
    const [personFilms, setpersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)
    const {id} = useParams();

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id)

            if (res) {
                setpersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Yair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender}
                ]);

                setpersonName(res.name);
                setpersonPhoto(getPeopleImg(id))

                res.films.length && setpersonFilms(res.films)

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, [id, setErrorApi]);


    return (
        <>
            <PersonLinkBack/>
            <div className={style.wrapper}>
                <span className={style.person__name}>{personName}</span>

                <div className={style.container}>
                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}

                    {personFilms && (
                        <Suspense fallback={<UiLoading/>}>
                            <PersonFilms
                                personFilms={personFilms}
                            />
                        </Suspense>
                    )}
                </div>

            </div>
        </>


    );
};

PersonPage.protoTypes = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(PersonPage);