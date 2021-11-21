const users = require("./../../db/models/users");

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

module.exports = { signUp };
