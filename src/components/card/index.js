import React from 'react'
import { Col } from 'react-bootstrap'
import Button from '../button/Button'
const Card = ({ img, title, description, slag, color }) => {
    return (
        <Col xxl={3} xl={3} lg={4} md={6} sm={6} className='my-3'>
            <div className="serviceCart">
                <div className="iconContainer" style={{ background: color }}>
                    <div className="serviceIcon">
                        <img src={img} />
                    </div>
                </div>
                <div className="cardDesc">
                    <div className="cartTitle pt-4">
                        {title}
                    </div>
                    <p>
                        {description}
                    </p>
                    <div className="btnSection2">
                        <Button target={slag} title="Read more" />
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default Card