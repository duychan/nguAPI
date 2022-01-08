const { admin, director } = require("../config/config");

const mid = (role) => {
  switch (role) {
    case "director":
      role = director;
      break;
    case "admin":
      role = admin;
    default:
      break;
  }
  return (req, res, next) => {
    if (
      staff?.username === role?.username &&
      staff?.password === role?.password
    ) {
      next();
    } else {
      res.send("you are not admin");
    }
  };
};

module.exports = { mid };
