import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between lg:px-8">
        {/* About Section */}
        <div className="space-y-8 md:w-1/2">
          <h2 className="text-2xl font-bold">STONE CONCEPTS</h2>
          <p className="max-w-md text-gray-300">
            Affordable luxury countertops expertly delivered. Every project supports the fight against child
            trafficking.
          </p>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:opacity-80 transition">
                <Phone className="w-5 h-5 text-white" />
              </div>

              <a href="tel:9785681911" className="hover:text-green-500 transition-colors">
                (978) 568-1911
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 hover:opacity-80 transition">
                <Mail className="h-5 w-5 text-white " /> 
              </div>

              <a href="mailto:bill@stoneconcepts.net" className="hover:text-yellow-500 transition-colors">
                bill@stoneconcepts.net
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 md:mt-0 md:w-1/4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
              { name: "Testimonials", href: "/testimonials" },
              { name: "About", href: "/about" },
              { name: "Pricing", href: "/pricing" },
              { name: "Service Area", href: "/service-area" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="mt-8 md:mt-0 md:w-1/4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4 flex gap-4">
            <Link href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-80 transition">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/YourPage" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] hover:opacity-80 transition">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://www.twitter.com/YourPage" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] hover:opacity-80 transition">
                <Twitter className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Stone Concepts, Inc. All rights reserved.
        </div>
        <div className="mt-4 text-sm text-gray-400 md:mt-0 flex gap-4">
          <Link href="/" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
