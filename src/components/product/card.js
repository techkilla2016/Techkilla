import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ Heading, img, handleClick, bookNow, target }) => {
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
            <div className='d-flex py-3 justify-content-around'>
                <button className="cssbuttons-io-button"> Book now
                    <Link href={`http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I was looking for some engagement solutions and I came across your company. I would like to purchase the "${bookNow}" - could you help me with the process and any additional details I need to know?`} className="icon" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                        </svg>
                    </Link>
                </button>
            </div>
        </div >
    )
}

export default Card
