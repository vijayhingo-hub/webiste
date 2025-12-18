"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("ONGOING")

  const heroSlides = [
    {
      id: 1,
      image: "/modern-luxury-villa-exterior.png",
      title: "Modern Luxury Residences",
    },
    {
      id: 2,
      image: "/contemporary-mansion-with-pool.jpg",
      title: "Contemporary Living Spaces",
    },
    {
      id: 3,
      image: "/luxury-estate-mountain-view.jpg",
      title: "Premium Estate Collection",
    },
  ]

  const properties = [
    {
      id: "maple-woods",
      name: "Maple Woods",
      location: "Airoli, Navi Mumbai",
      image: "https://proviso.in/wp-content/uploads/2022/10/maple-woods-01-04.jpg.webp",
      status: "ONGOING",
    },
    {
      id: 2,
      name: "Contemporary Living Spaces",
      location: "Navi Mumbai, Maharashtra",
      image: "/contemporary-mansion-with-pool.jpg",
      status: "ONGOING",
    },
    {
      id: 3,
      name: "Premium Estate Collection",
      location: "Pune, Maharashtra",
      image: "/luxury-estate-mountain-view.jpg",
      status: "COMPLETED",
    },
  ]

  const filteredProperties = properties.filter((property) => property.status === activeFilter)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Slider */}
      <section className="relative mt-16">
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {heroSlides.map((slide) => (
                <CarouselItem key={slide.id} className="h-full pl-0">
                  <div className="relative h-full w-full">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8" />
            <CarouselNext className="right-4 md:right-8" />
          </Carousel>

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
                Projects
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                Experience the pinnacle of luxury living with Cherish Homes, where every detail is meticulously crafted to cater to the most discerning tastes. From opulent residences adorned with exquisite finishes to world-class amenities and unparalleled service, Cherish Homes redefines the art of luxurious living, offering an unmatched lifestyle experience for its residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter("ONGOING")}
              variant={activeFilter === "ONGOING" ? "default" : "outline"}
              size="lg"
              className="px-8"
            >
              ONGOING
            </Button>
            <Button
              onClick={() => setActiveFilter("COMPLETED")}
              variant={activeFilter === "COMPLETED" ? "default" : "outline"}
              size="lg"
              className="px-8"
            >
              COMPLETED
            </Button>
          </div>

          {/* Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 p-0">
                  <div className="relative h-[350px] w-full overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">
                        {property.name}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No {activeFilter.toLowerCase()} properties available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
