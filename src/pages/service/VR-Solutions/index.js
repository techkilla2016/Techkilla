import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import UseCase from '@/components/service/UseCase'
import SingleCard from '@/components/ProjectSlider/singleCard'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { TbCloudDataConnection } from 'react-icons/tb'
import { FcConferenceCall } from 'react-icons/fc'
import { GiSentryGun } from 'react-icons/gi'
import GridSlider from '@/components/ProjectSlider/GridSlider'
import GridSliderOne from '@/components/ProjectSlider/GridSliderOne'

const related_project = [
    {
        title: "CEAT Shoppe experience - CEAT Tyres",
        them: "/service/500x500/CEAT-shop.png",
        url: 'https://www.youtube.com/watch?v=11P-6L5zmco'
    },
    {
        title: "CEAT truck service hub experience - CEAT Tyres",
        them: "/service/500x500/CEAT_Shoppe_experience-CEAT_Tyres.png",
        url: 'https://www.youtube.com/watch?v=11P-6L5zmco'
    },
    {
        title: "VR Activities",
        them: "/service/500x500/VR_Activities.png",
        url: '/'
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
                                <Row className='justify-content-center'>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            {/* <p>
                                                VR (virtual reality) is now mainstream. This is a fact of your current existence. As a matter of fact, certain sectors have already experimented with the new technology and found it to be beneficial.
                                                In virtual reality, the user is placed in a safe, simulated setting that can be used to practise for real-world situations.
                                            </p> */}

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
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head pt-5 mt-3' >Benefits </h3>
                                    <div className='text-center benifit-para'>Some advantages of virtual reality are listed below.</div>
                                </div>
                                <Row>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12}>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                    <HiOutlineBriefcase />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Practical training
                                            </h5>
                                            <p>
                                                Virtual reality is a risk-free technique to recreate potentially harmful training scenarios
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12}>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                    <TbCloudDataConnection />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Participation and Connection
                                            </h5>
                                            <p>
                                                Virtual reality provides an interactive and interesting experience for its users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12}>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                                    <FcConferenceCall />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Convenient Conferences
                                            </h5>
                                            <p>
                                                Teleconferencing helps keep costs down without sacrificing productivity or camaraderie.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12}>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(34.1deg 100% 72.75%)' }}>
                                                    <GiSentryGun />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                "Tryout" Capability
                                            </h5>
                                            <p>
                                                VR might put an end to buyer's remorse.
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
                                    <GridSliderOne list={related_project} itemCount={3} />
                                </div>
                            </Container>
                        </div>
                        <Footer bg={"#fff"} />
                    </div>
                </div>
            </main>

        </>
    )
}

export default VRSolutions