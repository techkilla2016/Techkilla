import BackBall from '@/components/animation/backBall'
import Buble from '@/components/animation/buble'
import CaseStudieCart from '@/components/case-studie/CaseStudieCart'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const CaseStudie = ({useCase}) => {
    return (
        <>
            <Head>
                <title>Case studies</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="intro-Section">
                            <div className="introWraper">
                                <Buble />
                                <div className="wrapperBox">
                                    <Container>
                                        <h4 className='introTitle text-light text-center'> Optimization on <span>TK</span> website </h4>
                                        <Row className='justify-content-center '>
                                            <Col xxl={10} lg={11} sm={12} className='text-light text-center'>
                                                <h1 className='introHeading'>Discover our most recent releases and thorough <br /><span>case studies.</span></h1>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <BackBall />
                            </div>
                        </div>
                        <div className="service">
                            <h3 className="section__title" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>Case Studies</span>
                            </h3>
                            <Container>
                                <Row>
                                    {
                                        useCase?.map((curItem, keys) => {
                                            return (
                                                <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className='my-4'>
                                                    <CaseStudieCart {...curItem} />
                                                </Col>
                                            )
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

export default CaseStudie
export const getServerSideProps = async () => {
    const responce = await fetch('https://techkilla.vercel.app/api/case-studie/')
    const data = await responce.json()
    return ({
        props: {
            useCase: data?.data
        }
    })
}