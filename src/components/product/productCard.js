import Image from 'next/image'
import React from 'react'
import Button, { ButtonClick } from '../button/Button'
import { Col, Row } from 'react-bootstrap'

const ProdcutCard = ({ Heading, img, handleClick, target }) => {
    return (
        <div className='card-main'>
            <div className="product-card">
                <div className='watchVideo' title={`Preview ${Heading}`} onClick={() => handleClick(target)}>
                    <Image src={img} width={1920} height={1080} />
                    <h5 className='card-title'>
                        {Heading}
                    </h5>
                </div>
            </div>
            <div className='d-flex pb-3 justify-content-around'>
                {/* <button className='book-btn' onClick={() => handleClick(target)}>
                    Preview
                </button> */}
                <button className='book-btn'>
                    Book now
                </button>
            </div>
        </div >
    )
}

export default ProdcutCard
