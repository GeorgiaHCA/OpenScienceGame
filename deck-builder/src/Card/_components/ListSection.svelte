<script>
  import ListItem from "Card/_components/ListItem.svelte";
  export let header = "Header";
</script>

<style>
  .container {
    width: 100%;
    height: 30mm;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    padding: 3mm 0mm;
  }
  .header {
    font-size: 2mm;
    padding: 1mm;
  }
</style>

<div class="container">
  <div class="header">{header}</div>
  <slot />
</div>
