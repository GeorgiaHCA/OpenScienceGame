import htmlToImage from "html-to-image";
import JSZip from "jszip";

export default () => {
  let zip = new JSZip();
  const cards = document.querySelectorAll(".card-container");
  let cardImages = [];
  for (let card of cards) {
    cardImages.push(htmlToImage.toSvgDataURL(card));
  }
  return Promise.all(cardImages)
    .then(images => {
      images.forEach((image, i) => {
        var idx =
          image.indexOf("data:image/svg+xml;charset=utf-8,") +
          "data:image/svg+xml;charset=utf-8,".length;
        var content = decodeURIComponent(image.substring(idx));
        zip.file("card" + i + ".svg", content);
      });
    })
    .then(() => zip.generateAsync({ type: "blob" }))
    .then(function(content) {
      window.saveAs(content, "cards.zip");
    });
};
