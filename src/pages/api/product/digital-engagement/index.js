const list = [
    {
        Heading: 'digital mosaic wall photo booth',
        img: '/digital-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        bookNow: `digital mosaic wall photo booth`,
        target: '/'
    },
    {
        Heading: 'digital photobooth',
        img: '/digital-engagement/digital-photobooth.png',
        desc: '',
        bookNow: 'digital photobooth',

        target: 'https://youtu.be/4o0XpbQFDJc'
    },
    {
        Heading: 'online crossword',
        img: '/digital-engagement/online-crossword.png',
        desc: '',
        bookNow: 'online crossword',
        target: 'https://www.youtube.com/watch?v=cPIxHvY3K2o'
    },
    {
        Heading: 'online chess game',
        img: '/digital-engagement/online-chess-game.png',
        desc: '',
        bookNow: 'online chess game',
        target: '/'
    },
    {
        Heading: 'QR Code Based Registration',
        img: '/digital-engagement/qr-code-based-registration.png',
        desc: '',
        bookNow: 'QR Code Based Registration',
        target: 'https://youtu.be/pD1otredtSY'
    },
    {
        Heading: 'Online Cricket',
        img: '/digital-engagement/online-cricket.png',
        desc: '',
        bookNow: 'Online Cricket',
        target: 'https://youtu.be/znj9F9XeF3U'
    },
    {
        Heading: 'Online Sudoku',
        img: '/digital-engagement/online-sudoku.png',
        desc: '',
        bookNow: 'Online Sudoku',
        target: 'https://youtu.be/nb8UL5ZHfys'
    },
    {
        Heading: 'Jigsaw Puzzle Game',
        img: '/digital-engagement/jigsaw-puzzle-game.png',
        desc: '',
        bookNow: 'Jigsaw Puzzle Game',
        target: 'https://youtu.be/y3pjUx5U_vY'
    },
    {
        Heading: 'Digital Tambola Game',
        img: '/digital-engagement/digital-tambola-game.png',
        desc: '',
        bookNow: 'Digital Tambola Game',
        target: 'https://youtu.be/gENxYQYVB4Y'
    },
    {
        Heading: 'Text Quiz Game',
        img: '/digital-engagement/text-quize-game.png',
        desc: '',
        bookNow: 'Text Quiz Game',
        target: 'https://youtu.be/lUiW07szbnk'
    },
    {
        Heading: 'KBC type Quiz Game',
        img: '/digital-engagement/KBC-type-quiz-game.png',
        desc: '',
        bookNow: 'KBC type Quiz Game',
        target: '/'
    },
    {
        Heading: 'Photo Quiz Game',
        img: '/digital-engagement/photo-quiz-game.png',
        desc: '',
        bookNow: 'Photo Quiz Game',
        target: '/'
    },
    {
        Heading: 'Music Video Booth',
        img: '/digital-engagement/music-video-booth.png',
        desc: '',
        bookNow: 'Music Video Booth',
        target: 'https://youtu.be/jrtQXnqmUvg'
    },
    {
        Heading: 'Magazine Booth',
        img: '/digital-engagement/magazine-booth.png',
        desc: '',
        bookNow: 'Magazine Booth',
        target: '/'
    },
    {
        Heading: 'Digital Video Booth',
        img: '/digital-engagement/digital-video-booth.png',
        desc: '',
        bookNow: 'Digital Video Booth',
        target: 'https://youtu.be/q5uIGVj4aBE'
    },
    {
        Heading: 'Match Card Game',
        img: '/digital-engagement/match-card-game.png',
        desc: '',
        bookNow: 'Match Card Game',
        target: 'https://youtu.be/CHdWwhsFjVo'
    },
    {
        Heading: 'Instant Id Print',
        img: '/digital-engagement/instant-id-print.png',
        desc: '',
        bookNow: 'Instant Id Print',
        target: 'https://youtu.be/pD1otredtSY'
    },
    {
        Heading: 'Registration Microsite',
        img: '/digital-engagement/registration-microsite.png',
        desc: '',
        bookNow: 'Registration Microsite',
        target: '/'
    },
    {
        Heading: 'Picture Quiz',
        img: '/digital-engagement/picture-quiz.png',
        desc: '',
        bookNow: 'Picture Quiz',
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