import Footer from '@/components/footer'
import Header from '@/components/header'
import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import recode_01 from '../../../public/Assets/home/01.png'
import recode_02 from '../../../public/Assets/home/02.png'
import recode_03 from '../../../public/Assets/home/03.png'
import recode_04 from '../../../public/Assets/home/04.png'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='Section2'>
                            <Container>
                                <Row>
                                    <Col lg={6} md={12} sm={12} >
                                        <ColLeft />
                                    </Col>
                                    <Col lg={6} md={12} sm={12} >
                                        <ColRight />
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* section  */}
                        <div className="section4">
                            <div className="section4Inner">
                                <Container>
                                    <Row>
                                        <Col xl={3} lg={3} md={6} sm={12} >
                                            <div className="recode my-4 py-4">
                                                <div className="recodeIcon">
                                                    <Image src={recode_01} alt="" />
                                                </div>
                                                <div className="recodeData">
                                                    28+
                                                </div>
                                                <div className="recodeTitle">
                                                    Happy Customers
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={3} md={6} sm={12} >
                                            <div className="recode my-4 py-4">
                                                <div className="recodeIcon">
                                                    <Image src={recode_02} alt="" />
                                                </div>
                                                <div className="recodeData">
                                                    110+
                                                </div>
                                                <div className="recodeTitle">
                                                    Projects Completed
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={3} md={6} sm={12} >
                                            <div className="recode my-4 py-4">
                                                <div className="recodeIcon">
                                                    <Image src={recode_03} alt="" />
                                                </div>
                                                <div className="recodeData">
                                                    5+
                                                </div>
                                                <div className="recodeTitle">
                                                    Organic Impressions
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={3} lg={3} md={6} sm={12} >
                                            <div className="recode my-4 py-4">
                                                <div className="recodeIcon">
                                                    <Image src={recode_04} alt="" />
                                                </div>
                                                <div className="recodeData">
                                                    3+
                                                </div>
                                                <div className="recodeTitle">
                                                    Pro Awards Winner
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>


                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default About
