const axios = require("axios");

const getAllQuizzes = async (req, res) => {
  const result = await axios.get("https://opentdb.com/api.php?amount=10");

  res.json(result.data.results);
};

module.exports = { getAllQuizzes };
