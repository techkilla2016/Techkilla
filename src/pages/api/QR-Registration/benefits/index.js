const benefits = [
    {
        img: '/microsite/microsite-b-01.png',
        title: `Chaos-free Audience Management`
    },
    {
        img: '/microsite/microsite-b-02.png',
        title: `Effortless`
    },
    {
        img: '/microsite/microsite-b-03.png',
        title: `100% Backend Record`
    },
    {
        img: '/microsite/microsite-b-04.png',
        title: `Integrity of the data`
    },
    {
        img: '/microsite/microsite-b-05.png',
        title: `Auto-email`
    },
    {
        img: '/microsite/microsite-b-06.png',
        title: `Time-saver`
    },
]

const handler = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            data: benefits,
            status: true
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed '
        })
    }
}

export default handler