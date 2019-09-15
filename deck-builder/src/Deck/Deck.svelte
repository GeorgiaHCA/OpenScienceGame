<script>
  import Card from "Card/Card.svelte";
  import CardBack from "Card/CardBack.svelte";

  export let cards = [
    {
      id: "E1",
      type: "Idea",
      subType: "Experimental Method",
      name: "Nanopore Sequencing",
      description: null,
      copies: 2,
      cost: 1,
      requirements: []
    },
    {
      id: "E2",
      type: "Idea",
      subType: "Experimental Method",
      name: "Compound Library Synthesis & Screening",
      description: null,
      copies: 2,
      cost: 1,
      requirements: []
    },
    {
      id: "E3",
      type: "Idea",
      subType: "Experimental Method",
      name: "Phage Display",
      description: null,
      copies: 2,
      cost: 1,
      requirements: []
    },
    {
      id: "E4",
      type: "Idea",
      subType: "Experimental Method",
      name: "Drug Delivery Assay",
      description: null,
      copies: 2,
      cost: 1,
      requirements: []
    },
    {
      id: "E5",
      type: "Idea",
      subType: "Experimental Method",
      name: "Illumina Sequencing",
      description: null,
      copies: 1,
      cost: 1,
      requirements: []
    },
    {
      id: "I6",
      type: "Idea",
      subType: "Experimental Method",
      name: "Chemical Synthesis",
      description: null,
      copies: 1,
      cost: 1,
      requirements: []
    }
  ];
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>

<div class="container">
  <CardBack />
  {#each cards as card}
    <Card {card} />
  {/each}
</div>
