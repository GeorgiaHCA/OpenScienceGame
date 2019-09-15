import htmlToImage from "html-to-image";
import JSZip from "jszip";
import FileSaver from "file-saver";

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
        zip.file("card" + i + ".jpeg", image);
      });
    })
    .then(() => zip.generateAsync({ type: "blob" }))
    .then(function(content) {
      FileSaver.saveAs(content, "cards.zip");
    });
};
