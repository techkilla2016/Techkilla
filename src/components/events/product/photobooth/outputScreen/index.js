import { useEffect, useRef } from "react";
import "./output-screen-photobooth.scss";
import Image from "next/image";

import Header from "../header";
import ShareOptions from "../../shareOptions";
import useSwapPhoto from "@/customHooks/events/photobooth/useSwapPhoto";
import useUploadOutputFirebase from "@/customHooks/events/uploadOutputFirebase";
import LoaderProduct from "../../loader";

export default function OutputScreen({
  eventData,
  setCurrentScreen,
  output,
  setOutput,
  selectedTemplate,
  capturedImg,
}) {
  const outputRef = useRef(null);

  const handleSubmit = async () => {
    console.log("generating start");
    setOutput({});
    try {
      const outputImg = await useSwapPhoto(capturedImg, selectedTemplate);
      const outputUrl = await useUploadOutputFirebase(outputImg, eventData);

      setOutput({
        img: `data:image/webp;base64,${outputImg}`,
        url: outputUrl,
      });
      // setCurrentScreen("output");
    } catch (error) {
      console.error("Error occurred during axios request:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const outputHeading = output?.img ? "READY TO SHARE ?" : "PLEASE WAIT...";

  return (
    <div
      className={`common flex-col-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignOutputScreenPhotobooth"
          : "VerticalDesignOutputScreenPhotobooth"
      }`}
    >
      <Header eventData={eventData} title={outputHeading} />

      <main className="flex-col-center main">
        {output?.img ? (
          <div className="flex-row-center outputImg">
            <Image
              id="printableOutputPhotobooth"
              ref={outputRef}
              src={output.img}
              alt="output"
              width={300}
              height={300}
            />
          </div>
        ) : (
          <div className="flex-row-center loaderProduct">
            <LoaderProduct eventData={eventData} />
          </div>
        )}

        {Object.keys(output).length !== 0 && (
          <ShareOptions
            eventData={eventData}
            setCurrentScreen={setCurrentScreen}
            outputRef={outputRef}
            output={output}
          />
        )}
      </main>
    </div>
  );
}
