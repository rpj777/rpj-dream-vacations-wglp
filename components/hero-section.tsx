import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Your Dream Vacation Starts Here
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl font-medium drop-shadow-md">
          Richard Johnson: Your Expert Travel Agent in Winter Garden, FL, crafting personalized, unforgettable journeys.
        </p>
        <Link href="#contact">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Plan Your Trip Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
