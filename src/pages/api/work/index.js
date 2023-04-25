const list = [
    {
        Heading: 'ITC Sunfeast Bounce Roll Instagram Filter',
        img: '/work/Bounce.png',
        logo: '/work/Bounce-logo.png',
        desc: `Looking for a fun & engaging way to interact with your audience on 
   Instagram and Facebook?
    Bounce Football roll from sunfeast bounce LIVES Bounce Look no further 
   than our Sunfeast Bounce AR filter we delivered.`,
        url: 'https://youtube.com/shorts/5JFvK6a15oI?feature=share'
    },
    {
        Heading: 'ITC Sunfeast bounce header Instagram filter',
        img: '/work/Bounce_01.png',
        logo: '/work/Bounce-logo.png',
        desc: `Are you ready to showcase your football skills to the world?`,
        url: 'https://youtube.com/shorts/Ro1hJ5uIlPU?feature=share'
    },
    {
        Heading: '360 Spin booth Colgate',
        img: '/work/colgate.png',
        logo: '/work/colgate-logo.png',
        desc: `"smile karo or shuru ho jao" create your unique video with exciting 
   360 photobooth & share with your loved once. Quickly shareable through 
   whatsapp, QR code or air drop.`,
        url: 'https://youtube.com/shorts/97xAj1S_pHU?feature=share'
    },
    {
        Heading: 'DOW packaging & supplies',
        img: '/work/dow.png',
        logo: '/work/dow-logo.png',
        desc: `"DOW Packaging & Supplies Speciality solved the challenge of 
   managing dealer & distributor meetings with an Al-based QR code registration 
   system. This streamlined registration, automated communication, & allowed for 
   meeting booking through a microsite.`,
        url: 'https://youtube.com/shorts/pfJGe8uSg-E?feature=share'
    },
    {
        Heading: 'Tetra Pak - Excitometer',
        img: '/work/excitormeter.png',
        logo: '/work/excitormeter-logo.png',
        desc: `Are you ready to take your event to the next level?`,
        url: 'https://youtu.be/NNkH6cb-aQM/'
    },
    {
        Heading: 'Garnier Color Carnival',
        img: '/work/garnier.png',
        logo: '/work/garnier-logo.png',
        desc: `A custom microsite for Garnier color carnival to fill in the details, 
   upload your bill and verify with automated OTP. Backend database to approve 
   on the bills`,
        url: 'https://www.youtube.com/shorts/FF3Ti5RF1Vw'
    },
    {
        Heading: 'HDFC AnalytIQ',
        img: '/work/hdfc.png',
        logo: '/work/hdfc-logo.png',
        desc: `A combination of 3 unique analytical game for HDFC Bank 
   customers to participate and win exciting rewards. Sudoku, scrabble or chess 
   choose as per your skill & show your talent..`,
        url: 'https://youtu.be/eP9v-MsFvVg'
    },
    {
        Heading: 'HSBC Microsite engagement',
        img: '/work/hsbc.png',
        logo: '/work/hsbc-logo.png',
        desc: `Created a unique form of microsite engagement for HSBC. Play for 
   10 minutes with text quiz, picture quiz and jigsaw puzzle and at the end wait for 
   your results.`,
        url: 'https://youtu.be/orgaHFBRC4c'
    },
    {
        Heading: 'MAYBELLINE NEW YORK',
        img: '/work/maybelline.png',
        logo: '/work/maybelline-logo.png',
        desc: `New York 6 cities new products launch to engage participants & 
   give them a memorable experience in form of video. Shared using airdrop, QR 
   code or whatsapp`,
        url: '/'
    },
    {
        Heading: 'NHRD "Decode the future"',
        img: '/work/NHRD.png',
        logo: '/work/NHRD-logo.png',
        desc: `NHRD'S "Decode the Future" event streamlined registration for 
   thousands of visitors with a cutting-edge QR code-based system featuring 
   unique features.`,
        url: 'https://youtu.be/pD1otredtSY'
    },
    {
        Heading: '360 Spin booth Carlsberg',
        img: '/work/spin_booth.png',
        logo: '/work/spin_booth-logo.png',
        desc: `group to engage participants & give them a memorable experience 
   in form of video. Shared using airdrop, QR code or whatsapp.`,
        url: 'https://youtube.com/shorts/Ql0lUsI4U64?feature=share'
    },
    {
        Heading: 'airtel',
        img: '/work/airtel.png',
        logo: '/work/airtel-logo.png',
        desc: `group to engage participants & give them a memorable experience 
   in form of video. Shared using airdrop, QR code or whatsapp.`,
        url: 'https://youtube.com/shorts/rbnMxtTQFuM?feature=share'
    },
    {
        Heading: 'airtel',
        img: '/work/India_Partner.png',
        logo: '/work/India_Partner-logo.png',
        desc: `group to engage participants & give them a memorable experience 
   in form of video. Shared using airdrop, QR code or whatsapp.`,
        url: 'https://www.youtube.com/shorts/PhjwJKyTo68'
    },
]

function handler(req, res) {
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