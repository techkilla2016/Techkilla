import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import UseCase from '@/components/service/UseCase'
import GridSliderOne from '@/components/Slider/GridSliderOne'
import VRSolutionProject from '@/data/service/VRSolution/relatedProject'
import useCases from '@/data/service/VRSolution/useCases'
import benifit from '@/data/service/VRSolution/benifit'
import BenifitCard from '@/components/general/Benefits'
import VideoPlay from '@/components/general/video/VideoPlay'
export const metadata = {
    title: 'VR-Solutions',
    description: `Develop by Techkilla's Teams`,
}
const VRSolutions = () => {

    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='product_landing' style={{ background: '#f4f4f4' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/assets/banner/VR-2.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/assets/banner/VR-1.png' alt='Physical Engagement' width={1920} height={1080} />
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
                                                    <Image src='/assets/service/vrr.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>

                        <div className="desc" style={{ background: '#f4f4f4' }}>
                            <h2 className='text-center pb-5'>VR Solutions</h2>
                            <Container>
                                <Row className='justify-content-center'>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
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
                                        {/* <div className='video_contain'>
                                            <video ref={videoRef} width="75%" muted loop={true}>
                                                <source src="" type="video/mp4" />
                                                <source src="/assets/service/vr.ogg" type="video/ogg" />
                                            </video>
                                            <div className='frame'>
                                            </div>
                                        </div> */}
                                        <VideoPlay src="/assets/service/vr.mp4" width="75%" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='py-5' style={{ background: '#fff' }}>
                            <Container>
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head' >Benefits </h3>
                                    <div className='text-center benifit-para'> Some advantages of virtual reality are listed below.</div>
                                </div>
                                <Row>
                                    {
                                        benifit?.map((item, keys) => {
                                            return <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} key={keys}>
                                                <BenifitCard payload={item} />
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
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
                                        {
                                            useCases?.map((item, keys) => <UseCase key={keys} img={item?.img} title={item?.title} />)
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <GridSliderOne list={VRSolutionProject} itemCount={3} />
                                </div>
                            </Container>
                        </div>
                        <Footer bg={"#fff"} />
                    </div>
                </div>
            </main >
        </>
    )
}

export default VRSolutions