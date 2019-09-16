<script>
  import Card from "Card/Card.svelte";
  import CardBack from "Card/CardBack.svelte";

  export let cards = {};
  export let showBack = false;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: wrap;
    background: #f4f4f4;
    height: 100%;
    overflow: auto;
  }
</style>

<div class="container">
  {#if showBack}
    <CardBack />
  {/if}
  {#each Object.values(cards) as card}
    <Card {card} />
  {/each}
</div>
