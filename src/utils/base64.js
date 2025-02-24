/* // converting selected template to base64 format
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const getImageData = img => {
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  return canvas.toDataURL("image/png");
};

export const base64 = template => {
  var img = new Image();
  img.src = template;
  img.onload = () => {
    console.log("template img", img);
    return getImageData(img);
  };
}; */

// export const base64 = (template, callback) => {
//   if (typeof document === "undefined") return; // Ensure code only runs in browser environment

//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");

//   const getImageData = img => {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     context.drawImage(img, 0, 0);
//     return canvas.toDataURL("image/jpeg", 1.0);
//   };

//   var img = new Image();
//   img.crossOrigin = "Anonymous"; // To handle CORS issues if any
//   img.src = template;
//   img.onload = () => {
//     console.log("image going to swap", img);
//     const base64Data = getImageData(img);
//     callback(base64Data);
//   };
// };

export const base64 = (template, callback) => {
  if (typeof document === "undefined") return; // Ensure code only runs in browser environment

  fetch(template)
    .then((res) => res.blob())
    .then((blob) => {
      // Read the Blob as DataURL using the FileReader API
      const reader = new FileReader();
      // console.log(reader);

      reader.onloadend = () => {
        // console.log(reader.result);
        // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

        callback(reader.result);

        // Convert to Base64 string
        //const base64 = getBase64StringFromDataURL(reader.result);
        //  console.log(base64);
        // Logs wL2dvYWwgbW9yZ...
      };
      reader.readAsDataURL(blob);
    });
};
