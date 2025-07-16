import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-8 md:py-16 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-blue-800">
              About Richard Johnson Travel Advisors Group
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Welcome to Dream Vacations by Richard Johnson Travel Advisors Group, your dedicated travel partner based
              right here in Winter Garden, FL. With years of experience and a passion for exploration, we specialize in
              transforming your travel dreams into seamless realities. From serene beach getaways to thrilling adventure
              tours, we handle every detail, ensuring a stress-free and memorable experience.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our commitment is to provide personalized service, understanding your unique preferences to curate the
              perfect itinerary. As local Winter Garden travel agents, we pride ourselves on building lasting
              relationships and offering expert advice tailored to your needs. Let's embark on your next adventure
              together!
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/beach-reader.png"
              alt="Richard Johnson relaxing on a beach"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
