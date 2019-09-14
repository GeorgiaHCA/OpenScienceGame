<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  export let card = {};
</script>

<GenericCard color="#FF9900">
  <Type name="Event" />
  <Flavour name={card.name} />
  <Divider />
</GenericCard>
