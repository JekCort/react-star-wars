import React from 'react';
import style from './ErrorMessage.module.css'
import UiVideo from "../UI/UiVideo/UiVideo";
import video from './video/han-solo.mp4'
const ErrorMessage = () => {
    return (
        <>
            <p className={style.text}>
                The dark side of the force has won. <br/>
                We cannot display data. <br/>
                Come back when we fix everything
            </p>
            <UiVideo
                src={video}
                classes={style.video}
                playbackRate={1}
            />
        </>
    );
};

export default ErrorMessage;