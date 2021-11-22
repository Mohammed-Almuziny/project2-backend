const axios = require("axios");

const quizzes = require("../../db/models/quizzes");

const getAllQuizzes = async (req, res) => {
  const result = await axios.get("https://opentdb.com/api.php?amount=10");

  quizzes.find((err, data) => {
    res.json(data);
  });
};

const createQuizFromApi = async (req, res) => {
  const result = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
  );
  const quiz = {};

  quiz.createrName = "Admin";
  quiz.title = "easy film quiz";
  quiz.category = "film";
  quiz.questions = [];

  result.data.results.map((item, index) => {
    const newObj = {};
    // console.log(item.question);
    newObj.question = item.question;
    newObj.answers = [...item.incorrect_answers, item.correct_answer];
    newObj.correctAnswer = item.correct_answer;

    quiz.questions.push(newObj);
  });

  const newQuiz = new quizzes(quiz);

  newQuiz.save();

  console.log(quiz.questions);
  res.json(quiz);
};

const getQuizById = (req, res) => {
  const { id } = req.params;
  quizzes.findById(id, (err, quiz) => {
    res.json(quiz);
  });
};

module.exports = { getAllQuizzes, createQuizFromApi, getQuizById };
