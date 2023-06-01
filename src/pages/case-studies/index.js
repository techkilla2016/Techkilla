import CaseStudieCart from '@/components/case-studie/'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
const CaseStudie = ({ useCase }) => {
    const [page, setPage] = useState(0)
    const [completedUseCase, setCompletedUseCase] = useState()
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < useCase?.total / 8; i++) {
            arr.push(i + 1);
        }
        setCompletedUseCase(arr)
    }, [page])
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
                                        useCase?.data?.map((curItem, keys) => (keys + 1 >= (8 * page + 1) && keys + 1 <= (8 * (page + 1))) && (
                                            <Col key={keys} xxl={3} xl={3} lg={4} md={6} sm={6} xm={12} className='my-4'>
                                                <CaseStudieCart {...curItem} />
                                            </Col>
                                        ))
                                    }
                                </Row>

                                {useCase?.data?.length > 8 && <div className="d-flex m-auto justify-content-center">
                                    <Pagination>
                                        <Pagination.First
                                            onClick={() => {
                                                setPage(0);
                                            }} />
                                        <Pagination.Prev
                                            onClick={() => {
                                                setPage(page > 0 ? page - 1 : page);
                                            }} />
                                        {completedUseCase?.map((res, key) => (
                                            <Pagination.Item
                                                key={key}
                                                active={page + 1 == res}
                                                onClick={() => {
                                                    setPage(key);
                                                }} >
                                                {res}
                                            </Pagination.Item>
                                        ))}
                                        <Pagination.Next
                                            onClick={() => {
                                                setPage((completedUseCase.length - 1) > page ? page + 1 : page);
                                            }} />
                                        <Pagination.Last
                                            onClick={() => {
                                                setPage(completedUseCase.length - 1);
                                            }} />
                                    </Pagination>
                                </div>}
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
                </div >
            </main >

        </>
    )
}

export default CaseStudie
export const getServerSideProps = async () => {
    try {
        const page = {
            from: 1,
            to: 8
        }
        const res = await fetch(`${process.env.BaseUrl}/api/case-studie`, {
            body: JSON.stringify(page),
            method: "POST"
        })
        const data = await res.json()
        return ({
            props: {
                useCase: data
            }
        })
    } catch (error) {
        return ({
            props: {
                useCase: []
            }
        })
    }
}
