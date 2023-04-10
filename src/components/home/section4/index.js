import { Col, Container, Row } from "react-bootstrap"
import CardSlider from "./CardSlider"
import Image from "next/image"
const PortfolioSection = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={7} md={8} sm={8}>
                        <div className='colHeading' style={{ textAlign: 'center' }}>Our Portfolio</div>
                        <div className="portfolioTitle text-center">
                            Featured Shots of Recent Works
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container >
                <div className="slider">
                    <CardSlider />
                </div>
            </Container>
            <Container>
                <Row>
                    <Col xl={3} lg={3} md={6} sm={12} >
                        <div className="recode my-4 py-4">
                            <div className="recodeIcon">
                                <Image src='/home/a01.png' alt="" width={1920} height={1080} />
                            </div>
                            <div className="recodeData">
                                80+
                            </div>
                            <div className="recodeTitle">
                                Happy Customers
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12} >
                        <div className="recode my-4 py-4">
                            <div className="recodeIcon">
                                <Image src='/home/a02.png' alt="" width={1920} height={1080} />
                            </div>
                            <div className="recodeData">
                                600+
                            </div>
                            <div className="recodeTitle">
                                Projects Completed
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12} >
                        <div className="recode my-4 py-4">
                            <div className="recodeIcon">
                                <Image src='/home/a03.png' alt="" width={1920} height={1080} />
                            </div>
                            <div className="recodeData">
                                5M+
                            </div>
                            <div className="recodeTitle">
                                Organic Impressions
                            </div>
                        </div>
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12} >
                        <div className="recode my-4 py-4">
                            <div className="recodeIcon">
                                <Image src='/home/a04.png' alt="" width={1920} height={1080} />
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

        </>
    )
}
export default PortfolioSection