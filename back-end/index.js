const express = require("express");
const app = express();
const port = 1337;
const cors = require("cors"); //middleware
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//const mongoDB = "mongodb://127.0.0.1/wishlistdb";
//mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect("mongodb://127.0.0.1:27017/wishlistdb"); //create db

//var db = mongoose.connection;
//db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
    console.log(err);
  }
});

app.post("/api/signin", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
