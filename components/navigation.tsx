"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/WhatsApp_Image_2025-12-13_at_2.22.16_PM-removebg-preview.png"
              alt="Cherrish Homes logo"
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              priority
            />
            <span className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">Cherrish Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-base md:text-lg font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base md:text-lg font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/properties" className="text-base md:text-lg font-medium hover:text-accent transition-colors">
              Properties
            </Link>
            <Link href="/contact" className="text-base md:text-lg font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block py-2 text-base font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-base font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/properties"
              className="block py-2 text-base font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-base font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
