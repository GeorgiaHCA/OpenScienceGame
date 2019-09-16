import htmlToImage from "html-to-image";
import JSZip from "jszip";

export default () => {
  let zip = new JSZip();
  const cards = document.querySelectorAll(".card");
  let cardImages = [];
  for (let card of cards) {
    cardImages.push(htmlToImage.toJpeg(card, { backgroundColor: "white" }));
  }
  Promise.all(cardImages)
    .then(images => {
      images.forEach((image, i) => {
        var idx = image.indexOf("base64,") + "base64,".length; // or = 28 if you're sure about the prefix
        var content = image.substring(idx);
        zip.file("card" + i + ".jpeg", content, { base64: true });
      });
    })
    .then(() => zip.generateAsync({ type: "blob" }))
    .then(function(content) {
      window.saveAs(content, "cards.zip");
    });
};
