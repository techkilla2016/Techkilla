import React, { useState } from 'react'

const SwipeCard = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const handleSliderChange = (e) => {
        const newPos = e.target.value;
        setSliderPos(newPos);
    };
    return (
        <div className='ai-container'>
            <div className='img background-img'>
                <div className='sliderImg'>
                    <img src="/photo-ai/Magical.jpg" alt="" />
                </div>
            </div>
            <div className='img foreground-img' style={{ width: `${sliderPos}%`, }}>
                <div className='sliderImg'>
                    <img src="/photo-ai/sci-fi.jpeg" alt="" />
                </div>
            </div>
            <input type="range" min="1" max="100"
                name='slider'
                id="slider"
                value={sliderPos}
                className="slider"
                onChange={handleSliderChange} />
            <div className='slider-button' style={{ left: `calc(${sliderPos}% - 18px)` }}>
                <div className="slider-button-inner"></div>
            </div>
        </div>
    )
}

export default SwipeCard
