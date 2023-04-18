import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
const ColRight = () => {
    return (
        <div className='right-col'>
            <div className='colHeading'>Who We Are</div>
            <h3 className="section__title">
                Design, develop and execute!
                <span className="section__title-line"> We manage it all.</span>
            </h3>
            <p className='section_Para pt-5 text-justify'>
                Techkilla is a creative tech company that specializes in experiential technology. We help businesses across all industries and brands to create engaging and memorable experiences for their customers.
            </p>
            <p className='section_Para pb-4'>
                Our expertise lies in the implementation of innovative solutions like Virtual Reality, Microsite engagement, On-ground engagement, photo booths, interactive playable ads, and more.
            </p>
            {/* <p className='section_Para'>
                We address your issues to draw customers to your brand.
            </p> */}
            
        </div>
    )
}

export default ColRight