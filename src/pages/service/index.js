import Buble from '@/components/animation/buble'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'

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
    const  data = [
        {
            title: 'Microsite design',
            description: 'We create customised microsites for your occasions, unique needs, and interaction.',
            img: '/assets/service/MD.webp',
            slag: '/service/Microsite-Design'
        },
        {
            title: 'Virtual reality Solutions',
            description: 'specialised VR 360 solutions for gaming and audience engagement.',
            img: '/assets/service/VR.webp',
            slag: '/service/VR-Solutions'
        },
        {
            title: 'Playable Ads',
            description: 'Interactive gaming ads made just for app advertisers to let people try before they buy.',
            img: '/assets/service/ADS.webp',
            slag: '/service/Playable-Ads'
        },
        {
            title: 'On-ground activations',
            description: 'We engage your audience in an intuitive way with fun experiential activities.',
            img: '/assets/service/Game.webp',
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
                    <div className="intro-Section">
                        <div className="introWraper">
                            <Buble />
                            <div className="wrapperBox">
                                <Container>
                                    <h4 className='introTitle text-light text-center'> Our Service page </h4>
                                    <Row className='justify-content-center '>
                                        <Col xxl={10} lg={11} sm={12} className='text-light text-center'>
                                            <h1 className='introHeading'>we provide exceptional solutions tailored to your <span>unique needs and preferences.</span></h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='mainContainer my-5'>
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
            </main>

        </>
    )
}
export default Service
