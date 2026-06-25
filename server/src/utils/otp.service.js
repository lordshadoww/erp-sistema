//server\src\utils\otp.service.js
export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}