import CaseStudieCard from '@/components/case-studie'
import Footer from '@/components/footer'
import Header from '@/components/header'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const CaseStudie = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="introSection" style={{ background: '#1f1f47', }}>
                            <div class="case-studio">
                                <div class="blob"></div>
                                <div className="intro">
                                    <Container>

                                        <h4 className='introTitle text-light text-center mt-4 py-4'> Optimization on <span>TK⊰</span> website </h4>
                                        <Row className='pt-4 justify-content-center '>
                                            <Col xxl={10} lg={11} sm={12} className='text-light text-center'>
                                                <h1 className='introHeading'>Discover our most recent releases and thorough <br /><span>case studies.</span></h1>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>

                        </div>
                        <div className="service">
                            <h3 className="section__title" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>Case Studies</span>
                            </h3>
                            <Container fluid>
                                <CaseStudieCard />
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default CaseStudie
