<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  import ListSection from "Card/_components/ListSection.svelte";
  import ListItem from "Card/_components/ListItem.svelte";

  export let card = {};
</script>

<GenericCard color="#AF0404">
  <Type name="Role" />
  <Flavour name={card.name} />
  <Divider />
  <ListSection header="Skills">
    {#each card.skills as skill}
      <ListItem>{skill.descripion}</ListItem>
    {/each}
  </ListSection>
  <ListSection header="Limitations">
    {#each card.limitations as limitation}
      <ListItem>{limitation.descripion}</ListItem>
    {/each}
  </ListSection>
</GenericCard>
