<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Events"
  displayFilter={card => card.type == 'Event'}
  bind:cards />
