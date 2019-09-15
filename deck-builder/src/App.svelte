<script>
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import htmlToImage from "html-to-image";

  const download = () => {
    htmlToImage
      .toJpeg(document.getElementById("card"), { backgroundColor: "white" })
      .then(function(dataUrl) {
        var link = document.createElement("a");
        link.download = "card.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  let card = {
    id: "E1",
    type: "Event",
    name: "Attend Licensing Workshop",
    description: null,
    copies: 1,
    requirements: [],
    effects: [
      {
        type: "Access Flip",
        target: "Research Outputs",
        magnitude: 1,
        description:
          "Convert 1 of your Restricted Access Research Outputs to Open Access"
      }
    ]
  };
</script>

<Deck />
