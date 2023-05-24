const list = [
    {
        id: 1,
        Heading: 'strip photo booth',
        img: '/physical-engagement/strip-photo-booth.png',
        desc: '',
        bookNow: 'strip photo booth',
        target: '/'
    },
    {
        id: 2,
        Heading: 'selfie booth',
        img: '/physical-engagement/selfie-booth.png',
        desc: '',
        bookNow: 'selfie booth',
        target: '/'
    },
    {
        id: 3,
        Heading: 'physical mosaic',
        img: '/physical-engagement/physical-mosaic.png',
        desc: '',
        bookNow: 'physical mosaic',
        target: '/'
    },
    {
        id: 4,
        Heading: 'Chroma Photobooth',
        img: '/physical-engagement/tomtom.png',
        desc: '',
        bookNow: 'Chroma Photobooth',
        target: '/'
    },
    {
        id: 5,
        Heading: 'magic mirror photo booth',
        img: '/physical-engagement/magic-mirror-photo-booth.png',
        desc: '',
        bookNow: 'magic mirror photo booth',
        target: 'https://youtube.com/shorts/s59J6i-Y1Pg?feature=share'
    },
    {
        id: 6,
        Heading: 'world cloud photo booth',
        img: '/physical-engagement/world-cloud-photo-booth.png',
        desc: '',
        bookNow: 'world cloud photo booth',
        target: 'https://youtu.be/ygj8A3b6bCE'
    },
    {
        id: 7,
        Heading: '#Tag Printer',
        img: '/physical-engagement/pepsi-tag-selfie.png',
        desc: '',
        bookNow: 'Tag Printer',
        target: 'https://youtu.be/bHBGWewoDb8'
    },
    {
        id: 8,
        Heading: 'digital caricature',
        img: '/physical-engagement/digital-caricature.png',
        desc: '',
        bookNow: 'digital caricature',
        target: '/'
    },
    {
        id: 9,
        Heading: 'VR Games',
        img: '/physical-engagement/VR-Games.png',
        desc: '',
        bookNow: 'VR Games',
        target: '/'
    },
    {
        id: 10,
        Heading: 'Gif Booth',
        img: '/physical-engagement/boomeran-booth.png',
        desc: '',
        bookNow: 'Gif Booth',
        target: 'https://youtu.be/TfNxU4H1a-4'
    },
    {
        id: 11,
        Heading: 'photo booth',
        img: '/physical-engagement/photo-booth.png',
        desc: '',
        bookNow: 'photo booth',
        target: 'https://youtu.be/VZTxtnyyIhQ'
    },
    {
        id: 12,
        Heading: '360 spin booth',
        img: '/physical-engagement/360-spin-booth.png',
        desc: '',
        bookNow: '360 spin booth',
        target: 'https://youtube.com/shorts/97xAj1S_pHU?feature=share'
    },
    {
        id: 13,
        Heading: 'mosaic wall photo booth',
        img: '/physical-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        bookNow: 'mosaic wall photo booth',
        target: '/'
    },
    {
        id: 14,
        Heading: 'blobe photo booth',
        img: '/physical-engagement/blobe-phto-booth.png',
        desc: '',
        bookNow: 'blobe photo booth',
        target: '/'
    },
    {
        id: 15,
        Heading: 'cash grab cube money machine',
        img: '/physical-engagement/cash-grab-cube-money-machine.png',
        desc: '',
        bookNow: 'cash grab cube money machine',
        target: '/'
    },
    {
        id: 16,
        Heading: 'flipbook photo booth',
        img: '/physical-engagement/flipbook-photo-booth.png',
        desc: '',
        bookNow: 'flipbook photo booth',
        target: '/'
    },
    {
        id: 17,
        Heading: 'social wall display',
        img: '/physical-engagement/social-wall-display.png',
        desc: '',
        bookNow: 'social wall display',
        target: '/'
    },
    {
        id: 18,
        Heading: 'virtual paparazzi',
        img: '/physical-engagement/virtual-paparazzi.png',
        desc: '',
        bookNow: 'virtual paparazzi',
        target: '/'
    },
    {
        id: 19,
        Heading: 'antigravity photobooth',
        img: '/physical-engagement/antigravity-photobooth.png',
        desc: '',
        bookNow: 'antigravity photobooth',
        target: '/'
    },
    {
        id: 20,
        Heading: 'sling shot',
        img: '/physical-engagement/sling-shot.png',
        desc: '',
        bookNow: 'sling shot',
        target: 'https://youtu.be/hx4TyRDSqMk'
    },
    {
        id: 21,
        Heading: 'bobble head/dancing head',
        img: '/physical-engagement/bobble-head-dancing-head.png',
        desc: '',
        bookNow: 'bobble head/dancing head',
        target: '/'
    },
    {
        id: 22,
        Heading: '180 degree freeze booth',
        img: '/physical-engagement/180-degree-freeze-booth.png',
        desc: '',
        bookNow: '180 degree freeze booth',
        target: '/'
    },

]

function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({
            status: true,
            data: list,
            total: list.length
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed'
        })
    }
}


export default handler