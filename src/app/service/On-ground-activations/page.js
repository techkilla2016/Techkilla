import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import SingleCard from '@/components/Slider/singleCard'
import Related_projects from "@/data/service/On-ground-activations/relatedProject"
import Benefits from "@/data/service/On-ground-activations/Benefits"
import BenifitCard from '@/components/general/Benefits'
export const metadata = {
    title: 'Ongroound Activity',
    description: `Develop by Techkilla's Teams`,
}
const Ongroundactivations = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='product_landing' style={{ background: '#fff' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/assets/banner/ongroound-activity_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/assets/banner/ongroound-activity.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <div className='preloaderBack-layer'>
                                    </div>
                                </div>
                                <div className='product_intro'>
                                    <Container>
                                        <Row>
                                            <Col xxl={7} xl={7} lg={7} md={7} sm={12} xm={12}>
                                                <div className='product_main'>
                                                    <h2>
                                                        On-ground Activities
                                                    </h2>
                                                    <p>
                                                        Experiential marketing is all about creating memorable and immersive experiences that engage customers and leave a lasting impression. Our innovative strategies are designed to do just that.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={5} xl={5} lg={5} md={4} sm={0} xm={0}>
                                                <div className='product_main_icon'>
                                                    <Image src='/assets/service/brand-activation.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>

                        <div className='BenefitsContainer bgWhite'>
                            <Container>
                                <p className='text-center  first_line' >
                                    Discover a new dimension of fun and engagement with our On-ground experiential technology solutions. Our installations are designed to appeal to a wide range of audiences, from kids to adults, from tech-savvy to casual users.
                                </p>
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head pt-5' >Benefits </h3>
                                    <div className='text-center benifit-para'>Advantages of on-the-ground activations</div>
                                </div>
                                <Row className='justify-content-center'>
                                    {
                                        Benefits?.map((item, keys) => {
                                            return (
                                                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} className='mt-2' key={keys}>
                                                    <BenifitCard payload={item} />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
                        <div className="bgWhite pb-5">
                            <Container>
                                <div className='use_case_heading'>Related projects</div>
                                <SingleCard list={Related_projects} />
                            </Container>
                        </div>
                        <Container>
                            <Row className="justify-content-center pb-4">
                                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                    <div className="text-center finishLine py-5">
                                        Are you looking to take your on-ground activations to the next level? Do you want to engage your audience in a truly memorable way? If so, experiential technologies may be just what you need.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer bg="#fff" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations
