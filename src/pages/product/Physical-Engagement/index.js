import Footer from '@/components/footer'
import Header from '@/components/header'
import ProdcutCard from '@/components/product/productCard'
import YouTubePlayer from '@/components/product/videoPlay'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const PhysicalEngagement = ({ product }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        if (payload === '/' || payload === '') {
            setCurVideo('https://www.youtube.com/watch?v=JxMa3t3XDts&t=4s')
        } else {
            setCurVideo(payload)
        }
    }
    return (
        <>
            <Head>
                <title>Physical Engagement</title>
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
                                                <Image src='/brand-activation.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='product-container'>
                        {/* <h2>
                            Our physical engagement experiential technology products are designed to help businesses create immersive and memorable experiences that connect with their customers on a deeper level.
                        </h2> */}
                        <Container>
                            <p className='text-center first_line' >
                                Our physical engagement experiential technology products are an excellent choice for businesses looking to engage with their customers in powerful and meaningful ways. We offer a range of features and tools that can help businesses create immersive and memorable experiences that connect with customers on a deeper level, and build strong, long-lasting relationships.
                            </p>
                            <div className='Heading'>
                                products
                            </div>
                            <Row className='justify-content-center'>
                                {
                                    product?.map((curItem, keys) => {
                                        return (
                                            <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className=''>
                                                <ProdcutCard {...curItem} handleClick={handleOpen} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>

                    {
                        isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />
                    }
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
export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BaseUrl}/api/product/physical-engagement/`)
    const data = await res.json()
    return ({
        props: {
            product: data?.data
        }
    })
}
