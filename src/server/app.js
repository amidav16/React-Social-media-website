const express = require("express");
const bodyParser = require("body-parser");
const profileData = require("./fakeProfileData");
const mediaData = require("./fakeMediaData");
const path = require("path");

const app = express();

//to handle JSON payloads
app.use(bodyParser.json());

//get user method
app.get("/api/users", (req, res) => {
  res.json(profileData.getData());
});

//get specific user method
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profileData.getUser(id);

  res.send(profile);
});

//create user
app.post("/api/users", (req, res) => {
  const dto = req.body;

  const id = profileData.createUser(
    dto.name,
    dto.surname,
    dto.description,
    dto.status,
    dto.location,
    dto.email,
    dto.friends
  );
  res.status(201); //created
  res.header("location", "/api/users/" + id);
  res.send();
});

//Media requests

//get media method
app.get("/api/media", (req, res) => {
  res.json(mediaData.getMedia());
});

//get specific media user method
app.get("/api/media/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const media = mediaData.getMediaUser(id);

  res.send(media);
});

//create post in media
app.post("/api/media", (req, res) => {
  const dto = req.body;

  const id = mediaData.createPost(dto.message);

  res.status(201); //created
  res.header("location", "/api/users/" + id);
  res.send();
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
