import Footer from '@/components/footer'
import Header from '@/components/header'
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AR from '../../../public/Assets/service/ar.webp'
import VR from '../../../public/Assets/service/VR.webp'
import AD from '../../../public/Assets/service/AD.webp'
import Game from '../../../public/Assets/service/Game.webp'

const Service = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="service">
                            <h3 className="section__title" style={{ color: " #000",padding:"30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>Our Service</span>
                            </h3>
                            <Container>
                                <Row>
                                    <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                                        <div className="serviceCart">
                                            <div className="iconContainer">
                                                <div className="serviceIcon">
                                                    <img src={AR} />
                                                </div>
                                            </div>
                                            <div className="cartTitle">
                                                Social AR Filters
                                            </div>
                                            <p>
                                                Immersive augmented reality experiences on Facebook, Instagram, and Snapchat lenses
                                            </p>
                                            <div className="btnSection2">
                                                <button>
                                                    <Link href="/">Read more</Link>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                                        <div className="serviceCart">
                                            <div className="iconContainer">
                                                <div className="serviceIcon">
                                                    <img src={AD} />
                                                </div>
                                            </div>
                                            <div className="cartTitle">
                                                Playable Ads
                                            </div>
                                            <p>
                                                Web, mobile applications, and social news streams advertisements for interactive gaming
                                            </p>
                                            <div className="btnSection2">
                                                <button>
                                                    <Link href="/">Read more</Link>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                                        <div className="serviceCart">
                                            <div className="iconContainer">
                                                <div className="serviceIcon">
                                                    <img src={VR} />
                                                </div>
                                            </div>
                                            <div className="cartTitle">
                                                VR Experience
                                            </div>
                                            <p>
                                                360 Virtual excursion, interaction, and gaming that are engaging yet experiencing for all
                                            </p>
                                            <div className="btnSection2">
                                                <button>
                                                    <Link href="/">Read more</Link>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
                                        <div className="serviceCart">
                                            <div className="iconContainer">
                                                <div className="serviceIcon">
                                                    <img src={Game} />
                                                </div>
                                            </div>
                                            <div className="cartTitle">
                                                Newsfeed Games
                                            </div>
                                            <p>
                                                Interactive games made specifically for web browsers (Safari, Chrome, or Edge) and social media
                                            </p>
                                            <div className="btnSection2">
                                                <button>
                                                    <Link href="/">Read more</Link>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Service
