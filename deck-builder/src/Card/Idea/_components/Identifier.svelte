<script>
  export let card = {};
  export let size = "small";
  import getCardColor from "_utils/getCardColor.js";

  let scale;

  switch (size) {
    case "small":
      scale = 2;
      break;
    case "medium":
      scale = 4;
      break;
    case "large":
      scale = 9;
      break;
    default:
      scale = 9;
      break;
  }
</script>

<style>
  .container {
    border: solid;
    background-color: white;
    margin: 1mm;
    box-sizing: content-box;
  }
  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>

<div
  class="container"
  style="border-color: {getCardColor(card)}; height: {scale}mm; width:{scale}mm;
  border-radius: {scale}mm; border-width: {scale / 8}mm; padding: {scale / 10}mm;">
  <img alt="identifier-icon" src={card.icon} />
</div>
