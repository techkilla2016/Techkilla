import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { ImQuotesLeft } from 'react-icons/im'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const cardData = [
    {
        name: 'Gurpreet Singh Saini',
        post: "Marketing Manager",
        company: "ITC Limited",
        desc: `Recently worked with Techkilla for sunfeast bounce & Aashirvaad Svasti lassi on AR filters. Their professionalism, creativity, and timely delivery were outstanding. They brought a new level of interactivity and engagement to our marketing campaigns, making them highly recommended for their innovative and effective services in the digital realm.`,
        img: '/photo-ai/Magical.jpg'
    },
    {
        name: 'Vyom Chaturvedi ',
        post: "Head Planning & Strategy",
        company: "Phoenix Live",
        desc: `It’s always been a great experience working with Yashi and team, they have always delivered on time and as per expectations. It’s been a pleasure working with them.`,
        img: '/photo-ai/Magical.jpg'
    },
    {
        name: 'Vikas Khanna ',
        post: "Director",
        company: "Myka Events",
        desc: `One of the best solution providers who ensure high audience engagement using customized tech.  I've worked with them on several occasions and everytime the experience has been extremely satisfying.  Wishing Team TechKilla the very best.`,
        img: '/photo-ai/Magical.jpg'
    },
    {
        name: 'Pratik Bhandari ',
        post: "Event Marketing & Consultant ",
        company: "Myka Events",
        desc: `I now know the team for over 4 years and i must admit they are one of the smoothest team to work with. They are always available, they will try to give solutions at best costs. Working with them doesnt feel like you are working with another company, they become part of your team and thats the best situation to be in. I can high recommend anyone to go ahead and work with them`,
        img: '/photo-ai/Magical.jpg'
    },
    {
        name: 'Gagan Rohtagi',
        post: "Associate Vice president,Client servicing",
        company: "Brand Width Events",
        desc: `Lovely working with them, very flexible approach and professionalism in execution`,
        img: '/photo-ai/Magical.jpg'
    },
]
const Testimonials = () => {
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