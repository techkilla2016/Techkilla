import React, { useEffect, useRef } from 'react'

const IntroVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            videoRef.current.play();
        }, 1000); // Adjust the delay time as needed
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='video_contain'>
            <video ref={videoRef} width="95%" muted loop={true}>
                <source src="/intro.mp4" type="video/mp4" />
                <source src="/intro.ogg" type="video/ogg" />
            </video>
            <div className='frame'>

            </div>
        </div>
    )
}


export default IntroVideo