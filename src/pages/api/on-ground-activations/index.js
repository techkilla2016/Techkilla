const list = [
    {
        title: "Excitometer",
        them: "/service/500x500/Excitometer.png",
        url: 'https://youtu.be/NNkH6cb-aQM'
    },
    {
        title: "360* spin booth or photobooth",
        them: "/service/500x500/spin_booth.png",
        url: 'https://youtube.com/shorts/97xAj1S_pHU?feature=share'
    },
    {
        title: "Magazine Booth",
        them: "/service/500x500/Magazine_Booth.png",
        url: '/'
    },
    {
        title: "Kinect games",
        them: "/service/500x500/Kinect_games.png",
        url: '/'
    },
    {
        title: "AR Football",
        them: "/service/500x500/AR_Football.png",
        url: '/'
    },
    {
        title: "VR Activities",
        them: "/service/500x500/AR_Activities.png",
        url: '/'
    },
    {
        title: "Video feedback booth",
        them: "/service/500x500/Video_fee_back_booth.png",
        url: 'https://youtu.be/q5uIGVj4aBE'
    },
    {
        title: "Slingshot ",
        them: "/service/500x500/Slingshot.png",
        url: 'https://youtu.be/hx4TyRDSqMk'
    },
    {
        title: "Digital Photobooth",
        them: "/service/500x500/Digital_Photobooth.png",
        url: 'https://youtu.be/4o0XpbQFDJc'
    },
    {
        title: "Mosaic wall",
        them: "/service/500x500/Mosaic_wall.png",
        url: '/'
    },
    {
        title: "Mosaic wall 2",
        them: "/service/500x500/Mosaic_wall_2.png",
        url: '/'
    },
    {
        title: "Green screen or Croma photobooth",
        them: "/service/500x500/Green_screen_or_Croma_photobooth.png",
        url: '/'
    },
]
const handler = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            status: true,
            data: list
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed '
        })
    }
}
export default handler