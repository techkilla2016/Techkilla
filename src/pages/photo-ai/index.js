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
import CompanySlider from '@/components/photo-ai/CompanySlider';
import Testimonials from '@/components/Testimonials';
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
        '/photo-ai/logos/logos-01.png',
        '/photo-ai/logos/logos-02.png',
        '/photo-ai/logos/logos-03.png',
        '/photo-ai/logos/logos-04.png',
        '/photo-ai/logos/logos-05.png',
        '/photo-ai/logos/logos-06.png',
        '/photo-ai/logos/logos-07.png',
        '/photo-ai/logos/logos-08.png',
        '/photo-ai/logos/logos-09.png',
        '/photo-ai/logos/logos-10.png',
        '/photo-ai/logos/logos-11.png',
        '/photo-ai/logos/logos-12.png',
        '/photo-ai/logos/logos-13.png',
        '/photo-ai/logos/logos-14.png',
        '/photo-ai/logos/logos-15.png',
        '/photo-ai/logos/logos-16.png',
        '/photo-ai/logos/logos-17.png',
        '/photo-ai/logos/logos-18.png',
        '/photo-ai/logos/logos-19.png',
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
            company: "Stage Crew Eventzs",
            desc: `One of the best solution providers who ensure high audience engagement using customized tech.  I've worked with them on several occasions and everytime the experience has been extremely satisfying.  Wishing Team TechKilla the very best.`,
            img: '/photo-ai/Magical.jpg'
        },
        {
            name: 'Pratik Bhandari ',
            post: "Event Marketing & Consultant ",
            company: "Stage Crew Eventzs",
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
                        </Container>
                        <Container fluid className='my-5 CompanySlider'>
                            <CompanySlider />
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
                                        <Row className='px-4'>
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

                        {/* Testimonials */}
                        <Container fluid className="Testimonials">
                            <h2 className='fw-bold text-center mt-5'>Testimonials</h2>
                            <Testimonials cardData={cardData} />
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PhotoAI