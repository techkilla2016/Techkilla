import caseStudieSchema from '@/models/case-studie'
const case_studie = [
    {
        id: 1,
        target: '/case-studies/QR-Registration-and-instant-ID-print-with-live-verification-The-National-HRD-Network-(NHRD)',
        Heading: 'QR Registration',
        img: '/use-case/QRRegistration1.png',
        desc: "The National HRD Network (NHRDN) is a Global Centre for Grooming Leaders and the National Apex body of professionals committed to promoting the People Development movement in the country, "
    },
    {
        id: 2,
        target: 'https://www.instagram.com/p/CjPoSz7DaSw/',
        Heading: 'Spin Booth',
        img: '/use-case/Spin-booth.png',
        desc: "There are many surprises in store for you as a result of the creative and engaging 360-degree photo capture. It could be a 360-degree video, a Boomerang, or a GIF."
    },
    {
        id: 3,
        target: '/case-studies/Excitometer-Tetra-Pak',
        Heading: 'Tetra Pak',
        img: '/use-case/Tetra-Pak.png',
        desc: "An exciting and entertaining exercise for the crowd that took place at the launch of Tetra pak's 'Commit to win' campaign."
    },
    {
        id: 4,
        target: 'https://www.youtube.com/shorts/gt75HKHKMxk',
        Heading: 'HDFC AnalytIQ 3.0',
        img: '/use-case/HDFC.png',
        desc: "a specially created analytical campaign for HDFC Bank to allow its selective customers to enter a raffle to win rewards from their partner bank."
    },
    {
        id: 5,
        target: 'https://www.instagram.com/p/CmddNv-oDak/',
        Heading: 'Bounce header',
        img: '/use-case/Bounceheader.png',
        desc: "The ITC Foods brand Sunfeast is already well-known in the market and has now introduced its own Instagram filter, where users of social media would participate and try to play 6 balls in a header round."
    },
    {
        id: 6,
        target: '/case-studies/',
        Heading: 'CEAT Tyres',
        img: '/use-case/CEAT-Tyres.png',
        desc: "The ITC Foods brand Sunfeast is already well-known in the market and has now introduced its own Instagram filter, where users of social media would participate and try to play 6 balls in a header round."
    },

    {
        id: 7,
        target: '/case-studies/',
        Heading: 'Concentrix Got Talent ',
        img: '/use-case/ConcentrixGotTalent.png',
        desc: "A unique, creative idea produced just for an HR task. The corporate talent hunt is an annual event when employees can participate, show off their hidden potential, and receive rewards."
    },

    {
        id: 8,
        target: 'https://www.youtube.com/shorts/gt75HKHKMxk',
        Heading: 'HDFC Inquizitive',
        img: '/use-case/HDFCInquizitive.png',
        desc: "A distinctive KBC-style programme where the host manages the proceedings online while the contestants use Zoom or another video conference technology."
    },
    {
        id: 9,
        target: 'https://youtu.be/gENxYQYVB4Y',
        Heading: 'TVS Motors',
        img: '/use-case/TVSMotors.png',
        desc: "Bingo, Tambola, or Housie Regardless of the name you give it, this is the game that will test your ability to win the big bucks. "
    },
    {
        id: 10,
        // target: 'https://youtu.be/znj9F9XeF3U',
        target: '/case-studies/Tuborg-Super-Over-Cricket-Game',
        Heading: 'Cricket Game',
        img: '/use-case/CricketGame.png',
        desc: "A well-known beer and distilled water company, Tuborg, has introduced a really original idea for a web-based engagement activity that can also be used for on-ground activations."
    },
    {
        id: 11,
        target: 'https://www.instagram.com/p/Cdaf6nIAuEf/',
        Heading: 'KUKU FM',
        img: '/use-case/KUKUFM.png',
        desc: "Playable advertisements enable customers to test out a portion of your programme before downloading it and ultimately obtaining access to the full experience. For consumers to 'test'"
    },
    {
        id: 12,
        target: 'https://www.instagram.com/p/Ckh8VKyDVuc/',
        Heading: 'Bounce Football Roll',
        img: '/use-case/Football.png',
        desc: "All humans are entitled to equality and equal rights, as we are all aware. With that in mind, we marked Pride Month 2022 by creating a playful Microsoft filter and using the hashtag #pridehasnoborders."
    },
    {
        id: 13,
        target: 'https://youtube.com/shorts/Ql0lUsI4U64?feature=share',
        Heading: 'Carlsberg Beer',
        img: '/use-case/Carlsberg.png',
        desc: "360 Photobooth or Spinbooth - Carlsberg Beer"
    },
    {
        id: 14,
        target: '/case-studies/Microsoft-Hackathon',
        Heading: 'Microsoft Hackathon',
        img: '/use-case/Hackathon.png',
        desc: "Our sophisticated software for QR-based verification takes the initiative and aids you in avoiding any false submissions."
    },
    {
        id: 15,
        target: 'https://youtube.com/shorts/rbnMxtTQFuM?feature=share',
        Heading: 'Airtel Quizzitech',
        img: '/use-case/airtel.png',
        desc: "Idea - To create a personalised microsite for Airtel Wizzards to play and win the Airtel Quizzitech Cup"
    },
    {
        id: 16,
        target: 'https://www.youtube.com/shorts/PhjwJKyTo68',
        Heading: 'INDIA PARTNER GALA',
        img: '/use-case/india.png',
        desc: "We've set up a simple yet stunning 360 Spin Booth so that guests can remain amused at the event and leave with a memory in the shape of a 360 film that includes energising background music"
    },
    {
        id: 17,
        target: 'https://youtu.be/PyFBZ0vs7js',
        Heading: 'Aashirvaad Svasti Lassi',
        img: '/use-case/Lassi-filter-card.png',
        desc: "Choose your favourite flavour, take a sip, and feel refreshed. With classic Mango, tangy Strawberry, & rose options, satisfy your cravings and cool down instantly."
    },
]

const handler = async (req, res) => {
    try {
        if (req.method !== "POST") {
            throw new Error(`${req?.method} method not allowed`)
        }
        const data = await caseStudieSchema.find({ status: true }, 'heading cart_them slag desc')
        const dataList = data.map(item => {
            return {
                heading: item?.heading,
                cart_them: process?.env?.SERVER_URL + item?.cart_them,
                slag: item?.slag,
                id: item?.id,
                desc: item?.desc
            }
        })
        res.status(200).json({
            status: true,
            total: data.length,
            data: dataList,
        })
    } catch (error) {
        res.status(405).json({
            status: false,
            massage: error?.message
        })
    }
}
export default handler