<script>
  import ListItem from "Card/_components/ListItem.svelte";
  export let effects = ["Effect A", "Effect B"];
</script>

<style>
  .container {
    width: 100%;
    height: 30mm;
    position: relative;
    padding: 3mm 0mm;
    text-align: center;
    flex-grow: 1;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 3mm;
  }
</style>

<div class="container">
  <div class="content">
    {#each effects as effect}{effect.description}{/each}
  </div>
</div>
