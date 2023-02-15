import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { BsArrowRight } from 'react-icons/bs'
import cartList from "./cartData";
import Link from "next/link";
export default function CardSlider() {
    return (

        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    cartList.map((curCart) => {
                        return (
                            <SwiperSlide key={curCart._id}>
                                <div className="cartContainer">
                                    <img src={curCart.img} alt="" />
                                    <div className="cartContant">
                                        <div className="tag">{curCart.tag}</div>
                                        <div className="portfolio__title">{curCart.title}</div>
                                        <div className="portfolioCartBtn">
                                            <Link href={curCart.target}><BsArrowRight /></Link>
                                        </div>  
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
