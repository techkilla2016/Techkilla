import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { BsArrowRight } from 'react-icons/bs'
import Link from "next/link";
import Image from "next/image";
const cartList = [
    {
        _id: 1,
        tag: 'IPL',
        img: '/home/thumbnails01.webp',
        target: '/',
        title: 'Instagram AR Filter'
    },
    {
        _id: 2,
        tag: 'KUKU FM',
        img: '/home/thumbnails02.webp',
        target: '/',
        title: 'Instagram AR Filter'
    },
    {
        _id: 3,
        tag: 'KUKU FM',
        img: '/home/thumbnails03.webp',
        target: '/',
        title: 'Facebook Playable Ad-'
    },
    {
        _id: 4,
        tag: 'MIROSOFT PRIDE',
        img: '/home/thumbnails04.webp',
        target: '/',
        title: 'Instagram AR Filter'
    },
    {
        _id: 5,
        tag: 'KUKU FM',
        img: '/home/thumbnails05.webp',
        target: '/',
        title: 'Instagram AR Filter'
    },
    {
        _id: 6,
        tag: 'CEAT TYRES',
        img: '/home/thumbnails06.webp',
        target: '/',
        title: 'VR Experience'
    },
    {
        _id: 7,
        tag: 'TINDER',
        img: '/home/thumbnails07.webp',
        target: '/',
        title: 'Instagram AR Filter'
    },
]
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
                                    <Image src={curCart.img} alt={curCart.title} width={100} height={100} />
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
