"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTrip: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Submitting...")
    // In a real application, you would send this data to a backend API or Server Action.
    // For this example, we'll simulate a successful submission.
    console.log("Form Data Submitted:", formData)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network request
    setStatus("Thank you for your inquiry! Richard will be in touch shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTrip: "",
    })
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-white to-blue-50">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-800">
            Ready to Plan Your Dream Vacation?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Contact Richard Johnson today for a personalized consultation. Let's make your travel dreams a reality!
          </p>
        </div>
        <Card className="w-full max-w-lg shadow-xl border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-700">Get a Free Quote</CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the form below and Richard will contact you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="preferredTrip">Preferred Destination/Type of Trip</Label>
                <Input
                  id="preferredTrip"
                  placeholder="e.g., Caribbean Cruise, European Tour"
                  value={formData.preferredTrip}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dream vacation!"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                Submit Inquiry
              </Button>
            </form>
          </CardContent>
          {status && <CardFooter className="text-center text-sm text-blue-600 font-medium">{status}</CardFooter>}
        </Card>
      </div>
    </section>
  )
}
