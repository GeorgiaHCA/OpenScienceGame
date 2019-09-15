<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  import Header from "./_components/Header.svelte";
  import Requirements from "./_components/Requirements.svelte";

  import getCardColor from "_utils/getCardColor.js";
  export let card = {};
</script>

<GenericCard color={getCardColor(card)}>
  <Header {card} />
  <Flavour name={card.name} />
  <Type name={card.subType} />
  <Divider />
  <Requirements requirements={card.requirements} />
</GenericCard>
