const express = require('express');
const multer = require ('multer');
const upload = multer();
const { signUp, verifyOtp, reSendOtp, signIn, getProfile } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');
const route = express.Router()


route.post('/signUp' , signUp)
route.post('/verifyOtp' , verifyOtp)
route.post('/reSendOtp' , reSendOtp)
route.post('/signIn' , signIn) 
route.get('/getProfile',authMiddleware,  upload.single('avatar'), getProfile) 


module.exports = route