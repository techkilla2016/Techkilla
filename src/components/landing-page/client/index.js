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

  return (
    <div className="Client">
      <h1>Our Clients</h1>
      <p className="textCon">Partnering with Leading Brands & Event Agencies</p>
      <div className="ImgContainer">
        <div className="slider">
          {clientData.map((client, index) => (
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
