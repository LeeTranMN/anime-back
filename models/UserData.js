// models/Book.js

const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: String,
  }
});

module.exports = UserData = mongoose.model("user_data", UserDataSchema);
