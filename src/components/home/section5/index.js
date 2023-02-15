import FeatureBox from '@/components/technology/FeatureBox'
import FeatureCentralBox from '@/components/technology/FeatureCentralBox'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Curly from '../../../../public/Assets/Home/curly.svg'
import ArrowRight from '../../../../public/Assets/Home/arrow-right.svg'
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
                                title="Renewable Energy"
                                content="Direct, remote connections between inverters, loggers, weather data, SCADA, DAS, revenue grade meters, PV, solar, & wind for full visibility on every level."
                            />

                            <FeatureBox className="my-4"
                                title="Energy Utilizations"
                                content="Our platform empowers and connects to a variety of energy uses, including storage batteries, EV charging stations, smart consumption meters, and more."
                            />
                            <FeatureBox
                                title="Integrations"
                                content="Our platform empowers and connects to a variety of energy uses, including storage batteries, EV charging stations, smart consumption meters, and more."
                            />
                        </Col>
                        <Col lg="auto" className="my-auto d-lg-block d-none">
                            <Image src={Curly} alt="curly" />
                        </Col>
                    </Row>
                    <div className=" d-flex d-lg-none justify-content-around">
                        <div className=" my-3">
                            <Image className="tabletArrowDown" src={ArrowRight} alt="arrow-right" />
                        </div>
                        <div className=" my-3">
                            <Image className="tabletArrowDown" src={ArrowRight} alt="arrow-right" />
                        </div><div className=" my-3">
                            <Image className="tabletArrowDown" src={ArrowRight} alt="arrow-right" />
                        </div>
                    </div>
                </div>
                <FeatureCentralBox className="centerBoxMain" />
                <div className="out d-flex flex-column justify-content-between  ">
                    <Row className="align-items-center m-0">
                        <div className="d-lg-none d-block ">
                            <div className="row justify-content-around my-3">
                                <Image className="mobileArrowDown mobileArrowDownBottom " src={ArrowRight} alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src={ArrowRight} alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src={ArrowRight} alt="arrow-right" />
                                <Image className="mobileArrowDown mobileArrowDownBottom " src={ArrowRight} alt="arrow-right" /></div>
                        </div>
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src={ArrowRight} alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Real-Time Alerts & Insights" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src={ArrowRight} alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Performance & Analysis" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src={ArrowRight} alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Financial & Maintenance Visibility" />
                        </Col>
                    </Row>
                    <Row className="align-items-center m-0">
                        <Col lg="auto" className="d-lg-block d-none">

                            <Image className="" src={ArrowRight} alt="arrow-right" />
                        </Col>
                        <Col>
                            <FeatureBox title="Reports & End User Interfaces" />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default WhatWeDo
