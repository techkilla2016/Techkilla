import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '@/components/button/'
import Image from 'next/image'
const Card = ({ img, title, description, slag, color, delay }) => {
    return (
        <Col xxl={3} xl={3} lg={4} md={6} sm={6} className='my-3' data-aos="fade-up" data-aos-delay={delay * 100}>
            <div className="serviceCart">
                <div data-aos="fade-up" data-aos-delay={delay * 100}>
                    <div className="iconContainer" style={{ background: color }}>
                        <div className="serviceIcon">
                            <Image src={img} alt={title} width={1920} height={1040} />
                        </div>
                    </div>
                    <div className="cardDesc" >
                        <div className="cartTitle pt-4">
                            {title}
                        </div>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="btnSection2" style={{ paddingLeft: '20px' }}>
                    <Button url={slag} title="Read more" />
                </div>
            </div>
        </Col>
    )
}

export default Card