import { Col, Container, Row } from "react-bootstrap"
import CardSlider from "./CardSlider"
import recode_01 from '../../../../public/Assets/home/01.png'
import recode_02 from '../../../../public/Assets/home/02.png'
import recode_03 from '../../../../public/Assets/home/03.png'
import recode_04 from '../../../../public/Assets/home/04.png'
import image from "next/image"
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

        </>
    )
}
export default PortfolioSection