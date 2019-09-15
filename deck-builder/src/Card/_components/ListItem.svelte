<script>
  export let text = "Dummy Text";
</script>

<style>
  .text {
    font-size: 3mm;
  }
  .container {
    width: 100%;
    padding: 1mm 0mm;
    display: flex;
    align-items: center;
  }
</style>

<div class="container">
  <div>
    <slot />
  </div>
  <div class="text">{text}</div>
</div>
