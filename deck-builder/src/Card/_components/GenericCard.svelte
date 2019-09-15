<script>
  export let color = "#FFFFFF";
</script>

<style>
  div {
    border: 1mm solid;
    border-radius: 4mm;
    height: 89mm;
    width: 63mm;
    padding: 5mm;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 3mm;
  }
</style>

<div id="card" style="border-color: {color}">
  <slot />
</div>
