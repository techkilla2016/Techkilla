import Image from 'next/image'
import React from 'react'
import Button, { ButtonClick } from '../button/Button'
import { Col, Row } from 'react-bootstrap'

const ProdcutCard = ({ Heading, img, handleClick, target }) => {
    return (
        <div className='p-3'>
            <div className="product-card">
                <div className='watchVideo' title={`Preview ${Heading}`} onClick={() => handleClick(target)}>
                    <Image src={img} width={1920} height={1080} />
                    <h5 className='card-title'>
                        {Heading}
                    </h5>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='book-btn' onClick={() => handleClick(target)}>
                        Preview
                    </button>
                    <button className='book-btn'>
                        Book now
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ProdcutCard
