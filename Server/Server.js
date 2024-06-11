const express = require("express");
const app = express();
const PORT = process.env.PORT || 8100;
const authRouter = require("./Routes/auth");
const cors = require("cors");

app.use(cors());
app.use("/auth", authRouter);
app.use(express.json());
app.listen(PORT, (req, res) => {
  console.log("Server.js is running");
});
