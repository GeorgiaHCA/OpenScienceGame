<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  import defaultCards from "../../../../cards/tools.json";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Tools"
  displayFilter={card => card.type == 'Tool'}
  {defaultCards}
  bind:cards />
