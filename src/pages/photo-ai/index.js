import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { SiTailwindcss } from 'react-icons/si'
import { FaTeamspeak } from 'react-icons/fa'
import { IoMdTrendingUp } from 'react-icons/io'
import { MdDone } from 'react-icons/md'
import Slider from '@/components/photo-ai/slider'
import Hero from '@/components/photo-ai/hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from "swiper";
import ModelSwiper from '@/components/photo-ai/ModelSwiper';
const PhotoAI = () => {
    const aiList = [
        "No Need for Staffing",
        "Ready for iPad Use",
        "Accessible on Mobile Devices with Ease",
        "User-Friendly and Intuitive",
        "Instant Sharing via QR Code, Email, or Drive",
        "Compatible with On-Site Printing"
    ]
    const data2 = [
        {
            icon: <SiTailwindcss />,
            heading: "Artistry Tailored Just for You",
            desc: "Personalized creative work with a unique touch, carefully crafted to suit individual preferences and needs."
        },
        {
            icon: <FaTeamspeak />,
            heading: "Immersive Interaction at its Peak",
            desc: "An engaging experience that deeply involves participants, reaching the zenith of immersive engagement."
        },
        {
            icon: <IoMdTrendingUp />,
            heading: "Embracing the Pinnacle of Current Style",
            desc: "Adopting the industry's latest and most fashionable trends to deliver remarkable outcomes."
        },

    ]

    const companyData = [
        '/photo-ai/company_01.svg',
        '/photo-ai/company_02.svg',
        '/photo-ai/company_03.svg',
        '/photo-ai/company_04.svg',
        '/photo-ai/company_05.svg',
        '/photo-ai/company_01.svg',
    ]

    const AIEnhancedData = [
        {
            img: '/photo-ai/2nd-page/1.png',
        },
        {
            img: '/photo-ai/2nd-page/2.png',
        },
        {
            img: '/photo-ai/2nd-page/3.png',
        },
        {
            img: '/photo-ai/2nd-page/4.png',
        },
    ]



    // section 7  
    const imgData = [
        {
            img: '/photo-ai/super-hero.jpg',
            title: 'Superhero',
        },
        {
            img: '/photo-ai/sci-fi.jpeg',
            title: 'Sci-Fi',
        },
        {
            img: '/photo-ai/Magical.jpg',
            title: 'Magical World',
        },
        {
            img: '/photo-ai/Professional.jpg',
            title: 'Professional',
        },
        {
            img: '/photo-ai/Painting.jpg',
            title: 'Painting',
        },
        {
            img: '/photo-ai/Artistic.jpg',
            title: 'Artistic',
        },
        {
            img: '/photo-ai/Ornate.jpg',
            title: 'Ornate Portrait',
        },
        {
            img: '/photo-ai/Retro.jpg',
            title: 'Retro',
        },

    ]

    return (
        <>
            <Head>
                <title>AI Photo Booth</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <Hero isContinue={false} />

                        {/* section 2  */}
                        <Container className='photo-ai-company py-5'>
                            <Row>
                                {
                                    data2?.map((item, keys) => {
                                        return <Col key={keys} xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} data-aos="fade-up" data-aos-delay={keys * 100}>
                                            <div className='inner d-flex flex-column align-items-center'>
                                                <div className="icon" data-aos="fade-up" data-aos-delay={keys * 100}>
                                                    {item?.icon}
                                                </div>
                                                <h5 className="head text-center" data-aos="fade-up" data-aos-delay={keys * 200}>
                                                    {item?.heading}
                                                </h5>
                                                <p className='text-center' data-aos="fade-up" data-aos-delay={keys * 300}>
                                                    {item?.desc}
                                                </p>
                                            </div>
                                        </Col>
                                    })
                                }

                            </Row>
                            <Row className='py-4'>
                                {
                                    companyData?.map((item, keys) => {
                                        return <Col xxl={2} xl={2} key={keys} lg={2} md={3} sm={4} xs={6} className='p-5' data-aos="fade-up" data-aos-delay={keys * 100}>
                                            <img src={item} alt="" />
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>

                        {/* section 3 */}
                        <div className='What-ai py-5'>
                            <Container >
                                <Row className='justify-content-evenly'>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <h2 className='py-3' data-aos="fade-up" data-aos-delay={100}>What Exactly Is an AI-Enhanced Photo Booth?</h2>
                                        <p data-aos="fade-up" data-aos-delay={200}>
                                            At the heart of our cutting-edge photo booth platform, AI Photoshots, lies the infusion of state-of-the-art generative AI technology, ensuring the creation of truly exceptional results.
                                        </p>
                                        <p data-aos="fade-up" data-aos-delay={300}>
                                            With this integration, you have the power to harness customized AI prompts to morph user photographs into enchanting, themed masterpieces. Our proprietary implementation goes a step further, allowing you to not only craft distinct styles but also dictate unique poses, introduce specific characters or objects.
                                        </p>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <Row>
                                            {
                                                AIEnhancedData?.map((item, keys) => {
                                                    return <Col xxl={6} lg={6} md={6} sm={6} xs={6} key={keys} className='py-3' data-aos="fade-up" data-aos-delay={keys * 100}>
                                                        <div className="img-ai-box">
                                                            <div className="imgBox">
                                                                <img src={item?.img} alt="" />
                                                            </div>
                                                            <div className="count-ai" id={`count${keys + 1}`}>{keys + 1}</div>
                                                        </div>
                                                    </Col>
                                                })
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* section 4 */}
                        <div className="ai-model-container py-5">
                            <div className="ai-model-inner  py-5 d-flex align-items-start">
                                <ModelSwiper />
                            </div>
                        </div>

                        {/* section 5 */}
                        <Container className='py-5 ai-list-container'>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <h2> Your Event Engagement Solution for In-Person, Hybrid, and Virtual Gatherings</h2>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    {
                                        aiList?.map((item, keys) => {
                                            return <div key={keys} className="list-ai py-1 d-flex align-items-center" data-aos="fade-up" data-aos-delay={keys * 150}>
                                                <div className="icon-done"><MdDone /></div>
                                                <div className="ai-title">{item}</div>
                                            </div>
                                        })
                                    }

                                </Col>
                            </Row>
                        </Container>

                        {/* section 6 */}
                        <Container fluid className='ai-slilder py-5'>
                            <Slider />
                        </Container>

                        {/* section 7  */}
                        <Container className='ai-photo-Section-7'>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={10} sm={12} xs={12}>
                                    <h2>Craft and Transfigure with the AI Photo Booth Experience</h2>
                                    <p>
                                        Irrespective of your event's theme, our exclusive AI technology is malleable and tailored to manifest your vision seamlessly."
                                    </p>
                                    <button className='btn'>GET IN TOUCH</button>
                                </Col>
                            </Row>
                            <Row className='py-3 mt-5'>
                                {
                                    imgData?.map((item, keys) => {
                                        return <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} className='px-5 py-2'>
                                            <div className="img-section">
                                                <img src={item?.img} />
                                            </div>
                                            <h3 className='py-2s'>
                                                {item?.title}
                                            </h3>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PhotoAI