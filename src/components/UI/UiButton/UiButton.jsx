import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames';
import style from './UiButton.module.css';
import '../index.css'
const UiButton = ({text, onClick, disabled, theme = 'dark', classes}) => {
    return (
        <button
            className={cn(style.btn, style[theme])}
            disabled={disabled}
            onClick={onClick}
        >{text}
        </button>
    );
};

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,

}
export default UiButton;