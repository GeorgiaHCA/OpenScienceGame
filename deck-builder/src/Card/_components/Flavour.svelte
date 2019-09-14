<script>
  export let name = "[Card Name]";
</script>

<style>
  .container {
    width: 100%;
    height: 30mm;
    position: relative;
  }
  .name {
    font-size: 4mm;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
</style>

<div class="container">
  <div class="name">{name}</div>
</div>
