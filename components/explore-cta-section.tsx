import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Import Image component

export function ExploreCtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
      <div className="container mx-auto px-4 md:px-6 space-y-6 flex flex-col items-center">
        <Image
          src="/rj-headshot-2.jpg"
          alt="Richard Johnson, Travel Advisor"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg mb-4"
        />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
          Explore Dream Vacations with Richard Johnson & Travel Advisors Group
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl drop-shadow-sm">
          Ready to turn your travel dreams into reality? Richard and his team are dedicated to crafting personalized,
          unforgettable journeys. With expert knowledge and a passion for exploration, we ensure every detail is
          perfect. Click below to visit our agent page and start planning your next adventure!
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
