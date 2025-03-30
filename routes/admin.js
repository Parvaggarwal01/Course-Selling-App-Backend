const express = require('express');
const adminRouter = express.Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const bcrypt = require("bcrypt");
const { adminMiddleware } = require('../middleware/admin');

adminRouter.post("/signup", async(req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    console.log("Error while putting in the DB");
    res.status(500).json({
      message: "Admin already exists",
    });
  }

  res.json({
    message: "Signup Succeeded",
  });
});

adminRouter.post("/login", async(req, res) => {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
  });

  if (!admin) {
    re.status(403).json({
      message: "Admin does not exist",
    });
    return;
  }

  const passwordmatch = await bcrypt.compare(password, admin.password);
  if (passwordmatch) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
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

adminRouter.post("/course",adminMiddleware, async(req, res) => {
  const adminId = req.userId

  const { title, description, imageUrl, price } = req.body;
  await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId
  })
  res.json({
    message: "Course Created",
    courseId: course_id
  })
})

adminRouter.put("/course", (req, res) => {
  

  res.json({
    message: "Course Endpoint",
  })
})

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Course Endpoint",
  })
})

module.exports = {
  adminRouter: adminRouter,
}