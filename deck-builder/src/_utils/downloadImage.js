import htmlToImage from "html-to-image";

export default () => {
  htmlToImage
    .toJpeg(document.getElementById("card"), { backgroundColor: "white" })
    .then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "card.jpeg";
      link.href = dataUrl;
      link.click();
    });
};
