import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../../../public/Assets/service/vr.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import Link from 'next/link'
import Footer from '@/components/footer'

const Ongroundactivations = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>VR-Solutions</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src={bg} />
                            </div>
                            <div className="introSection">
                                <h1>On-ground activations</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Experience the brand like never before with our innovative experiential marketing strategies.
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>On-ground activations - Experiential marketing</h2>
                            <Container>
                                <Row>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">

                                            <h4>Benefits -</h4>
                                            <ul>
                                                <li>Captures visitors attention quickly</li>
                                                <li> Easy database collection</li>
                                                <li> Lasting experience</li>
                                                <li> Word of mouth promotion</li>
                                                <li> Higher engagement</li>
                                                <li> Better retention</li>
                                                <li> Feedback collection</li>
                                                <li> Instant conversion</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src={serive} style={css} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <Container>
                            <div className="section">
                                <h3>Related projects</h3>
                                <ul>
                                    <li><Link href='/'>  Excitometer               </Link> </li>
                                    <li><Link href='/'>  360* spin booth or photobooth    </Link> </li>
                                    <li><Link href='/'>  Mosaic wall    </Link> </li>
                                    <li><Link href='/'>  Magazine Booth</Link> </li>
                                    <li><Link href='/'>  Kinect games</Link> </li>
                                    <li><Link href='/'>  AR Football</Link> </li>
                                    <li><Link href='/'>  VR Activities</Link> </li>
                                    <li><Link href='/'>  Video feedback booth</Link> </li>
                                    <li><Link href='/'>  Slingshot </Link> </li>
                                    <li><Link href='/'>  Digital Photobooth</Link> </li>
                                    <li><Link href='/'>  Mosaic wall</Link> </li>
                                    <li><Link href='/'>  Green screen or Croma photobooth</Link> </li>
                                </ul>
                            </div>
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations