// routes/api/books.js

const express = require("express");
const router = express.Router();

// Load Book model
const UserData = require("../../models/UserData");

router.post("/create", (req, res) => {
  console.log(req.body);
  UserData.create(req.body)
    .then(userData => res.json({ msg: "Data added successfully!" }))
    .catch(err => res.status(404).json({ msg: "Error creating data" }));
});

router.get("/getByUsername/:username", (req, res) => {
  UserData.find({ username: req.params.username })
    .then(userData => res.json(userData))
    .catch(err => res.status(404).json({ msg: "User not found" }));
});

router.put("/update", async (req, res) => {
  const foundUser = await UserData.findOne({ username: req.body.username }).catch(err =>
    res.status(404).json({ msg: "User not found " })
  );
  foundUser.data = req.body.data;
  foundUser.save().then(r => res.json({ msg: "entry updated successfully" }));
});

router.get("/all", (req, res) => {
  UserData.find().then(data => res.json(data));
});

module.exports = router;
