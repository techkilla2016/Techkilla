const list = [
    {
        title: "Excitometer",
        them: "/service/500x500/Excitometer.png"
    },
    {
        title: "360* spin booth or photobooth",
        them: "/service/500x500/spin_booth.png"
    },
    {
        title: "Magazine Booth",
        them: "/service/500x500/Magazine_Booth.png"
    },
    {
        title: "Kinect games",
        them: "/service/500x500/Kinect_games.png"
    },
    {
        title: "AR Football",
        them: "/service/500x500/AR_Football.png"
    },
    {
        title: "VR Activities",
        them: "/service/500x500/AR_Activities.png"
    },
    {
        title: "Video feedback booth",
        them: "/service/500x500/Video_fee_back_booth.png"
    },
    {
        title: "Slingshot ",
        them: "/service/500x500/Slingshot.png"
    },
    {
        title: "Digital Photobooth",
        them: "/service/500x500/Digital_Photobooth.png"
    },
    {
        title: "Mosaic wall",
        them: "/service/500x500/Mosaic_wall.png"
    },
    {
        title: "Mosaic wall 2",
        them: "/service/500x500/Mosaic_wall_2.png"
    },
    {
        title: "Green screen or Croma photobooth",
        them: "/service/500x500/Green_screen_or_Croma_photobooth.png"
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