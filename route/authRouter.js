const express = require('express')
const { signUp, verifyOtp, reSendOtp, signIn } = require('../controllers/authController')
const route = express.Router()


route.post('/signUp' , signUp)
route.post('/verifyOtp' , verifyOtp)
route.post('/reSendOtp' , reSendOtp)
route.post('/signIn' , signIn) 


module.exports = route