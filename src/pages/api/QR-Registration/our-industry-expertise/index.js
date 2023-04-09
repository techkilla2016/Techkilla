const data = [
    {
        img: '/microsite/expertise_01.png',
        title: "Healthcare & Pharmacy"
    },
    {
        img: '/microsite/expertise_02.png',
        title: "Automobile Industry"
    },
    {
        img: '/microsite/expertise_03.png',
        title: "Travel & Tourism"
    },
    {
        img: '/microsite/expertise_04.png',
        title: "Banking"
    },
    {
        img: '/microsite/expertise_05.png',
        title: "Gaming Industry"
    },
    {
        img: '/microsite/expertise_06.png',
        title: "E-Commerce & Retail"
    },
    {
        img: '/microsite/expertise_07.png',
        title: "Education"
    },
    {
        img: '/microsite/expertise_08.png',
        title: "Hotel & Restaurants"
    },
    {
        img: '/microsite/expertise_09.png',
        title: "Media Event & Entertainment"
    },
    {
        img: '/microsite/expertise_10.png',
        title: "Food & Beverages"
    },
]

const handler = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            data: data,
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