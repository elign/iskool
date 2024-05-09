const router = require("express").Router();
const { verifyToken } = require("../middlewares/verifyToken");
const {
  signUpUser,
  loginUser,
  getUserProfile,
  logOutUser,
} = require("../controllers/userController");

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserProfile);
router.post("/logout", logOutUser);
module.exports = router;