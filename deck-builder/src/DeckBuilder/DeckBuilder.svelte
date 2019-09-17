<script>
  import GenericUploadScreen from "./_components/GenericUploadSceen.svelte";
  import IdeaUploader from "./IdeaUploader/IdeaUploader.svelte";
  import EventUploader from "./EventUploader/EventUploader.svelte";
  import ToolUploader from "./ToolUploader/ToolUploader.svelte";
  import RoleUploader from "./RoleUploader/RoleUploader.svelte";
  import DeckDownloader from "./DeckDownloader/DeckDownloader.svelte";

  let cards = {};
  let stage = 1;
  let component;
  $: {
    switch (stage) {
      case 1:
        component = IdeaUploader;
        break;
      case 2:
        component = RoleUploader;
        break;
      case 3:
        component = EventUploader;
        break;
      case 4:
        component = ToolUploader;
        break;
      case 5:
        component = DeckDownloader;
        break;
    }
  }
</script>

<style>
  button {
    flex-grow: 1;
    border: none;
    color: white;
    margin: 0px 2px;
    background-color: #1162a1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    box-shadow: none;
  }
  .button-container {
    display: flex;
    width: 100%;
  }
</style>

<svelte:component this={component} bind:cards />
<div class="button-container">
  {#if stage > 1}
    <button on:click={() => (stage -= 1)}>Back</button>
  {/if}
  {#if stage < 5}
    <button on:click={() => (stage += 1)}>Next</button>
  {/if}
</div>
