const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/public/"));

//A catch for all other routes accessed by react-router
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
