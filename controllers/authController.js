const { mailSender } = require("../helpers/mailService");
const { generateOTP, isValidEmail } = require("../helpers/utils");
const userSchema = require("../models/userSchema");

const signUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname) return res.status(400).send("Fullname is required");
    if (!email) return res.status(400).send("Email is required");
    if (!isValidEmail(email)) return res.status(400).send("Invalid email");
    if (!password || password.length < 6)
      return res
        .status(400)
        .send("Password is required and must be at least 6 characters long");


    // --------existing user
    const existingUser = await userSchema.findOne({ email });
    if (existingUser)
      return res.status(400).send("User with this email already exists");

    // --------------otp generate
    const otp = generateOTP();


    // ----------data base save
    const user = await userSchema.create({
      fullname,
      email,
      password,
      otp,
      otpExpires: Date.now() + 2 * 60 * 1000,
    });


    // ---------send otp to user mail
    await mailSender({
      email,
      subject: "Otp Verifications ",
      otp,
    });
    res.status(200).send('SignUp Successfully')
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};


module.exports = {signUp}