import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-blue-800">
            From Our Travel Blog
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Insights and inspiration from Richard Johnson & Travel Advisors Group.
          </p>
        </div>

        <Card className="overflow-hidden border-blue-100 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-56 md:h-full">
              <Image
                src="/images/blog/culinary-2025-hero.png"
                alt="Chef-led culinary travel experience with wine tasting at sunset"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <CardHeader className="p-6 pb-2 text-left">
                <Badge className="w-fit bg-blue-600 hover:bg-blue-700">Blog</Badge>
                <CardTitle className="mt-3 text-2xl md:text-3xl text-blue-800">
                  Culinary Adventures – Luxury Food Travel Trends 2025
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Food is becoming a primary travel motivator. Discover the top culinary travel trends—from
                  Michelin‑starred experiences to wine festivals—and learn how to plan a delicious trip.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-2 text-left">
                <div className="text-gray-700 space-y-3">
                  <p className="line-clamp-4">
                    Savor the World – Culinary Travel Takes Center Stage. Travelers are looking beyond restaurants to
                    fully immersive food adventures, from foraging in forests to cooking alongside experienced local
                    chefs. Explore chef‑led tours, wine & truffle festivals, and farm‑to‑table retreats—then let us plan
                    your perfect culinary escape.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-blue-700 bg-blue-50">luxury culinary travel 2025</Badge>
                    <Badge variant="secondary" className="text-blue-700 bg-blue-50">food tourism trends</Badge>
                    <Badge variant="secondary" className="text-blue-700 bg-blue-50">chef‑led tours</Badge>
                    <Badge variant="secondary" className="text-blue-700 bg-blue-50">wine tasting vacations</Badge>
                  </div>
                  <div className="pt-2">
                    <Link href="/blog/culinary-adventures-2025">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Read the full post</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
