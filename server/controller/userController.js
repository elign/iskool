const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const signUpUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      role,
      password: bcrypt.hashSync(password, 4),
    });
    res.status(200).json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(422).json("User could not be created.");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passwordIsValid = bcrypt.compareSync(password, userDoc.password);

    if (passwordIsValid) {
      jwt.sign(
        { id: userDoc._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            return res.status(500).json("Internal Server Error");
          }
          res.cookie("token", token).json({ message: "Login Successful" });
        }
      );
    } else {
      res.status(401).json({
        accessToken: null,
        message: "Invalid Password",
      });
    }
  } else {
    res.status(404).json("User not found");
  }
};

const getUserProfile = (req, res) => {
  if (!req.user) {
    return res.status(200).json("User Not Logged In!");
  }
  const { name, email, _id } = req.user;
  res.status(200).json({ name, email, _id });
};

const logOutUser = (req, res) => {
  res.cookie("token", "").json(true);
};

module.exports = {
  signUpUser,
  loginUser,
  getUserProfile,
  logOutUser,
};