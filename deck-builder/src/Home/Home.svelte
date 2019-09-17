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
    margin-bottom: 50px;
    border: none;
    padding: 10px 20px;
    color: #1162a1;
    background: #c7f1ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    box-shadow: none;
  }
</style>

{#if itistime}
  <div transition:fade={{ duration: 3000 }} class="main">
    <Logo />
  </div>
  {#if screen == 'Home'}
    <button on:click={() => (screen = 'Builder')}>
      Start Building Your Deck
    </button>
  {/if}
{/if}
