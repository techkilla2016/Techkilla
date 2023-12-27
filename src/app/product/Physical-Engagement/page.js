import Footer from '@/components/footer'
import Header from '@/components/header'
import CardContent from '@/components/product/CardContent'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import product from '@/data/product/FE'
export const metadata = {
    title: 'Physical Engagement',
    description: `In-person engagement is an essential part of building strong customer relationships, and experiential technology products can help businesses create memorable experiences that connect with their audiences.`,
}

const PhysicalEngagement = () => {
    return (
        <>
            <Head>
                <title>Physical Engagement</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing'>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/assets/product/product-01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/assets/product/product-01_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={7} xl={7} lg={7} md={7} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Tech-Driven Engagement for Physical Experiences
                                                </h2>
                                                <p>
                                                    In-person engagement is an essential part of building strong customer relationships, and experiential technology products can help businesses create memorable experiences that connect with their audiences.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={5} xl={5} lg={5} md={5} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/assets/product/brand-activation.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    {/* ////  */}
                    <CardContent product={product} desc={`
                     Our physical engagement experiential technology products are an excellent choice for businesses looking to engage with their customers in powerful and meaningful ways. We offer a range of features and tools that can help businesses create immersive and memorable experiences that connect with customers on a deeper level, and build strong, long-lasting relationships.
                    `} />
                    <Container>
                        <Row className="justify-content-center pb-4">
                            <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                <div className="text-center finishLine">
                                    Transform the way your customers interact with your brand by leveraging our expertise in experiential technology for unique, immersive, and unforgettable physical engagement solutions.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className='mainContainer my-5'>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}


export default PhysicalEngagement
