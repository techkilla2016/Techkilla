import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SiFiverr } from 'react-icons/si'
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaSnapchat, FaPinterest } from 'react-icons/fa'
const LogoHover = () => {
    return (
        <>
            <div className="main_footer_hover">
                <div className="hover_effet">
                    <Link className="card_icon_footer instagram" href='http://instagram.com/techkillatechnologies/' target='_blank'>
                        <svg fillRule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="instagram" >
                            <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero">
                                <g transform="scale(8,8)">
                                    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <Link className="card_icon_footer" href='http://twitter.com/techkillatechno' target='_blank'>
                        <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            className="twitter" 
                        >
                            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                        </svg>
                    </Link>
                    <Link href="https://www.fiverr.com/techkillatechno?public_mode=true" className="card_icon_footer" >
                        <span className='dribble'>
                            <SiFiverr />
                        </span>
                    </Link>
                    <Link href="http://facebook.com/techkilla2015" className="card_icon_footer">
                        <span className='facebook'>
                            <FaFacebookF />
                        </span>
                    </Link>
                    <Link className="card_icon_footer" href="https://www.youtube.com/@TechkillaTechnologies">
                        <span className="youtube">
                            <FaYoutube />
                        </span>
                    </Link>
                    <Link className="card_icon_footer" href="https://www.linkedin.com/company/techkilla/">
                        <span className="linkedin">
                            <FaLinkedinIn />
                        </span>
                    </Link>
                    <Link className="card_icon_footer" href="https://www.snapchat.com/add/techkilla2.0?share_id=PVHWA-z-93w&locale=en-GB">
                        <span className="github">
                            <FaSnapchat />
                        </span>
                    </Link>
                    <div className="card_icon_footer">
                        <svg
                            height="30px"
                            width="30px"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            className="telegram"
                        >
                            <path
                                d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                            ></path>
                            <path
                                d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                                fill="#fff"
                            ></path>
                            <path
                                d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                                fill="#b0bec5"
                            ></path>
                            <path
                                d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                                fill="#cfd8dc"
                            ></path>
                        </svg>
                    </div>
                    <Link href="http://pinterest.com/techkillaTechnologies/" className="card_icon_footer" >
                        <span className="reddit">
                            <FaPinterest />
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LogoHover