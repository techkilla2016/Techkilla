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
                    <Link href={`http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I was looking for some engagement solutions and I came across your company. I would like to purchase the "${bookNow}" - could you help me with the process and any additional details I need to know?`} target='_blank'>
                        Book now
                    </Link>
                </button>
            </div>
        </div >
    )
}

export default ProdcutCard
