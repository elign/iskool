const router = require("express").Router();
const { authenticateToken } = require("../middleware/authenticateToken");
const {
  signUpUser,
  loginUser,
  getUserProfile,
  logOutUser,
} = require("../controller/user.controller");

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.get("/profile", authenticateToken, getUserProfile);
router.post("/logout", logOutUser);
module.exports = router;