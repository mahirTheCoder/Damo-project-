const express = require('express')
const { signUp, verifyOtp } = require('../controllers/authController')
const route = express.Router()


route.post('/signUp' , signUp)
route.post('/verifyOtp' , verifyOtp)


module.exports = route