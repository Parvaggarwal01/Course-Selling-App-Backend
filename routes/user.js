const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    console.log("Error while putting in the DB");
    res.status(500).json({
      message: "User already exists",
    });
  }

  res.json({
    message: "Signup Succeeded",
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    re.status(403).json({
      message: "User does not exist",
    });
    return;
  }

  const passwordmatch = await bcrypt.compare(password, user.password);
  if (passwordmatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.json({
      message: "Login Succeeded",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Purchases Endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
