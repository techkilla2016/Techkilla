import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardContent from '@/components/product/CardContent'
import product from '@/data/product/DE'
export const metadata = {
    title: 'Digital Engagement',
    description: ` Digital engagement is an essential part of modern business, and experiential technology products can help your brand stand out and engage its customers in new and exciting ways.`,
}

const DigitalEngagement = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing'>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/assets/banner/Physical_Engagement_02.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/assets/banner/Physical_Engagement_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={7} xl={7} lg={7} md={7} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Drive engagement with digital innovation
                                                </h2>
                                                <p>
                                                    Digital engagement is an essential part of modern business, and experiential technology products can help your brand stand out and engage its customers in new and exciting ways.
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

                    <CardContent product={product} desc={`
                     our digital engagement experiential technology products are an excellent choice for businesses looking to take their customer engagement to the next level. We offer a range of features and tools that can help businesses connect with their audiences in new and exciting ways, and drive real results.
                    `} />

                    <Container>
                        <Row className="justify-content-center pb-4">
                            <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                <div className="text-center finishLine">
                                    Whether you're looking to boost sales, build customer loyalty, or simply create a fun and engaging experience for your customers, our products can help you get there.
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
export default DigitalEngagement