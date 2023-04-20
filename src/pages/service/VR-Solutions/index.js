import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import UseCase from '@/components/service/UseCase'
import SingleCard from '@/components/ProjectSlider/singleCard'
const related_project = [
    {
        title: "CEAT Shoppe experience - CEAT Tyres",
        them: "/service/500x500/CEAT_Shoppe_experience-CEAT_Tyres.png"
    },
    {
        title: "QR_based_registration",
        them: "/service/500x500/QR_based_registration.png"
    },
    {
        title: "CEAT truck service hub experience - CEAT Tyres",
        them: "/service/500x500/CEAT_Shoppe_experience-CEAT_Tyres.png"
    },
    {
        title: "VR Activities",
        them: "/service/500x500/VR_Activities.png"
    },
]
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
                        <div className='product_landing' style={{ background: '#fff' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/banner/VR-2.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/banner/VR-1.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <div className='preloaderBack-layer'>
                                    </div>
                                </div>
                                <div className='product_intro'>
                                    <Container>
                                        <Row>
                                            <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                                <div className='product_main'>
                                                    <h2>
                                                        VR solutions for limitless possibilities
                                                    </h2>
                                                    <p>
                                                        Step into a world beyond reality with our immersive VR solutions for limitless possibilities. Our cutting-edge technology creates a virtual environment that transports users to new realms, from the depths of the ocean to the vast expanse of outer space.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                                <div className='product_main_icon1'>
                                                    <Image src='/vrr.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>

                        <div className="desc">
                            <h2 className='text-center pb-5'>VR Solutions</h2>
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
                                        <Image src='/service/miro-service.gif' alt='VR Solutions' width={1920} height={1080} style={css} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="serviceContainer">
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
                            <div className="use_case">
                                <div id="use_case">
                                    <Container>
                                        <div className='use_case_heading'>Use cases</div>
                                        <Row className='justify-content-center'>
                                            <Col xxl={8} xl={8} lg={8} md={10} sm={12} className="use_case_intro ">
                                                Industries and divisions that are getting the most benefits of using virtual reality as tool
                                            </Col>
                                        </Row>
                                        <Row>
                                            <UseCase img={`/service/Education.png`} title={'Education'} />
                                            <UseCase img={`/service/Travel-01.png`} title={'Travel'} />
                                            <UseCase img={`/service/Real Estate-01.png`} title={'Real Estate '} />
                                            <UseCase img={`/service/Retail-01.png`} title={'Retail'} />
                                            <UseCase img={`/service/Entertainment-01.png`} title={'Entertainment'} />
                                            <UseCase img={`/service/Gaming-01.png`} title={'Gaming'} />
                                            <UseCase img={`/service/Museums-01.png`} title={'Museums'} />
                                            <UseCase img={`/service/Architecture-01.png`} title={'Architecture and many more. '} />
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={related_project} />
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

export default VRSolutions