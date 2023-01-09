import { Transporter, createTransport } from 'nodemailer';

const mailService: Transporter = createTransport({
  service: 'outlook',
  auth: {
    user: process.env.MAIL,
    pass: process.env.DB_PASSWORD,
  },

  tls: {
    ciphers: 'SSLv3',
  },
});
export const welcomeMail = (
  clientMail: string,
  firstName: string,
  lastName: string
) => {
  mailService.sendMail({
    from: process.env.MAIL,
    to: clientMail,
    subject: 'Welcome to Our Car Service Site!',
    html: `
    <h1>Congratulations ${
      firstName + ' ' + lastName
    }! your account has been created successfully!</h1>
    <p>Thank you for choosing our car service site to take care of all of your vehicle needs. We're excited to have you on board and can't wait to get started.</p>
    <p>Here's a quick overview of what you can expect:</p>
    <ul>
      <li>Expert, professional service from our team of certified technicians</li>
      <li>Competitive pricing on all of our services and parts</li>
      <li>Convenient appointment scheduling and pick-up/drop-off options</li>
      <li>Transparent communication throughout the repair process</li>
    </ul>
    <p>Thank you again for your business. If you have any questions or concerns, don't hesitate to reach out to us at any time.</p>
    <p>Best regards,</p>
    <p>The Car Service Site Team</p>
  `,
  });
};

export const sendPasswordResetEmail = (clientMail: string, token: string) => {
  mailService.sendMail({
    from: process.env.MAIL,
    to: clientMail,
    subject: 'Password Reset Request',
    html: `
    
    <p> We received a request to reset the password for your account. If you made this request, 
    please follow the instructions below to reset your password.</p>
    <p>Here's a quick overview of what you can expect:</p>
    <ul>
      <li>Click on the following link to access the password reset page: https://car-service-nine.vercel.app//reset-password/${token}</li>
      <li>Enter your email address and the new password you would like to use.</li>
      <li>Click "Reset Password" to complete the process.</li>
    </ul>
    <p>If you did not request a password reset, please ignore this email and your password will remain unchanged.</p>
    <p>Thank you,</p>
    <p>The Car Service Site Team</p>
  `,
  });
};