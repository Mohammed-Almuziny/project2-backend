const express = require("express");

const { signUp, logIn } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", signUp);
usersRouter.get("/:userNameOrEmail/:password", logIn);

module.exports = usersRouter;
