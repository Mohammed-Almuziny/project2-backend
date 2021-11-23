const express = require("express");

const { signUp, logIn, saveResult } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", signUp);
usersRouter.get("/:userNameOrEmail/:password", logIn);
usersRouter.put("/saveresult", saveResult);

module.exports = usersRouter;
