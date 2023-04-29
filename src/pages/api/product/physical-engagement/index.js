const list = [
    {
        Heading: 'strip photo booth',
        img: '/physical-engagement/strip-photo-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'selfie booth',
        img: '/physical-engagement/selfie-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'physical mosaic',
        img: '/physical-engagement/physical-mosaic.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Chroma Photobooth',
        img: '/physical-engagement/tomtom.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'magic mirror photo booth',
        img: '/physical-engagement/magic-mirror-photo-booth.png',
        desc: '',
        target: 'https://youtube.com/shorts/s59J6i-Y1Pg?feature=share'
    },
    {
        Heading: 'world cloud photo booth',
        img: '/physical-engagement/world-cloud-photo-booth.png',
        desc: '',
        target: 'https://youtu.be/ygj8A3b6bCE'
    },
    {
        Heading: '#Tag Printer',
        img: '/physical-engagement/pepsi-tag-selfie.png',
        desc: '',
        target: 'https://youtu.be/bHBGWewoDb8'
    },
    {
        Heading: 'digital caricature',
        img: '/physical-engagement/digital-caricature.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'VR Games',
        img: '/physical-engagement/VR-Games.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Gif Booth',
        img: '/physical-engagement/boomeran-booth.png',
        desc: '',
        target: 'https://youtu.be/TfNxU4H1a-4'
    },
    {
        Heading: 'photo booth',
        img: '/physical-engagement/photo-booth.png',
        desc: '',
        target: 'https://youtu.be/VZTxtnyyIhQ'
    },
    {
        Heading: '360 spin booth',
        img: '/physical-engagement/360-spin-booth.png',
        desc: '',
        target: 'https://youtube.com/shorts/97xAj1S_pHU?feature=share'
    },
    {
        Heading: 'mosaic wall photo booth',
        img: '/physical-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'blobe photo booth',
        img: '/physical-engagement/blobe-phto-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'cash grab cube money machine',
        img: '/physical-engagement/cash-grab-cube-money-machine.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'flipbook photo booth',
        img: '/physical-engagement/flipbook-photo-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'social wall display',
        img: '/physical-engagement/social-wall-display.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'virtual paparazzi',
        img: '/physical-engagement/virtual-paparazzi.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'antigravity photobooth',
        img: '/physical-engagement/antigravity-photobooth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'sling shot',
        img: '/physical-engagement/sling-shot.png',
        desc: '',
        target: 'https://youtu.be/hx4TyRDSqMk'
    },
    {
        Heading: 'bobble head/dancing head',
        img: '/physical-engagement/bobble-head-dancing-head.png',
        desc: '',
        target: '/'
    },
    {
        Heading: '180 degree freeze booth',
        img: '/physical-engagement/180-degree-freeze-booth.png',
        desc: '',
        target: '/'
    },

]

function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({
            status: true,
            data: list
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed'
        })
    }
}


export default handler