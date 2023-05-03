import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProdcutCard = ({ Heading, img, handleClick, bookNow, target }) => {
    return (
        <div className='card-main'>
            <div className="product-card">
                <div className='watchVideo' title={`Preview ${Heading}`} onClick={() => handleClick(target)}>
                    <Image src={img} width={1920} alt={Heading} height={1080} />
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
                    <Link href={bookNow} target='_blank'>
                        Book now
                    </Link>
                </button>
            </div>
        </div >
    )
}

export default ProdcutCard
