import Footer from '@/components/footer'
import Header from '@/components/header'
import ProdcutCard from '@/components/product/productCard'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const PhysicalEngagement = ({ product }) => {
    const [isPreloader, setIsPreloader] = useState(true)
    setTimeout(() => {
        setIsPreloader(false)
    }, 3090)
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
                                <Image src='/product-01.png' width={1920} height={1080} />
                            </div>
                        </div>
                        <div className='product-home'>
                            <Container>
                                <p>
                                    In-person engagement is an essential part of building strong customer relationships, and experiential technology products can help businesses create memorable experiences that connect with their audiences.
                                </p>
                                <p>
                                    Our physical engagement experiential technology products are designed to help businesses create immersive and memorable experiences that connect with their customers on a deeper level.
                                </p>
                            </Container>
                        </div>
                    </div>
                    <div className='product-container'>
                        <Container>
                            <div className='Heading'>
                                Product
                            </div>
                            <Row>
                                {
                                    product?.map((curItem, keys) => {
                                        return (
                                            <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className='my-4'>
                                                <ProdcutCard {...curItem} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>
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
    const res = await fetch('https://techkilla.vercel.app/api/product/physical-engagement/')
    const data = await res.json()
    return ({
        props: {
            product: data?.data
        }
    })
}
