<script>
  import Button from "../_components/Button.svelte";
  import Deck from "./Deck/Deck.svelte";
  import Card from "./Card/Card.svelte";
  import downloadCards from "_utils/downloadCards.js";
  export let cards = {};
  let loading = false;
  let mode = "cards";
  $: {
    if (mode == "print") {
      setTimeout(() => {
        window.print();
      }, 50);
    }
  }
  const download = () => {
    loading = true;
    downloadCards().then(() => (loading = false));
  };
</script>

<style>
  .button-container {
    display: flex;
    width: 100%;
  }
  .loading-screen {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    line-height: 100vh;
    text-align: center;
    z-index: 1000;
  }
</style>

{#if mode == 'print'}
  <Deck print={true} showBack={false} {cards} />
{:else}
  <h1>Your Deck</h1>
  <div class="button-container">
    <Button primary onClick={download}>Download Cards</Button>
    <Button
      onClick={() => {
        mode = 'print';
      }}>
      Print PDF
    </Button>
  </div>
  <Deck showBack={true} {cards} />
{/if}
{#if loading}
  <div class="loading-screen">
    <h1>Preparing for Download...</h1>
  </div>
{/if}
