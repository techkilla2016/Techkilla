const list = [
    {
        Heading: 'digital mosaic wall photp booth',
        img: '/digital-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'digital photobooth',
        img: '/digital-engagement/digital-photobooth.png',
        desc: '',
        target: 'https://youtu.be/4o0XpbQFDJc'
    },
    {
        Heading: 'online crossword',
        img: '/digital-engagement/online-crossword.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=cPIxHvY3K2o'
    },
    {
        Heading: 'online chess game',
        img: '/digital-engagement/online-chess-game.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'QR Code Based Registration',
        img: '/digital-engagement/qr-code-based-registration.png',
        desc: '',
        target: 'https://youtu.be/pD1otredtSY'
    },
    {
        Heading: 'Online Cricket',
        img: '/digital-engagement/online-cricket.png',
        desc: '',
        target: 'https://youtu.be/znj9F9XeF3U'
    },
    {
        Heading: 'Online Sudoku',
        img: '/digital-engagement/online-sudoku.png',
        desc: '',
        target: 'https://youtu.be/nb8UL5ZHfys'
    },
    {
        Heading: 'Jigsaw Puzzle Game',
        img: '/digital-engagement/jigsaw-puzzle-game.png',
        desc: '',
        target: 'https://youtu.be/y3pjUx5U_vY'
    },
    {
        Heading: 'Digital Tambola Game',
        img: '/digital-engagement/digital-tambola-game.png',
        desc: '',
        target: 'https://youtu.be/gENxYQYVB4Y'
    },
    {
        Heading: 'Text Quiz Game',
        img: '/digital-engagement/text-quize-game.png',
        desc: '',
        target: 'https://youtu.be/lUiW07szbnk'
    },
    {
        Heading: 'KBC Yype Quiz Game',
        img: '/digital-engagement/KBC-type-quiz-game.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Photo Quiz Game',
        img: '/digital-engagement/photo-quiz-game.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Music Video Booth',
        img: '/digital-engagement/music-video-booth.png',
        desc: '',
        target: 'https://youtu.be/jrtQXnqmUvg'
    },
    {
        Heading: 'Magazine Booth',
        img: '/digital-engagement/magazine-booth.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Digital Video Booth',
        img: '/digital-engagement/digital-video-booth.png',
        desc: '',
        target: 'https://youtu.be/q5uIGVj4aBE'
    },
    {
        Heading: 'Match Card Game',
        img: '/digital-engagement/match-card-game.png',
        desc: '',
        target: 'https://youtu.be/CHdWwhsFjVo'
    },
    {
        Heading: 'Instant Id Print',
        img: '/digital-engagement/instant-id-print.png',
        desc: '',
        target: 'https://youtu.be/pD1otredtSY'
    },
    {
        Heading: 'Registration Microsite',
        img: '/digital-engagement/registration-microsite.png',
        desc: '',
        target: '/'
    },
    {
        Heading: 'Picture Quiz',
        img: '/digital-engagement/picture-quiz.png',
        desc: '',
        target: '/'
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