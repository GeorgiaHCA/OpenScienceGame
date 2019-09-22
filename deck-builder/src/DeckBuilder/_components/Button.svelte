<script>
  export let onClick;
  export let primary = false;
</script>

<style>
  .primary {
    background-color: #41c178;
  }
  .secondary {
    background-color: #1162a1;
  }
  button {
    flex-grow: 1;
    padding: 10px;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
    margin: 0px 2px;
    box-sizing: border-box;
    text-align: center;
  }
  button:focus,
  button:hover {
    box-shadow: none;
  }
</style>

<button on:click={onClick} class={primary ? 'primary' : 'secondary'}>
  <slot />
</button>
