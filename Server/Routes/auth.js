const router = require("express").Router();
const { useState } = require("react");
const User = require("../Database/DatabaseModels/UserSchema");
const multer = require("multer");

// multer code starts here
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// routing starts here

// route to register new users
router.post("/registeruser", async (req, res) => {
  const newUser = User(req.body);
  console.log(req.body);
  await newUser.save();
  res.send(newUser);
});

// route to gain Email&Password and return complete data of the user
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

// route to uplaod and save images

router.post("/registeruser", upload.single("profilePic"), async (req, res) => {
  let newUser = req.body;
  newUser.type = "customer";
  newUser.profilePic = "/" + req.file.originalname;
  let user = User(newUser);
  await user.save();
  res.send(user);
});

module.exports = router;
