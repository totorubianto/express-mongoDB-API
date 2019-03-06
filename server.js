const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB Config
const db = require("./config/keys").mongoURL;

//Connect MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongodb connect"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

//
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runing on port ${port}`));
