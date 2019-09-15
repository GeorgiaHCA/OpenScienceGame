<script>
  import GenericCard from "Card/_components/GenericCard.svelte";
</script>

<style>
  .logo {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logo-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>

<GenericCard>
  <div class="logo-container">
    <img class="logo" src="./logo.svg" />
  </div>
</GenericCard>
