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
            Discover exclusive travel experiences curated just for you by Richard Johnson & Travel Advisors Group. These
            are not just vacations; they are journeys designed to create lifelong memories.
          </p>
        </div>

        {/* River Cruises Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">
            Unforgettable River Cruises: Europe's Hidden Gems Await
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-8">
            Imagine unpacking once and waking up to a new, breathtaking view every day. River cruises offer an intimate,
            immersive journey through Europe's most iconic waterways, combining cultural exploration with unparalleled
            relaxation. Experience charming villages, historic cities, and stunning landscapes from the comfort of your
            luxurious floating hotel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/amawaterways-rhine-castles-vineyards.png"
                alt="AmaWaterways River Cruise on the Rhine"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">AmaWaterways: Enchanting Rhine</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Embark on a fairytale journey along the legendary Rhine River with AmaWaterways. Sail through Germany,
                  France, and Switzerland, past medieval castles, charming vineyards, and picturesque villages. Enjoy
                  exquisite gourmet dining, included excursions, and personalized service on a ship designed for your
                  ultimate comfort. This is more than a cruise; it's an immersive cultural tapestry waiting to be
                  unraveled.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Your Rhine Adventure</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/uniworld-river-cruise.png"
                alt="Uniworld River Cruise on the Rhine"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Uniworld: Castles Along the Rhine</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Step into a world of unparalleled luxury with Uniworld's "Castles Along the Rhine." This all-inclusive
                  boutique river cruise offers a truly opulent experience, from sumptuously appointed staterooms to
                  Michelin-inspired cuisine. Discover the romance of the Rhine as you glide past ancient fortresses and
                  charming towns, with unique, immersive excursions designed to bring each destination to life. Prepare
                  for an unforgettable journey where every detail is perfected.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Experience Uniworld Luxury
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/viking-longship-budapest-amsterdam.png"
                alt="Viking Grand European Tour"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-blue-700">Viking: Grand European Tour</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <CardDescription className="text-gray-600 text-sm">
                  Embark on Viking's most iconic river journey, the "Grand European Tour," from Budapest to Amsterdam.
                  This epic 15-day voyage connects the Danube, Main, and Rhine rivers, allowing you to discover 15
                  cities in 8 countries. With included excursions, cultural enrichment, and the comfort of a Viking
                  Longship, you'll explore magnificent capitals, charming villages, and stunning natural beauty. This is
                  the definitive European river experience.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Discover Europe with Viking
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Luxury Ocean Cruise Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">
            Exquisite Luxury Ocean Cruises: Sail the World in Style
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-8">
            For those who dream of vast horizons and unparalleled elegance, our luxury ocean cruises offer an escape
            like no other. Experience world-class service, gourmet dining, and exclusive itineraries to the most
            desirable destinations across the globe, all while enjoying the spacious comfort of a premium vessel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/luxury-caribbean-cruise.png"
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
                  Indulge in unparalleled luxury across the turquoise waters of the Caribbean. Discover secluded
                  beaches, vibrant cultures, and exquisite onboard amenities. From private island escapes to vibrant
                  port cities, every moment is crafted for relaxation and adventure. Let the gentle sea breeze and
                  stunning sunsets define your perfect tropical getaway.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore Caribbean Luxury</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/alaskan-cruise.png"
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
                  Discover the majestic beauty of Alaska on an all-inclusive luxury cruise. Witness stunning glaciers,
                  abundant wildlife, and breathtaking landscapes from your elegant ship. Experience the thrill of
                  glacier calving, spot whales breaching, and explore charming frontier towns. This expedition offers a
                  unique blend of rugged wilderness and refined comfort, creating memories that will last a lifetime.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href="#contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Journey to Alaskan Wonders
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Luxury Resorts Section */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-700 mb-8">
            Luxury Resorts: Sandals All-Inclusive Resorts - Romance Redefined
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-8">
            Indulge in the ultimate romantic escape at Sandals Resorts, where everything is included for couples in
            love. From gourmet dining and unlimited premium liquors to endless land and water sports, Sandals offers a
            seamless, worry-free luxury experience in the Caribbean's most stunning locations. This is where love is
            celebrated, and every moment is designed for two.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
              <Image
                src="/sandals-bungalow-couple-pool.png"
                alt="Sandals Resort"
                width={400}
                height={250}
                className="w-full md:w-2/5 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
              <div className="flex flex-col flex-grow">
                <CardHeader className="p-4 pb-2 text-left">
                  <CardTitle className="text-lg font-semibold text-blue-700">
                    Your Dream Sandals All-Inclusive Getaway
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow text-left">
                  <CardDescription className="text-gray-600 text-sm">
                    Sandals Resorts redefine luxury with their "Luxury Included" concept. Imagine unlimited gourmet
                    dining at up to 16 specialty restaurants, unlimited premium spirits, and a vast array of land and
                    water sports, including PADI-certified scuba diving and golf, all included. From breathtaking
                    over-the-water bungalows to stunning beachfront suites, every detail is meticulously crafted for
                    romance and relaxation. Let Richard Johnson & Travel Advisors Group help you find your perfect
                    Sandals paradise in Jamaica, St. Lucia, Bahamas, or beyond, and start your unforgettable romantic
                    journey today!
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href="#contact" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Plan Your Romantic Escape
                    </Button>
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
