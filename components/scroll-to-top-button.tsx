"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled beyond a certain point
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {" "}
      {/* Position above chatbot */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full p-4 shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
