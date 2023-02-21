import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
const Card = ({ img, title, description, slag }) => {
    return (
        <Col xxl={3} lg={3} md={6} sm={6} className='my-3'>
            <div className="serviceCart">
                <div className="iconContainer">
                    <div className="serviceIcon">
                        <img src={img} />
                    </div>
                </div>
                <div className="cartTitle pt-5">
                    {title}
                </div>
                <p>
                    {description}
                </p>
                <div className="btnSection2">
                    <button>
                        <Link href={slag}>Read more</Link>
                        <span></span>
                    </button>
                </div>
            </div>
        </Col>
    )
}

export default Card