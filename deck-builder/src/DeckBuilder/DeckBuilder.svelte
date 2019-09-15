<script>
  import GenericUploadScreen from "./_components/GenericUploadSceen.svelte";
  import IdeaUploader from "./IdeaUploader/IdeaUploader.svelte";
  import EventUploader from "./EventUploader/EventUploader.svelte";
  import ToolUploader from "./ToolUploader/ToolUploader.svelte";
  import RoleUploader from "./RoleUploader/RoleUploader.svelte";

  let stage = 1;
  let component;
  $: {
    switch (stage) {
      case 1:
        component = RoleUploader;
        break;
      case 2:
        component = IdeaUploader;
        break;
      case 3:
        component = EventUploader;
        break;
      case 4:
        component = ToolUploader;
        break;
    }
  }
</script>

<svelte:component this={component} />
{#if stage > 1}
  <button on:click={() => (stage -= 1)}>Previous</button>
{/if}
{#if stage < 4}
  <button on:click={() => (stage += 1)}>Next</button>
{/if}
