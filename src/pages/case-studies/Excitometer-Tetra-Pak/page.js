import React, { Fragment, useEffect, useLayoutEffect, useRef } from "react";

const Page = ({ title, subtitle, background }) => {
    const style = { backgroundImage: `url("${background}")` };
    const bgRef = useRef();
    const centerRef = useRef();
    const pageRef = useRef();
    const staticRef = useRef();

    // useLayoutEffect for post-render logic
    useLayoutEffect(() => {
        const { offsetTop, offsetHeight } = centerRef.current;
        const pageHeight = pageRef.current.offsetHeight;
        const style = bgRef.current.style;

        style.left = 0;
        style.right = 0;
        style.top = `-${offsetTop}px`;
        style.bottom = `${offsetTop + offsetHeight - pageHeight}px`;
    });

    // useEffect for subscriptions
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop } = scrollingElement;
            const offset = scrollTop - pageRef.current.offsetTop;
            staticRef.current.style.clipPath = `inset(${-offset}px 0 0)`;
        }, { scrollingElement } = document;

        handleScroll();
        document.addEventListener('scroll', handleScroll);

        // Clean up scroll listener on unmount
        return () => document.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className="page" style={style} ref={pageRef}>
            <div className="static" ref={staticRef}>
                <div className="centered" ref={centerRef}>
                    <div className='bg' style={style} ref={bgRef} />
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
        </div>
    )
}

const CasePage = () => (
    <Fragment>
        <Page title="This is the first page" subtitle="Of this fancy scroll thing"
            background="http://www.hdwallpaperspulse.com/wp-content/uploads/2017/03/28/awesome-railway-road-image.jpg" />
        <Page title="This is the second page" subtitle="Of this nifty scroll thingie"
            background="http://sfwallpaper.com/images/background-images-hd-18.jpg" />
        <Page title="This is the third page" subtitle="Of this dope ass scroll shit"
            background="http://sfwallpaper.com/images/cool-background-picture-20.jpg" />
    </Fragment>
);
export default CasePage