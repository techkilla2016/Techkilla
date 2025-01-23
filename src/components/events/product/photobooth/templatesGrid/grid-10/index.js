import React from "react";
import "./grid-10-photobooth.scss";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";

export default function Grid10({ eventData, OverLayComponent }) {
  const isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
  const isTabletView = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 1024px)",
  });
  const isLaptopView = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <div
      className={`flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignGrid10Photobooth"
          : "VerticalDesignGrid10Photobooth"
      }`}
    >
      {eventData.templates?.map((item, idx) => (
        <>
          {/* laptop view */}
          {isLaptopView && eventData.screen === "responsive" && (
            <div
              key={item.id}
              className={`flex-row-center card ${
                (idx === 0 || idx === 8) && "smallCard"
              } ${idx === 4 && "mt-4"} ${(idx === 0 || idx === 8) && "mt-5"}`}
            >
              <Image src={item.card} alt="card" width={100} height={100} />
              <OverLayComponent template={item} />
            </div>
          )}

          {/* tablet view */}
          {isTabletView && eventData.screen === "responsive" && (
            <div
              className={`flex-row-center card ${
                (idx === 0 || idx === 1 || idx === 8 || idx === 9) && "bigCard"
              }`}
            >
              <Image src={item.card} alt="card" width={100} height={100} />
              <OverLayComponent template={item} />
            </div>
          )}

          {/* mobile view and vertical design*/}
          {((isMobileView && eventData.screen === "responsive") ||
            eventData.screen === "vertical") && (
            <div
              className={`flex-row-center card ${
                (idx === 3 || idx === 4 || idx === 5 || idx === 6) &&
                "smallCard"
              }`}
            >
              <Image src={item.card} alt="card" width={100} height={100} />
              <OverLayComponent template={item} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
