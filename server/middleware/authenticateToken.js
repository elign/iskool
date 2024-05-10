const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer <token>' format

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden (invalid token)' });
    }

    req.user = user; // Store decoded user data for access in profile route
    next();
  });
}
module.exports = {
  authenticateToken,
};