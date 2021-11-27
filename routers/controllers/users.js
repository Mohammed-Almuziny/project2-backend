const users = require("./../../db/models/users");
const quizzes = require("../../db/models/quizzes");

const signUp = (req, res) => {
  const user = new users(req.body);

  users.find((err, data) => {
    let key;
    data.find((elm) => {
      if (elm.userName === user.userName) {
        key = 1;
      }
      if (elm.email === user.email) {
        key = 2;
      }
    });

    switch (key) {
      case 1:
        res.status(403).json("user name already exists");
        break;

      case 2:
        res.status(403).json("email already exists");
        break;

      default:
        user
          .save()
          .then((result) => {
            res.status(200).json(user);
          })
          .catch((err) => {
            res.json(err);
          });

        break;
    }
  });
};

const logIn = (req, res) => {
  const { userNameOrEmail, password } = req.params;
  let userName = "";

  users.find((err, data) => {
    let key;

    data.forEach((elm) => {
      console.log(data);
      if (elm.userName === userNameOrEmail || elm.email === userNameOrEmail)
        if (elm.password === password) {
          key = 1;
          userName = elm.userName;
        } else key = 2;
    });

    console.log(key);
    switch (key) {
      case 1:
        res.status(200).json(userName);
        break;

      case 2:
        res.status(403).json("wrnog password");
        break;

      default:
        res.status(403).json("this user name or email dose not existing");
        break;
    }
  });
};

const saveResult = (req, res) => {
  const { userName, quizId, quizTitle, totalQuestions, score } = req.body;

  users
    .findOneAndUpdate(
      { userName },
      { $push: { history: { quizId, quizTitle, totalQuestions, score } } }
    )
    .exec();

  res.json("results saved");
};

const getHistory = (req, res) => {
  const { userName } = req.params;

  users.findOne({ userName }, (err, data) => {
    res.json(data.history);
  });
};

const changePassword = async (req, res) => {
  const { userName, newPassword } = req.body;

  users.findOneAndUpdate(
    { userName },
    { password: newPassword },
    (err, data) => {
      if (err) res.json(err);
      else res.json(data);
    }
  );
};

const getUserCreations = (req, res) => {
  const { userName } = req.params;

  quizzes.find({ createrName: userName }, (err, data) => {
    if (!err) res.json(data);
    else res.json(err);
  });
};

module.exports = {
  signUp,
  logIn,
  saveResult,
  getHistory,
  changePassword,
  getUserCreations,
};
