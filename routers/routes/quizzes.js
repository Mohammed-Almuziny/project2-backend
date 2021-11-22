const express = require("express");

const { getAllQuizzes, createQuizFromApi, getQuizById } = require("../controllers/quizzes");

const quizzesRouter = express.Router();

quizzesRouter.get("/", getAllQuizzes);
quizzesRouter.get("/quizById/:id", getQuizById)
quizzesRouter.post("/createQuizFromApi", createQuizFromApi);

module.exports = quizzesRouter;
