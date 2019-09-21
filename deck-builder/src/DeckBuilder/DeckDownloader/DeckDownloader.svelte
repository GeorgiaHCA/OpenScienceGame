<script>
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import downloadCards from "_utils/downloadCards.js";
  export let cards = {};
  let mode = "cards";
</script>

<style>
  h1 {
    color: #1162a1;
  }
  button {
    border: none;
    width: 100%;
    background-color: #41c178;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    box-shadow: none;
  }
</style>

{#if mode == 'print'}
  <Deck print={true} showBack={false} {cards} />
{:else}
  <h1>Your Deck</h1>
  <button on:click={downloadCards}>Download Cards</button>
  <button
    on:click={() => {
      mode = 'print';
    }}>
    Printable Page
  </button>
  <Deck showBack={true} {cards} />
{/if}
