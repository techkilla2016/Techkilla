"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import YouTubePlayer from "@/components/Modal/video";

const CaseStudieCart = (props) => {
    const { Heading, cart_them, desc, slag } = props
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        if (payload === '/' || payload === '') {
            setCurVideo('https://www.youtube.com/watch?v=JxMa3t3XDts&t=4s')
        } else {
            setCurVideo(payload)
        }
    }

    return (
        <div className="cartBody">
            {isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />}
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
                    <ButtonType slag={slag} handleOpen={handleOpen} />
                    {/* {
                        // slag ? <Link className="button" href={'/case-studies' + slag}>
                        slag.includes('https://www.youtube.com') || slag == "/" ? <button onClick={() => handleOpen(slag)} className="button">
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Watch Now</span>
                            </span>
                        </button> : <Link className="button" href={slag}>
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Read More</span>
                            </span>
                        </Link>
                    } */}

                </div>
            </div>
        </div>
    )
}

export default CaseStudieCart

function ButtonType({ handleOpen, slag }) {
    if (slag?.includes('https://www.youtube.com')) {
        return (
            <>
                <button onClick={() => handleOpen(slag)} className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Watch Now</span>
                    </span>
                </button>
            </>
        )
    }
    if (slag?.includes('https://www.instagram.com')) {
        return (
            <>
                <Link href={slag} target='_blank' className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Watch Now</span>
                    </span>
                </Link>
            </>
        )
    }
    if (slag.includes('/case-studies/')) {
        return (
            <Link className="button" href={slag}>
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Read More</span>
                </span>
            </Link>
        )
    }
    if (slag == '/') {
        return (
            <Link className="button" href={slag}>
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Coming Soon</span>
                </span>
            </Link>
        )
    }
}
