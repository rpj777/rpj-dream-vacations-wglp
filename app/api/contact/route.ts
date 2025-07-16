import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import type * as React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, phone, preferredTrip, message } = formData

    const { data, error } = await resend.emails.send({
      from: "Dream Vacations Contact <onboarding@resend.dev>", // Replace with your verified Resend domain
      to: ["rpjohnson@dreamvacations.com"], // Recipient email address
      subject: `New Inquiry from Dream Vacations Website: ${name}`,
      react: EmailTemplate({ name, email, phone, preferredTrip, message }) as React.ReactElement,
    })

    if (error) {
      console.error("Resend email error:", error)
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ message: "Email sent successfully!", data }, { status: 200 })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
