import React, {useEffect, useState} from 'react';
import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import style from './UiLoading.module.css'
import PropTypes from "prop-types";
import cn from "classnames";

const UiLoading = (theme = 'white', isShadow = true,classes) => {

    const [loaderIcon, setloaderIcon] = useState('')

    useEffect(() => {
        switch (theme) {
            case 'black':
                setloaderIcon(loaderBlack); break;
            case 'white':
                setloaderIcon(loaderWhite); break;
            case 'blue':
                setloaderIcon(loaderBlue); break;
            default:
                setloaderIcon(loaderWhite)
        }
    }, [])

    return (
        <>
            <img
                className={cn(style.loader,isShadow && style.shadow, classes)}
                src={loaderIcon}
                alt='Loader'
            />
        </>
    );
};


UiLoading.propTotypes = {
    theme: PropTypes.string,
    isShadow:PropTypes.bool,
    classes:PropTypes.string
}
export default UiLoading;