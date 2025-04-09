import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, BarChart3, Users, ArrowRight } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { AnimatedCounter } from "@/components/animated-counter"
import { ClientLogos } from "@/components/client-logos"
import { CaseStudies } from "@/components/case-studies"
import { BlogPreview } from "@/components/blog-preview"

export default function Home() {
  const testimonials = [
    {
      quote:
        "ConsultPro transformed our business operations. Their strategic guidance helped us increase revenue by 45% in just one year.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
    },
    {
      quote:
        "The financial consulting team at ConsultPro helped us optimize our cash flow and reduce operational costs by 30%. Highly recommended!",
      author: "Michael Chen",
      position: "CFO, Global Retail Group",
    },
    {
      quote:
        "Working with ConsultPro was a game-changer for our marketing strategy. Their data-driven approach helped us reach new customers and grow our brand.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Innovate Solutions",
    },
    {
      quote:
        "Their operations management expertise streamlined our production process and increased efficiency by 40%. The ROI has been incredible.",
      author: "David Wilson",
      position: "Operations Manager, Manufacturing Plus",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium animate-slide-up animate-delay-100">
                Trusted by 500+ businesses worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up animate-delay-200">
                Transform Your Business with Expert Consulting
              </h1>
              <p className="text-lg md:text-xl opacity-90 animate-slide-up animate-delay-300">
                We help businesses optimize operations, increase revenue, and achieve sustainable growth through
                strategic consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-400">
                <Button className="cta-button" size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20"
                  size="lg"
                  asChild
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-slide-right animate-delay-300">
              <div className="relative">
                <div className="absolute -z-10 top-5 left-5 w-full h-full bg-primary/30 rounded-lg blur-lg"></div>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                  alt="Business consulting"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary/90 text-secondary-foreground p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Trusted by industry leaders</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
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

      {/* Client Logos */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6">Trusted by leading companies worldwide</p>
          <ClientLogos />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-muted-foreground font-medium">Clients Worldwide</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={95} suffix="%" />
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={32} suffix="M" prefix="$" />
              <p className="text-muted-foreground font-medium">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven methodology and expert team deliver exceptional results for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-lift border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our strategies have helped hundreds of businesses achieve measurable growth and success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-t-4 border-t-secondary">
              <CardHeader className="pb-2">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Growth Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We develop customized strategies that drive sustainable business growth and profitability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Data Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our recommendations are backed by thorough analysis and industry-leading research.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift border-t-4 border-t-secondary">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our consultants bring decades of experience across multiple industries and specialties.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary hover-scale">
              <CardHeader>
                <CardTitle>Business Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Develop comprehensive business strategies to achieve your long-term goals and vision.
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/services#strategy">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary hover-scale">
              <CardHeader>
                <CardTitle>Financial Consulting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Optimize your financial operations, improve cash flow, and increase profitability.
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/services#financial">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary hover-scale">
              <CardHeader>
                <CardTitle>Marketing Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Create effective marketing strategies to reach your target audience and drive growth.
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/services#marketing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="primary-button" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results.
            </p>
          </div>

          <CaseStudies />

          <div className="text-center mt-12">
            <Button className="primary-button" size="lg" asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our proven 4-step process ensures we deliver exceptional results for every client.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p className="text-muted-foreground">
                      We start by understanding your business, goals, and challenges through in-depth analysis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Our team creates a customized strategy tailored to your specific business needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-muted-foreground">
                      We work alongside your team to implement solutions and drive meaningful change.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimization</h3>
                    <p className="text-muted-foreground">
                      We continuously monitor results and refine strategies to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -z-10 top-0 -right-4 w-full h-full bg-secondary/20 rounded-lg transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
                alt="Our process"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with our latest articles, tips, and industry insights.
            </p>
          </div>

          <BlogPreview />

          <div className="text-center mt-12">
            <Button className="primary-button" size="lg" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest business insights, tips, and trends.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free consultation with our expert team and discover how we can help you achieve your business
            goals.
          </p>
          <Button
            className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-md text-lg"
            size="lg"
            asChild
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
