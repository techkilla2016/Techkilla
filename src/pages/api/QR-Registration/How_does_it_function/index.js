const How_does_it_function = [
    {
        title: 'Form to sign up for an event or campaign',
        desc: `A personalized web-browser-based registration form that lets your 
        audience fill in their own information or that the promoter can fill in
        on their behalf at the time of registration`,
        img: '/Assets/Microsite/microsite-banner-02.png'
    },
    {
        title: 'Automatic database registration link emailing',
        desc: `If we already have the database our intelligent software 
        auto sends the registration form link to all the users via email.`,
        img: '/Assets/Microsite/microsite-banner-03.png'
    },
    {
        title: 'Unique QR code',
        desc: `After submitting the form, each attendee will receive a personalized 
        QR code through email to present at the event`,
        img: '/Assets/Microsite/microsite-banner-04.png'
    },
    {
        title: 'QR Scanner with auto-verification',
        desc: `A QR code scanner web application that is solely dedicated to 
        the purpose of scanning and verifying attendance at the moment 
        of entry for all of the participants`,
        img: '/Assets/Microsite/microsite-banner-05.png'
    },
    {
        title: 'Instant printout',
        desc: `Immediately following the verification or completion of the form, 
        a printout will be generated and can be distributed to participants.`,
        img: '/Assets/Microsite/microsite-banner-06.png'
    },
    {
        title: 'Backend Acknowledgement & Database',
        desc: `The backend server will record the person's name and entry time 
        and date on the server for future use.`,
        img: '/Assets/Microsite/microsite-banner-07.png'
    },
]

const handler = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            data: How_does_it_function,
            status: true
        })
    } else {
        res.status(405).json({
            status: false,
            massage: 'Method Not Allowed '
        })
    }
}

export default handler