<script>
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
  <button on:click={download}>Download Cards</button>
  <button
    on:click={() => {
      mode = 'print';
    }}>
    Print PDF
  </button>
  <Deck showBack={true} {cards} />
{/if}
{#if loading}
  <div class="loading-screen">
    <h1>Preparing for Download...</h1>
  </div>
{/if}
