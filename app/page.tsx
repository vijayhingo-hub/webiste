"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Home, Award, Users, TrendingUp } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function HomePage() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const heroSlides = [
    {
      id: 1,
      image: "https://proviso.in/wp-content/uploads/2022/10/maple-woods-01-04.jpg.webp",
      title: "Modern Luxury Residences",
    },
    {
      id: 2,
      image: "/contemporary-mansion-with-pool.jpg",
      title: "Contemporary Living Spaces",
    },
    {
      id: 3,
      image: "/image1.png",
      title: "Aadi Allure - Kanjurmarg East",
    },
    {
      id: 4,
      image: "https://www.designblendz.com/hs-fs/hubfs/21031200-150-180%20West%20Berks%20Street_Still%20Rendering_NW%20Ground_TrainStation_Final%20V1.1.jpg?width=900&name=21031200-150-180%20West%20Berks%20Street_Still%20Rendering_NW%20Ground_TrainStation_Final%20V1.1.jpg",
      title: "Luxury Residential Complex",
    },
    {
      id: 5,
      image: "https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-high-definition-photography-of-real-estate-buildings-image_994307.jpg",
      title: "Modern Real Estate Development",
    },
  ]

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Apartments",
      location: "Proviso Maple Woods Airoli",
      price: "₹ 1.30 Cr* Onwards",
      beds: "2BHK",
      baths: "3BHK",
      sqft: "Carpet Area 630 SqFt to 840 SqFt",
      image: "https://proviso.in/wp-content/uploads/2022/10/maple-woods-01-04.jpg.webp",
    },
    {
      id: 2,
      title: "Oceanfront Penthouse",
      location: "Malibu, CA",
      price: "₹ 82 Lakhs",
      beds: 4,
      baths: 5,
      sqft: "5,200",
      image: "/oceanfront-penthouse-sunset-view.jpg",
    },
    {
      id: 3,
      title: "Contemporary Mansion",
      location: "Los Angeles, CA",
      price: "₹ 68 Lakhs",
      beds: 6,
      baths: 7,
      sqft: "8,300",
      image: "/contemporary-mansion-with-pool.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Slider */}
      <section className="relative">
        <div className="relative h-[90vh] overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full h-full"
            onMouseEnter={() => autoplayPlugin.current?.stop()}
            onMouseLeave={() => autoplayPlugin.current?.reset()}
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance">
                Premium Living Spaces
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
                Find your perfect home in the most desirable locations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/properties">View Properties</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  <Link href="/contact">Schedule Viewing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
              Why Choose Cherish Homes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We provide exceptional service and expertise in luxury real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Home className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Premium Properties</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Curated selection of luxury homes in prime locations
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional agents with years of market expertise
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Service</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tailored approach to meet your unique needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Market Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data-driven analysis for informed decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
              Featured Properties
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our handpicked selection of exceptional luxury homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">{property.location}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    {property.id === 1 ? (
                      <>
                        <span>{property.beds}</span>
                        <span>{property.baths}</span>
                        <span>{property.sqft}</span>
                      </>
                    ) : (
                      <>
                        <span>{property.beds} beds</span>
                        <span>{property.baths} baths</span>
                        <span>{property.sqft} sqft</span>
                      </>
                    )}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-serif font-bold text-accent">{property.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our expert team guide you through every step of your luxury home journey
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
