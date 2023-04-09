import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import pic from '../../../public/Assets/feedback.jpg'
const CaseStudieCard = () => {
    return (
        <div className='CaseStudieCard'>
            <Row className={1 == 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image alt='360 Photobooth or Spin Booth for Maybelline Newyork New launch' src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>360 Photobooth or Spin Booth for Maybelline Newyork New launch</h4>
                        <p>
                            There are many surprises in store for you as a result of the creative and engaging 360-degree photo capture. It could be a 360-degree video, a Boomerang, or a GIF. Here, we set up our 360* Photobooth/Spinbooth in 6 various sites for Maybelline New York, a well-known cosmetics company.
                        </p>
                        <p>
                            Come try our thrilling 360 Spinbooth out and reserve it for your upcoming event, product launch, exhibition, or other occasions to wow your audience and visitors.
                        </p>
                        <div className='address'>
                            <p><strong>Shareable mediums</strong>  - Whatsapp, Airdrop, email or unique QR scan</p>
                            <p><strong>Takes</strong> - Unlimited</p>
                            <p><strong>Duration</strong> - upto 8 hours</p>
                            <p><strong>Customization</strong> - Frame, Logo & Music file <br />
                                To Book, Whatsapp at 7827362702</p>
                        </div>
                    </div>
                </Col>

            </Row>

            <Row className={1 != 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>HDFC AnalytIQ 3.0</h4>
                        <p>
                            a specially created analytical campaign for HDFC Bank to allow its selective customers to enter a raffle to win rewards from their partner bank.
                        </p>
                        <div className='address'>
                            <p><strong>Games - </strong>Sudoku, Crosswords & Chess</p>
                            <p><strong> Duration -</strong> 3 Months</p>
                            <p><strong> Platform -</strong> Web Browser (Safari, Chrome or edge)</p>
                            <p><strong>Participants - </strong>  1000+</p>
                            <p><strong>Rounds - </strong> 3</p>

                        </div>
                        <p>
                            <strong> Concept -</strong> To take part in the competitions, each competitor had to register. After registering, users can log in using the credentials they were sent through email. After logging in, players have the opportunity to choose from the available gaming alternatives. If they wish to play in all of the games, they can select all of them, or they can choose any.
                        </p>
                        <p>
                            Once the game has begun, players can begin making attempts at their choices. Only three hints are available in each game, and each one utilised results in a point deduction from the final score
                        </p>
                        <p>
                            In order to record the fastest submission, a timer will run. Only the top 100 can advance to the second round; everyone else can only view the leaderboard.
                        </p>
                        <div className='address'>
                            <p>
                                <strong>Round 2:</strong> Slightly above beginner level.
                            </p>
                            <p>
                                <strong>Round 3:</strong> Using the Zoom platform, all chosen players must play the game while being filmed.
                            </p>
                        </div>
                        <p>
                            This concludes the thrilling third series of the HDFC AnalytIQ gaming campaign. The top 3 winners received a bumper prize from the HDFC Bank.
                        </p>
                    </div>
                </Col>

            </Row>

            <Row className={1 == 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>ITC Sunfeast Bounce Instagram Filter - Bounce header</h4>
                        <p>
                            The ITC Foods brand Sunfeast is already well-known in the market and has now introduced its own Instagram filter, where users of social media would participate and try to play 6 balls in a header round. The top scoring has the opportunity to submit their score by posting a story or reel video and tagging the Sunfeast bounce official page in order to be featured on that page.
                        </p>
                        <h5>
                            What was given in exchange for the Brand?
                        </h5>
                        <p>
                            thousands of organic views from user-shared reels and tales
                            Organic imprint on the Sunfeast bounce header filter
                            Number of players by region expressed as a percentage
                            % of data by gender saved, shared, and camera play statistics obtained from the backend.

                        </p>
                    </div>
                </Col>

            </Row>


            <Row className={1 !== 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>ITC Sunfeast Bounce Instagram Filter - Bounce Football Roll</h4>
                        <p>
                            For ITC's Sunfeast Bounce biscuits, another intriguing filter. A filter cum game where we had the most organic impressions. Most people who tried the filter were football aficionados.
                        </p>
                        <p>
                            An ideal fusion of logic and design is used to sign up participants for Techkilla's entertaining and challenging filter.
                        </p>
                        <h5>
                            Concept -
                        </h5>
                        <p>
                            Players can obtain the filter from the Sunfeast bounce page, via a link, or through user-shared stories, and then begin taking part. <br />
                            A player must navigate the hurdles while controlling the ball with their head motions. Winners can tag the sunfeast bounce official page and share their score for a chance to compete in the 2022 Sunfeast Cup.
                        </p>
                    </div>
                </Col>

            </Row>


            <Row className={1 === 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>Microsoft Pride Month 2022 Celebration with Instagram Filter</h4>
                        <p>
                            All humans are entitled to equality and equal rights, as we are all aware. With that in mind, we marked Pride Month 2022 by creating a playful Microsoft filter and using the hashtag #pridehasnoborders.
                        </p>
                        <p>
                            A fun and original filter that allows users to select the flag of their choice for a selfie or to make a film using the hashtag.
                        </p>
                        <p>
                            The background is completely removed in real-time and a perfect design took place covering the background of the scene.
                        </p>
                    </div>
                </Col>

            </Row>



            <Row className={1 !== 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>360 Photobooth or Spinbooth - Carlsberg Beer</h4>
                        <div className="address">
                            <p><strong>Location -</strong> Gurgaon</p>
                            <p><strong>Duration -</strong> 8 hours</p>
                            <p><strong>Customization -</strong> Photo frame & Music</p>
                            <p><strong>Pax -</strong> Unlimited</p>
                            <p><strong>Shareable mediums -</strong> Airdrop, QR & Whatsapp</p>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row className={1 === 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>Concentrix Got Talent - Digital Talent hunt Programme</h4>
                        <p>A Digital talent hunt program just like India’s Got Talent.</p>
                        <div className="address">
                            <p><strong>Brand  -</strong> Concentrix</p>
                            <p><strong>Type  -</strong> Corporate Event</p>
                            <p><strong>Participants  -</strong>  500+</p>
                            <p><strong>Voting  -</strong> Live (Real-time)</p>
                            <p><strong>Output -</strong>  Leaderboard top to bottom</p>
                            <p><strong>Categories  -</strong> Dancing, Singing, Ramp walk, Rising Star, Stand Up</p>
                        </div>
                        <p>
                            <strong>Concept -</strong> A unique, creative idea produced just for an HR task. The corporate talent hunt is an annual event when employees can participate, show off their hidden potential, and receive rewards.
                        </p>
                        <p>
                            Everything is possible in this digital age, exactly like this great Talent hunt programme.
                        </p>
                        <p>
                            <strong>Actions to take -</strong> <br />
                            Every participant must register on the microsite. <br />
                            Users can select their talent from a drop-down menu after logging in. <br />
                            A previously recorded video file may be uploaded. <br />
                            All voters may begin selecting their favourite performances as soon as the live voting begins.
                        </p>
                        <p><strong>USP:</strong> To prevent fraudulent voting, each category only allows one vote per person.</p>
                    </div>
                </Col>
            </Row>


            <Row className={1 !== 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>QR code registration and AI verification - Microsoft Hackathon</h4>
                        <p>
                            In any case, controlling the throng is always challenging, but even more so is maintaining a validated entry to prevent any unauthorised visitors.
                        </p>
                        <p>
                            Our sophisticated software for QR-based verification takes the initiative and aids you in avoiding any false submissions.
                        </p>
                        <h6>
                            How does it function?
                        </h6>
                        <p>
                            A special QR is created for each participant through an automated email.
                            Techkilla developed a backend app that can read the special QR code.
                            Participants present the QR code they received via email, and it scans it.
                            The app scans the QR code, determines if it is a legitimate QR code or not, and changes the backend's real-time entry.
                        </p>
                        <p><strong>USP -</strong> The software indicates what kind of treats to distribute based on the QR code.</p>
                    </div>
                </Col>
            </Row>

            <Row className={1 == 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>HDFC Inquizitive Family Show</h4>
                        <p>
                            A tailor made concept that replicates the famous KBC quiz show.
                        </p>
                        <p>
                            A distinctive KBC-style programme where the host manages the proceedings online while the contestants use Zoom or another video conference technology.
                        </p>
                        <div className="address">
                            <p>
                                <strong>No. of players -</strong> upto 500
                            </p>
                            <p>
                                <strong>Platform -</strong> Web Browsers (safari, chrome or others)
                            </p>
                        </div>
                        <p>
                            <strong>How does it work?</strong> <br />
                            a special microsite with a host window and a player window.
                            With just one swipe, the host can create a special question category-wise.
                            The same questions are visible to all users, and when the countdown starts, the options are shown.
                            Participants may select the appropriate answer from a list of options, or they may use a poll of the audience, a 50/50 chance, or simply flip the question.
                            The host will submit the correct response from the backend for everyone to see.
                            At the conclusion, a leaderboard will be created to display the top performers.
                        </p>
                        <p>In search of this activity for your upcoming event?</p>
                        <p>Call or whatsapp us at <strong>+91-7827362702</strong></p>
                    </div>
                </Col>
            </Row>

            <Row className={1 !== 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>Digital Tambola/Bingo/Housie - TVS Motors</h4>
                        <p>
                            Bingo, Tambola, or Housie Regardless of the name you give it, this is the game that will test your ability to win the big bucks.
                        </p>
                        <p>
                            This distinctive online game was created by Techkilla to enable users to take part from faraway regions with the aid of live internet connectivity.
                        </p>
                        <p>A host-led game that accurately represents tambola play on the ground.</p>
                        <p>
                            <strong>Video -</strong> <Link href='https://www.youtube.com/watch?v=gENxYQYVB4Y' target='_blank'> https://youtu.be/gENxYQYVB4Y </Link>
                        </p>
                        <p><strong>How does it work?</strong></p>
                        <ul>
                            <li>It has two windows: a player window and a host window.</li>
                            <li>The host will communicate the joining URL to every member via chat, a message board, or another method of their choosing.</li>
                            <li>When ready to join, players can touch on ready.</li>
                            <li>The participants that have joined the game and are prepared to participate are visible to the host.</li>
                            <li>once every participant has signed up. The host can start the game.</li>
                            <li>To automatically produce a unique number, the host will click on "generate new number."</li>
                            <li>Players can tap the numbers on their ticket to cut them if they are present.</li>
                            <li>One tap can assist them in claiming the awards once they are ready to be claimed as first line, second line, third line, corners, or full house.</li>
                            <li>Once the prize has been accepted, an animation will show so that the host can determine whether the recipient actually won or not.
                            </li>
                            <li>If it's a real victory, the host side will automatically update the award status.</li>
                            <li>The authorities may choose how to reward the winners.</li>
                        </ul>
                        <p><strong>USP - </strong> To prevent the delay, it may automatically verify the bogey or confirm it.</p>
                    </div>
                </Col>
            </Row>

            <Row className={1 == 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>Tuborg Super Over - Cricket Game</h4>
                        <p>A well-known beer and distilled water company, Tuborg, has introduced a really original idea for a web-based engagement activity that can also be used for on-ground activations.</p>
                        <p>Once again, TECHKILLA has created a novel idea for branding and engagement work to be done simultaneously.</p>
                        <p>
                            Nobody is immune to cricket fever, therefore with that in mind, we created a TVC-based cricket engagement activity that was followed by an integrated photo booth at the conclusion.
                        </p>
                        <p><strong>How does it work?</strong></p>
                        <ul>
                            <li>A specific microsite with a web URL that can be shared.</li>
                            <li>Players must enter their information as (name, email, dob etc.)</li>
                            <li>As soon as the user submits the information, a TVC video begins.</li>
                            <li>After the video has finished playing, the page will redirect to a cricket game page where each player will have six balls to play with.</li>
                            <li>The best scoring is displayed on a special leaderboard with linked Users who can shoot selfies with the Tuborg logo in the photo booth and publish those photos to Facebook.</li>
                        </ul>
                        <p><strong>USP - </strong> One software only with 4 activities (database, TVC showcase, cricket game, and picture booth).</p>
                    </div>
                </Col>
            </Row>


            <Row className={1 !== 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>KUKU FM - Playable Ad</h4>
                        <p>
                            Playable advertisements enable customers to test out a portion of your programme before downloading it and ultimately obtaining access to the full experience. For consumers to "test
                        </p>
                        <p>
                            before they purchase," you must develop a drastically scaled-down version of your app's core features.
                        </p>
                        <p>
                            Techkilla had designed a custom playable ads in the form of a personality puzzle to let their potential customers see the ad and click on it to play the game that leads them to the installation page to listen to their favorite personalities biography i.e Sachin tendulkar, A.P.J Abdul kalam, Kapil Dev, Virat kohli and many others.
                        </p>
                        <p>
                            <Link href='https://www.instagram.com/p/Cdaf6nIAuEf/'>https://www.instagram.com/p/Cdaf6nIAuEf/</Link>
                        </p>
                        <p><strong>Top Benefits that KuKu FM Gained -</strong></p>
                        <p>
                            Low uninstallation rates <br />
                            Low CAC (customer acquisition cost) <br />
                            High CTR & CTA (call to action) <br />
                            Maximum engagement than a non-interactive video ad <br />
                            70% memory recall rate among the users and many more
                        </p>
                    </div>
                </Col>
            </Row>


            <Row className={1 == 1 ? "py-5 my-5" : 'flex-row-reverse'}>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <Image src={pic} />
                    </div>
                </Col>
                <Col xxl={6} lg={6} md={12} sm={12}>
                    <div className="innerBox">
                        <h4 className='caseHeading'>QR Registration and instant ID print with live verification - The National HRD Network (NHRD)</h4>
                        <p>
                            An online instant id card generator with auto ai QR verification for the visitors.
                        </p>
                        <p>
                            The National HRD Network (NHRDN) is a Global Centre for Grooming Leaders and the National Apex body of professionals committed to promoting the People Development movement in the country, as well as enhancing the capability of human resource professionals to compete globally, thereby creating value for society.
                        </p>
                        <p>
                            We made them a custom registration page with all the fields they needed (Name, Email id, category, occupation, company name, etc.) so that users could sign up for the event themselves or onsite if they hadn't already done so.
                        </p>
                        <p>
                            An auto email notification has been sent to the registered users.
                        </p>
                        <p>
                            The option to print an ID right away was made so that thousands of people could sign up at once.
                        </p>
                        <p>
                            An online QR verification web-based app that scans the QR code on their IDs to give us the backend acknowledgement and instant verification for the promoters to verify and welcome the guests.
                        </p>
                        <p>Request a free demo <Link href='/'>here</Link></p>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default CaseStudieCard
