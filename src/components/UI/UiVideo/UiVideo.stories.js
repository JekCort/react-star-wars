

import video from './video/video.mp4'
import UiVideo from "./UiVideo";
import PropTypes from "prop-types";

export default  {
    title: 'Ui-Kit/UiVideo',
    component: UiVideo
}

const Template = (args) => <UiVideo {...args}/>

const props = {
    src: video,
    playbackRate: 1,
    classes: ''
}

export const Default = Template.bind({})
Default.args = {
    ...props
}