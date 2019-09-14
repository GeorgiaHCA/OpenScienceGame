<script>
  import Card from "./Card/Card.svelte";

  let card = {
    id: "E1",
    type: "Event",
    name: "Attend Licensing Workshop",
    description: null,
    copies: 1,
    requirements: [],
    effects: [
      {
        type: "Access Flip",
        target: "Research Outputs",
        magnitude: 1,
        description:
          "Convert 1 of your Restricted Access Research Outputs to Open Access"
      }
    ]
  };
</script>

<Card {card} />
