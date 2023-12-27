import { Col, Container, Row } from "react-bootstrap"
import React from "react";
import Counter from "@/components/general/Portfolio/Counter";
import WorkSwiper from '@/components/general/Portfolio/work-slider'
const PortfolioSection = ({ work, lastLine }) => {
    return (
        <>
            <div className="section4">
                <div className="pt-3">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={7} md={8} sm={8}>
                                <div className='colHeading text-center' data-aos="fade-down" data-aos-delay={0}>Our Portfolio</div>
                                <div className="portfolioTitle text-center" data-aos="zoom-in-up" data-aos-delay={0}>
                                    Featured Shots of Recent Works
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <WorkSwiper work={work} />
                    </Container>

                    <Container className="mt-5">
                        <Row>
                            <Counter />
                        </Row>
                    </Container>
                    <Container>
                        <Row className="justify-content-center pb-4" data-aos="zoom-in" data-aos-delay={0}>
                            <Col xxl={9} xl={9} lg={9} md={10} sm={12} xm={12}>
                                <div className="text-center">
                                    {lastLine}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default PortfolioSection