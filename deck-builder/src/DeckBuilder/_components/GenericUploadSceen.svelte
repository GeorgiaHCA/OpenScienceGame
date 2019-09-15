<script>
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import readFile from "_utils/readFile.js";
  import objectify from "_utils/objectify.js";

  let cards = {};
  export let title = "Tools";
  export let parseCards = cards => cards;
  const upload = evt =>
    readFile(evt, data => (cards = parseCards(objectify(JSON.parse(data)))));
</script>

<style>
  h1 {
    color: #1162a1;
  }
</style>

<h1>{title}</h1>
<span>Upload a json with your {title} cards</span>
<input type="file" accept=".json" on:change={upload} />
<Deck {cards} />
