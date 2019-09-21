<script>
  import Card from "Card/Card.svelte";
  import CardBack from "Card/CardBack.svelte";
  export let print = false;
  export let cards = {};
  export let showBack = false;
</script>

<style>
  .container {
    background: #f4f4f4;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    min-width: 100%;
    overflow: auto;
  }
  .print-container {
    width: 100%;
    display: table;
  }
</style>

<div class={print ? 'print-container' : 'container'}>
  {#if showBack}
    <CardBack />
  {/if}
  {#each Object.values(cards) as card}
    <Card {card} />
  {/each}
</div>
