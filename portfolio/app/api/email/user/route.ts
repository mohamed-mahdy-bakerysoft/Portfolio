import { Resend } from "resend";

import { FormData } from "@/types/formData";
import { ReplyEmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { user_name, user_email, message }: FormData = await request.json();

    const { data, error } = await resend.emails.send({
      from: "benono@resend.dev",
      to: user_email,
      subject: "Your request has been received.",
      html: "",
      react: ReplyEmailTemplate({
        user_name: user_name,
        user_email: user_email,
        message: message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ ...data, success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
