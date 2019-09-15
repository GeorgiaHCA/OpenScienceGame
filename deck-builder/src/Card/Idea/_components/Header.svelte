<script>
  import Cost from "Card/_components/Cost.svelte";
  import Identifier from "./Identifier.svelte";
  import getCardColor from "_utils/getCardColor.js";

  export let card = {};
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
  .requirements {
    display: flex;
  }
</style>

<div class="container">
  <div class="color-bar" style="background-color: {getCardColor(card)}" />
  <div class="content">
    <Identifier size="large" {card} />
    <div class="requirements">
      {#each card.requirements as requirement}
        <Identifier size="medium" card={requirement.card} />
      {/each}
      <Cost size="medium" />
    </div>
  </div>
</div>
