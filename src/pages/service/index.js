import Buble from '@/components/animation/buble'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Service = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('/api/home/').then((responce) => {
    //         return responce.json()
    //     }).then((result) => {
    //         setData(result)
    //     })
    // }, [])
    const data = [
        {
            title: 'Microsite design',
            description: 'We create customised microsites for your occasions, unique needs, and interaction.',
            img: '/service/MD.webp',
            slag: '/service/Microsite-Design'
        },
        {
            title: 'Virtual reality Solutions',
            description: 'specialised VR 360 solutions for gaming and audience engagement.',
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
                                                    Our Service
                                                </h2>
                                                <p>
                                                    We provide exceptional solutions tailored to your unique needs and preferences.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/vrr.png' alt='Physical Engagement' width={1080} height={1920} />
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
                        <Footer />
                    </div>
                </div>
            </main >

        </>
    )
}
export default Service
