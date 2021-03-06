const mongoose = require("mongoose");

const accountsModel = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  history: [
    {
      quizId: { type: String },
      quizTitle: { type: String },
      score: { type: Number },
      totalQuestions: { type: Number },
    },
    {
      timestamps: true,
    },
  ],
});

module.exports = mongoose.model("Accounts", accountsModel);
