const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
require("./db")

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hallo world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On Port ${PORT}`);
});
