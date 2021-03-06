const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
require("./db");

const usersRouter = require("./routers/routes/users");
const quizzesRouter = require("./routers/routes/quizzes");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", usersRouter);
app.use("/quizzes", quizzesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On Port ${PORT}`);
});
