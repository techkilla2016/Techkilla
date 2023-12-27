"use client"
import React, { useEffect, useRef } from 'react'

const VideoPlay = ({ src, src1, width }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            videoRef.current.play();
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div className='video_contain'>
            <video ref={videoRef} width={width} muted loop={true}>
                <source src={src} type="video/mp4" />
                {/* <source src={src1} type="video/ogg" /> */}
            </video>
            <div className='frame'></div>
        </div>
    )
}

export default VideoPlay
