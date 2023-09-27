import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { ImQuotesLeft } from 'react-icons/im'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ cardData }) => {
    const [swiperRef, setSwiperRef] = useState(0);

    const slideTo = (index) => {
        swiperRef.slideTo(index);
    };


    return (
        <>
            <Col xxl={12} lg={12} md={12} sm={12}>
                <div className="main">
                    <Swiper
                        // modules={[Virtual]}
                        slidesPerView={1.6}
                        spaceBetween={50}
                        onSwiper={setSwiperRef}
                        centeredSlides={true}
                        className="mySwiper py-5"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        {cardData.map((item, index) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <div className="slider-ai-box d-flex flex-column justify-content-center text-start p-5" style={{ height: '100%' }}>
                                    <p className='text-secondary py-4s' >
                                        {index}/{cardData?.length}
                                    </p>
                                    <p className='text-secondary py-4s' >
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
            </Col >
        </>
    )
}

export default Testimonials