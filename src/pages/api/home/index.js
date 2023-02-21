export default function handler(req, res) {
    const data = [
        {
            title: 'Microsite design',
            description: 'We create customised microsites for your occasions, unique needs, and interaction.',
            img: '/Assets/service/MD.webp',
            slag: '/service/Microsite-Design'
        },
        {
            title: 'Virtual reality Solutions',
            description: 'specialised VR 360 solutions for gaming and audience engagement.',
            img: '/Assets/service/VR.webp',
            slag: '/service/VR-Solutions'
        },
        {
            title: 'Playable Ads',
            description: 'Interactive gaming ads made just for app advertisers to let people try before they buy.',
            img: '/Assets/service/ADS.webp',
            slag: '/service/Playable-Ads'
        },
        {
            title: 'On-ground activations',
            description: 'We engage your audience in an intuitive way with fun experiential activities.',
            img: '/Assets/service/Game.webp',
            slag: '/service/On-ground-activations'
        },
    ]
    res.status(200).json(data)
}
