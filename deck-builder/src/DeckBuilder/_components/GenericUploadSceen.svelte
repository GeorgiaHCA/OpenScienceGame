<script>
  import Button from "./Button.svelte";
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import readFile from "_utils/readFile.js";
  import downloadCards from "_utils/downloadCards.js";
  import filterObject from "_utils/filterObject.js";

  export let cards = {};
  export let title = "Cards";
  export let defaultCards = {};
  export let cardParser = cards => cards;
  export let displayFilter = cards => cards;

  $: displayCards = filterObject(cards, displayFilter);

  const updateCards = newCards => {
    cards = { ...cards, ...cardParser(newCards) };
  };
  const loadDefault = () => {
    updateCards(defaultCards);
  };
  const upload = evt => readFile(evt, data => updateCards(JSON.parse(data)));
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
  }
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>

<h1>{title}</h1>
<div>
  <input id="file-picker" type="file" accept=".json" on:change={upload} />
  <Button primary onClick={loadDefault}>Load Default {title}</Button>
  <Button>
    <label for="file-picker">Upload Custom JSON</label>
  </Button>

</div>
<Deck cards={displayCards} />
