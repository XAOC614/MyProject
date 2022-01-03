import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div className={s.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div>
        <div className={s.avatar}>
            <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=1200:675' />
        </div>
        
        
    </div>)
};
export default ProfileInfo;