import html2canvas from "html2canvas";

var canvas = null;

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  // console.log("downloading");
  fakeLink.remove();
};

const exportAsImage = async (el, imageFileName) => {
  if (canvas == null) canvas = window.document.createElement("canvas");

  const ctx = canvas.getContext("2d");

  const scaleX = 3;
  const scaleY = 3;
  canvas.width = el.width * scaleX;
  canvas.height = el.height * scaleY;
  ctx.scale(scaleX, scaleY);

  // console.log(canvas)
  ctx.drawImage(el, 0, 0, canvas.width / scaleX, canvas.height / scaleY);
  // const canvas = await html2canvas(el, { scale: 3 });
  const image = canvas.toDataURL("image/png");
  downloadImage(image, imageFileName);
};

export default exportAsImage;
