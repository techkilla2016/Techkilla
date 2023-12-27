import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UseCaseCard from '@/components/service/UseCase'
import GridSlider from '@/components/Slider/GridSlider'
import useCaseData from "@/data/service/Microsite-Design/useCase"
import relativedProject from '@/data/service/Microsite-Design/relativedProject'
import benifit from '@/data/service/Microsite-Design/benifit'
import BenifitCard from '@/components/general/Benefits'
import VideoPlay from '@/components/general/video/VideoPlay'
export const metadata = {
    title: 'Microsite Design',
    description: `Develop by Techkilla's Teams`,
}
const MicrositeDesign = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing' style={{ background: '#fff' }}>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/assets/banner/microsite-design_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/assets/banner/microsite-design.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Drive engagement with Microsite Designs
                                                </h2>
                                                <p>
                                                    A well-designed microsite can be an effective tool for driving engagement and achieving business goals. To achieve this, it's important to understand your target audience and what they are looking for.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/assets/microsite/micro.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='mainContainer' >
                        <div className="desc py-5" style={{ background: '#f4f4f4' }}>
                            <h3 className="section__title mt-4 mb-5" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>What are microsites?</span>
                            </h3>
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                A microsite is a website (or a single web page) that is dedicated to a single brand and is utilized by businesses in order to promote special events, products, or campaigns.
                                            </p>
                                            <p>
                                                Typically, they are websites that do not focus on application development. They would not have capabilities for eCommerce, which is something that most of Shopify's competitors provide, nor would they have a complex sales funnel.
                                            </p>
                                            <p>
                                                Instead, they are information-heavy websites with the goal of attracting the greatest number of users feasible. The material that can be found on their website (or websites) is almost always humorous and encourages users to participate. Because of this, their brand is better able to engage with users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <VideoPlay src="/assets/microsite/microsite.mp4" src1="/assets/microsite/microsite.ogg" />
                                    </Col>
                                </Row>
                            </Container>

                            {/* use case   */}
                            <div className="use_case">
                                <div id="use_case" className='py-5'>
                                    <Container>
                                        <div className='use_case_heading'>Use cases</div>
                                        <Row>
                                            {useCaseData.map((curItem, index) => <UseCaseCard key={index} img={curItem.img} title={curItem.title} />)}
                                        </Row>
                                    </Container>
                                </div>
                            </div>

                            {/* benefits  */}
                            <div className=''>
                                <Container>
                                    <div className="serviceContainer py-5">
                                        <h3 className='text-center benifit-head pt-4' >Benefits </h3>
                                        <div className='text-center benifit-para'>Benefits of launching your own microsite</div>
                                    </div>
                                    <Row className='justify-content-center'>
                                        {
                                            benifit?.map((item, keys) => {
                                                return (
                                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2' key={keys}>
                                                        <BenifitCard payload={item} />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        {/* related project slider  */}
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <GridSlider list={relativedProject} />
                                </div>
                            </Container>
                        </div>
                        <Footer bg="#fff" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default MicrositeDesign