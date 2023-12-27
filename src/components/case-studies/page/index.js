"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiShanghaimetro } from 'react-icons/si'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image'
const CaseStudiePage = ({ params, BaseUrl }) => {
    const [caseStudie, setCaseStudie] = useState()
    const [url, setUrl] = useState('')
    useEffect(() => {
        // Fetch data from your server or API based on the dynamic parameter
        const fetchData = async () => {
            try {
                const responce = await fetch(`${BaseUrl}/api/case-studie/particular_case_studie/`, {
                    method: 'POST',
                    body: JSON.stringify({
                        slag: `/${params?.studies}`
                    })
                })
                const result = await responce?.json()
                setCaseStudie(result?.data);
                setUrl(result?.BaseUrl);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params?.studies]);
    return (
        !caseStudie ? <>
            <Head>
                <title>{caseStudie?.heading}</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">

                        <div className="caseHomePage">
                            <div className="pagebg">
                                {/* <Image src={url + caseStudie?.cover_page} alt='Excitometer-Tetra Pak' width={1920} height={1080} /> */}
                            </div>
                            <div className="pageText">
                                <Container>
                                    <div className="zoom">
                                        {caseStudie?.heading}
                                    </div>
                                </Container>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        {
                            caseStudie?.KeyHighlights?.length ? <div className="pageContainer">
                                <h2 className="heading"> Key highlights</h2>
                                <Container>
                                    <Row>
                                        {
                                            caseStudie?.KeyHighlights?.map((item, keys) => {
                                                return <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12} key={keys}>
                                                    <div className='key-cart'>
                                                        <div className='keyCount'>
                                                            <Row className='align-items-center'>
                                                                <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                                    <div className='key-icon'>
                                                                        <Image src={url + item?.icon} width={80} height={80} />
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                                    <div className='key-para'>
                                                                        {item?.heading}
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }

                        {/* desc with image  */}
                        {
                            caseStudie?.case_studie?.length ? caseStudie?.case_studie?.map((item, keys) => {
                                return <div className="pageContAbout" key={keys}>
                                    <Container>
                                        {
                                            ((keys + 1) % 2 !== 0) ? <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className="pageInnerCol">
                                                        <div className="headCol">
                                                            {item?.heading}
                                                        </div>
                                                        <div className="ColPara">
                                                            {item?.desc}
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className='caseFullImg'>
                                                        <Image src={url + item?.thumbnail} alt='What is an excitometer?' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row> : <Row>

                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className='caseFullImg'>
                                                        <Image src={url + item?.thumbnail} alt='What is an excitometer?' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                                    <div className="pageInnerCol">
                                                        <div className="headCol">
                                                            {item?.heading}
                                                        </div>
                                                        <div className="ColPara">
                                                            {item?.desc}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        }

                                    </Container>
                                </div>
                            }) : ''
                        }

                        {/* use_case 1 */}
                        {
                            caseStudie?.use_case_oder?.length ? <div className="useCaseSection">
                                <Container>
                                    <div className="heading">
                                        use cases one
                                    </div>
                                    <Row>
                                        {
                                            caseStudie?.use_case_oder?.map((item, keys) => {
                                                return <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} key={keys}>
                                                    <div className='key-cart'>
                                                        <div className='keyCount'>
                                                            <div className='key-count' id={`key-count${keys + 1}`} >
                                                                {keys + 1}
                                                            </div>
                                                            <div className='benif-para'>
                                                                {item}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }

                        {/* use_case  2*/}
                        {
                            caseStudie?.use_case_image?.length ? <div className="micro_qr">
                                <h2 className="micro_heading01 mb-4">
                                    Use <span>cases</span>
                                </h2>
                                <div className="qr-p">
                                    <Container>
                                        <Row>
                                            {
                                                caseStudie?.use_case_image?.map((curCase, index) => {
                                                    // const Compo = 
                                                    return (
                                                        <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                            <div className="col-qr">
                                                                <div className="qr-cases">
                                                                    <h3 className="qr-cases-icon">
                                                                        <Image src={url + curCase.icon} alt={curCase?.heading} width={1920} height={1080} />
                                                                    </h3>
                                                                    <div className="qr-title">
                                                                        {curCase?.heading}
                                                                    </div>
                                                                    <div className="qr-desc">
                                                                        {curCase?.desc}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    </Container>
                                </div>
                            </div> : ''
                        }


                        {/* Benefits */}
                        {
                            caseStudie?.benefits?.length ? <div className=''>
                                <Container>
                                    <div className="serviceContainer py-5">
                                        <h3 className='text-center benifit-head pt-4' >Benefits </h3>
                                        <div className='text-center benifit-para'>Benefits of launching your own microsite</div>
                                    </div>
                                    <Row className='justify-content-center'>

                                        {
                                            caseStudie?.benefits?.map((item, keys) => {
                                                return <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} key={keys} className='mt-2'>
                                                    <div className='benifit'>
                                                        <div className='benifit-icon '>
                                                            <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                                <SiShanghaimetro />
                                                            </div>
                                                        </div>
                                                        <h5 className='head'>
                                                            Specifically aimed campaigns
                                                        </h5>
                                                        <p>
                                                            Targeted campaigns increase engagement, optimize budget, and drive conversions for brands.
                                                        </p>
                                                    </div>
                                                </Col>
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div> : ''
                        }

                        {/* Related Projects */}
                        <Footer />
                    </div>
                </div>
            </main >
        </> : <div className="loader"></div>
    )
}

export default CaseStudiePage