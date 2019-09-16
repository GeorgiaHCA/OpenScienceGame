<script>
  import DeckBuilder from "./DeckBuilder/DeckBuilder.svelte";
  import Home from "Home/Home.svelte";
  let screen = "Home";
  let component;
  $: switch (screen) {
    case "Builder":
      component = DeckBuilder;
      break;
    default:
      component = Home;
  }
</script>

<style>
  .screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>

<div class="screen">
  <svelte:component this={component} bind:screen />
</div>
