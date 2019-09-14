<script>
  import IdeaIdentifier from "./IdeaIdentifier.svelte";
  export let color = "#F2C94C";
</script>

<style>
  .container {
    position: relative;
  }
  .color-bar {
    height: 3mm;
    width: 100%;
    border: none;
    border-radius: 3mm;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: -1;
  }
</style>

<div class="container">
  <IdeaIdentifier {color} />
  <div class="color-bar" style="background-color: {color}" />
</div>
