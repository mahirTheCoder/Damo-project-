const signIn = (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname) return res.status(400).send("Fullname is required");
    if (!email) return res.status(400).send("Email is required");
    if (!isValidEmail(email)) return res.status(400).send("Invalid email");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
};
