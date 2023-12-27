import { IoIosPeople } from 'react-icons/io'
import { MdMobileFriendly } from 'react-icons/md'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { VscGraphLine } from 'react-icons/vsc'
const PlayableAds = [
    {
        bg: '/assets/service/ads-card-bg-light.png',
        img: '/assets/service/Immersive-preview.png',
        title: `Create an Immersive Preview`,
        icon: <AiOutlineFileSearch />,
        desc: `Use a lead-in video in the news feed or stories to highlight your app or game and encourage players to download it.`
    },
    {
        bg: '/assets/service/ads-card-bg-dark.png',
        img: '/assets/service/Engaged-players.png',
        title: `Find engaged players and customers`,
        icon: <MdMobileFriendly />,
        desc: `Drive more clients and gamers with higher intent to your app.`
    },
    {
        bg: '/assets/service/ads-card-bg-light.png',
        img: '/assets/service/Allow-People.png',
        title: `Allow people to test-drive your app`,
        icon: <IoIosPeople />,
        desc: `Give people the option to view a preview of your app right from the ad before downloading it.`
    },
    {
        bg: '/assets/service/ads-card-bg-dark.png',
        img: '/assets/service/Data-insights.png',
        title: `Gain access to valuable data insights`,
        icon: <VscGraphLine />,
        desc: `Learn which user will interact with your ads and which CTA will lead to the most conversions.`
    },
]
export default PlayableAds