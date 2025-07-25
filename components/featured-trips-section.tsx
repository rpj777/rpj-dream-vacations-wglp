import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedTripsSection() {
  return (
    <section id="featured-trips" className="w-full py-8 md:py-16 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-blue-800">
            Our Handpicked Featured Trips
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700">
            Discover exclusive travel experiences curated just for you by Richard Johnson & Travel Advisors Group.
          </p>
        </div>

        {/* River Cruises Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">River Cruises</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="European River Cruise"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Danube River Discovery</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Explore charming villages and historic cities along the beautiful Danube River.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Nile River Cruise"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Mysteries of the Nile</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Uncover ancient wonders on a luxurious journey down the legendary Nile River.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Mekong River Cruise"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Southeast Asian Serenity</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Experience the vibrant cultures and stunning landscapes of the Mekong River.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Luxury Cruise Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">
            Luxury Ocean Cruises
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Caribbean Luxury Cruise"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Caribbean Grand Voyage</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Indulge in unparalleled luxury across the turquoise waters of the Caribbean.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Alaskan Luxury Cruise"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Alaskan Wilderness Expedition</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Discover the majestic beauty of Alaska on an all-inclusive luxury cruise.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Luxury Resorts Section */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">
            Luxury Resorts: Sandals Resorts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Sandals Resort"
                width={400}
                height={250}
                className="w-full md:w-2/5 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
              <div className="flex flex-col flex-grow">
                <CardHeader className="p-4 pb-2 text-left">
                  <CardTitle className="text-lg font-semibold text-blue-700">
                    Unforgettable Sandals All-Inclusive
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow text-left">
                  <CardDescription className="text-gray-600 text-sm">
                    Experience the pinnacle of luxury and romance at Sandals Resorts. Perfect for couples, honeymoons,
                    and romantic getaways with unlimited gourmet dining, premium spirits, and endless activities.
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href="#contact" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
