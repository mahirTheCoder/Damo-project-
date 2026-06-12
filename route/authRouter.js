const express = require("express");
const multer = require("multer");
const upload = multer();
const {
  signUp,
  verifyOtp,
  reSendOtp,
  signIn,
  getProfile,
  updateProfile,
} = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");
const route = express.Router();

route.post("/signUp", signUp);
route.post("/verifyOtp", verifyOtp);
route.post("/reSendOtp", reSendOtp);
route.post("/signIn", signIn);
route.get("/getProfile", authMiddleware, getProfile);
route.put(
  "/updateProfile",
  authMiddleware,
  upload.single("avatar"),
  updateProfile,
);

module.exports = route;
