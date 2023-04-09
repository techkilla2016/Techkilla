import FeatureBox from '@/components/technology/FeatureBox'
import FeatureCentralBox from '@/components/technology/FeatureCentralBox'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const WhatWeDo = () => {
    return (
        <Container className='pb-4'>
            <Row className='justify-content-center py-4'>
                <Col lg={7} md={8} sm={8}>
                    <h3 className="section__title" style={{ color: " #000", textAlign: 'center' }}>
                        <span className='section__title-line-center'> What We Do</span>
                    </h3>
                </Col>
            </Row>
            <div className="d-flex justify-content-between flex-lg-row flex-column my-4 py-4 ">
                <div className="in d-flex flex-column justify-content-center">
                    <Row className="m-0">
                        <Col className="d-lg-block  d-flex justify-content-between">
                            <FeatureBox
                                title="Microsite design"
                                content="We create customized microsites for your occasions, unique needs, and interaction."
                            />

                            <FeatureBox className="my-4"
                                title="VR Solutions"
                                content="specialized VR 360 solutions for gaming and audience engagement"
                            />

                            <FeatureBox
                                title="On-ground activations"
                                content="We engage your audience in an intuitive way with fun experiential activities."
                            />

                        </Col>
                        <Col lg="auto" className="my-auto d-lg-block d-none">
                            <Image src='/assets/Home/curly.svg' alt="curly" />
                        </Col>
                    </Row>
                    <div className=" d-flex d-lg-none justify-content-around">
                        <div className=" my-3">
                            <Image className="tabletArrowDown" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </div>
                        <div className=" my-3">
                            <Image className="tabletArrowDown" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </div><div className=" my-3">
                            <Image className="tabletArrowDown" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </div>
                    </div>
                </div>
                <FeatureCentralBox className="centerBoxMain" />
                <div className="out d-flex flex-column justify-content-between  ">
                    <Row className="align-items-center m-0">
                        <div className="d-lg-none d-block ">
                            <div className="row justify-content-around my-3">
                                <Image className="mobileArrowDown mobileArrowDownBottom " src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src='/assets/Home/arrow-right.svg' alt="arrow-right" /></div>
                        </div>
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Microsite design" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="VR (Virtual reality) Solutions" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Playable Ads" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src='/assets/Home/arrow-right.svg' alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="On-ground activations" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default WhatWeDo
