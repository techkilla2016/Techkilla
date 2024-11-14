import "./about.scss";

export default function About({ handleContactScroll }) {
  return (
    <div className="About">
      <p className="heading">About us</p>
      <p className="firstText">
        Techkilla - Transforming Events with AI, Gaming, and Interactive
        Experiences
      </p>
      <p className="secondText">
        Since 2016, Techkilla has been a leader in interactive event solutions,
        offering photobooths, AI-powered photobooths, gaming experiences, and
        more. We specialize in creating engaging and unforgettable experiences
        for corporate events, weddings, product launches, and large gatherings.
        With a focus on innovation and social media integration, we deliver
        customized solutions that keep your guests entertained and connected,
        making every event a memorable one.
      </p>
      <p className="thirdText">
        Serving clients across India and globally,{" "}
        <span className="highlight">Techkilla</span> has won the{" "}
        <span className="highlight">Best Engagement Activation Award</span>{" "}
        three times at <span className="highlight">AEEDC Dubai</span>.
      </p>
      <div className="event-img">
        <img src="/landing-page/event.jpg" alt="Event" />
      </div>
      <button onClick={handleContactScroll} className="contact-button">
        Contact Us
      </button>
    </div>
  );
}
