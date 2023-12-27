import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import SwipeCard from '@/components/tk-ai/swipeCard'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ExpoBtn from '@/components/button/expoBtn'
import { MdDone } from 'react-icons/md'
import Slider from '@/components/photo-ai/slider'
import { videoDemo, videoDemoMB } from '@/data/tk-ai/videoDemo'
import React from 'react'
const aiList = [
    "No Need for Staffing",
    "Ready for iPad Use",
    "Accessible on Mobile Devices with Ease",
    "User-Friendly and Intuitive",
    "Instant Sharing via QR Code, Email, or Drive",
    "Compatible with On-Site Printing"
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
                                    Group <span>AI Photo</span> with a  single click!
                                </div>
                                <p className='photo-ai-para py-4' data-aos="zoom-in-down" data-aos-delay="300">
                                    Turn your group into your preferred collection of Heroes in an instant using our cutting-edge AI-powered tool.
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
                            <Container className='home'>
                                <h2 className=' fw-bold' data-aos="fade-up" data-aos-delay="0">
                                    Action in Transformation
                                </h2>
                                <Row className='desktop row'>
                                    {
                                        videoDemo?.map((item, keys) => {
                                            return <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={keys} >
                                                {
                                                    item?.map((curItem, index) => {
                                                        return <React.Fragment key={index} >
                                                            <div className='overflow-hidden my-2' data-aos="fade-up" data-aos-delay={`${(keys + index) * 100}`}>
                                                                <img src={curItem?.img} className='img-fluid' />
                                                            </div>
                                                        </React.Fragment>
                                                    })
                                                }
                                            </Col>
                                        })
                                    }
                                </Row>
                                <Row className='mobile'>
                                    {
                                        videoDemoMB?.map((item, keys) => {
                                            return <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={keys}>
                                                {
                                                    item?.map((curItem, index) => {
                                                        return <React.Fragment key={index}>
                                                            <div className='overflow-hidden my-2' data-aos="fade-up" data-aos-delay={`${(keys + index) * 100}`}>
                                                                <img src={curItem?.img} className='img-fluid' />
                                                            </div>
                                                        </React.Fragment>
                                                    })
                                                }
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
                    </div>

                    {/* use-case  */}
                    <Container className='py-4'>
                        <h2 className='fw-bold' data-aos="fade-up" data-aos-delay="0">
                            Use Case
                        </h2>
                        <Row className='align-items-center ai-photo-Section-7'>
                            <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12} className='tk-ai-col'>
                                <div className="d-flex justify-content-center" data-aos="zoom-in-up" data-aos-delay="0">
                                    <SwipeCard />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='py-5 ai-list-container'>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <h2 data-aos="zoom-in-up" data-aos-delay="0"> Your Event Engagement Solution for In-Person, Hybrid, and Virtual Gatherings</h2>
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