"use client"
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, } from "swiper";

const Slidebar = ({ cardData, isVideoAI }) => {
    const [swiperRef, setSwiperRef] = useState(0);

    const slideTo = (index) => {
        swiperRef.slideTo(index);
    };


    return (
        <>
            <Col xxl={12} lg={12} md={12} sm={12}>
                <div className="main">
                    {
                        isVideoAI ? <p className="append-buttons">
                            <button onClick={() => slideTo(0)} data-aos="fade-up" data-aos-delay="0" className="prepend-2-slides">    1. CAPTURE</button>
                            <button onClick={() => slideTo(1)} data-aos="fade-up" data-aos-delay="100" className="prepend-slide">    2. SELECT (OPTIONAL)</button>
                            <button onClick={() => slideTo(2)} data-aos="fade-up" data-aos-delay="200" className="slide-250">    3. SHARE</button>
                        </p> : <p className="append-buttons">
                            <button onClick={() => slideTo(0)} data-aos="fade-up" data-aos-delay="0" className="prepend-2-slides">    1. CAPTURE</button>
                            <button onClick={() => slideTo(1)} data-aos="fade-up" data-aos-delay="100" className="prepend-slide">    2. TRANSFORM</button>
                            <button onClick={() => slideTo(2)} data-aos="fade-up" data-aos-delay="200" className="slide-250">    3. APPLY OVERLY</button>
                            <button onClick={() => slideTo(3)} data-aos="fade-up" data-aos-delay="300" className="slide-500">    4. RECEIVE</button>
                            <button onClick={() => slideTo(4)} data-aos="fade-up" data-aos-delay="400" className="append-slides">    5. SHARE</button>
                        </p>
                    }


                    <Swiper
                        // modules={[Virtual]}
                        slidesPerView={1.3}
                        spaceBetween={50}
                        onSwiper={setSwiperRef}
                        centeredSlides={true}
                        className="mySwiper py-5"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        // loop={true}
                        modules={[Autoplay]}
                    >
                        {cardData.map((slideContent, index) => (
                            <SwiperSlide key={slideContent} virtualIndex={index}>
                                <Row>
                                    <Col xxl={6}>
                                        <div className="slider-ai-box d-flex flex-column justify-content-center text-start mx-3 px-4" style={{ height: '100%' }}>
                                            <span className='fs-3'>{slideContent.pagenum}</span>
                                            <h1 className='fw-bold'>{slideContent.tilte}</h1>
                                            <p className='fs-4 text-secondary' >{slideContent.para}</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6}>
                                        <div className="d-flex text-start  mx-3 ">
                                            <img src={slideContent.img} alt='ll' className='' />
                                        </div>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Col>
        </>
    )
}

export default Slidebar