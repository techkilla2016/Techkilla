import React from 'react'
import serviceData from '@/data/home/service'
import { Container, Row } from 'react-bootstrap'
import Card from '@/components/service/card'
const Service = ({ bg, bgColor }) => {
    return (
        <>

            <div className="section3" style={{ background: bgColor ? bgColor : `url(${bg}) no-repeat center center/cover`, backgroundAttachment: 'fixed' }}>
                <div className={bgColor ? "py-0" : 'section3Inner'} style={{ background: bgColor ? bgColor : 'rgba(0, 0, 0, 0.5)' }}>
                    {/* <ServiceSection /> */}
                    <Container className={bgColor ? 'py-0' : 'py-4'}>
                        <Row>
                            {
                                serviceData.map((curItem, index) => {
                                    return <Card {...curItem} delay={index} key={index} />
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Service