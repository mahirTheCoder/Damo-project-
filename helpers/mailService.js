const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailSender = async ({ email, subject, otp }) => {
  try {
    await transporter.sendMail({
      from: '"Example Team" <team@example.com>',
      to: email,
      subject,
      html: "<b>Hello world?</b>",
    });
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};
