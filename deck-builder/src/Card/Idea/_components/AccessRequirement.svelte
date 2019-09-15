<script>
  import ListItem from "Card/_components/ListItem.svelte";
  export let card = "[Card Name]";
  $: console.log(card);
</script>

<ListItem>Access to {card.name}</ListItem>
