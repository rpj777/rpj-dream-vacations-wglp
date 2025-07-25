import Link from "next/link"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="w-full h-16 flex items-center bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {" "}
        {/* Added container and flex */}
        <Link href="#" className="flex items-center justify-center gap-2">
          <Image
            src="/dv-logo-white.png"
            alt="Dream Vacations by Richard Johnson & Travel Advisors Group Logo"
            width={160}
            height={36}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 lg:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden ml-auto">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#" className="text-lg font-medium">
                Home
              </Link>
              <Link href="#services" className="text-lg font-medium">
                Services
              </Link>
              <Link href="#about" className="text-lg font-medium">
                About
              </Link>
              <Link href="#contact" className="text-lg font-medium">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
