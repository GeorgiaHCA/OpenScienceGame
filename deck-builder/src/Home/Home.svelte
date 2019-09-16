<script>
  import Logo from "Logo/Logo.svelte";
  import { fade } from "svelte/transition";
  export let screen = "Home";
  let itistime = false;
  setTimeout(() => (itistime = true), 20);
</script>

<style>
  .main {
    flex-grow: 1;
    width: 500px;
  }
  button {
    border: none;
    padding: 10px;
    background: linear-gradient(
      90deg,
      #a2bacc 0%,
      rgba(57, 169, 255, 0.630208) 0.01%,
      rgba(162, 186, 204, 0.24) 100.43%
    );
  }
</style>

{#if itistime}
  <div transition:fade={{ duration: 3000 }} class="main">
    <Logo />
  </div>
  {#if screen == 'Home'}
    <button on:click={() => (screen = 'Builder')}>Build Your Deck</button>
  {/if}
{/if}
