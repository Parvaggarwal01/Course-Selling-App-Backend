const express = require('express');
const courseRouter = express.Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "Purchase Endpoint"
  })
})

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "Courses Endpoint"
  })
})

module.exports = {
  courseRouter: courseRouter,
}