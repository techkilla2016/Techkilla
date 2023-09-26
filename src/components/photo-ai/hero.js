import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollBtn from '../button/scrollBtn'

const Hero = ({ isContinue }) => {
    const model = [
        {
            img1: '/photo-ai/ai1.png',
            img_1: '/photo-ai/ai_1.png',
            img2: '/photo-ai/ai2.png',
            img_2: '/photo-ai/ai_2.png'
        },
        {
            img1: '/photo-ai/ai3.png',
            img_1: '/photo-ai/ai_3.png',
            img2: '/photo-ai/ai4.png',
            img_2: '/photo-ai/ai_4.png'
        },
        {
            img1: '/photo-ai/ai5.png',
            img_1: '/photo-ai/ai_5.png',
            img2: '/photo-ai/ai6.png',
            img_2: '/photo-ai/ai_6.png'
        },
    ]
    return (
        <div className="photo-ai-home">
            <Container fluid>
                <Row className='py-5'>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="d-flex align-items-center flex-column justify-content-center">
                            <h1 className='photo-ai-heading text-center' data-aos="zoom-in-up" data-aos-delay={100}>AI Photoshots</h1>
                            <p className='photo-ai-para py-3' data-aos="zoom-in-up" data-aos-delay={200}>
                                Elegantly Crafted AI-Generated Content <br /> Aligned with Your Brand
                            </p>
                            <div className="d-flex align-items-center justify-content-center ai-photo-convert-container">
                                <div className="d-flex">
                                    <div className="ai-modal">
                                        <img alt='AI Photo' src='/photo-ai/Model.png' data-aos="zoom-in-right" data-aos-delay={100} />
                                        <p className='text-center fw-bold' data-aos="zoom-in-down" data-aos-delay={200}>Orignal</p>
                                    </div>
                                    <div className="ai-modal">
                                        <img alt='AI Photo' src='/photo-ai/Model1.png' data-aos="zoom-in-right" data-aos-delay={100} />
                                        <p className='text-center fw-bold' data-aos="zoom-in-down" data-aos-delay={200}>Orignal</p>
                                    </div>
                                </div>
                                <div className="ai-convert-arrow mx-2">
                                    <img alt='AI Photo' src='/photo-ai/Arrow-01.png' data-aos="zoom-in-right" data-aos-delay={500} />
                                    <p className='text-center fw-bold' data-aos="zoom-in-right" data-aos-delay={800}>Ai Generated Avatar</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                {/* <button className=''>Book Now</button> */}
                            </div>

                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Row className='align-items-start justify-content-center'>
                            {
                                model?.map((item, keys) => {
                                    return <Col className={keys % 2 !== 0 ? `pt-5 mt-5` : ''} key={keys}>
                                        <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={keys * 100}>
                                            <img alt='AI Photo' src={item?.img1} />
                                            <img alt='AI Photo' src={item?.img_1} />
                                        </div>
                                        <div className="ai-photo-result my-4" data-aos="fade-up" data-aos-delay={keys * 200}>
                                            <img alt='AI Photo' src={item?.img2} />
                                            <img alt='AI Photo' src={item?.img_2} />
                                        </div>
                                    </Col>
                                })
                            }
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
