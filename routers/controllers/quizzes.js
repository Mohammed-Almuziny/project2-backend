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
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
  );
  const quiz = {};

  quiz.createrName = "Admin";
  quiz.title = "easy music quiz";
  quiz.category = "music";
  quiz.questions = [];

  result.data.results.map((item, index) => {
    const newObj = {};
    // console.log(item.question);
    newObj.question = item.question;
    newObj.answers = [...item.incorrect_answers, item.correct_answer];
    newObj.correctAnswer = item.correct_answer;

    quiz.questions.push(newObj);
  });

  quiz.totalQuestions = quiz.questions.length;
  const newQuiz = new quizzes(quiz);

  newQuiz.save();

  console.log(quiz.questions.length);
  res.json(quiz);
};

const getQuizById = (req, res) => {
  const { id } = req.params;
  quizzes.findById(id, (err, quiz) => {
    res.json(quiz);
  });
};

const createQuiz = (req, res) => {
  try {
    const newQuiz = new quizzes(req.body);

    newQuiz.save();
    res.status(200).json(newQuiz);
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

module.exports = { getAllQuizzes, createQuizFromApi, getQuizById, createQuiz };
