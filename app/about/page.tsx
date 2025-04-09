import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary/90 text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About ConsultPro</h1>
              <p className="text-lg opacity-90 mb-6 animate-slide-up animate-delay-100">
                We're a team of experienced business consultants dedicated to helping businesses of all sizes achieve
                sustainable growth and success.
              </p>
              <p className="text-lg opacity-90 animate-slide-up animate-delay-200">
                Founded in 2010, we've helped hundreds of companies across various industries optimize their operations,
                increase revenue, and achieve their business goals.
              </p>
            </div>
            <div className="relative animate-slide-right animate-delay-300">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-primary/10 rounded-lg transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=600&auto=format&fit=crop"
                alt="Our team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="text-background"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To empower businesses with the strategies, insights, and tools they need to thrive in today's competitive
              landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with complete transparency and always put our clients' interests first.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, delivering exceptional results for our clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace innovative thinking and creative solutions to complex business challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in a collaborative, data-driven approach to business consulting. Our process is designed to
                deliver measurable results and long-term success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Analysis</h3>
                    <p className="text-muted-foreground">
                      We start by thoroughly understanding your business, industry, and goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      We develop customized strategies tailored to your specific needs and objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Implementation Support</h3>
                    <p className="text-muted-foreground">
                      We work alongside your team to implement solutions and drive change.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Continuous Improvement</h3>
                    <p className="text-muted-foreground">
                      We measure results and refine strategies to ensure ongoing success.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop"
                alt="Our approach"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced consultants brings diverse expertise and a passion for helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                name: "Aniket Subudhi",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
                bio: "With over 15 years of experience in business strategy and leadership.",
              },
              {
                name: "Swagat Kumar Dash",
                title: "Financial Consultant",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
                bio: "Specializes in financial analysis and optimization for businesses of all sizes.",
              },
              {
                name: "Bibhu Prasad Pradhan",
                title: "Marketing Strategist",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                bio: "Expert in developing effective marketing strategies that drive growth.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to schedule a consultation and learn how we can help your business grow.
          </p>
          <Button
            className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-md text-lg"
            size="lg"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
