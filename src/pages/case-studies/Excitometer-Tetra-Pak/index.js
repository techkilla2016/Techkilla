import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiClapperboard, GiMicrophone, GiFilmProjector } from 'react-icons/gi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

const index = () => {
    return (
        <>
            <Head>
                <title>Excitometer - Tetra Pak</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">
                        <div className="caseHomePage">
                            <div className="pagebg">
                                <Image src='/assets/use-case/Tetra-Pak2.jpg' width={1920} height={1080} />
                            </div>
                            <div className="pageText">
                                <div className="zoom">
                                    Excitometer-Tetra Pak
                                </div>
                            </div>
                        </div>
                        <Container className="caseContainer">
                            <Row>
                                <Col xxl={8} xl={8} lg={7} md={7} sm={12}>
                                    <div className="ColText">
                                        An exciting and entertaining exercise for the crowd that took place at the launch of Tetra pak's "Commit to win" campaign.
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={5} md={5} sm={12}>
                                    <div className="imageCol">
                                        <Image src='/assets/use-case/Tetra-Pak1.png' width={1920} height={1080} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="pageContainer">
                            <h2 className="heading"> Key highlights</h2>
                            <Container>
                                <Row className='justify-content-center'>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} >
                                        <div className="key-inner">
                                            <div className="keyCount">
                                                <GiMicrophone />
                                            </div>
                                            <div className='keyPara'>
                                                Real-time address <br /> to the adoring crowd
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} >
                                        <div className="key-inner">
                                            <div className="keyCount">
                                                <GiClapperboard />
                                            </div>
                                            <div className='keyPara'>
                                                Almost a thousand audience members hooted together to demonstrate their "commitment to win."
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} >
                                        <div className="key-inner">
                                            <div className="keyCount">
                                                <FaChalkboardTeacher />
                                            </div>
                                            <div className='keyPara'>
                                                Principal activity
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} >
                                        <div className="key-inner">
                                            <div className="keyCount">
                                                <GiFilmProjector />
                                            </div>
                                            <div className='keyPara'>
                                                Exceptional animation display
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12} >
                                        <div className="key-inner">
                                            <div className="keyCount">
                                                <MdComputer />
                                            </div>
                                            <div className='keyPara'>
                                                No external hardware is <br /> necessary
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="pageContAbout">
                            <div className="pageContInner">
                                <Container>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                            <div className="pageInnerCol">
                                                <div className="headCol">
                                                    What is an excitometer?
                                                </div>
                                                <div className="ColPara">
                                                    Excitometer is a piece of hardware that works with smart software to record loud cheering, screaming, or hooting from the crowd and turn it into a visual representation.
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={12} sm={12}></Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        <div className="pageContAbout1">
                            <div className="pageContInner1">
                                <Container>
                                    <Row>
                                        <Col xxl={7} xl={7} lg={7} md={12} sm={12}></Col>
                                        <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
                                            <div className="pageInnerCol">
                                                <div className="headCol">
                                                    How does it work?
                                                </div>
                                                <div className="ColPara">
                                                    a work of art that has been crafted specifically for the brand in accordance with its requirements, which determine how the final product will look. An external microphone that picks up the frequency and supplies the software with the input it needs.
                                                    When it hits the predetermined threshold, the event that sets off the trigger will occur.
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        <div className="useCaseSection">
                            <Container>
                                <div className="heading">
                                    What are the different <br /> use cases of Excitometer?
                                </div>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <div class="infoGraphic">

                                            <div className="li">
                                                <div class="numberWrap">
                                                    <div class="number fontColor1">1</div>
                                                    <div class="coverWrap">
                                                        <div class="numberCover"></div>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <p>Freebie-dispensing machine</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <div class="infoGraphic">

                                            <div className="li">
                                                <div class="numberWrap">
                                                    <div class="number fontColor2">2</div>
                                                    <div class="coverWrap">
                                                        <div class="numberCover">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <p>A Party to Honor and Commemorate the Launch of a New Product</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                        <div class="infoGraphic">

                                            <div className="li">
                                                <div class="numberWrap">
                                                    <div class="number  fontColor3">3</div>
                                                    <div class="coverWrap">
                                                        <div class="numberCover"></div>
                                                    </div>
                                                </div>
                                                <div class="content">
                                                    <p>	Many other events besides logo unveilings</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="useCaseSection">
                            <Container>
                                <div className="heading">
                                    Benefits
                                </div>
                                <div className="benefitsCart">
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                            <div className="benefitInner">
                                                <div className="benefitsCartBox">
                                                    Team Excitement generator
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                            <div className="benefitInner">
                                                <div className="benefitsCartBox">
                                                    Wow aspect
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                            <div className="benefitInner">
                                                <div className="benefitsCartBox">
                                                    Greatest engagement
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                                            <div className="benefitInner">
                                                <div className="benefitsCartBox">
                                                    Real-time behavior
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default index
