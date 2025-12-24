"use client"

import { use } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, Bed, Wifi, Waves, Home, Car, Trees, Baby, Gamepad2, Square, Droplets, Footprints, PartyPopper, Camera, ArrowLeft, Shield, Wind, UtensilsCrossed, Flame, Dumbbell, Activity, Zap, CloudRain, Phone, ArrowUpDown, Sparkles } from "lucide-react"

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

  // Aadi Allure data
  const aadiAllureData = {
    id: "aadi-allure",
    name: "Aadi Allure",
    subtitle: "1, 2 BHK Apartment in Kanjurmarg East",
    location: "Kanjurmarg East, Mumbai",
    reraNumber: "P51800008521",
    priceRange: "₹81.14 L* - ₹1.28 Cr*",
    pricePerSqft: "₹17,570 per sqft",
    lastUpdated: "20-10-2018",
    description: "Allure is surrounded by vast spellbinding open spaces on all sides with stunning 5-acre garden views on one side and infinity green salt-pan views on the highway facing side.",
    detailedDescription: "Abounding with luxurious lifestyle amenities spread over 3.5 acres, Allure is one of the most value for money under-construction project in all of Kanjurmarg with all permission on place & RCC work is completed for all Residential wings & finishing work going in full swing. Immaculately planned with intelligent spatial design we offer 1 & 2BHK configurations.",
    configuration: "1BHK, 2BHK Apartments",
    areaRange: "458 - 732 Sqft",
    image: "/image1.png",
    configurations: [
      { type: "1 BHK", sqft: "458 - 506 Sqft", price: "₹81.14 L* - ₹89.05 L*" },
      { type: "2 BHK", sqft: "732 Sqft", price: "₹1.28 Cr*" },
    ],
    units: [
      { id: "30627", type: "1 BHK + 1 Toilet", carpetArea: "458 Sqft", price: "₹81.14 L*" },
      { id: "30628", type: "1 BHK + 1 Toilet", carpetArea: "461 Sqft", price: "₹81.14 L*" },
      { id: "30629", type: "1 BHK + 1 Toilet", carpetArea: "503 Sqft", price: "₹89.05 L*" },
      { id: "30630", type: "1 BHK + 1 Toilet", carpetArea: "506 Sqft", price: "₹89.05 L*" },
    ],
    facilities: [
      { icon: Droplets, name: "24*7 Water Supply" },
      { icon: Shield, name: "24 X 7 Security" },
      { icon: Wind, name: "Air Condition" },
      { icon: UtensilsCrossed, name: "Banquet Hall" },
      { icon: Home, name: "Club House" },
      { icon: Flame, name: "Fire Fighting Equipment" },
      { icon: Dumbbell, name: "Gym" },
      { icon: Gamepad2, name: "Indoor Games" },
      { icon: Footprints, name: "Jogging Track" },
      { icon: Trees, name: "Landscaped Gardens" },
      { icon: Square, name: "Multipurpose Court" },
      { icon: Zap, name: "Power Backup" },
      { icon: CloudRain, name: "Rain Water Harvesting" },
      { icon: Droplets, name: "Sewage Treatment Plant" },
      { icon: Activity, name: "Yoga Deck" },
    ],
    developer: {
      name: "Aadi Properties",
      description: "Aadi Properties came into existence with an idea to change lives through high-quality home ownership. It's a joint venture between two seasoned real estate houses - The Leo Group and The Prashasti Group. Leo Group, the makers of Parivar Society in Kanjurmarg, is synonymous with quality, uncompromised design and service. In past 2 decades, they have delivered almost a dozen landmark projects in Borivali, Kandivali, Andheri, Bandra and other areas of Mumbai. Leo Infrastructure has a strong credence and outstanding track record of executing huge projects on time with the finest construction techniques and products. Besides Real Estate, Leo's legacy of excellence has earned them other accomplishments too. They are the first ever company to be directly awarded \"AA\" class license on registration as a BMC Contractor by the MCGM for their impeccable execution of several Hydraulic projects across the city.",
      ongoingProjects: 1,
    },
  }

  // Gupta Aden Court data
  const guptaAdenCourtData = {
    id: "gupta-aden-court",
    name: "Gupta Aden Court",
    subtitle: "3 BHK & 3.5 BHK Apartments",
    location: "Mumbai",
    reraNumber: "Available on request",
    priceRange: "₹6.32 Cr* - ₹7.01 Cr*",
    description: "Gupta Aden Court offers luxurious 3 BHK and 3.5 BHK apartments designed for modern living with premium amenities and spacious layouts.",
    detailedDescription: "Experience premium living at Gupta Aden Court, featuring spacious 3 BHK and 3.5 BHK apartments with modern amenities including swimming pool, gym, spa, landscaped gardens, and more. Each unit is thoughtfully designed to provide comfort and luxury.",
    configuration: "3 BHK, 3.5 BHK Apartments",
    areaRange: "1150 - 1275 Sqft",
    image: "/contemporary-mansion-with-pool.jpg",
    configurations: [
      { type: "3 BHK", sqft: "1150 - 1275 Sqft", price: "₹6.32 Cr* - ₹7.01 Cr*" },
      { type: "3.5 BHK", sqft: "Available", price: "On Request" },
    ],
    units: [
      { id: "31163", type: "3 BHK + 3 Toilets", carpetArea: "1150 Sqft", price: "₹6.32 Cr*" },
      { id: "29944", type: "3 BHK + 3 Toilets", carpetArea: "1275 Sqft", price: "₹7.01 Cr*" },
    ],
    facilities: [
      { icon: Car, name: "Car Parking" },
      { icon: Dumbbell, name: "Gym" },
      { icon: Phone, name: "Intercom" },
      { icon: Trees, name: "Landscaped Gardens" },
      { icon: ArrowUpDown, name: "Lift" },
      { icon: Sparkles, name: "Spa" },
      { icon: Waves, name: "Swimming Pool" },
    ],
    developer: {
      name: "Gupta Housing",
      description: "The promoters of Gupta Housing have been at the helm of one of India's leading stainless tell bar and rod manufacturers and exporters, India Steel Works (formerly Isibars) for over 40 years. They translate their experience in professionally managing a large, listed company with several factories and customers all over the world into the management of various projects all over the city.",
      ongoingProjects: 1,
    },
  }

  // Get property data based on ID
  let property
  if (id === "maple-woods") {
    property = mapleWoodsData
  } else if (id === "aadi-allure") {
    property = aadiAllureData
  } else if (id === "gupta-aden-court") {
    property = guptaAdenCourtData
  } else {
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
            {property.floors && (
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Building2 className="h-5 w-5" />
                <span>{property.floors} {property.id === "maple-woods" && "| 6 Towers"}</span>
              </div>
            )}
            {property.priceRange && (
              <div className="mb-4">
                <p className="text-2xl font-serif font-bold text-accent mb-2">{property.priceRange}</p>
                <p className="text-sm text-muted-foreground">{property.pricePerSqft}</p>
                {property.lastUpdated && (
                  <p className="text-xs text-muted-foreground mt-1">Last updated on {property.lastUpdated}</p>
                )}
              </div>
            )}
            <p className="text-sm text-muted-foreground mb-4">
              <strong>MAHA RERA Registration Number:</strong> {property.reraNumber}
            </p>
            {property.areaRange && (
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Area Range:</strong> {property.areaRange}
              </p>
            )}
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
                      <p className="text-lg font-bold text-accent mb-2">{config.sqft}</p>
                      {config.price && (
                        <p className="text-md font-semibold text-muted-foreground">{config.price}</p>
                      )}
                    </div>
                    <Button className="w-full">Enquire Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Unit Details Table for Aadi Allure */}
          {property.units && property.units.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Unit Details</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-4 text-left font-semibold">Type</th>
                          <th className="p-4 text-left font-semibold">Carpet Area</th>
                          <th className="p-4 text-left font-semibold">Price</th>
                          <th className="p-4 text-center font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.units.map((unit, index) => (
                          <tr key={index} className="border-t border-border hover:bg-muted/50">
                            <td className="p-4">{unit.type}</td>
                            <td className="p-4">{unit.carpetArea}</td>
                            <td className="p-4 font-semibold text-accent">{unit.price}</td>
                            <td className="p-4 text-center">
                              <Button size="sm">Enquire Now</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

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
                {property.floors && (
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary-foreground">Number Of Floors</h3>
                    <p className="text-secondary-foreground/80">{property.floors}</p>
                  </div>
                )}
                {property.areaRange && (
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary-foreground">Area Range</h3>
                    <p className="text-secondary-foreground/80">{property.areaRange}</p>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Project Type</h3>
                  <p className="text-secondary-foreground/80">{property.id === "maple-woods" ? "Residential and Commercial" : "Residential"}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-secondary-foreground">Location</h3>
                  <p className="text-secondary-foreground/80">{property.location}</p>
                </div>
                {property.priceRange && (
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary-foreground">Price Range</h3>
                    <p className="text-secondary-foreground/80">{property.priceRange}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Developer Information for Aadi Allure */}
          {property.developer && (
            <Card className="mb-12">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">About the Developer</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{property.developer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {property.developer.ongoingProjects} Ongoing Project{property.developer.ongoingProjects !== 1 ? "s" : ""}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {property.developer.description}
                </p>
              </CardContent>
            </Card>
          )}

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

