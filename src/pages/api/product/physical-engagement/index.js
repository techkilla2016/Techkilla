const list = [
    {
        Heading: 'strip photo booth',
        img: '/physical-engagement/strip-photo-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'selfie booth',
        img: '/physical-engagement/selfie-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'physical mosaic',
        img: '/physical-engagement/physical-mosaic.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'tomtom',
        img: '/physical-engagement/tomtom.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'magic mirror photo booth',
        img: '/physical-engagement/magic-mirror-photo-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'world cloud photo booth',
        img: '/physical-engagement/world-cloud-photo-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'pepsi tag selfie',
        img: '/physical-engagement/pepsi-tag-selfie.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'digital caricature',
        img: '/physical-engagement/digital-caricature.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'VR Games',
        img: '/physical-engagement/VR-Games.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'boomeran booth',
        img: '/physical-engagement/boomeran-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'photo booth',
        img: '/physical-engagement/photo-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: '360 spin booth',
        img: '/physical-engagement/360-spin-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'digital mosaic wall photp booth',
        img: '/physical-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'blobe photo booth',
        img: '/physical-engagement/blobe-phto-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'cash grab cube money machine',
        img: '/physical-engagement/cash-grab-cube-money-machine.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'flipbook photo booth',
        img: '/physical-engagement/flipbook-photo-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'social wall display',
        img: '/physical-engagement/social-wall-display.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'virtual paparazzi',
        img: '/physical-engagement/virtual-paparazzi.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'antigravity photobooth',
        img: '/physical-engagement/antigravity-photobooth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'sling shot',
        img: '/physical-engagement/sling-shot.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'bobble head/dancing head',
        img: '/physical-engagement/bobble-head-dancing-head.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: '180 degree freeze booth',
        img: '/physical-engagement/180-degree-freeze-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
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