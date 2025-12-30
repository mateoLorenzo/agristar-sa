import { render } from "@react-email/components";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/index";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, lastName, email, phone, area, message } = await request.json();
  const { data, error } = await resend.emails.send({
    from: "Landing Page <onboarding@resend.dev>",
    // to: "info@agristar.com",
    to: "agristarsa@gmail.com",
    subject: "Nueva consulta de contacto",
    html: await render(
      ContactFormEmail({
        name,
        lastName,
        email,
        phone,
        area,
        message,
      })
    ),
  });
  if (error) {
    return Response.json({ error: error.message });
  }
  return Response.json({ data });
}
