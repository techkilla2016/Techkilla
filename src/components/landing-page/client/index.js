import { useEffect, useRef } from "react";
import "./client.scss";

export default function Client() {
  const clientData = [
    { image: "/landing-page/logos-01.png" },
    { image: "/landing-page/logos-02.png" },
    { image: "/landing-page/logos-03.png" },
    { image: "/landing-page/logos-04.png" },
    { image: "/landing-page/logos-05.png" },
    { image: "/landing-page/logos-06.png" },
    { image: "/landing-page/logos-07.png" },
    { image: "/landing-page/logos-08.png" },
    { image: "/landing-page/logos-09.png" },
    { image: "/landing-page/logos-10.png" },
    { image: "/landing-page/logos-11.png" },
    { image: "/landing-page/logos-12.png" },
    { image: "/landing-page/logos-13.png" },
    { image: "/landing-page/logos-14.png" },
    { image: "/landing-page/logos-15.png" },
    { image: "/landing-page/logos-16.png" },
    { image: "/landing-page/logos-17.png" },
    { image: "/landing-page/logos-18.png" },
    { image: "/landing-page/logos-19.png" },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const cloneLogos = [...clientData, ...clientData];

    // Set up scroll logic
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition -= scrollSpeed;
      if (Math.abs(scrollPosition) >= slider.scrollWidth / 2) {
        // Reset scroll position for seamless loop
        scrollPosition = 0;
      }
      slider.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(scroll);
  }, [clientData]);

  return (
    <div className="Client">
      <h1>Our Clients</h1>
      <p className="textCon">Partnering with Leading Brands & Event Agencies</p>
      <div className="ImgContainer">
        <div className="slider" ref={sliderRef}>
          {clientData.concat(clientData).map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={`Client logo ${index + 1}`}
              className="clientLogo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
