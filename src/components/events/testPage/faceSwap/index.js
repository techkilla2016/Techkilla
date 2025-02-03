import React from "react";
import Image from "next/image";
import "./faceswap.scss";

const selectFace = [
  { id: 1, src: "/events/face1.png", alt: "Face 1" },
  { id: 2, src: "/events/face2.png", alt: "Face 2" },
];

const selectTemplate = [
  { id: 1, src: "/events/templates/winterVibeCard-01.jpg", alt: "Template 1" },
  { id: 2, src: "/events/templates/winterVibeCard-02.jpg", alt: "Template 2" },
  { id: 3, src: "/events/templates/winterVibeCard-03.jpg", alt: "Template 3" },
  { id: 4, src: "/events/templates/winterVibeCard-04.jpg", alt: "Template 4" },
  { id: 5, src: "/events/templates/winterVibeCard-05.jpg", alt: "Template 5" },
  { id: 6, src: "/events/templates/winterVibeCard-06.jpg", alt: "Template 6" },
  { id: 7, src: "/events/templates/winterVibeCard-07.jpg", alt: "Template 7" },
  { id: 8, src: "/events/templates/winterVibeCard-08.jpg", alt: "Template 8" },
  { id: 9, src: "/events/templates/winterVibeCard-09.jpg", alt: "Template 9" },
  {
    id: 10,
    src: "/events/templates/winterVibeCard-10.jpg",
    alt: "Template 10",
  },
];

export default function FaceSwap() {
  return (
    <div className="flex-row-center Faceswap">
      <div className="flex-row-center left-container">
        <div className="flex-row-center output-img">
          <Image
            src="/events/output.png"
            alt="Output Face"
            className="generated-img"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex-col-center right-container">
        <div className="flex-col-center upper">
          <p className="select-text">Select a face</p>
          <div className="flex-row-center select-face">
            {selectFace.map((face) => (
              <img
                key={face.id}
                src={face.src}
                alt={face.alt}
                className="flex-row-center face-option"
              />
            ))}
          </div>
        </div>

        <div className="flex-col-center lower">
          <p className="select-text">Select a template</p>
          <div className="flex-row-center select-template">
            {selectTemplate.map((template) => (
              <img
                key={template.id}
                src={template.src}
                alt={template.alt}
                className="flex-row-center template-option"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
