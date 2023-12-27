import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiMicrophone, GiFilmProjector } from 'react-icons/gi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
export const metadata = {
    title: 'Excitometer - Tetra Pak',
    description: `An exciting and entertaining exercise for the crowd that took place at the launch of Tetra pak's "Commit to win" campaign.`,
}
const Page = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">
                        <div className="caseHomePage">
                            <div className="pagebg">
                                <Image src='/assets/use-case/Tetra-Pak2.jpg' alt='Excitometer-Tetra Pak' width={1920} height={1080} />
                            </div>
                            <div className="pageText">
                                <div className="zoom">
                                    Excitometer-Tetra Pak
                                </div>
                            </div>
                        </div>
                        <div className="Excitometer">
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="pageInnerCol">
                                            <h2 className="headCol">
                                                Excitometer-Tetra Pak
                                            </h2>
                                            <div className="ColPara">
                                                An exciting and entertaining exercise for the crowd that took place at the launch of Tetra pak's "Commit to win" campaign.
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className='caseFullImg'>
                                            <Image src="/assets/use-case/Tetra-Pak2.png" alt=' Excitometer-Tetra Pak' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="pageContainer">
                            <h2 className="heading"> Key highlights</h2>
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <Row className='align-items-center'>
                                                    <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                        <div className='key-icon'>
                                                            <GiMicrophone />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                        <div className='key-para'>
                                                            Real-time address to the adoring crowd
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <Row className='align-items-center'>
                                                    <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                        <div className='key-icon'>
                                                            <GiFilmProjector />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                        <div className='key-para'>
                                                            Exceptional animation display
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <Row className='align-items-center'>
                                                    <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                        <div className='key-icon'>
                                                            <FaChalkboardTeacher />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                        <div className='key-para'>
                                                            The primary or main activity being pursued
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <Row className='align-items-center'>
                                                    <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={3}>
                                                        <div className='key-icon'>
                                                            <MdComputer />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={9} xl={9} lg={9} md={8} sm={8} xs={9}>
                                                        <div className='key-para'>
                                                            No external hardware is  necessary
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="pageContAbout">
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
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className='caseFullImg'>
                                            <Image src="/assets/use-case/excitometer2.png" alt='What is an excitometer?' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className="pageContAbout">
                            <Container>
                                <Row className='flex-col'>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className='caseFullImg'>
                                            <Image src="/assets/use-case/excitometer1.png" alt='How does it work?' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
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

                        <div className="useCaseSection">
                            <Container>
                                <div className="heading">
                                    What are the different <br /> use cases of Excitometer?
                                </div>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <div className='key-count' id='key-count1'>
                                                    1
                                                </div>
                                                <div className='benif-para'>
                                                    A machine that dispenses free items or giveaways.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <div className='key-count' id='key-count2'>
                                                    2
                                                </div>
                                                <div className='benif-para'>
                                                    Numerous events apart from logo launches taking place.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                        <div className='key-cart'>
                                            <div className='keyCount'>
                                                <div className='key-count' id='key-count3' >
                                                    3
                                                </div>
                                                <div className='benif-para'>
                                                    Product launch party celebration and commemoration.
                                                </div>
                                            </div>
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

export default Page
