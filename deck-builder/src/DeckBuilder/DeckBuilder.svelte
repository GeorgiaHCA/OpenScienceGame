<script>
  import Button from "./_components/Button.svelte";
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
  .button-container {
    display: flex;
    width: 100%;
  }
</style>

<svelte:component this={component} bind:cards />
<div class="button-container">
  {#if stage > 1}
    <Button onClick={() => (stage -= 1)}>Back</Button>
  {/if}
  {#if stage < 5}
    <Button onClick={() => (stage += 1)}>Next</Button>
  {/if}
</div>
