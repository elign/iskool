const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { validateEmail } = require("../utils/validateEmail");
const bcrypt = require("bcrypt");
const signUpUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Email validation and emptiness check
    if (email === "") {
      return res.status(400).json({ message: "Empty email address" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email address" });
    }
    // Password length check
    if (password.length !== 8) {
      return res
        .status(400)
        .json({ message: "Password must be 8 characters long" });
    }
    // Check for existing user with the same email

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create new user and hash password
    const newUser = await User.create({ email, role, password });

    // Create JWT payload with user ID and role
    const payload = { user_id: newUser.user_id, role: newUser.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {}); // Replace with your JWT secret
    res.cookie("token", token).json({ message: "Login Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare provided password with hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create JWT payload with user ID and role
    const payload = { user_id: user.user_id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {}); // Replace with your JWT secret
    res.cookie("token", token).json({ message: "Login Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUserProfile = (req, res) => {
  try {
    // Access user information from the request object after authentication
    const user = req.user;
    // Select specific user data to return (exclude sensitive information)
    const profile = {
      user_id: user?.user_id,
      email: user?.email,
      role: user?.role,
    };

    res.status(200).json({ profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logOutUser = (req, res) => {
  res.clearCookie("token").json(true);
};

module.exports = {
  signUpUser,
  loginUser,
  getUserProfile,
  logOutUser,
};
