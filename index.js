const express = require('express');
const app = express();

app.use(express.json())

app.post("/user/signup", (req, res) => {
  res.json({
    message: "Signup Endpoint"
  })
})

app.post("/user.login", (req, res) => {
  res.json({
    message: "Login Endpoint"
  })
})

app.get("/user/purchases", (req, res) => {
  res.json({
    message: "Purchases Endpoint"
  })
})

app.post("/course/purchase", (req, res) => {
  res.json({
    message: "Purchase Endpoint"
  })
})

app.get("/courses", (req, res) => {
  res.json({
    message: "Courses Endpoint"
  })
})



app.listen(3000);