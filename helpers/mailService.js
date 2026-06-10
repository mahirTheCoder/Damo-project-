const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "mahirthecoder.bd@gmail.com",
    pass: "acgg rmko tyze jshm",
  },
});

const mailSender = async ({ email, subject, otp }) => {
  try {
    await transporter.sendMail({
      from: '" Damo project Team" <team@example.com>',
      to: email,
      subject,
      html: "<b>Hello world?</b>",
    });
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};
