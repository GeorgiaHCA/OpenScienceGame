<script>
  import ListItem from "Card/_components/ListItem.svelte";
  import Identifier from "./Identifier.svelte";
  import Cost from "Card/_components/Cost.svelte";
  export let requirements = [];
</script>

<style>
  .container {
    width: 100%;
    height: 30mm;
    position: relative;
    padding: 3mm 0mm;
  }
  .header {
    font-size: 2mm;
  }
</style>

<div class="container">
  <div class="header">Research Requirements</div>
  {#each requirements as requirement}
    <ListItem text="Access to {requirement.card.name}">
      <Identifier card={requirement.card} size="medium" />
    </ListItem>
  {/each}
  <ListItem text="Action">
    <Cost content="1" size="medium" />
  </ListItem>
</div>
