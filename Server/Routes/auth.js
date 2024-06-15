const router = require("express").Router();
const { useState } = require("react");
const User = require("../Database/DatabaseModels/UserSchema");

router.post("/registeruser", async (req, res) => {
  try {
    const newUser = User(req.body);
    console.log(req.body);
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(
      error + "this error is coming from the post route in /registeruser"
    );
  }
});

router.post("/checklogin", async (req, res) => {
  try {
    let user = await User.findOne(req.body);
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.send("user fetching unsuccessful");
  }
});

module.exports = router;
