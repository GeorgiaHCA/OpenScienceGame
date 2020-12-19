<script>
  export let color = "#C4C4C4";
  export let content = "1";
  export let size = "small";

  let scale;

  switch (size) {
    case "small":
      scale = 3;
      break;
    case "medium":
      scale = 5;
      break;
    case "large":
      scale = 10;
      break;
    default:
      scale = 10;
      break;
  }
</script>

<style>
  .container {
    display: inline-block;
    border: solid;
    background-color: white;
    margin: 1mm;
  }
  .content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 100%;
  }
</style>

<div
  class="container"
  style="border-color: {color}; height: {scale}mm; width:{scale}mm;
  border-radius: {scale}mm; border-width: {scale / 10}mm">
  <div class="content" style="font-size: {scale / 2}mm">{content}</div>
</div>
