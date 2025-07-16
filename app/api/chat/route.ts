import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export const runtime = "edge" // Use edge runtime for faster responses

export async function POST(req: Request) {
  const { messages } = await req.json()

  // The openai() function automatically uses the OPENAI_KEY environment variable.
  const result = await streamText({
    model: openai("gpt-4o"), // Using gpt-4o as a powerful general model
    messages,
    system: `You are Richard Johnson from Dream Vacations by Richard Johnson & Travel Advisors Group, a friendly and knowledgeable travel agent based in Winter Garden, FL. Your goal is to help customers plan their dream vacations, provide personalized recommendations, answer travel inquiries, and guide them towards booking. Be enthusiastic and helpful. When asked about booking, direct them to fill out the contact form on the page or provide your contact details. Emphasize your expertise in European Cruises and Destination Wedding Packages.`,
  })

  return result.toDataStreamResponse()
}
