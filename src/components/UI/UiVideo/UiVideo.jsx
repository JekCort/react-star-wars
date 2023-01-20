import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import style from './UiVideo.module.css'


const UiVideo = ({src,playbackRate, classes}) => {

const videoRef = useRef(null)

    useEffect(()=>{
        videoRef.current.playbackRate = playbackRate
    }, [playbackRate])

    return (
        <>
            <video
                loop
                autoPlay
                muted
                className={cn(style.video, classes)}
                ref={videoRef}
            >
                <source src={src}/>
            </video>
        </>
    );
};

UiVideo.protoTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string
}
export default UiVideo;