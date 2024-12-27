const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For securely handling sensitive information

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service (Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Endpoint to handle email submission
app.post('/send-email', (req, res) => {
  const { name, email, interest } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER, // Recipient's email address
    subject: 'Leasing Inquiry from The District',
    text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
    res.status(200).json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
