<script>
  import GenericUploadScreen from "../_components/GenericUploadSceen.svelte";

  const parseCards = cards => {
    cards.forEach(card => {
      card.requirements.forEach(r => {
        if (r.id) {
          r.card = cards.filter(c => c.id === r.id)[0];
        }
      });
    });
  };
</script>

<GenericUploadScreen title="Ideas" />
