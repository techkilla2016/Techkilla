import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollBtn from '../button/scrollBtn'

const Hero = ({ isContinue }) => {
    return (
        <div className="photo-ai-home">
            <Container fluid>
                <Row className='py-5'>
                    <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12}>
                        <div className="d-flex align-items-center flex-column justify-content-center">
                            <h1 className='photo-ai-heading text-center' data-aos="zoom-in-up" data-aos-delay={100}>AI Photo Booth</h1>
                            <p className='photo-ai-para py-3' data-aos="zoom-in-up" data-aos-delay={200}>
                                Artfcial intelligence photo booth <br /> Technology powerd by techkilla.com
                            </p>
                            <div className="d-flex align-items-center justify-content-center  ai-photo-convert-container">
                                <div className="ai-modal">
                                    <img alt='AI Photo' src='/photo-ai/Model.png' data-aos="zoom-in-right" data-aos-delay={100} />
                                    <p className='text-center text-light fw-bold' data-aos="zoom-in-down" data-aos-delay={200}>Orignal</p>
                                </div>
                                <div className="ai-convert-arrow mx-2">
                                    <img alt='AI Photo' src='/photo-ai/Arrow-01.png' data-aos="zoom-in-right" data-aos-delay={500} />
                                    <p className='text-center text-light fw-bold' data-aos="zoom-in-right" data-aos-delay={800}>Ai Generated Avatar</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                {/* <button className=''>Book Now</button> */}
                            </div>

                        </div>
                    </Col>
                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                        <Row className='align-items-start justify-content-center'>
                            <Col>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={100}>
                                    <img alt='AI Photo' src='/photo-ai/ai7.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_7.png' />
                                </div>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={200}>
                                    <img alt='AI Photo' src='/photo-ai/ai2.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_2.png' />
                                </div>
                            </Col>
                            <Col className='pt-5 mt-5'>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={300}>
                                    <img alt='AI Photo' src='/photo-ai/ai8.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_8.png' />
                                </div>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={400}>
                                    <img alt='AI Photo' src='/photo-ai/ai4.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_4.png' />
                                </div>
                            </Col>
                            <Col>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={500}>
                                    <img alt='AI Photo' src='/photo-ai/ai5.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_5.png' />
                                </div>
                                <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={600}>
                                    <img alt='AI Photo' src='/photo-ai/ai6.png' />
                                    <img alt='AI Photo' src='/photo-ai/ai_6.png' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {
                    isContinue && <div className="d-flex justify-content-center pb-5" data-aos="fade-up" data-aos-delay={100}>
                        <ScrollBtn />
                    </div>
                }

            </Container>
        </div>
    )
}

export default Hero
