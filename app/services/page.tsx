import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We offer a comprehensive range of business consulting services designed to help your business grow, optimize
            operations, and achieve sustainable success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="primary-button" asChild>
              <a href="#strategy">Business Strategy</a>
            </Button>
            <Button className="primary-button" asChild>
              <a href="#financial">Financial Consulting</a>
            </Button>
            <Button className="primary-button" asChild>
              <a href="#marketing">Marketing Strategy</a>
            </Button>
            <Button className="primary-button" asChild>
              <a href="#operations">Operations Management</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Strategy */}
      <section id="strategy" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Strategy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our strategic consulting services help you develop a clear vision and roadmap for your business's
                future. We work with you to identify opportunities, mitigate risks, and create actionable plans for
                sustainable growth.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      Develop comprehensive business strategies aligned with your vision and goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Market Analysis</h3>
                    <p className="text-muted-foreground">
                      Identify market trends, opportunities, and competitive landscapes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Growth Planning</h3>
                    <p className="text-muted-foreground">Create scalable growth strategies to expand your business.</p>
                  </div>
                </li>
              </ul>
              <Button className="cta-button" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Business Strategy"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Consulting */}
      <section id="financial" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Financial Consulting"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Consulting</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our financial consulting services help you optimize your financial operations, improve cash flow, and
                increase profitability. We provide actionable insights and strategies to strengthen your financial
                position.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Financial Analysis</h3>
                    <p className="text-muted-foreground">
                      Comprehensive assessment of your financial health and performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Cash Flow Optimization</h3>
                    <p className="text-muted-foreground">
                      Strategies to improve cash flow and working capital management.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Cost Reduction</h3>
                    <p className="text-muted-foreground">
                      Identify opportunities to reduce costs without sacrificing quality.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="cta-button" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section id="marketing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Marketing Strategy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our marketing consulting services help you develop effective strategies to reach your target audience,
                build your brand, and drive customer acquisition and retention.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Brand Development</h3>
                    <p className="text-muted-foreground">
                      Create a strong brand identity that resonates with your target audience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Digital Marketing</h3>
                    <p className="text-muted-foreground">
                      Develop comprehensive digital marketing strategies to reach and engage customers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Customer Acquisition</h3>
                    <p className="text-muted-foreground">
                      Strategies to attract and convert new customers efficiently.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="cta-button" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Marketing Strategy"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operations Management */}
      <section id="operations" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Operations Management"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Operations Management</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our operations consulting services help you streamline processes, improve efficiency, and optimize your
                business operations to reduce costs and enhance productivity.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Process Optimization</h3>
                    <p className="text-muted-foreground">
                      Streamline business processes to improve efficiency and reduce waste.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Supply Chain Management</h3>
                    <p className="text-muted-foreground">
                      Optimize your supply chain for cost efficiency and reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Quality Management</h3>
                    <p className="text-muted-foreground">
                      Implement quality control systems to ensure consistent product/service delivery.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="cta-button" asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the consulting package that best fits your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle>Starter Package</CardTitle>
                <CardDescription>For small businesses and startups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$1,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Initial business assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Basic strategy development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Monthly consulting sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full cta-button" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Growth Package</CardTitle>
                <CardDescription>For established businesses looking to grow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$3,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Comprehensive business analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Custom growth strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Bi-weekly consulting sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Implementation support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Priority email & phone support</span>
                  </li>
                </ul>
                <Button className="w-full primary-button" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle>Enterprise Package</CardTitle>
                <CardDescription>For large businesses and corporations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> pricing</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Enterprise-wide assessment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Multi-department strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Dedicated consulting team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>On-site implementation support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Quarterly executive briefings</span>
                  </li>
                </ul>
                <Button className="w-full cta-button" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to discuss your business needs and how we can help you achieve your goals.
          </p>
          <Button
            className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8 rounded-md text-lg"
            size="lg"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
