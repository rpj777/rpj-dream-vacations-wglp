import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/tropical-beach-paradise.png"
        alt="Tropical beach with clear blue water and palm trees"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 px-4 md:px-6 space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Your Dream Vacation Starts Here
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-2xl font-medium drop-shadow-md">
          Richard Johnson Travel Advisors Group: Your Expert Travel Agent in Winter Garden, FL, crafting personalized,
          unforgettable journeys.
        </p>
        <Link href="#contact">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-2 md:text-lg md:px-8 md:py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Plan Your Trip Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
