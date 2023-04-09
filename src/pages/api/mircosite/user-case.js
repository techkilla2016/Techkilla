const handler = (req, res) => {
    if (req.method === "GET") {
        const usecase = [
            {
                img: '/service/product launch-01-01.png',
                title: 'Product launch'
            },
            {
                img: '/service/Targeting prospects-01-01.png',
                title: 'Targeting prospects'
            },
            {
                img: '/service/Geotargeting market-01-01.png',
                title: 'Geotargeting market'
            },
            {
                img: '/service/distinguishing the corporate-01-01.png',
                title: 'distinguishing the corporate brand'
            },
            {
                img: '/service/product launch-01-01.png',
                title: 'promoting events'
            },
        ]
        res.status(200).json({
            status: true,
            data: usecase
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed '
        })
    }
}
export default handler