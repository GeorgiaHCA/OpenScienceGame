const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(path.dirname(__dirname), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), "public", "index.html"));
});

app.listen(process.env.PORT || 8080, () =>
  console.log("DeckBuilder server listening...")
);
