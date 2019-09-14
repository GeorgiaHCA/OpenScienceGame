<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  import Effect from "Card/_components/Effect.svelte";
  export let card = {};
</script>

<GenericCard color="#7E7E7E">
  <Type name="Tool" />
  <Flavour name={card.name} />
  <Divider />
  <Effect effects={card.effects} />
</GenericCard>
