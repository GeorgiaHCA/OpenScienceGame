<script>
  import Idea from "./Idea/Idea.svelte";
  import Tool from "./Tool/Tool.svelte";
  import Role from "./Role/Role.svelte";
  import Event from "./Event/Event.svelte";

  export let card = {};

  let component;

  switch (card.type) {
    case "Idea":
      component = Idea;
      break;
    case "Event":
      component = Event;
      break;
    case "Tool":
      component = Tool;
      break;
    case "Role":
      component = Role;
      break;
  }
</script>

<svelte:component this={component} {card} />
