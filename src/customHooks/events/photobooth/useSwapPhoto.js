import axios from "axios";

import { base64 } from "@/utils/base64";

const useSwapPhoto = async (capturedImg, selectedTemplate) => {
  try {
    // convert selected template to base64
    const selectedTemplateBase64 = await new Promise((resolve, reject) => {
      base64(selectedTemplate.original, (base64Data) => {
        if (base64Data) {
          resolve(base64Data);
        } else {
          reject(new Error("Base64 conversion failed"));
        }
      });
    });

    // post request to api
    const response = await axios.post("https://52.56.108.15/trail_rec", {
      image: capturedImg.split(",")[1],
      choice: selectedTemplateBase64.split(",")[1],
    });
    const outputImg = response.data.result;
    return outputImg;
  } catch (err) {
    console.log("Error occurred during axios request at useSwapPhoto", err);
    throw err;
  }
};

export default useSwapPhoto;
