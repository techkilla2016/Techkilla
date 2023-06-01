import caseStudieSchema from '@/models/case-studie'

const handler = async (req, res) => {
    const reqData = JSON.parse(req?.body)
    try {
        if (req.method !== "POST") {
            throw new Error(`${req?.method} method not allowed`)
        }
        const data = await caseStudieSchema.findOne({ slag: reqData?.slag })
        res.status(200).json({
            status: true,
            data: data,
            BaseUrl: process.env.SERVER_URL

        })
    } catch (error) {
        res.status(405).json({
            status: false,
            massage: error?.message
        })
    }
}
export default handler