const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },

    password: {
      type: String,
      // required: true,
    },
    type: {
      type: String,
      // required: true,
    },
    // profilePic: {
    //   type: String,
    //   // required: true,
    // },
  },
  { timestamps: true }
);

let User = new mongoose.model("User", userSchema);

module.exports = User;
