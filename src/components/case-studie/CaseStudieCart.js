import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'

const CaseStudieCart = ({ Heading, img, desc, target }) => {
    console.log({ Heading, img, desc, target })
    return (
        <div className="cartBody">
            <div className="backBody">
                <Image src={img} width={1920} height={1080} />
            </div>
            <div className="frontBody">
                <div className="caseStudie__Title">
                    {Heading}
                </div>
                <div className="cs__desc mb-3">
                    <div className="ellipsis">
                        <p>{desc}</p>
                    </div>
                </div>
                <Button target={target} title="Read More" />
            </div>
        </div>
    )
}

export default CaseStudieCart
