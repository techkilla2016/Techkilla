import React from 'react'

const IntroVideo = () => {
    return (
        <div className='video_contain'>
            <video width="95%" autoPlay mute="true" loop={true}>
                <source src="/intro.mp4" type="video/mp4" />
                <source src="/intro.ogg" type="video/ogg" />
            </video>
            <div className='frame'>

            </div>
        </div>
    )
}

export default IntroVideo