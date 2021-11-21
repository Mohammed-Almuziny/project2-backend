const express = require("express");

const { signUp } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/", signUp);

module.exports = usersRouter;
