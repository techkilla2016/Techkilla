import React from 'react'

const Content = ({ about }) => {
    return (
        <div className='right-col'>
            <div className='colHeading' data-aos="fade-up" ata-aos-delay="0">{about ? about : 'What We Do?'}</div>
            <h3 className="section__title" data-aos="fade-up" data-aos-delay="200">
                Design, develop, and execute!
                <span className="section__title-line" data-aos="fade-up" data-aos-delay="400"> We manage it all.</span>
            </h3>
            <p className='section_Para pt-5 text-justify' data-aos="fade-up" data-aos-delay="600" >
                Techkilla is a creative tech company that specializes in experiential technology. We help businesses across all industries and brands to create engaging and memorable experiences for their customers.
            </p>
            <p className='section_Para pb-4' data-aos="fade-up" data-aos-delay="800">
                Our expertise lies in the implementation of innovative solutions like Virtual Reality, Microsite engagement, On-ground engagement, photo booths, interactive playable ads, and more.
            </p>
        </div>
    )
}

export default Content