const express = require("express");
const bodyParser = require("body-parser");
const profileData = require("./fakeProfileData");
const path = require("path");

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

//get user method
app.get("/api/users", (req, res) => {
  res.json(profileData.getData());
});

//get specific user method
app.get("/api/users/:id?", (req, res) => {
  const profile = profileData.getUser(req.params.id);

  if (profile === undefined || book === null) {
    res.status(404);
    res.send();
  }
  res.json(profile);
});

app.all("/api*", (req, res) => {
  res.status(404);
  res.send();
});

app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
});

module.exports = app;
