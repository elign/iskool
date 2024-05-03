const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyToken = (req, res, next) => {
  if (req.cookies) {
    try {
      jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET,
        function (err, decode) {
          if (err) {
            req.user = undefined;
            next();
          }

          User.findOne({
            _id: decode?.id,
          })
            .then((user) => {
              req.user = user;
              next();
            })
            .catch((err) => {
              req.user = undefined;
              next();
            });
        }
      );
    } catch (err) {
    }
  } else {
    req.user = undefined;
    next();
  }
};

module.exports = {
  verifyToken,
};