import Footer from '@/components/footer'
import Header from '@/components/header'
import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import ServiceSection from '@/components/home/section3'
import PortfolioSection from '@/components/home/section4'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Home = () => {
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

            {/* // Section3 Service */}
            <div className="section3">
              <div className="section3Inner">
                <ServiceSection />
              </div>
            </div>

            {/* // Section4 Service */}
            <div className="section4">
              <div className="section4Inner">
                <PortfolioSection />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>

    </>
  )
}

export default Home
