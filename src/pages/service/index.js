import Buble from '@/components/animation/buble'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/home/').then((responce) => {
            return responce.json()
        }).then((result) => {
            setData(result)
        })
    }, [])
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
