const express = require('express')
const { signUp, verifyOtp, reSendOtp } = require('../controllers/authController')
const route = express.Router()


route.post('/signUp' , signUp)
route.post('/verifyOtp' , verifyOtp)
route.post('/reSendOtp' , reSendOtp)


module.exports = route