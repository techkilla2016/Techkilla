import CaseStudieCart from '@/components/case-studie/CaseStudieCart'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const CaseStudie = ({ useCase }) => {
    return (
        <>
            <Head>
                <title>Case studies</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing'>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/product-01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/product-01_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Optimization on <span>TK</span> website
                                                </h2>
                                                <p>
                                                    In-person engagement is an essential part of building strong customer relationships, and experiential technology products can help businesses create memorable experiences that connect with their audiences.
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
                    <div className='mainContainer'>
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
    const responce = await fetch(`${process.env.BaseUrl}/api/case-studie/`)
    const data = await responce.json()
    return ({
        props: {
            useCase: data?.data
        }
    })
}