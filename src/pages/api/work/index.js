const list = [
    {
        Heading: 'ITC Sunfeast Bounce Roll Instagram Filter',
        img: '/work/Bounce.png',
        logo: '/work/Bounce-logo.png',
        desc: `Looking for a fun & engaging way to interact with your audience on Instagram and Facebook?
        Bounce Football roll from sunfeast bounce LIVES Bounce Look no further than our Sunfeast Bounce AR filter we delivered.`,
        url: '/'
    },
    {
        Heading: 'ITC Sunfeast bounce header Instagram filter',
        logo: '/work/Bounce_01-logo.png',
        img: '/work/Bounce_01.png',
        desc: `Are you ready to showcase your football skills to the world?`,
        url: '/'
    },
    {
        Heading: '360 Spin booth Colgate Colgate',
        logo: '/work/colgate-logo.png',
        img: '/work/colgate.png',
        desc: `"smile karo or shuru ho jao" create your unique video with exciting 360 photobooth & share with your loved once. Quickly shareable through whatsapp, QR code or air drop.`,
        url: '/'
    },
    {
        Heading: 'DOW packaging & supplies',
        logo: '/work/dow-logo.png',
        img: '/work/dow.png',
        desc: `"DOW Packaging & Supplies Speciality solved the challenge of managing dealer & distributor meetings with an Al-based QR code registration system. This streamlined registration, automated communication, & allowed for meeting booking through a microsite.`,
        url: '/'
    },
    {
        Heading: 'Tetra Pak - Excitometer',
        logo: '/work/excitormeter-logo.png',
        img: '/work/excitormeter.png',
        desc: `Are you ready to take your event to the next level?`,
        url: '/'
    },
    {
        Heading: 'Garnier Color Carnival',
        logo: '/work/garnier-logo.png',
        img: '/work/garnier.png',
        desc: `A custom microsite for Garnier color carnival to fill in the details, upload your bill and verify with automated OTP. Backend database to approve on the bills`,
        url: '/'
    },
    {
        Heading: 'HDFC Analytic 3.0',
        logo: '/work/hdfc-logo.png',
        img: '/work/hdfc.png',
        desc: `A combination of 3 unique analytical game for HDFC Bank customers to participate and win exciting rewards. Sudoku, scrabble or chess choose as per your skill & show your talent..`,
        url: '/'
    },
    {
        Heading: 'HSBC Microsite engagement',
        logo: '/work/hsbc-logo.png',
        img: '/work/hsbc.png',
        desc: `Created a unique form of microsite engagement for HSBC. Play for 10 minutes with text quiz, picture quiz and jigsaw puzzle and at the end wait for your results.`,
        url: '/'
    },
    {
        Heading: 'MAYBELLINE NEW YORK',
        logo: '/work/maybelline-logo.png',
        img: '/work/maybelline.png',
        desc: `New York 6 cities new products launch to engage participants & give them a memorable experience in form of video. Shared using airdrop, QR code or whatsapp`,
        url: '/'
    },
    {
        Heading: 'NHRD "Decode the future"',
        logo: '/work/NHRD-logo.png',
        img: '/work/NHRD.png',
        desc: `NHRD'S "Decode the Future" event streamlined registration for thousands of visitors with a cutting-edge QR code-based system featuring unique features.`,
        url: '/'
    },
    {
        Heading: '360 Spin booth Carlsberg',
        logo: '/work/spin_booth-logo.png',
        img: '/work/spin_booth.png',
        desc: `group to engage participants & give them a memorable experience in form of video. Shared using airdrop, QR code or whatsapp.`,
        url: '/'
    },
    {
        Heading: 'Airtel Quizzitech Cup',
        logo: '/work/airtel-logo.png',
        img: '/work/airtel.png',
        desc: `We created a personalized web-based KBC-style Quiz game for Airtel Wizzards to participate and win Airtel Quizzitech Cup.`,
        url: '/'
    },
]

function handler(req, res) {
    console.log(req.url)
    if (req.method === 'GET') {
        res.status(200).json({
            status: true,
            data: list,
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed'
        })
    }
}


export default handler