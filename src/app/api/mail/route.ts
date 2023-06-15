import { sendEmail } from '@/utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

export async function POST(req: Request) {
  const body = await req.json();

  const response = await sendEmail({ 
     to: body.to,
     subject: body.subject,
     text: body.text,
   });
  console.log(body, response);

  return new Response('OK');

  

  //  if(response.kind === "ok") {
  //    return res.status(200).json(response.info);
  //  }

  //  return res.status(500).json({ message: "Erro interno! Entre em contato com o suporte." })
}
