<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";
  export let cards = {};
  const cardParser = cards => {
    for (let id in cards) {
      cards[id].requirements.forEach(r => {
        if (r.id) {
          r.card = cards[r.id];
        }
      });
    }
    return cards;
  };
</script>

<GenericUploadScreen
  title="Ideas"
  {cardParser}
  displayFilter={card => card.type == 'Idea'}
  bind:cards />
