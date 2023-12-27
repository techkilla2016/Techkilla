import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
const ScrollBtn = () => {
    return (
        <Link href='/single-photo-ai/' className='scroll-btn' >
            <span>Continue</span>
            <BsArrowRight />
        </Link>
    )
}
export default ScrollBtn