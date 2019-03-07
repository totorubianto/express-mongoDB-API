const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// boduParser midelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURL;

//Connect MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb connect"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

//Route API
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runing on port ${port}`));
