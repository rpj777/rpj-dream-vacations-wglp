import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import type * as React from "react"

// Ensure RESEND_API_KEY is available during build and runtime
const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not set in environment variables.")
}

const resend = new Resend(resendApiKey)

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, phone, preferredTrip, message } = formData

    const { data, error } = await resend.emails.send({
      from: "Dream Vacations Contact <onboarding@resend.dev>", // IMPORTANT: Replace with your verified Resend domain email
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
