<script>
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import downloadCards from "_utils/downloadCards.js";
  export let cards = {};
</script>

<style>
  h1 {
    color: #1162a1;
  }
</style>

<h1>Your Deck</h1>
<button on:click={downloadCards}>Download Cards</button>
<Deck showBack={true} {cards} />
