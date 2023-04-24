import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Service = () => {
    const data = [
        {
            title: 'Microsite design',
            description: 'We create customised microsites for your occasions, unique needs, and interaction.',
            img: '/service/MD.webp',
            slag: '/service/Microsite-Design'
        },
        {
            title: 'Virtual reality Solutions',
            description: 'specialised VR 360 solutions for gaming, 360 tour and audience engagement.',
            img: '/service/VR.webp',
            slag: '/service/VR-Solutions'
        },
        {
            title: 'Playable Ads',
            description: 'Interactive gaming ads made just for app advertisers to let people try before they buy.',
            img: '/service/ADS.webp',
            slag: '/service/Playable-Ads'
        },
        {
            title: 'On-ground activations',
            description: 'We engage your audience in an intuitive way with fun experiential activities.',
            img: '/service/Game.webp',
            slag: '/service/On-ground-activations'
        },
    ]
    return (
        <>
            <Head>
                <title>Our Service</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing  bg-light'>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/banner/service.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/banner/Microsite.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Revolutionary Tech Solutions
                                                </h2>
                                                <p>
                                                    we specialize in providing experiential technology solutions that help businesses enhance customer engagement, drive growth, and increase brand loyalty.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>

                                                <Image src='/service/playble-ads.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='mainContainer bg-light' >
                        <div className="service">
                            <h3 className="section__title my-5" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>Our Service</span>
                            </h3>
                            <Container>
                                <Row>
                                    {
                                        data.map((curItem, index) => {
                                            return <Card {...curItem} key={index} />
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
                        <Container>
                            <Row className="justify-content-center py-4">
                                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                    <div className="text-center" style={{ fontSize: '18px' }}>
                                        Our team of experts works closely with you to understand your unique needs and deliver tailored solutions that meet your specific goals. Whether you're looking to improve customer satisfaction, increase sales, or enhance your brand's image, our experiential technology solutions can help you achieve your objectives.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main >

        </>
    )
}
export default Service
