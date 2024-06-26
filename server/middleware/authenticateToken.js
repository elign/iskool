const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

// This is a middleware function to authenticate all types of users
function authenticateToken(req, res, next) {
  if (req.headers.cookie) {
    try {
      const cookies = req.headers.cookie.split("; ");
      const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));

      if (tokenCookie) {
        const token = tokenCookie.split("=")[1];
        jwt.verify(token, process.env.JWT_SECRET, function (err, decode) {
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
        });
      } else {
        req.user = undefined;
        next();
      }
    } catch (err) {
      req.user = undefined;
      next();
    }
  } else {
    req.user = undefined;
    next();
  }
}
module.exports = {
  authenticateToken,
};
