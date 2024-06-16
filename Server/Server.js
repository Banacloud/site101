const express = require("express");
const app = express();
const PORT = process.env.PORT || 8100;
const multer = requrie("multer");
const upload = multer({ dest: "uploads/" });
const authRouter = require("./Routes/auth");
require("./Database/Database");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.listen(PORT, (req, res) => {
  console.log("Server.js is running");
});
