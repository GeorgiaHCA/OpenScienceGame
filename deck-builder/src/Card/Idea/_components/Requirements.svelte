<script>
  import ListItem from "Card/_components/ListItem.svelte";
  import Cost from "Card/_components/Cost.svelte";
  import AccessRequirement from "./AccessRequirement.svelte";
  export let requirements = ["Card A", "Card B"];
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
  <ul>
    {#each requirements as requirement}
      <AccessRequirement card={requirement} />
    {/each}
    <ListItem>
      Takes
      <Cost content="1" size="small" />
      Action
    </ListItem>
  </ul>
</div>
