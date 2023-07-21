import { Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from "next/image"
import { ButtonSwap } from "@/components/button/Button"
import YouTubePlayer from "@/components/product/videoPlay";
import React, { useState } from "react";
import Counter from "@/components/common/Counter";

const PortfolioSection = ({ work, lastLine }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        if (payload === '/' || payload === '') {
            setCurVideo('https://www.youtube.com/watch?v=JxMa3t3XDts&t=4s')
        } else {
            setCurVideo(payload)
        }
    }
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={7} md={8} sm={8}>
                        <div className='colHeading text-center' data-aos="fade-down" data-aos-delay={0}>Our Portfolio</div>
                        <div className="portfolioTitle text-center" data-aos="zoom-in-up" data-aos-delay={0}>
                            Featured Shots of Recent Works
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Swiper
                    data-aos="zoom-in-up" data-aos-delay={0}
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
                    className="mySwiper py-5"
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {
                        work.map((item, keys) => {
                            return (
                                <SwiperSlide key={keys} className="" >
                                    <div className="work_card">
                                        <div className="work_card_inner">
                                            <Image src={item?.thumbnail} alt={item?.Heading} width={1920} height={1080} />
                                        </div>
                                        <div className="work_card_layer">
                                            <div>
                                            </div>
                                            <div className="work_btn">
                                                <Image src={item?.logo} alt={item?.Heading} width={1920} height={1080} />
                                                <ButtonSwap title='Preview' clickHandel={handleOpen} url={item?.url} />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </Container>

            <Container>
                <Row>
                    <Counter />
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center pb-4" data-aos="zoom-in" data-aos-delay={0}>
                    <Col xxl={9} xl={9} lg={9} md={10} sm={12} xm={12}>
                        <div className="text-center">
                            {lastLine}
                        </div>
                    </Col>
                </Row>
            </Container>
            {isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />}
        </>
    )
}
export default PortfolioSection
