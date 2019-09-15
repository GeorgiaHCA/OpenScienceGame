const fs = require("fs");

const root = "../cards/";
const files = fs.readdirSync(root);

files.forEach(file => {
  const path = root + file;
  const raw = fs.readFileSync(path);
  const array = JSON.parse(raw);
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
