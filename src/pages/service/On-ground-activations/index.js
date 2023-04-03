import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '&/Assets/service/web banner_on ground activity 2.jpg'
import Footer from '@/components/footer'
import Benefits from '@/components/service/Benefit'
import SingleCard from '@/components/ProjectSlider/singleCard'

const Ongroundactivations = ({ list }) => {
    return (
        <>
            <Head>
                <title>VR-Solutions</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src={bg} alt='On-ground-activations' />
                            </div>
                            <div className="introSection">
                                <h1>On-ground activations</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Experience the brand like never before with our innovative experiential marketing strategies.
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='BenefitsContainer bgWhite'>
                            <h4>Benefits</h4>
                            <div className="Benefits">
                                <Benefits data={['Captures visitors attention quickly', 'Easy database collection', 'Lasting experience', 'Word of mouth promotion', 'Higher engagement', 'Better retention', 'Feedback collection', 'Instant conversion']} />
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={list} />
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations
export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/on-ground-activations')
    const resutl = await res.json()
    return {
        props: {
            list: resutl.data
        }
    }
}