import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const CaseStudieCart = ({ Heading, cart_them, desc, slag }) => {
    return (
        <div className="cartBody">
            <div className="backBody">
                <Image alt={Heading} src={cart_them} width={1920} height={1080} />
            </div>
            <div className="frontBody">
                <div className="caseStudie__Title">
                    {Heading}
                </div>
                <div className="cs__desc mb-2">
                    <div className="ellipsis">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center case-studie-btn">
                    {
                        // slag ? <Link className="button" href={'/case-studies' + slag}>
                        slag ? <Link className="button" href={slag}>
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Read More</span>
                            </span>
                        </Link> : <button className="button">
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Watch Now</span>
                            </span>
                        </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default CaseStudieCart
