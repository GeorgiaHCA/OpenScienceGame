<script>
  export let borderColor = "#FFFFFF";
</script>

<style>
  div {
    border: 1mm solid;
    border-radius: 4mm;
    height: 89mm;
    width: 63mm;
    padding: 5mm;
  }
</style>

<div style="border-color: {borderColor}">
  <slot />
</div>
