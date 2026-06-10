const crypto = require("crypto");
const jwt = require("jsonwebtoken");


// --------email regex 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 


  // --------- Generate a random 4-digit OTP

const generateOTP = () => {
  return crypto.randomInt(1000, 10000).toString();
};




module.exports = {isValidEmail , generateOTP}