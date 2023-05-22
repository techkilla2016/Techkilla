import CaseStudieCart from '@/components/case-studie/'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const CaseStudie = ({ useCase }) => {
    return (
        <>
            <Head>
                <title>Case studies</title>
                <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1Q8D92YRHE" />
                <script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}D
 gtag('js', new Date());
 gtag('config', 'G-1Q8D92YRHE', {
 page_path: window.location.pathname,
 });
`,
                    }}
                />
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
                                                    From Challenge to Triumph: Clients' Journey with Experiential Tech
                                                </h2>
                                                <p>
                                                    See how Techkilla delivered exceptional results for its clients by providing innovative experiential technology solutions.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/case-studie.png' alt='Physical Engagement' width={1080} height={1920} />
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
                            <Container>
                                <Row className="justify-content-center  py-5">
                                    <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                        <div className="text-center finishLine">
                                            <Link href='/contact'>Partner with us</Link>  to leverage the power of experiential technology and create unique, memorable, and personalized brand experiences that drive customer engagement, loyalty, and revenue growth.
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