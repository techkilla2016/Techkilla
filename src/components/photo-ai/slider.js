import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
// import { Virtual } from 'swiper/core';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const cardData = [
    {
        pagenum: '1/5',
        tilte: 'Initiate the Magic',
        para: `Users simply tap 'Start' to conjure their live image capture.`,
        img: '/photo-ai/slider/Initiate-the-Magic.png'
    },
    {
        pagenum: '2/5',
        tilte: 'Discover AI Transformation Options',
        para: `Select 'Generate' to open the door to a world of AI transformations, where you can handpick your favorite enchantment`,
        img: '/photo-ai/slider/Discover.png'
    },
    {
        pagenum: '3/5',
        tilte: 'Transform ',
        para: `Experience the Speed of Instant AI TransformationCapture the Moment and Watch the Magic Unfold as AI Transforms Your Image in an Instant, Delivering Swift and Stunning Results`,
        img: '/photo-ai/slider/3rd.png'
    },
    {
        pagenum: '4/5',
        tilte: 'Re-generate or Share',
        para: `Click 'Regenerate' to Keep the Magic Alive When Your Desire to Rediscover Yourself Knows No Bounds.`,
        img: '/photo-ai/slider/Re-Generate-or-Share.png'
    },
    {
        pagenum: '5/5',
        tilte: 'Share & display',
        para: `Share Your Transformed Masterpiece with Endless Possibilities. Choose from QR Scanning, Emailing, or Safeguarding for Posterity.`,
        img: '/photo-ai/slider/Share-Display.png'
    }
]
const Slidebar = () => {
    const [swiperRef, setSwiperRef] = useState(0);

    const slideTo = (index) => {
        swiperRef.slideTo(index);
    };


    return (
        <>
            <Col xxl={12} lg={12} md={12} sm={12}>
                <div className="main">
                    <p className="append-buttons">
                        <button onClick={() => slideTo(0)} className="prepend-2-slides">
                            1. CAPTURE
                        </button>
                        <button onClick={() => slideTo(1)} className="prepend-slide">
                            2. TRANSFORM
                        </button>
                        <button onClick={() => slideTo(2)} className="slide-250">
                            3. APPLY OVERLY
                        </button>
                        <button onClick={() => slideTo(3)} className="slide-500">
                            4. RECEIVE
                        </button>
                        <button onClick={() => slideTo(4)} className="append-slides">
                            5. SHARE
                        </button>
                    </p>
                    <Swiper
                        // modules={[Virtual]}
                        slidesPerView={1.3}
                        spaceBetween={50}
                        onSwiper={setSwiperRef}
                        centeredSlides={true}
                        className="mySwiper"
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