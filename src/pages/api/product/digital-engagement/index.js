const list = [
    {
        Heading: 'digital mosaic wall photp booth',
        img: '/digital-engagement/digital-mosaic-wall-photp-booth.png',
        desc: '',
        target: 'https://www.youtube.com/shorts/NHquaDS6XQ0'
    },
    {
        Heading: 'digital photobooth',
        img: '/digital-engagement/digital-photobooth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'online crossword',
        img: '/digital-engagement/online-crossword.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'online chess game',
        img: '/digital-engagement/online-chess-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'QR Code Based Registration',
        img: '/digital-engagement/qr-code-based-registration.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Online Cricket',
        img: '/digital-engagement/online-cricket.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Online Sudoku',
        img: '/digital-engagement/online-sudoku.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Jigsaw Puzzle Game',
        img: '/digital-engagement/jigsaw-puzzle-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Digital Tambola Game',
        img: '/digital-engagement/digital-tambola-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Text Quiz Game',
        img: '/digital-engagement/text-quize-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'KBC Yype Quiz Game',
        img: '/digital-engagement/KBC-type-quiz-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Photo Quiz Game',
        img: '/digital-engagement/photo-quiz-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Music Video Booth',
        img: '/digital-engagement/music-video-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Magazine Booth',
        img: '/digital-engagement/magazine-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Digital Video Booth',
        img: '/digital-engagement/digital-video-booth.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Match Card Game',
        img: '/digital-engagement/match-card-game.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Instant Id Print',
        img: '/digital-engagement/instant-id-print.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Registration Microsite',
        img: '/digital-engagement/registration-microsite.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
    },
    {
        Heading: 'Picture Quiz',
        img: '/digital-engagement/picture-quiz.png',
        desc: '',
        target: 'https://www.youtube.com/watch?v=xhOyOVAv-l4'
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