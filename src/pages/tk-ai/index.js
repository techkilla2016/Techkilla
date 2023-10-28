import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import SwipeCard from '@/components/tk-ai/swipeCard'
import WhatsappModal from '@/models/whatsapp'
import { Col, Container, Row } from 'react-bootstrap'
import ExpoBtn from '@/components/button/expoBtn'

const Home = () => {

    return (
        <>
            <Head>
                <title>Techkilla</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    {/* 1 */}
                    <Container className='py-5'>
                        <Row>
                            <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12}>

                                <div className="micro_heading01 text-start">
                                    Unleash Halloween magic with <span>AI face swap!</span>
                                </div>
                                <p className='photo-ai-para py-4' >
                                    Get ready for a jaw-dropping transformation with our spooky AI-powered Face Swap.
                                </p>
                                <div className="d-flex">
                                    <ExpoBtn title="EXPLORE ALL" url="/" />
                                </div>
                            </Col>
                            <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12}>
                                <div className="d-flex justify-content-center">
                                    <SwipeCard />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* 2 */}
                    <div className="bg-light py-4">
                        <Container>
                            <h3>
                                Carefully selected content
                            </h3>
                        </Container>
                    </div>
                    <Footer bg="#fafafa" />
                </div>
            </main>

        </>
    )
}

export default Home