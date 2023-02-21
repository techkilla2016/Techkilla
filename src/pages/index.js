import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import PortfolioSection from '@/components/home/section4'
import WhatWeDo from '@/components/home/section5'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/home/').then((responce) => {
      return responce.json()
    }).then((result) => {
      setData(result)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Techkilla</title>
      </Head>
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
                {/* <ServiceSection /> */}
                <Container>
                  <Row>
                    {
                      data.map((curItem, index) => {
                        return <Card {...curItem} key={index} />
                      })
                    }
                  </Row>
                </Container>
              </div>
            </div>

            {/* // Section4 Service */}
            <div className="section4">
              <div className="section4Inner">
                <PortfolioSection />
              </div>
            </div>

            {/* // Section4 Service */}
            <div className="section4">
              <div className="section5Inner">
                <WhatWeDo />
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

