const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

function authenticateAdminToken(req, res, next) {
  if (req.headers.cookie) {
    try {
      const cookies = req.headers.cookie.split("; ");
      const tokenCookie = cookies.find((cookie) => cookie.startsWith("token="));

      if (tokenCookie) {
        const token = tokenCookie.split("=")[1];
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
          if (err) {
            req.user = undefined;
            next();
          }

          User.findOne({
            _id: decoded?.id,
          })
            .then((user) => {
              if (user && user.role === "admin") {
                req.user = user;
                next();
              } else {
                // Unauthorized access - not teacher or admin
                res.status(401).json({
                  message: "Unauthorized access! Admin role required.",
                });
              }
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
  authenticateAdminToken,
};
