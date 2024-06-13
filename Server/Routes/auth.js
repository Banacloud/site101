const router = require("express").Router();
const User = require("../Database/DatabaseModels/UserSchema");

const usersArray = [
  {
    id: 1,
    name: "abdullah",
    email: "abdullah@abdullah.com",
  },
  {
    id: 2,
    name: "abrar",
    email: "abrar@abrar.com",
  },
  {
    id: 3,
    name: "zunair",
    email: "zunair@zunair.com",
  },
];
router.get("/users", (req, res) => {
  res.json(usersArray);
});

router.post("/register", async (req, res) => {
  try {
    let newUser = User(req.body);
    console.log(req.body);
    await newUser.save();
  } catch (error) {
    console.log(error + "this error is coming from the post route in /users");
  }
});

module.exports = router;
