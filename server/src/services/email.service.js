//server\src\services\email.service.js
 import nodemailer from "nodemailer";

 console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", !!process.env.EMAIL_PASS);

export async function sendEmail({ to, subject, text }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      
    },
    
  });
  

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
}