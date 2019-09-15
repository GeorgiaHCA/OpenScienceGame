<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  export let cards = {};
</script>

<GenericUploadScreen
  title="Tools"
  displayFilter={card => card.type == 'Tool'}
  bind:cards />
