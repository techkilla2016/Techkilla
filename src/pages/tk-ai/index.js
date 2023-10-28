import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import SwipeCard from '@/components/tk-ai/swipeCard'
import WhatsappModal from '@/models/whatsapp'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ExpoBtn from '@/components/button/expoBtn'
import ModelSwiper from '@/components/photo-ai/ModelSwiper'
import { MdDone } from 'react-icons/md'
import Slider from '@/components/photo-ai/slider'
import Image from 'next/image'
const aiList = [
    "No Need for Staffing",
    "Ready for iPad Use",
    "Accessible on Mobile Devices with Ease",
    "User-Friendly and Intuitive",
    "Instant Sharing via QR Code, Email, or Drive",
    "Compatible with On-Site Printing"
]

const aiData = [
    {
        img: '/photo-ai/Magical.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/Artistic.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/Ornate.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/Painting.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/Professional.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/Retro.jpg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/sci-fi.jpeg',
        title: "techkilla"
    },
    {
        img: '/photo-ai/super-hero.jpg',
        title: "techkilla"
    },
]
const Home = () => {

    return (
        <>
            <Head>
                <title>Techkilla</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    {/* 1 */}
                    <Container className='py-5'>
                        <Row className='align-items-center ai-photo-Section-7'>
                            <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12} className='tk-ai-col'>

                                <div className="micro_heading01 text-start" data-aos="zoom-in-down" data-aos-delay="0">
                                    Unleash Halloween magic with <span>AI face swap!</span>
                                </div>
                                <p className='photo-ai-para py-4' data-aos="zoom-in-down" data-aos-delay="300">
                                    Get ready for a jaw-dropping transformation with our spooky AI-powered Face Swap.
                                </p>
                                <div className="d-flex" data-aos="zoom-in-up" data-aos-delay="200">
                                    <ExpoBtn title="EXPLORE ALL" url="/" />
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12} className='tk-ai-col'>
                                <div className="d-flex justify-content-center" data-aos="zoom-in-up" data-aos-delay="0">
                                    <SwipeCard />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* 2 */}
                    <div className="">
                        <div className="ai-model-container py-5">
                            <Container>
                                <h2 className=' fw-bold' data-aos="zoom-in-down" data-aos-delay="0">
                                    Carefully selected content
                                </h2>
                                <Row>
                                    {
                                        aiData?.map((item, keys) => {
                                            return <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12} key={keys} className='py-3' data-aos="zoom-in-down" data-aos-delay={keys * 100}>
                                                <Card className='overflow-hidden' >
                                                    <div className="tk-ai-card">
                                                        <Image src={item?.img} title={item.title} width={1920} height={1080} />
                                                    </div>
                                                </Card>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Container>
                            {/* <div className="ai-model-inner  py-5 d-flex align-items-start">
                                <ModelSwiper />
                            </div> */}
                        </div>
                    </div>

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

                    <Container fluid className='ai-slilder py-5'>
                        <Slider />
                    </Container>
                    <Footer bg="rgb(245 245 244)" />
                </div>
            </main>

        </>
    )
}

export default Home