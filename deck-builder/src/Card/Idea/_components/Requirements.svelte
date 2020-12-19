<script>
  import ListItem from "Card/_components/ListItem.svelte";
  import ListSection from "Card/_components/ListSection.svelte";
  import Identifier from "./Identifier.svelte";
  import Cost from "Card/_components/Cost.svelte";
  export let requirements = [];
</script>

<ListSection header="Research Requirements">
  {#each requirements as requirement}
    <ListItem text="Access to {requirement.card.name}">
      <Identifier card={requirement.card} size="medium" />
    </ListItem>
  {/each}
  <ListItem text="Action">
    <Cost content="1" size="medium" />
  </ListItem>
</ListSection>
