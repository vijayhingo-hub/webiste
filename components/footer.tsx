import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
          <h3 className="text-xl font-serif font-semibold">Cherish Homes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner in finding the perfect luxury property.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-sm hover:text-accent transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="font-semibold">Vijay Hingorani</li>
              <li>Haware Centurion Mall</li>
              <li>2nd Floor Office No. S-11 C</li>
              <li>Seawoods</li>
              <li>Phone: <a href="tel:+919819539909" className="hover:text-accent transition-colors">+91 98195 39909</a></li>
              <li>Email: <a href="mailto:vijay@cherishhomes.in" className="hover:text-accent transition-colors">vijay@cherishhomes.in</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cherish Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
