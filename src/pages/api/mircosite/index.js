const microsite_Related_Project = (req, res) => {
    if (req.method === 'GET') {
        const list = [
            {
                title: "DOW packaging and supplies",
                them: "/Assets/service/microsite/DOW_packaging.png"
            },
            {
                title: "NHRD QR verification and instant print",
                them: "/Assets/service/microsite/NHRD_QR_verification.png"
            },
            {
                title: "HDFC Inquizitive family",
                them: "/Assets/service/microsite/HDFC_Inquizitive_family_show.png"
            },
            {
                title: "HDFC Analytiq 1.0",
                them: "/Assets/service/microsite/HDFC_Analytiq_1.0.png"
            },
            {
                title: "HDFC Analytiq 2.0",
                them: "/Assets/service/microsite/HDFC_Analytiq_2.0.png"
            },
            // {
            //     title: "HDFC Analytiq 3.0",
            //     them: "/Assets/service/microsite/HDFC_Analytiq_3.0.png"
            // },
            {
                title: "Cipla Urology quiz game",
                them: "/Assets/service/microsite/Cipla_Urology_quiz_game.png"
            },
            {
                title: "Loreal dreamlength launch",
                them: "/Assets/service/microsite/Loreal_dreamlength_launch.png"
            },
            {
                title: "Colgate - IPL",
                them: "/Assets/service/microsite/Colgate_IPL.png"
            },
            {
                title: "Concentrix got talent",
                them: "/Assets/service/microsite/Concentrix_got_talent.png"
            },

            {
                title: "Nutella - Ramadan video quiz game",
                them: "/Assets/service/microsite/video_quize.png"
            },
            {
                title: "Tata International E-Marathon",
                them: "/Assets/service/microsite/Tata_International_E-Marathon.png"
            },
            {
                title: "Tuborg super over",
                them: "/Assets/service/microsite/Tuborg_super_over.png"
            },
            {
                title: "Total energies virtual talent hunt show",
                them: "/Assets/service/microsite/Total_energies_virtual_talent_hunt_show.png"
            },
            {
                title: "World cloud photobooth",
                them: "/Assets/service/microsite/World_cloud_photobooth.png"
            },
            {
                title: "TVS Motors digital tambola",
                them: "/Assets/service/microsite/TVS_Motors_digital_tambola.png"
            },
            {
                title: "Colgate swashbuckers day",
                them: "/Assets/service/microsite/Colgate_swashbuckers_day.png"
            },
            // {
            //     title: "Multitv Quiz Game",
            //     them: "/Assets/service/microsite/Colgate_swashbuckers_day.png"
            // }, 
            // {
            //    "Microsoft Hackathon",
            //     them: "/Assets/service/microsite/Colgate_swashbuckers_day.png"
            // }, 
            // {
            //     "Cera - Quiz game",
            //     them: "/Assets/service/microsite/Colgate_swashbuckers_day.png"
            // }, 
            // {
            //     "Total Oil - talent hun",
            //     them: "/Assets/service/microsite/Colgate_swashbuckers_day.png"
            // },
        ]
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
export default microsite_Related_Project