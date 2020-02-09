const express = require("express");
const bodyParser = require("body-parser");
const menuData = require("./fakeMenuData");
const path = require("path");

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

//get method
app.get("/api/dishes", (req, res) => {
  res.send(menuData.getData());
});

app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
});

module.exports = app;
