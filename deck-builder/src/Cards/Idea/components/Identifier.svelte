<script>
  export let color = "#F2C94C";
  export let content = "X";
</script>

<style>
  .container {
    border: 1mm solid;
    border-radius: 10mm;
    height: 10mm;
    width: 10mm;
    background-color: white;
  }
  .content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 100%;
  }
</style>

<div class="container" style="border-color: {color}">
  <div class="content">{content}</div>
</div>
