const list = [
    {
        Heading: 'strip photo booth',
        img: '/physical-engagement/strip-photo-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=strip photo booth',
        target: '/'
    },
    {
        Heading: 'selfie booth',
        img: '/physical-engagement/selfie-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=selfie booth',
        target: '/'
    },
    {
        Heading: 'physical mosaic',
        img: '/physical-engagement/physical-mosaic.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=physical mosaic',
        target: '/'
    },
    {
        Heading: 'Chroma Photobooth',
        img: '/physical-engagement/tomtom.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=Chroma Photobooth',
        target: '/'
    },
    {
        Heading: 'magic mirror photo booth',
        img: '/physical-engagement/magic-mirror-photo-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=magic mirror photo booth',
        target: 'https://youtube.com/shorts/s59J6i-Y1Pg?feature=share'
    },
    {
        Heading: 'world cloud photo booth',
        img: '/physical-engagement/world-cloud-photo-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=world cloud photo booth',
        target: 'https://youtu.be/ygj8A3b6bCE'
    },
    {
        Heading: '#Tag Printer',
        img: '/physical-engagement/pepsi-tag-selfie.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=#Tag Printer',
        target: 'https://youtu.be/bHBGWewoDb8'
    },
    {
        Heading: 'digital caricature',
        img: '/physical-engagement/digital-caricature.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=digital caricature',
        target: '/'
    },
    {
        Heading: 'VR Games',
        img: '/physical-engagement/VR-Games.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=VR Games',
        target: '/'
    },
    {
        Heading: 'Gif Booth',
        img: '/physical-engagement/boomeran-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=Gif Booth',
        target: 'https://youtu.be/TfNxU4H1a-4'
    },
    {
        Heading: 'photo booth',
        img: '/physical-engagement/photo-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=photo booth',
        target: 'https://youtu.be/VZTxtnyyIhQ'
    },
    {
        Heading: '360 spin booth',
        img: '/physical-engagement/360-spin-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=360 spin booth',
        target: 'https://youtube.com/shorts/97xAj1S_pHU?feature=share'
    },
    {
        Heading: 'mosaic wall photo booth',
        img: '/physical-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=mosaic wall photo booth',
        target: '/'
    },
    {
        Heading: 'blobe photo booth',
        img: '/physical-engagement/blobe-phto-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=blobe photo booth',
        target: '/'
    },
    {
        Heading: 'cash grab cube money machine',
        img: '/physical-engagement/cash-grab-cube-money-machine.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=cash grab cube money machine',
        target: '/'
    },
    {
        Heading: 'flipbook photo booth',
        img: '/physical-engagement/flipbook-photo-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=flipbook photo booth',
        target: '/'
    },
    {
        Heading: 'social wall display',
        img: '/physical-engagement/social-wall-display.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=social wall display',
        target: '/'
    },
    {
        Heading: 'virtual paparazzi',
        img: '/physical-engagement/virtual-paparazzi.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=virtual paparazzi',
        target: '/'
    },
    {
        Heading: 'antigravity photobooth',
        img: '/physical-engagement/antigravity-photobooth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=antigravity photobooth',
        target: '/'
    },
    {
        Heading: 'sling shot',
        img: '/physical-engagement/sling-shot.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=sling shot',
        target: 'https://youtu.be/hx4TyRDSqMk'
    },
    {
        Heading: 'bobble head/dancing head',
        img: '/physical-engagement/bobble-head-dancing-head.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=bobble head/dancing head',
        target: '/'
    },
    {
        Heading: '180 degree freeze booth',
        img: '/physical-engagement/180-degree-freeze-booth.png',
        desc: '',
        bookNow: 'http://wa.me/917827362702?text=180 degree freeze booth',
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