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

<h1>Your Deck</h1>
<Deck showBack={true} {cards} />
<button on:click={downloadCards}>Download Cards</button>
