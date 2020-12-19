<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  import defaultCards from "../../../../cards/events.json";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Events"
  displayFilter={card => card.type == 'Event'}
  {defaultCards}
  bind:cards />
