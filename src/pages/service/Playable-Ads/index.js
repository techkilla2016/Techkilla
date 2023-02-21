import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../../../public/Assets/service/vr.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import Link from 'next/link'
import Footer from '@/components/footer'

const PlayableAds = () => {
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
                                <h1>Playable Ads</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Step into the game and experience the fun with our interactive Playable-Ads today!
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>Playable Ads</h2>
                            <Container>
                                <Row>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                Playable ads are a type of interactive advertisement that give users the opportunity to try out a mobile app experience before they are required to download the full version of the app.It works on a “try-before-buy” concept.
                                            </p>
                                            <p>
                                                Additionally,playables are "A single ad unit that mixes interaction with gamification to facilitate full-funnel marketing brand communication (attention, education, and action)"
                                            </p>

                                            <h4>Who is leveraging playable ads?</h4>
                                            <h4>Benefits -</h4>
                                            <p>
                                                3x more conversion than conventional video ads, <br />
                                                Highest customer engagement, <br />
                                                70% Better memory recall rate, <br />
                                                Increased retention and decreased uninstalls, <br />
                                                Access to advanced analytics

                                            </p>
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
                                    <li><Link href='/'> KuKu FM - Guess the personality puzzle               </Link> </li>
                                    <li><Link href='/'>  Microsoft - Pride month AR filter    </Link> </li>
                                    <li><Link href='/'>  ITC Football header    </Link> </li>
                                    <li><Link href='/'>  ITC Football Bounce Roll    </Link> </li>
                                    <li><Link href='/'>  Fun wagerz - FIFA world cup     </Link> </li>
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

export default PlayableAds