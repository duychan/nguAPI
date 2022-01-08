const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
    maxlength: [30, "Must be less than thirty character"],
    minlength: [5, "Must be at least five character"],
  },
  gender: {
    required: true,
    type: Boolean,
  },
  friends: {
    type: Array,
  },
  description: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
