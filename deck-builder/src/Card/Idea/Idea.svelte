<script>
  import ExperimentalMethod from "./ExperimentalMethod/ExperimentalMethod.svelte";
  import AnalyticalMethod from "./AnalyticalMethod/AnalyticalMethod.svelte";
  import DataSet from "./DataSet/DataSet.svelte";
  import Insight from "./Insight/Insight.svelte";

  export let card = {};

  let component;

  switch (card.subType) {
    case "Experimental Method":
      component = ExperimentalMethod;
      break;
    case "Analytical Method":
      component = AnalyticalMethod;
      break;
    case "Data Set":
      component = DataSet;
      break;
    case "Insight":
      component = Insight;
      break;
  }
</script>

<svelte:component this={component} {card} />
