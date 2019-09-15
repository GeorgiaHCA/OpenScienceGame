<script>
  export let color = "#FFFFFF";
</script>

<style>
  .card {
    border: 2mm solid;
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

<div class="card" style="border-color: {color}">
  <slot />
</div>
