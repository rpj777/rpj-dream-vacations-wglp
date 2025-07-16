import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ExploreCtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
      <div className="container px-4 md:px-6 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
          Explore Dream Vacations with Richard Johnson & Travel Advisors Group
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl drop-shadow-sm">
          Ready to turn your travel dreams into reality? Richard and his team are dedicated to crafting personalized,
          unforgettable journeys. Click below to visit our agent page and start planning your next adventure!
        </p>
        <Link
          href="https://travelagents.dreamvacations.com/agents/agent/166212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Visit Our Agent Page
          </Button>
        </Link>
      </div>
    </section>
  )
}
