<script>
  import Cost from "Card/_components/Cost.svelte";
  import Identifier from "./Identifier.svelte";
  export let set = "X";
  export let color = "#F2C94C";
  export let requirements = [];
  export let cost = 1;
</script>

<style>
  .container {
    position: relative;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  .color-bar {
    height: 3mm;
    width: 100%;
    border: none;
    border-radius: 3mm;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>

<div class="container">
  <div class="color-bar" style="background-color: {color}" />
  <div class="content">
    <Identifier size="large" content={set} {color} />
    <div class="requirements">
      {#each requirements as requirement}
        <Identifier size="medium" content={requirement.card.set} />
      {/each}
      <Cost size="medium" />
    </div>
  </div>
</div>
