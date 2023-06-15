import nodemailer from 'nodemailer';

interface SendMailProps {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({to, subject, text}: SendMailProps) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      html: text,
    };

    const info = await transporter.sendMail(mailOptions);
    return {
      kind: "ok",
      info,
    };
  } catch (error) {
    return {
      kind: "error",
      error,
    };
  }
};