const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "Signup Endpoint",
  });
});

userRouter.post("/login", (req, res) => {
  res.json({
    message: "Login Endpoint",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Purchases Endpoint",
  });
});

module.exports = {
  userRouter: userRouter
};
