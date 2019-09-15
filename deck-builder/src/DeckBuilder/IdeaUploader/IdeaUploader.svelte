<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";

  const parseCards = cards => {
    cards.forEach(card => {
      card.requirements.forEach(r => {
        if (r.id) {
          r.card = cards[id];
        }
      });
    });
  };
</script>

<GenericUploadScreen title="Ideas" />
