import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../../../public/Assets/service/vr.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import Link from 'next/link'
import Footer from '@/components/footer'

const VRSolutions = () => {
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
                                <h1>VR Solutions</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Step into a world beyond reality with our immersive VR solutions for limitless possibilities.
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>VR Solutions</h2>
                            <Container>
                                <Row>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                VR (virtual reality) is now mainstream. This is a fact of your current existence. As a matter of fact, certain sectors have already experimented with the new technology and found it to be beneficial.
                                                In virtual reality, the user is placed in a safe, simulated setting that can be used to practise for real-world situations.
                                            </p>

                                            <h4>What is virtual reality?</h4>
                                            <p>
                                                The term "virtual reality" refers to the practise of using computer technology to construct simulated realities. When using VR, one is immersed in a simulated environment that gives the impression of being in three dimensions. Users no longer look at a screen but rather are immersed in and may interact with 3D environments.
                                            </p>
                                            <h4>How does it work?</h4>
                                            <p>
                                                Virtual reality (VR) uses a combination of technology and software to produce experiences that are so realistic they "trick" the viewer's eyes and brain. To create a convincing virtual world, software is responsible for the visuals and audio, while hardware handles the sensory stimulation and simulation.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src={serive} style={css} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="serviceContainer">
                                            <h4>Use cases - </h4>
                                            <p>
                                                Industries and divisions that are getting the most benefits of using virtual reality as tool
                                            </p>
                                            <ol>
                                                <li>Education </li>
                                                <li>Travel </li>
                                                <li>Real Estate </li>
                                                <li>Retail </li>
                                                <li>Military </li>
                                                <li>Entertainment </li>
                                                <li>Gaming </li>
                                                <li>Museums </li>
                                                <li>Architecture and many more. </li>
                                            </ol>
                                            <h4>Benefits </h4>
                                            <p>Some advantages of virtual reality are listed below.</p>
                                            <p>
                                                <strong>Practical training :</strong> Virtual reality is a risk-free technique to recreate potentially harmful training scenarios. First responders, aviators, astronauts, and law enforcement officers can train in a safe setting before venturing out into the field. Training timelines can be compressed by the use of immersive experiences, allowing students to more quickly reach professional competence.
                                            </p>
                                            <p>
                                                <strong>Participation and Connection: </strong> Virtual reality provides an interactive and interesting experience for its users.
                                            </p>
                                            <p>
                                                <strong>Convenient Conferences: </strong> Teleconferencing helps keep costs down without sacrificing productivity or camaraderie.
                                            </p>
                                            <p>
                                                <strong>"Tryout" Capability: </strong> VR might put an end to buyer's remorse. Without leaving the comfort of your own home, you may use virtual reality to shop for furniture, take a spin in a new automobile, or even put on wedding jewellery.

                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <Container>
                            <div className="section">
                                <h3>Related projects</h3>
                                <ul>
                                    <li><Link href='/'>  CEAT Shoppe experience - CEAT Tyres               </Link> </li>
                                    <li><Link href='/'>  CEAT truck service hub experience - CEAT Tyres    </Link> </li>
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

export default VRSolutions