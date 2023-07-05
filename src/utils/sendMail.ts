import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
}

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground',
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    //@ts-ignore
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};

export const sendEmail = async (sendEmailOptions: SendMailOptions) => {
  try {
    let emailTransporter = await createTransporter();
    const info = await emailTransporter.sendMail({
      ...sendEmailOptions,
      from: process.env.EMAIL,
    });
    return {
      kind: 'ok',
      info,
    };
  } catch (error) {
    return {
      kind: 'error',
      error,
    };
  }
};
