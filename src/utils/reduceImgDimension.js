export const resizeImgDimension = (file) => {
  return new Promise((resolve) => {
    const img = new window.Image();
    const reader = new FileReader();
    reader.onload = (event) => {
      img.src = event.target.result;
      img.onload = () => {
        const MAX_DIMENSION = 1500;
        let { width, height } = img;

        console.log("image's original dimensions=>", width, height);
        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          const aspectRatio = width / height;
          if (width > height) {
            width = MAX_DIMENSION;
            height = MAX_DIMENSION / aspectRatio;
            console.log("image's dimension is converted => ", width, height);
          } else {
            height = MAX_DIMENSION;
            width = MAX_DIMENSION * aspectRatio;
          }
          console.log("image's  dimensions is converted =>", width, height);
        } else {
          // console.log("image's dimension is not converted => ", width, height);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, {
            type: "image/png",
          });
          resolve(resizedFile);
        }, "image/png");
      };
    };
    reader.readAsDataURL(file);
  });
};
