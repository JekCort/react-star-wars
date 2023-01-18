import React from 'react';
import {useTheme} from "../../../context/ThemeProvider";
import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from "../../../constants/context";
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';
import style from './ChooseSide.module.css';
import PropTypes from "prop-types";
import cn from 'classnames'

const ChooseSideItem = ({classes,theme, text, img}) => {
    const isTheme = useTheme();
    return (
        <div className={cn(style.item, classes)}
             onClick={() => isTheme.change(theme)}
        >
            <div className={style.item__header}>{text}</div>
            <img className={style.item__img} src={img} alt={text}/>
        </div>
    )

}

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string
}


const ChooseSide = () => {

    const elements =[
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLightSide,
            classes: style.item__light
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes: style.item__dark
        },
        {
            theme: THEME_NEUTRAL,
            text: "Han Solo",
            img: imgFalcon,
            classes: style.item__neutral
        }
    ]

    return (
        <div className={style.container}>
            {elements.map((el, index) =>(
                <ChooseSideItem
                    key={index}
                    theme={el.theme}
                    text={el.text}
                    img={el.img}
                    classes={el.classes}
                />
            ))}
        </div>
    );
};

export default ChooseSide;