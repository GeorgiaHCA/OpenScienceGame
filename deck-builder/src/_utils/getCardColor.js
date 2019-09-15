export default function(card) {
  switch (card.type) {
    case "Role":
      return "#AF0404";
    case "Tool":
      return "#7E7E7E";
    case "Event":
      return "#FF9900";
    case "Idea":
      switch (card.subType) {
        case "Experimental Method":
          return "#006585";
        case "Data Set":
          return "#41C178";
        case "Analytical Method":
          return "#AD3392";
        case "Insight":
          return "#F2C94C";
      }
    default:
      return "#FFFFFF";
  }
}
