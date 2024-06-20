import { Resend } from "resend";

import { FormData } from "@/types/formData";
import { ContactEmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { user_name, user_email, message }: FormData = await request.json();

    const { data, error } = await resend.emails.send({
      from: "contact@resend.dev",
      to: "bentoki.1213@gmail.com",
      subject: `Contact from ${user_name}`,
      html: "",
      react: ContactEmailTemplate({
        user_name: user_name,
        user_email: user_email,
        message: message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
    console.log("success");
    console.log(data);
    return Response.json({ ...data, success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
