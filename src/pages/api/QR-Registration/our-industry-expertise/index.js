const data = [
    {
        img: '/assets/microsite/expertise_01.png',
        title: "Healthcare & Pharmacy"
    },
    {
        img: '/assets/microsite/expertise_02.png',
        title: "Automobile Industry"
    },
    {
        img: '/assets/microsite/expertise_03.png',
        title: "Travel & Tourism"
    },
    {
        img: '/assets/microsite/expertise_04.png',
        title: "Banking"
    },
    {
        img: '/assets/microsite/expertise_05.png',
        title: "Gaming Industry"
    },
    {
        img: '/assets/microsite/expertise_06.png',
        title: "E-Commerce & Retail"
    },
    {
        img: '/assets/microsite/expertise_07.png',
        title: "Education"
    },
    {
        img: '/assets/microsite/expertise_08.png',
        title: "Hotel & Restaurants"
    },
    {
        img: '/assets/microsite/expertise_09.png',
        title: "Media Event & Entertainment"
    },
    {
        img: '/assets/microsite/expertise_10.png',
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