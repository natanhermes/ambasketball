import { sendEmail } from '@/utils/sendMail';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await sendEmail({
      to: body.to,
      subject: body.subject,
      text: body.text,
    });
    if (!response.info?.response.includes('OK')) {
      throw new Error('E-mail não enviado!');
    }
    return new Response('OK');
  } catch (error: any) {
    throw new Error(error);
  }
}
