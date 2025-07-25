import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { ExploreCtaSection } from "@/components/explore-cta-section"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { FeaturedTripsSection } from "@/components/featured-trips-section" // Import the new component

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Dream Vacations by Richard Johnson & Travel Advisors Group",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Winter Garden", // Specific address can be added if available
      addressLocality: "Winter Garden",
      addressRegion: "FL",
      postalCode: "34787", // Example postal code, replace with actual
      addressCountry: "US",
    },
    url: "https://your-domain.com", // Replace with actual domain
    telephone: "+1-407-555-1234", // Replace with actual phone number
    email: "richard@dreamvacations.com", // Replace with actual email
    description:
      "Your trusted travel agent in Winter Garden, FL. Richard Johnson & Travel Advisors Group specializes in crafting personalized dream vacations, European cruises, destination wedding packages, and all-inclusive getaways.",
    image: "https://your-domain.com/opengraph-image.png", // Replace with actual domain
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    hasMap: "https://www.google.com/maps/place/Winter+Garden,+FL", // Link to Google Maps for Winter Garden
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Add JSON-LD to your page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedTripsSection /> {/* Add the new section here */}
        <ContactFormSection />
        <ExploreCtaSection />
      </main>
      <Chatbot />
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
