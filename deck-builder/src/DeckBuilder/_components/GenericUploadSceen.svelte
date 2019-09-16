<script>
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import readFile from "_utils/readFile.js";
  import downloadCards from "_utils/downloadCards.js";
  import filterObject from "_utils/filterObject.js";

  export let cards = {};
  export let title = "Tools";
  export let cardParser = cards => cards;
  export let displayFilter = cards => cards;

  $: console.log(cards);

  $: displayCards = filterObject(cards, displayFilter);

  const upload = evt =>
    readFile(
      evt,
      data => (cards = { ...cards, ...cardParser(JSON.parse(data)) })
    );
</script>

<style>
  h1 {
    color: #1162a1;
  }
</style>

<h1>{title}</h1>
<span>Upload a json with your {title} cards</span>
<input type="file" accept=".json" on:change={upload} />
<Deck cards={displayCards} />
