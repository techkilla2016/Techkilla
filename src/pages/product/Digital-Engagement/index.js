import Footer from '@/components/footer'
import Header from '@/components/header'
import ProdcutCard from '@/components/product/productCard'
import YouTubePlayer from '@/components/product/videoPlay'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const DigitalEngagement = ({ product }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        setCurVideo(payload)
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
                                <Image src='/product-02.png' width={1920} height={1080} />
                                <Image src='/product-02_02.png' width={1920} height={1080} />
                            <div className='preloaderBack-layer'>
                            </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Drive engagement with digital innovation
                                                </h2>
                                                <p>
                                                    Digital engagement is an essential part of modern business, and experiential technology products can help your brand stand out and engage its customers in new and exciting ways.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/vrr.png' width={1080} height={1920} />
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
                                Product
                            </div>
                            <Row>
                                {
                                    product?.map((curItem, keys) => {
                                        return (
                                            <Col key={keys} xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='my-4'>
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
                    <div className='mainContainer my-5'>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}
export default DigitalEngagement
export const getServerSideProps = async () => {
    const res = await fetch('https://techkilla.vercel.app/api/product/digital-engagement')
    const data = await res.json()
    return ({
        props: {
            product: data?.data
        }
    })
}
