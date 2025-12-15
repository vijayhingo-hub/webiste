import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/professional-woman-realtor.jpg",
    },
    {
      name: "Michael Chen",
      role: "Senior Real Estate Agent",
      image: "/professional-realtor.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Luxury Property Specialist",
      image: "/professional-woman-realtor.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <img src="/luxury-real-estate-office-modern-interior.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
            About Cherrish Homes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Excellence in luxury real estate since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Cherrish Homes has established itself as a premier luxury real estate agency,
                  specializing in high-end properties across California's most prestigious neighborhoods.
                </p>
                <p>
                  Our journey began with a simple vision: to redefine the luxury home buying experience by combining
                  expert market knowledge with personalized, white-glove service. Over the years, we've helped hundreds
                  of clients find their dream homes and investment properties.
                </p>
                <p>
                  Today, Cherrish Homes stands as a trusted name in luxury real estate, known for our integrity,
                  professionalism, and unwavering commitment to client satisfaction.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img src="/luxury-living-room.png" alt="Our Story" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect discerning clients with exceptional properties while providing unparalleled service and
                  expertise in every transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected luxury real estate agency, setting the standard for excellence in
                  the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are dedicated to integrity, transparency, and going above and beyond to exceed our clients'
                  expectations every single time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden border-none shadow-sm">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
