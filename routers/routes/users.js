const express = require("express");

const {
  signUp,
  logIn,
  saveResult,
  getHistory,
} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", signUp);
usersRouter.get("/gethistory/:userName", getHistory);
usersRouter.put("/saveresult", saveResult);
usersRouter.get("/:userNameOrEmail/:password", logIn);

module.exports = usersRouter;
