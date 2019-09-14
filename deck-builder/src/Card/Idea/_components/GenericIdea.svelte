<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  import Header from "./Header.svelte";
  import Requirements from "./Requirements.svelte";

  export let card = {};
  export let type = "Idea";
  export let color = "#FFFFFF";
</script>

<GenericCard {color}>
  <Header {color} />
  <Flavour name={card.name} />
  <Type name={type} />
  <Divider />
  <Requirements />
</GenericCard>
