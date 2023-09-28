import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ cardData }) => {
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const cardHeights = cardData.map(item => {
            return item.desc.length;
        });
        const maxCardHeight = Math.max(...cardHeights);
        setMaxHeight(maxCardHeight);
    }, [cardData]);
    return (

        <>
            <div className="swiperOne">
                <Swiper navigation={false} className="mySwiper">
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="slider-ai-box d-flex flex-column justify-content-center text-start">
                                <p className='text-secondary py-4' >
                                    {index + 1}/{cardData?.length}
                                </p>
                                <p className='text-secondary' >
                                    {item?.desc}
                                </p>
                                <h3 className='text-secondary'>
                                    <strong>
                                        {item?.name}
                                    </strong>
                                </h3>
                                <p className='text-secondary'>
                                    <strong> {item?.post}</strong> <br />
                                    {item?.company}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="swiperTwo">
                <Swiper
                    // modules={[Virtual]}
                    slidesPerView={1.6}
                    spaceBetween={50}
                    centeredSlides={true}
                    className="mySwiper py-5"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                // modules={[Autoplay]}
                >
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <div className="slider-ai-box d-flex flex-column justify-content-center text-start">
                                <p className='text-secondary py-4' >
                                    {index + 1}/{cardData?.length}
                                </p>
                                <p className='text-secondary' >
                                    {item?.desc}
                                </p>
                                <h3 className='text-secondary'>
                                    <strong>
                                        {item?.name}
                                    </strong>
                                </h3>
                                <p className='text-secondary'>
                                    <strong> {item?.post}</strong> <br />
                                    {item?.company}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default Testimonials