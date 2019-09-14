<script>
  import Card from "./Card/Card.svelte";

  let card = {
    id: "D1",
    type: "Role",
    subType: "Data Set",
    name: "Tumour Genome Sequence",
    description: null,
    cost: 1,
    requirements: [
      {
        type: "Access",
        id: "E1"
      }
    ]
  };
</script>

<Card {card} />
