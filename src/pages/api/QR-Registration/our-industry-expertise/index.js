const data = [
    {
        img: '/Assets/Microsite/expertise_01.png',
        title: "Healthcare & Pharmacy"
    },
    {
        img: '/Assets/Microsite/expertise_02.png',
        title: "Automobile Industry"
    },
    {
        img: '/Assets/Microsite/expertise_03.png',
        title: "Travel & Tourism"
    },
    {
        img: '/Assets/Microsite/expertise_04.png',
        title: "Banking"
    },
    {
        img: '/Assets/Microsite/expertise_05.png',
        title: "Gaming Industry"
    },
    {
        img: '/Assets/Microsite/expertise_06.png',
        title: "E-Commerce & Retail"
    },
    {
        img: '/Assets/Microsite/expertise_07.png',
        title: "Education"
    },
    {
        img: '/Assets/Microsite/expertise_08.png',
        title: "Hotel & Restaurants"
    },
    {
        img: '/Assets/Microsite/expertise_09.png',
        title: "Media Event & Entertainment"
    },
    {
        img: '/Assets/Microsite/expertise_10.png',
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