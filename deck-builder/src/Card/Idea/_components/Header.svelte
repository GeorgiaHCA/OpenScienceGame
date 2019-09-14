<script>
  import Cost from "Card/_components/Cost.svelte";
  import Identifier from "./Identifier.svelte";
  export let color = "#F2C94C";
  export let requirements = [];
  export let cost = 1;
</script>

<style>
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  <Identifier size="large" {color} />
  <div class="color-bar" style="background-color: {color}" />
  <div class="requirements">
    <Cost size="medium" />
  </div>
</div>
