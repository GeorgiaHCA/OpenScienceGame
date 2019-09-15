const fs = require("fs");

const root = "../cards/";
const files = fs.readdirSync(root);

files.forEach(file => {
  const path = root + file;
  const file = fs.readFileSync(path);
  const array = JSON.parse(file);
  const object = objectify(array);
  fs.writeFileSync(path, JSON.stringify(object));
});

function objectify(array) {
  return array.reduce((obj, item) => {
    const { id, ...rest } = item;
    return {
      ...obj,
      [id]: rest
    };
  }, {});
}
