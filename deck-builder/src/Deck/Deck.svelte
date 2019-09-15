<script>
  import Card from "Card/Card.svelte";
  import CardBack from "Card/CardBack.svelte";

  export let cards = {};
  export let showBack = false;
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #f4f4f4;
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
