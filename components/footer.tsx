import Link from "next/link"
import Image from "next/image" // Import Image component
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6 md:py-12">
      <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="#" className="flex items-center justify-start">
            <Image
              src="/dv-logo-white.png"
              alt="Dream Vacations by Richard Johnson & Travel Advisors Group Logo"
              width={140} // Adjust width as needed
              height={36} // Adjust height as needed
              className="h-auto w-auto mb-2" // Maintain aspect ratio
            />
          </Link>
          <p className="text-sm text-blue-200">
            Richard Johnson your trusted travel agent in Winter Garden, FL, crafting personalized dream vacations.
          </p>
          <div className="flex items-center gap-2 text-blue-200">
            <MapPinIcon className="h-5 w-5" />
            <span>Winter Garden, FL</span>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm text-blue-200 hover:underline">
              Home
            </Link>
            <Link href="#services" className="text-sm text-blue-200 hover:underline">
              Services
            </Link>
            <Link href="#about" className="text-sm text-blue-200 hover:underline">
              About
            </Link>
            <Link href="#contact" className="text-sm text-blue-200 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold">Contact Us</h3>
          <div className="flex flex-col space-y-2">
            <Link href="tel:+14079512398" className="flex items-center gap-2 text-sm text-blue-200 hover:underline">
              <PhoneIcon className="h-5 w-5" />
              <span>+1 (407) 951-2398</span> {/* Replace with actual phone number */}
            </Link>
            <Link
              href="mailto:rpjohnson@dreamvacations.com"
              className="flex items-center gap-2 text-sm text-blue-200 hover:underline"
            >
              <MailIcon className="h-5 w-5" />
              <span>rpjohnson@dreamvacations.com</span> {/* Replace with actual email */}
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 pt-8 border-t border-blue-700 text-center text-sm text-blue-300">
        &copy; {new Date().getFullYear()} Dream Vacations by Richard Johnson Travel Advisors Group. All rights reserved.
        <br /> Dream Vacations A division of World Travel Holdings. A CruiseOne Company. CruiseOne franchises are
        independently owned and operated, and its franchisees are independent contractors. Seller of Travel Number FL
        ST-TI87681
      </div>
    </footer>
  )
}
