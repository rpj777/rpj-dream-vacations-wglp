import type * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  phone?: string
  preferredTrip?: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  preferredTrip,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
    <h1 style={{ color: "#0056b3" }}>New Dream Vacations Inquiry!</h1>
    <p>You have received a new contact form submission from your website.</p>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    {phone && (
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    )}
    {preferredTrip && (
      <p>
        <strong>Preferred Trip:</strong> {preferredTrip}
      </p>
    )}
    <p>
      <strong>Message:</strong>
    </p>
    <p style={{ border: "1px solid #eee", padding: "10px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      {message}
    </p>
    <p>Thank you,</p>
    <p>Dream Vacations Website</p>
  </div>
)
