<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  import objectify from "_utils/objectify.js";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Roles"
  displayFilter={card => card.type == 'Role'}
  bind:cards />
