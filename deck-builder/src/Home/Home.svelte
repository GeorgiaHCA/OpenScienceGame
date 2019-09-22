<script>
  import Button from "DeckBuilder/_components/Button.svelte";
  import Logo from "Logo/Logo.svelte";
  import { fade, fly } from "svelte/transition";
  export let screen = "Home";
  let itistime = false;
  setTimeout(() => (itistime = true), 20);
</script>

<style>
  .main {
    flex-grow: 1;
    width: 500px;
  }

  div {
    color: #7e7e7e;
  }
  .button-container {
    width: 30%;
    margin: 5mm;
    text-align: center;
  }
  .label {
    position: relative;
    top: -25mm;
    padding-right: 5mm;
    text-align: right;
    font-size: xx-large;
  }
</style>

{#if screen == 'Home'}
  {#if itistime}
    <div in:fade={{ duration: 3000 }} class="main">
      <Logo />
      <div class="label" in:fly={{ x: 200, duration: 2000 }}>The Game</div>
    </div>
  {/if}
  <div class="button-container">
    <Button primary onClick={() => (screen = 'Builder')}>
      Start Building Your Deck
    </Button>
  </div>
{/if}
