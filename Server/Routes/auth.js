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

module.exports = router;
