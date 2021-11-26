const mongoose = require("mongoose");

const quizzesModel = new mongoose.Schema({
  createrName: { type: "string", required: true },
  title: { type: "string", required: true, unique: true },
  category: { type: "string", required: true },
  questions: [
    {
      question: { type: String },
      answers: [{ type: String }],
      correctAnswer: { type: String },
    },
  ],
  totalQuestions: { type: "number", required: true },
});

module.exports = mongoose.model("quizzes", quizzesModel);
