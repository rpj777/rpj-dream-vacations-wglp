import { ShipIcon, HotelIcon, FanIcon as FamilyIcon, HeartIcon, CompassIcon, MapPinIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-800">
            Our Specialized Travel Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Whether you dream of a relaxing cruise, an adventurous expedition, or a perfect family getaway, we have you
            covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <ShipIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Cruises</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Explore the world's oceans with luxurious cruise lines, tailored to your preferences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <HotelIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">All-Inclusive Resorts</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Enjoy hassle-free vacations with everything included, from dining to activities.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <FamilyIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Family Vacations</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Create unforgettable memories with custom-designed trips for the whole family.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <ShipIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">European Cruises</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Discover the charm of Europe from the comfort of a luxury cruise. Explore historic cities, stunning
                coastlines, and vibrant cultures with expertly curated itineraries.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <HeartIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Destination Wedding Packages</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Say "I do" in paradise! We specialize in creating magical destination wedding experiences, handling
                every detail from venues to guest travel.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <HeartIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Honeymoons & Romance</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Perfect romantic getaways and honeymoons to celebrate your special moments.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <CompassIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Adventure Travel</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Thrill-seeking expeditions, from safaris to mountain treks, designed for the adventurous spirit.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center p-6">
              <MapPinIcon className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-blue-700">Custom Itineraries</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-gray-600">
                Fully customized travel plans to any destination, built around your unique desires.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
