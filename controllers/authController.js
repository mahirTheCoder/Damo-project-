const { generateOTP } = require("../helpers/utils");

const signIn = async (req, res) => {
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
    const existingUser = await userSchem.findOne({ email });
    if (existingUser)
      return res.status(400).send("User with this email already exists");

// --------------otp generate 
const otp = generateOTP();

// ----------data base save 
const user = await userSchem.create({
    fullname,
    email,
    password,
    otp,
    otpExpires: Date.now() + 2 * 60 * 1000
})




  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
