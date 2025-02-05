export const reduceImgSize = (file, originalSize) => {
  return new Promise((resolve) => {
    const MAX_SIZE_MB = 3;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    console.log("original size", originalSize);

    if (originalSize > MAX_SIZE_BYTES) {
      const img = new window.Image();
      const reader = new FileReader();
      reader.onload = (event) => {
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              const reducedFile = new File([blob], file.name, {
                type: "image/png",
              });
              console.log("size reduced", file.size);
              resolve(reducedFile);
            },
            "image/png",
            0.8
          ); // Adjust quality here
        };
      };
      reader.readAsDataURL(file);
    } else {
      // console.log("size not reduced");
      resolve(file);
    }
  });
};
