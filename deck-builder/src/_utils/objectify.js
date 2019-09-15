export default function(array) {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item.id]: item
    };
  }, {});
}
