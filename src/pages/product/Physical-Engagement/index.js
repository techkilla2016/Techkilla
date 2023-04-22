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
                                                    Immersive Experiences with Experiential Technology
                                                </h2>
                                                <p>
                                                    In-person engagement is an essential part of building strong customer relationships, and experiential technology products can help businesses create memorable experiences that connect with their audiences.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
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
                            <div className='Heading'>
                                products
                            </div>
                            <Row>
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
                                    Our physical engagement experiential technology products are an excellent choice for businesses looking to engage with their customers in powerful and meaningful ways. We offer a range of features and tools that can help businesses create immersive and memorable experiences that connect with customers on a deeper level, and build strong, long-lasting relationships.
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
