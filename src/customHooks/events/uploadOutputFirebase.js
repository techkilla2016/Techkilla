import {
  ref as storageRef,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/firebase-config";

const useUploadOutputFirebase = async (outputImg, eventData) => {
  try {
    const { productName, eventName, eventNumber } = eventData;

    const imageRef = storageRef(
      storage,
      `snapshawt_events/${productName}/${eventName}_${eventNumber}/${eventName}_${eventNumber}_image_${Date.now()}.jpg`
    );

    await uploadString(imageRef, outputImg, "base64");

    const downloadURL = await getDownloadURL(imageRef);

    return downloadURL;
  } catch (err) {
    console.error("Error uploading image to Firebase Storage:", err);
    throw err;
  }
};

export default useUploadOutputFirebase;
