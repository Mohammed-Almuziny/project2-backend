const express = require("express");

const {
  signUp,
  logIn,
  saveResult,
  getHistory,
  changePassword,
  getUserCreations
} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", signUp);
usersRouter.get("/gethistory/:userName", getHistory);
usersRouter.post("/saveresult", saveResult);
usersRouter.put("/changepassword", changePassword);
usersRouter.get("/Creations/:userName", getUserCreations);
usersRouter.get("/:userNameOrEmail/:password", logIn);

module.exports = usersRouter;
