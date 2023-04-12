import React from 'react';
import ReactPlayer from 'react-player';
import { IoCloseSharp } from 'react-icons/io5'
const YouTubePlayer = ({ url, handleClose }) => {
    return (
        <div className='play-video'>
            <div className='play-header'>
                <button className='play-close' onClick={handleClose}>
                    <IoCloseSharp />
                </button>
            </div>
            <div className='video-player-container'>
                <div className='player-wrapper'>
                    <ReactPlayer
                        url={url}
                        className='react-player'
                        playing
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </div>

    );
};

export default YouTubePlayer;
