const express = require("express");

const { getAllQuizzes } = require("../controllers/quizzes");

const quizzesRouter = express.Router();

quizzesRouter.get("/", getAllQuizzes);

module.exports = quizzesRouter;
