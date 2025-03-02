const express = require('express');
const adminRouter = express.Router();
const {adminModel} = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "Signup Endpoint",
  });
});
 
adminRouter.post("/login", (req, res) => {
  res.json({
    message: "Login Endpoint",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Course Endpoint",
  })
})

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "Course Endpoint",
  })
})

adminRouter.get("/course", (req, res) => {
  res.json({
    message: "Course Endpoint",
  })
})

module.exports = {
  adminRouter: adminRouter,
}