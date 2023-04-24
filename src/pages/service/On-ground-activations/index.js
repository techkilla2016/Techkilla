import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import Benefits from '@/components/service/Benefit'
import SingleCard from '@/components/ProjectSlider/singleCard'
import { FaRegEye } from 'react-icons/fa'
import { FcAcceptDatabase } from 'react-icons/fc'
import { BiDonateHeart } from 'react-icons/bi'
import { BsMegaphone } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'

import { TbHeartHandshake } from 'react-icons/tb'
import { GiCarKey, GiHypersonicBolt } from 'react-icons/gi'
const Ongroundactivations = ({ Related_projects }) => {
    return (
        <>
            <Head>
                <title>Ongroound Activity</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='product_landing' style={{ background: '#fff' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/banner/ongroound-activity_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/banner/ongroound-activity.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <div className='preloaderBack-layer'>
                                    </div>
                                </div>
                                <div className='product_intro'>
                                    <Container>
                                        <Row>
                                            <Col xxl={7} xl={7} lg={7} md={7} sm={12} xm={12}>
                                                <div className='product_main'>
                                                    <h2>
                                                        On-ground Activities
                                                    </h2>
                                                    <p>
                                                        Experiential marketing is all about creating memorable and immersive experiences that engage customers and leave a lasting impression. Our innovative strategies are designed to do just that.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={5} xl={5} lg={5} md={4} sm={0} xm={0}>
                                                <div className='product_main_icon'>
                                                    <Image src='/brand-activation.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>

                        <div className='BenefitsContainer bgWhite'>
                            <Container>
                                <p className='text-center mb-5 first_line' >
                                    Discover a new dimension of fun and engagement with our On-ground experiential technology solutions. Our installations are designed to appeal to a wide range of audiences, from kids to adults, from tech-savvy to casual users.
                                </p>
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head pt-5' >Benefits </h3>
                                    <div className='text-center benifit-para'>Advantages of on-the-ground activations</div>
                                </div>
                                <Row className='justify-content-center'>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                    <FaRegEye />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Captures visitors attention quickly
                                            </h5>
                                            <p>
                                                On-ground engagement offers immediate and eye-catching experiences, capturing visitors' attention.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                                    <FcAcceptDatabase />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Easy database collections
                                            </h5>
                                            <p>
                                                On-ground engagement enables effortless collection of visitor information for future marketing
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hotpink' }}>
                                                    <BiDonateHeart />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Lasting experience
                                            </h5>
                                            <p>
                                                On-ground engagement creates memorable experiences, leading to brand loyalty and advocacy.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                    <BsMegaphone />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Word of mouth promotion
                                            </h5>
                                            <p>
                                                On-ground engagement generates positive word of mouth, resulting in increased promotion.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                    <TbHeartHandshake />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Higher engagement
                                            </h5>
                                            <p>
                                                On-ground engagement increases engagement levels, creating more meaningful interactions with customers.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(34.1deg 100% 72.75%)' }}>
                                                    <GiCarKey />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Better retention
                                            </h5>
                                            <p>
                                                On-ground engagement fosters emotional connections, leading to improved customer retention.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                    <VscFeedback />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Feedback collection
                                            </h5>
                                            <p>
                                                On-ground engagement allows for valuable feedback collection and insights into customer needs.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                                    <GiHypersonicBolt />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Instant conversion
                                            </h5>
                                            <p>
                                                On-ground engagement enables instant conversion opportunities, leading to higher sales.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="bgWhite pb-5">
                            <Container>
                                <div className='use_case_heading'>Related projects</div>
                                <SingleCard list={Related_projects} />
                            </Container>
                        </div>
                        <Container>
                            <Row className="justify-content-center pb-4">
                                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                    <div className="text-center finishLine py-5">
                                        Are you looking to take your on-ground activations to the next level? Do you want to engage your audience in a truly memorable way? If so, experiential technologies may be just what you need.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer bg="#fff" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BaseUrl}/api/on-ground-activations/`)
    const data = await res.json()
    return ({
        props: {
            Related_projects: data?.data
        }
    })
}