const express = require("express");

const {
  getAllQuizzes,
  getQuizzes,
  createQuizFromApi,
  getQuizById,
  createQuiz,
} = require("../controllers/quizzes");

const quizzesRouter = express.Router();

quizzesRouter.get("/", getAllQuizzes);
quizzesRouter.get("/getQuizzes", getQuizzes);
quizzesRouter.post("/create", createQuiz);
quizzesRouter.get("/quizById/:id", getQuizById);
quizzesRouter.post("/createQuizFromApi", createQuizFromApi);

module.exports = quizzesRouter;
