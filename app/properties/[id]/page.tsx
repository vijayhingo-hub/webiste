"use client"

import { use } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, Bed, Wifi, Waves, Home, Car, Trees, Baby, Gamepad2, Square, Droplets, Footprints, PartyPopper, Camera, ArrowLeft } from "lucide-react"

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  // Maple Woods data
  const mapleWoodsData = {
    id: "maple-woods",
    name: "Maple Woods",
    subtitle: "1, 2 & 3BHK Flats in Airoli",
    location: "Airoli, Navi Mumbai",
    reraNumber: "Available on request",
    description: "Maple woods is a residential and commercial project with six towers of G+38 at Airoli, Navi Mumbai. At Maple Woods, 1, 2 & 3 BHK spaces are designed to meet your expectations, with all modern amenities.",
    detailedDescription: "Looking for a comfortable and affordable home in Airoli? Look no further! We have a wide range of flats that cater to the needs of individuals, couples, and families of all sizes. Our 1bhk flats in Airoli are perfect for those who prefer a compact and low-maintenance home, while our 2bhk and 3bhk flats in Airoli are spacious and equipped with all the modern amenities you need to live a comfortable and convenient life. We have several flats for sale in Airoli that come loaded with amenities such as parking lot, landscape garden, children's play area, and more. Stay connected with high-speed Wi-Fi, take a dip in the pool, or relax in the clubhouse. Our goal is to help you find the perfect home that meets your preferences and needs. Contact us today and let us help you find your dream flat in Airoli, complete with all the amenities you need for a comfortable and modern living experience!",
    configuration: "1BHK, 2BHK & 3BHK Flats",
    floors: "G + 38 Floors",
    image: "https://proviso.in/wp-content/uploads/2022/10/maple-woods-01-04.jpg.webp",
    configurations: [
      { type: "1 BHK", sqft: "421 Sq.ft" },
      { type: "2 BHK", sqft: "633 Sq.ft" },
      { type: "3 BHK", sqft: "826 Sq.ft" },
    ],
    facilities: [
      { icon: Wifi, name: "Wifi" },
      { icon: Waves, name: "Pool" },
      { icon: Home, name: "Clubhouse" },
      { icon: Car, name: "Parking Lot" },
      { icon: Trees, name: "Landscape Garden" },
      { icon: Baby, name: "Children Play Area" },
      { icon: Gamepad2, name: "Multipurpose Court" },
      { icon: Square, name: "Outdoor Chess Layout" },
      { icon: Droplets, name: "Water bodies & Fountains" },
      { icon: Footprints, name: "Walk Area" },
      { icon: PartyPopper, name: "Party Lawn" },
      { icon: Camera, name: "CCTV" },
    ],
  }

  // For now, only show Maple Woods detail page
  if (id !== "maple-woods") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 mt-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <Link href="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const property = mapleWoodsData

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
            {property.name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {property.subtitle}
          </p>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Link href="/properties">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Location & Basic Info */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{property.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Building2 className="h-5 w-5" />
              <span>{property.floors} | 6 Towers</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>MAHA RERA Registration Number:</strong> {property.reraNumber}
            </p>
          </div>

          {/* Description */}
          <Card className="mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {property.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {property.detailedDescription}
              </p>
            </CardContent>
          </Card>

          {/* Configurations */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Available Configurations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {property.configurations.map((config, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Bed className="h-12 w-12 mx-auto text-accent mb-2" />
                      <h3 className="text-xl font-semibold mb-2">{config.type}</h3>
                      <p className="text-lg font-bold text-accent">{config.sqft}</p>
                    </div>
                    <Button className="w-full">Get Pricing</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Facilities & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {property.facilities.map((facility, index) => {
                const Icon = facility.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium">{facility.name}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Project Highlights */}
          <Card className="bg-secondary mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-secondary-foreground">Project Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Configuration</h3>
                  <p className="text-secondary-foreground/80">{property.configuration}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Number Of Floors</h3>
                  <p className="text-secondary-foreground/80">{property.floors}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Project Type</h3>
                  <p className="text-secondary-foreground/80">Residential and Commercial</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Location</h3>
                  <p className="text-secondary-foreground/80">{property.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8">
              Digital Tours
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Walkthrough
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Download Brochure
            </Button>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Know More About This Project</h2>
                <p className="mb-6 text-lg">Contact us today to get pricing and schedule a digital tour</p>
                <Button variant="secondary" size="lg" className="px-8">
                  Get Pricing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

