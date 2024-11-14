import { useState, useEffect } from "react";
import "./testimonial.scss";

export default function Testimonials({ handleContactScroll }) {
  const testData = [
    {
      name: "Vikas Khanna",
      reviewText:
        "One of the best solution providers who ensure high audience engagement using customized tech.  I've worked with them on several occasions and everytime the experience has been extremely satisfying.  Wishing Team TechKilla the very best.",
      rating: 5,
    },
    {
      name: "Pratik Bhandari",
      reviewText:
        "I now know the team for over 4 years and i must admit they are one of the smoothest team to work with. They are always available, they will try to give solutions at best costs. Working with them doesnt feel like you are working with another company, they become part of your team and thats the best situation to be in. I can high recommend anyone to go ahead and work with them.",
      rating: 5,
    },
    {
      name: "Carol Machado",
      reviewText:
        "Great work! Amazing team having in-depth knowledge about the clients requirements and nailing the brief in no time. When it comes to Technology you can rely on Techkilla.",
      rating: 5,
    },
    {
      name: "Daemon Waremulf",
      reviewText:
        "Great start up with clear future endeavors. Company provides a lot of options to learn and grow.",
      rating: 5,
    },
    {
      name: "Alice Johnson",
      reviewText:
        "Amazing service! Very professional and prompt. Highly recommended.",
      rating: 5,
    },
    {
      name: "2D_esigns",
      reviewText:
        "Very innovative and solution based company providing great opportunities. Pleasured to be a part of Techkilla technologies.Amazing service! Very professional and prompt. Highly recommended.",
      rating: 5,
    },
    {
      name: "Keshav Prasad Sahu",
      reviewText:
        "Fully satisfied with your work. Need to work more ahead. Thank you Techkilla",
      rating: 5,
    },
    {
      name: "Gagan Rohtagi",
      reviewText:
        "Lovely working with them, very flexible approach and professionalism in execution",
      rating: 5,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 768 ? 3 : 5);
    };
    window.addEventListener("resize", updateVisibleCount);
    updateVisibleCount(); // Set initial count based on current screen size

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(testData.length); // Show all testimonials when "Load More" is clicked
  };

  return (
    <div className="Testimonial">
      <h2>Testimonials</h2>
      <div className="testimonialList">
        {testData.slice(0, visibleCount).map((review, index) => (
          <div key={index} className="testimonialCard">
            <h3>{review.name}</h3>
            <p>{review.reviewText}</p>
            <div className="starRating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
      {visibleCount < testData.length && (
        <button className="loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <div className="footer">
        <p>
          For other photobooth or custom event queries,{" "}
          <button
            onClick={handleContactScroll}
            style={{ color: "blue", fontWeight: 600 }}
          >
            Get Quotes
          </button>
        </p>
      </div>
    </div>
  );
}
