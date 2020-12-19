<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  import defaultCards from "../../../../cards/roles.json";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Roles"
  displayFilter={card => card.type == 'Role'}
  {defaultCards}
  bind:cards />
