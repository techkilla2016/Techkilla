import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'

const CaseStudieCart = ({ Heading, img, desc, target }) => {
    return (
        <div className="cartBody">
            <div className="backBody">
                <Image alt={Heading} src={img} width={1920} height={1080} />
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
                <Button target={target} title="Watch Now" />
            </div>
        </div>
    )
}

export default CaseStudieCart
