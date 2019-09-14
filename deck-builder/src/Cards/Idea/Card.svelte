<script>
  import Header from "./components/Header.svelte";
  import GenericCard from "../components/GenericCard.svelte";
  import Flavour from "../components/Flavour.svelte";
  import Requirements from "./components/Requirements.svelte";
  export let borderColor = "#FFFFFF";
</script>

<GenericCard {borderColor}>
  <Header />
  <Flavour name="[Idea Name]" />
  <Requirements />
</GenericCard>
