export default function(obj, filter) {
  const filteredObject = {};
  for (let key in obj) {
    const value = obj[key];
    if (filter(value)) {
      filteredObject[key] = value;
    }
  }
  return filteredObject;
}
