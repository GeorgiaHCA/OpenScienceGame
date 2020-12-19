<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
  import Flavour from "Card/_components/Flavour.svelte";
  import Divider from "Card/_components/Divider.svelte";
  import Type from "Card/_components/Type.svelte";
  import ListSection from "Card/_components/ListSection.svelte";
  import ListItem from "Card/_components/ListItem.svelte";

  export let card = {};
</script>

<style>
  img {
    width: 4mm;
    margin: 2mm;
  }
</style>

<GenericCard color="#AF0404">
  <Type name="Role" />
  <Flavour name={card.name} />
  <Divider />
  <ListSection header="Skills">
    {#each card.skills as skill}
      <ListItem text={skill.description}>
        <img alt="icon" src="icons/skill.svg" />
      </ListItem>
    {/each}
  </ListSection>
  <ListSection header="Limitations">
    {#each card.limitations as limitation}
      <ListItem text={limitation.description}>
        <img alt="icon" src="icons/limitation.svg" />
      </ListItem>
    {/each}
  </ListSection>
</GenericCard>
