"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquareIcon, SendIcon, XIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm Richard Johnson from Dream Vacations by Richard Johnson & Travel Advisors Group. How can I help you plan your perfect getaway today? I specialize in European Cruises and Destination Wedding Packages!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsLoading(true)

    try {
      const history = [...messages, userMsg].slice(-10).map((m) => ({ role: m.role, content: m.content }))
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: trimmed, history }),
      })

      if (!res.ok) {
        throw new Error(`Chat request failed: ${res.status}`)
      }

      const data = (await res.json()) as { reply?: string; error?: string }
      const reply = data.reply ?? "Sorry, I ran into an issue. Please try again."
      const botMsg: ChatMessage = { id: crypto.randomUUID(), role: "assistant", content: reply }
      setMessages((prev) => [...prev, botMsg])
    } catch (err) {
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Apologies—something went wrong. Please try again in a moment.",
      }
      setMessages((prev) => [...prev, botMsg])
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg bg-blue-600 hover:bg-blue-700 text-white z-50"
          size="icon"
          aria-label="Open chatbot"
        >
          <MessageSquareIcon className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[calc(100%-2rem)] max-w-sm sm:max-w-md h-[450px] sm:h-[500px] flex flex-col shadow-2xl rounded-lg z-50 bg-white border border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-lg font-semibold">Dream Vacations Chat</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700"
              aria-label="Close chatbot"
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-start gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {m.role === "assistant" && (
                      <Avatar className="w-8 h-8 border">
                        <AvatarFallback className="bg-blue-500 text-white">RJ</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-lg ${
                        m.role === "user"
                          ? "bg-blue-100 text-blue-900 rounded-br-none"
                          : "bg-gray-100 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{m.content}</p>
                    </div>
                    {m.role === "user" && (
                      <Avatar className="w-8 h-8 border">
                        <AvatarFallback className="bg-gray-300 text-gray-800">You</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t bg-gray-50">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
                disabled={isLoading}
                aria-label="Chat message"
              />
              <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
                <SendIcon className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
